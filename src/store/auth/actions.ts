/*
export function someAction (context) {
}
*/

import { ActionTree } from 'vuex';
import { StoreInterface } from '../index';
import { stateModel } from './state';
import axios from 'axios';
import { promises } from 'dns';

const actions: ActionTree<stateModel, StoreInterface> = {
  async login({commit}){
    return await new Promise((resolve, reject) => {
      axios.post(process.env.Api + '', )
      .then(response => {
        const data = response.data
      })
      .catch( err => {
        commit('logout');
        reject(err);
      } )
    })
  },
  someAction (/* context */) {
    // your code
  }
};

export default actions;

