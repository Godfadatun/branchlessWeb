/*
export function someMutation (state) {
}
*/
import { MutationTree } from 'vuex';
import { stateModel } from './state';
import { LocalStorage } from 'quasar'
const mutation: MutationTree<stateModel> = {
  user(state: stateModel, data){
    console.log('newdata',data)
    state.user = data
  },
  login(state: stateModel, data){
    LocalStorage.set('loginToken', data.data.token)
  }
};

export default mutation;
