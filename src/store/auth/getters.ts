// sends info from the state to the APP
import { GetterTree } from 'vuex';
import { StoreInterface } from '../index';
import { stateModel } from './state';
import { LocalStorage } from 'quasar';

const getters: GetterTree<stateModel, StoreInterface> = {
  users (state) {
    return state.user
  },
  isLoggedIn (state) {
    return state.token || LocalStorage.getItem('userToken')
  }
};

export default getters;
