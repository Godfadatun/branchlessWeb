import { Module } from 'vuex';
import {StoreInterface} from '../index';
import state, {stateModel} from './state';
import getters from './getters';
import mutations from './mutations';
import actions from './actions';

const module: Module<stateModel, StoreInterface> = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
export default module
