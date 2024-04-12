import { createStore } from 'vuex'

export default createStore({
  state () {
    return {
      name: '',
      email: '',
      interests: new Set(),
    }
  },
  getters: {
    name(state) {
      return state.name;
    },
    email(state) {
      return state.email;
    },
    interests(state) {
      return state.interests;
    },
    formSubmitData(state) {
      return {
        name: state.name,
        email: state.email,
        interests: Array.from(state.interests.keys()),
      };
    },
  },
  mutations: {
    setName(state, name) {
      state.name = name;
    },
    setEmail(state, email) {
      state.email = email;
    },
    toggleInterest(state, id) {
      if (state.interests.has(id)) {
        state.interests.delete(id);
      } else {
        state.interests.add(id);
      }
    },
  },
})
