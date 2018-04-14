<template lang="pug">
  form.about(@submit.prevent="saveAll")
    h2.about__header Страница "Обо мне"
    .about__container
      skills-list(
        v-for="skillType in skillsTypes"
        :key="skillType"
        :skillType="skillType"
        :skills="skills"
      )
      //input(name="" value="Сохранить" type="submit").about__save

</template>
<script>
import { mapActions, mapGetters } from "vuex";
import skillsList from "./skillsList";
export default {
  components: {
    skillsList
  },
  data() {
    return {
      skillsTypes: ["frontend", "workflow", "backend"]
    };
  },
  computed: {
    ...mapGetters(['skills'])
  },
  methods: {
    ...mapActions(['fetchSkills', 'saveSkills']),
    saveAll: function() {
      let data = this.skills;
      this.saveSkills(data);
    }
  },
  mounted() {
    this.fetchSkills();
  }
};
</script>
<style lang="scss" scoped>
  .about{
      width: 100%;
      height: 100%;

      &__header{
          font-size: 21px;
          color: #566358;
          padding: 50px;
      }

      &__container{
        margin-left: 20px;
        width: 100%;
        height: 100%;
        display: flex;
        flex-wrap: wrap;
      }

      &__save{
        outline: none;
        border: none;
        margin-top: 20px;
        width: 100px;
        height: 40px;
        background-color: #6c9c5a;
        color: $white;
        border-radius: 5px;
        cursor: pointer;

        &:hover{
          color: #813;
        }
      }
  }
</style>