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
        console.log('fetchSkills about ' + state);
      });
    },
    saveSkills({ state, commit }, data) {
      // console.log('saveSkills ');
      // console.log(data);
      axios({
        method: 'post',
        url: 'http://localhost:3000/api/admin',
        data: data
      }).then(rs => {
        state.msgSkills = rs.data.status;
      });;
    }
    /* fetchSkills({ state }) {
      fetch("/src/data.json")
        .then(data => {
          return data.json();
        })
        .then(responce => {
          state.data = responce
        });
    } */
  }
};

export default skills;
