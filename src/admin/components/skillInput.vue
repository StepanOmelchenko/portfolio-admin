<template lang="pug">
  .skill-input
    input(
      type="text" 
      v-model="skillName"  
      @keydown.enter="addNewSkill"
      :class="{error : validation.hasError('skillName')}"
    ).skill__input
    //button(type="button" @click="addNewSkill").skill__btn Сохранить
    .error-message {{validation.firstError('skillName')}}
</template>
<script>
import { mapMutations } from "vuex";
import { Validator } from "simple-vue-validator";

export default {
  mixins: [require("simple-vue-validator").mixin],
  validators: {
    skillName: value => {
      return Validator.value(value).required("Название не может быть пустым");
    }
  },
  props: {
    type: Number
  },
  data() {
    return {
      skillName: ""
    };
  },
  methods: {
    ...mapMutations(["addSkill"]),
    addNewSkill() {
      const newSkill = {
        id: Math.round(Math.random() * 1000000),
        name: this.skillName,
        percents: 0,
        type: this.type
      };
      this.$validate().then(success => {
        if (!success) return;
        this.addSkill(newSkill);
        this.skillName = "";
        this.validation.reset();
      });
    }
  }
};
</script>
<style lang="scss" scoped>
  .error {
    border: 1px solid red;
    outline: none;
  }

  .skill-input{
    margin-top: 20px;
    display: none;
  }

  .skill__input{
    width: 100px;
    margin-right: 30px;
  }

  .skill__btn{
    outline: none;
    border: none;
    width: 100px;
    height: 40px;
    background-color: #6c9c5a;
    color: $white;
    border-radius: 5px;
  }
</style>

