<template>
  <div>
    <div v-for="skill in skills" :key="skill.id">
      <Skill :skill="skill" />
    </div>
  </div>
</template>

<script>
  import Skill from '~/components/Skill';
  export default {
    components: {
      Skill,
    },
    data(){
      return {
        "skills": [
          {
            "title": "フロントエンド",
            "descs": "フロントエンド",
            "sub1": {
              "title": "react",
              "howlong": "1",
              "rate": "3",
            },
            "sub2": {
              "title": "redux",
              "howlong": "3",
              "rate": "4",
            },
            "sub3": {
              "title": "jQuery",
              "howlong": "2",
              "rate": "5",
            },
          },
        ],
      }
    },
    name: "SkillList"
  }
</script>

<style scoped>

</style>
