<template lang="pug">
  .blog
    h2.blog__header Мой блог
    form.blog__form
      .blog__title Добавить статью
      label.blog__label
        span.blog__span Заголовок статьи
        input(type='text' name='article-name' class='blog__input' placeholder="Заголовок" required)
      label.blog__label
        span.blog__span Дата публикации
        input(type='text' name='article-date' class='blog__input' placeholder="Дата" required)  
      label.blog__label      
        textarea.blog__textarea(type="text" name='article-text' placeholder="Текст статьи")   
      button.blog__btn(type="button" @click="addArticle") Добавить статью    
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
      height: 100vh;
      background-color: rgba(#fff, .8);


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
        margin-left: 20px;
        width: 300px;
        display: flex;
        flex-direction: column;
      }

      &__label{
        margin-top: 30px;
      }

      &__textarea{
        width: 100%;
        height: 200px;
      }
  }
</style>