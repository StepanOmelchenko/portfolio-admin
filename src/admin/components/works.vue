<template lang="pug">
  .works
    h2.works__header Мои работы
    form.works__form(enctype="multipart/form-data" method="post")  
      .works__title Добавить работу
      label.works__label
        span.works__span Заголовок работы
        input.works__input(type='text' name='work-name' placeholder="Введите заголовок" required)
      label.works__label
        span.works__span Список технологий     
        input.works__input(type='text' name='work-date' placeholder="Используемые технологии")
      label.works__label
        span.works__span Ссылка на проект     
        input.works__input(type='text' name='work-link' placeholder="Ссылка")
      label.works__label
        span.works__span Прикрепить картинку
        input.works__load(type="file")
      button.works__add(type="submit" @click="addWork") Добавить проект      
</template>

<script>
export default {
  methods: {
    addWork() {
      console.log('work was added');
    }
  }
};
</script>

<style lang="scss" scoped>
  .works{
      width: 100%;
      height: 100vh;
      background-color: rgba(#fff, .8);


      &__header{
          font-size: 21px;
          color: #566358;
          padding: 50px;
      }

      &__form{
        margin-left: 20px;
        width: 300px;
        display: flex;
        flex-direction: column;
      }

      &__label{
        margin-top: 20px;

        &:first-child{
          margin-top: 0;
        }
      }

      &__add{
        margin-top: 20px;
      }
  }
</style>