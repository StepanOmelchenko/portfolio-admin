<template lang="pug">
  .blog
    h2.blog__header Мой блог
    form.blog__form
      .blog__left
        .blog__title Добавить статью
        label.blog__label
          span.blog__span Заголовок статьи
          input(type='text' name='article-name' class='blog__input' placeholder="Заголовок" required)
        label.blog__label
          span.blog__span Дата публикации
          input(type='text' name='article-date' class='blog__input' placeholder="Дата" required)        
        button.blog__btn(type="button" @click="addArticle") Добавить статью
      .blog__right     
        textarea.blog__textarea(type="text" name='article-text' placeholder="Текст статьи")    
</template>
<script>
  export default {
  methods: {
    addArticle() {
      console.log('article was added');
    }
  }
  };
</script>

<style lang="scss" scoped>
  .blog{
      width: 100%;
      min-height: min-content;

      &__left{
        width: 30%;
        height: 100%;
        display: inline-block;
        vertical-align: top;
      }

      &__right{
        @extend .blog__left;
        width: 70%;
        padding: 0 10%;
      }

      &__header{
          font-size: 21px;
          color: #566358;
          padding: 50px;
      }

      &__title{
          font-size: 21px;
          color: #566358;
          padding: 10px;
      }

      &__form{
        width: 100%;
        padding: 0 20px;
      }

      &__label{
        display: block;
        margin-top: 30px;
      }

      &__input{
        display: block;
        margin-top: 10px;
      }

      &__textarea{
        width: 100%;
        height: 300px;
      }

      &__btn{
        margin-top: 10px;
      }
  }
</style>