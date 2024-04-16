import type { FormSubmitData } from '../types/FormSubmitData.d'
import { createStore } from 'vuex'

type State = {
  name: string,
  email: string,
  interests: Set<string>,
  donation: number | '',
  frequency: number | '',
}

export default createStore({
  state(): State {
    return {
      name: '',
      email: '',
      interests: new Set(),
      donation: '',
      frequency: '',
    }
  },
  getters: {
    name(state: State) {
      return state.name;
    },
    email(state: State) {
      return state.email;
    },
    interests(state: State) {
      return state.interests;
    },
    donation(state: State) {
      return state.donation;
    },
    frequency(state: State) {
      return state.frequency;
    },
    formSubmitData(state: State): FormSubmitData {
      return {
        name: state.name,
        email: state.email,
        frequency: state.frequency as number,
        donation: state.donation || 0,
        interests: Array.from(state.interests.keys()),
      };
    },
  },
  mutations: {
    setName(state: State, name: string) {
      state.name = name;
    },
    setEmail(state: State, email: string) {
      state.email = email;
    },
    toggleInterest(state: State, id: string) {
      if (state.interests.has(id)) {
        state.interests.delete(id);
      } else {
        state.interests.add(id);
      }
    },
    setDonation(state: State, donation: number | '') {
      state.donation = donation;
    },
    setFrequency(state: State, frequency: number | '') {
      state.frequency = frequency;
    },
  },
})
