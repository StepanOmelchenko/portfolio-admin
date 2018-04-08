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
      axios.get('http://localhost:3000/api/admin').then(rs => {
        state.data = rs.data.skills;
      });
    },
    saveSkills({ state, commit }, data) {
      axios({
        method: 'post',
        url: 'http://localhost:3000/api/admin',
        data: data
      }).then(rs => {
        state.msgSkills = rs.data.status;
      });
    }
    
  }
};

export default skills;
