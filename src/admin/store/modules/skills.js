const skills = {
  state: {
    data: []
  },
  getters: {
    skills(state) {
      return state.data
    }
  },
  mutations: {
    addSkill(state, skill) {
      state.data.push(skill)
    },
    removeSkill(state, skillId) {
      state.data = state.data.filter(item => item.id !== skillId);
    }
  },
  actions: {
    fetchSkills({ state }) {
      fetch("/src/data.json")
        .then(data => {
          return data.json();
        })
        .then(responce => {
          state.data = responce
        });
    }
  }
};

export default skills;
