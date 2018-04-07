<template lang="pug">
  .skills__box
    .skills__title {{skillType}}
    ul.skills__list
      skills-item(
        v-for="skill in skills"
        v-if="convertSkillStringToNum(skillType) === skill.type"
        :key="skill.id"
        :skill="skill"
      )
    skill-input(
      :type="convertSkillStringToNum(skillType)"
    )
</template>
<script>
import skillsItem from "./skillsItem";
import skillInput from "./skillInput";

export default {
  components: { skillsItem, skillInput },
  props: {
    skillType: String,
    skills: Array
  },
  methods: {
    convertSkillStringToNum(skillGroupName) {
      switch (skillGroupName) {
        case "frontend":
          return 1;
        case "workflow":
          return 2;
        case "backend":
          return 3;
      }
    }
  }
};
</script>

<style lang="scss" scoped>

.skills__title {
    font-size: 16px;
    font-weight: 500;
    color: #566358;
    margin-bottom: 20px;
}

.skills__box {
    margin-top: 20px;
    width: 230px;

    &:first-child{
      margin-top: 0;
    }
}

.skills__list{
  margin-left: 10px;
}

</style>