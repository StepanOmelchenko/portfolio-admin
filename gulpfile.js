const gulp = require("gulp");
const sourcemaps = require("gulp-sourcemaps");
const sass = require("gulp-sass");
const rename = require("gulp-rename");
const pug = require("gulp-pug");
const del = require("del");
const imagemin = require("gulp-imagemin");
const gulpWebpack = require("gulp-webpack");
const webpack = require("webpack");
const browserSync = require("browser-sync").create();
const svgSprite = require("gulp-svg-sprite");
const svgmin = require("gulp-svgmin");
const cheerio = require("gulp-cheerio");
const replace = require("gulp-replace");

const paths = {
  root: "./public",
  views: "./views",
  templates: {
    src: "./src/templates/**/*.pug",
    pages: "./src/templates/pages/*.pug"
  },
  styles: {
    src: "./src/scss/**/*.scss",
    main: "./src/scss/main.scss",
    dest: "./public/css"
  },
  images: {
    src: "./src/img/**/*.*",
    dest: "./public/img"
  },
  fonts: {
    src: "./src/fonts/**/*.*",
    dest: "./public/fonts"
  },
  scripts: {
    src: "./src/lib/*.js",
    dest: "./public/lib",
    exLibSrc: "./src/lib/ex/*.js",
    exLibDest: "./public/lib/ex"
  },
  svg: {
    src: "./src/icons/**/*.svg",
    dest: "./public/img/sprites/"
  }
};

const config = {
  mode: {
    symbol: {
      sprite: "../sprite.svg",
      example: {
        dest: "./public/tmp/spriteSvgDemo.html"
      }
    }
  }
};

function clear() {
  return del(paths.root);
}

function templates() {
  return (
    gulp
      .src(paths.templates.src)
      //.pipe(pug({pretty: true}))
      .pipe(gulp.dest(paths.views))
  );
}

function styles() {
  return gulp
    .src(paths.styles.main)
    .pipe(sourcemaps.init())
    .pipe(sass({ outputStyle: "compressed" }))
    .pipe(sourcemaps.write())
    .pipe(rename({ suffix: ".min" }))
    .pipe(gulp.dest(paths.styles.dest));
}

function images() {
  return gulp
    .src(paths.images.src)
    .pipe(
      imagemin({
        //сомнительный эффект
        interlaced: true,
        progressive: true,
        optimizationLevel: 5,
        svgoPlugins: [{ removeViewBox: true }]
      })
    )
    .pipe(gulp.dest(paths.images.dest));
}

function fonts() {
  return gulp.src(paths.fonts.src).pipe(gulp.dest(paths.fonts.dest));
}

function scripts() {
  return gulp
    .src(paths.scripts.src)
    .pipe(
      gulpWebpack(
        {
          output: {
            filename: "bundle.js"
          },
          module: {
            rules: [
              {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                query: {
                  presets: ["env"]
                }
              }
            ]
          },
          mode: "development"
        },
        webpack
      )
    )
    .pipe(gulp.dest(paths.scripts.dest));
}

function moveExLib() {
  return gulp
    .src(paths.scripts.exLibSrc)
    .pipe(gulp.dest(paths.scripts.exLibDest));
}

function spriteSvg() {
  return gulp
    .src(paths.svg.src)
    .pipe(
      svgmin({
        js2svg: {
          pretty: true
        }
      })
    )
    .pipe(
      cheerio({
        run: function($) {
          $("[fill]").removeAttr("fill");
          $("[stroke]").removeAttr("stroke");
          $("[style]").removeAttr("style");
        },
        parserOptions: {
          xmlMode: true
        }
      })
    )
    .pipe(replace("&gt;", ">"))
    .pipe(svgSprite(config))
    .pipe(gulp.dest(paths.svg.dest));
}

function watch() {
  gulp.watch(paths.styles.src, styles);
  gulp.watch(paths.templates.src, templates);
  gulp.watch(paths.images.src, images);
  gulp.watch(paths.scripts.src, scripts);
  gulp.watch(paths.fonts.src, fonts);
  gulp.watch(paths.scripts.exLibSrc, moveExLib);
}

function server() {
  browserSync.init({
    server: paths.root,
    open: false
  });
  browserSync.watch(paths.root + "/**/*.*", browserSync.reload);
}

exports.scss = styles;
exports.pug = templates;
exports.img = images;
exports.delRoot = clear;
exports.fonts = fonts;
exports.scripts = scripts;
exports.spriteSvg = spriteSvg;
exports.watch = watch;
exports.moveExLib = moveExLib;

gulp.task(
  "default",
  gulp.series(
    clear,
    gulp.parallel(styles, templates, images, fonts),
    gulp.parallel(scripts, moveExLib, spriteSvg),
    watch /* , server */
  )
);
