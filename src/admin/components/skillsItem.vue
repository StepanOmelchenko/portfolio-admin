<template lang="pug">
  li.skill__item
    form(@submit.prevent="saveSkill")
      .skill__name {{skill.name}}
      label.skill__label 
        input(type="text" :value="skill.percents" ref="skillVal").skill__value
      span.skill__span &#37; 
      button(type="submit").skill__btn Set
</template>

<script>
import { mapMutations, mapActions } from "vuex";
export default {
  props: {
    skill: Object
  },
  methods: {
    ...mapActions(['setSkill']),
    saveSkill() {
      const data = {
        id: this.skill._id,
        val: this.$refs.skillVal.value
      };
      
      this.setSkill(data);
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