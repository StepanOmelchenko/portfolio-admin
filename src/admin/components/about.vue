<template lang="pug">
  .about
    h2.about__header Страница "Обо мне"
    .about__container
      skills-list(
        v-for="skillType in skillsTypes"
        :key="skillType"
        :skillType="skillType"
        :skills="skills"
      )

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
    ...mapActions(['fetchSkills'])
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
      background-color: rgba(#fff, .8);


      &__header{
          font-size: 21px;
          color: #566358;
          padding: 50px;
      }

      &__container{
        margin-left: 20px;
        width: 100%;
        height: 100vh;
        display: flex;
        flex-direction: column;
      }
  }
</style>