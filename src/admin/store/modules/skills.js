import axios from 'axios';

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
      axios.get('http://localhost:3000/api/admin').then((res) => {
        state.data = res.data.skills;
      });
    },
    setSkill({ state, commit }, data) {
      console.log('hello from setSkill');
      axios({
        method: 'post',
        url: 'http://localhost:3000/api/admin',
        data: data
      }).then((res) => {
        state.msgSkills = res.data.status;
      });
    }
    
  }
};

export default skills;
