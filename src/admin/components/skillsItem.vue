<template lang="pug">
  li.skill__item
      .skill__name {{skill.name}}
      label.skill__label 
        input(type="text" :value="skill.percents").skill__value
      span.skill__span &#37; 
      button(type="button" @click="removeExistedSkill(skill.id)").skill__btn Del
</template>

<script>
import { mapMutations } from "vuex";
export default {
  props: {
    skill: Object
  },
  methods: {
    ...mapMutations(['removeSkill']),
    removeExistedSkill(skillId) {
      this.removeSkill(skillId);
    }
  }
};
</script>

<style lang="scss" scoped>

  .skill__item{
    display: flex;
  }

  .skill__value{
    width: 46px;
    height: 32px;
    border-radius: 5px;
    text-align: center;
    display: inline-block;
    outline: none;
    color: #566358;
  }

  .skill__name{
   flex: 1;
   color: #566358;
  }

  .skill__span{
    margin: 0 5px;
  }
</style>