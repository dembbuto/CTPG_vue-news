import {
  fetchList,
  fetchUserInfo,
  fetchCommentItem
} from '../api/index.js';

export default {
  // FETCH_USER({ commit }, name) {
  //   return fetchUserInfo(name)
  //     .then(({ data }) => {
  //       commit('SET_USER', data);
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });
  // },
  // FETCH_ITEM({ commit }, id) {
  //   return fetchCommentItem(id)
  //     .then(({ data }) => {
  //       commit('SET_ITEM', data);
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });
  // },
  // FETCH_LIST({ commit }, pageName) {
  //   return fetchList(pageName)
  //     .then(({ data }) => {
  //       commit('SET_LIST', data);
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });
  // }
  async FETCH_USER({ commit }, name) {
    try {
      const response = await fetchUserInfo(name)
      commit('SET_USER', response.data);
    } catch (error) {
      console.log(error);
    }
  },
  async FETCH_ITEM({ commit }, id) {
    try {
      const response = await fetchCommentItem(id)
      commit('SET_ITEM', response.data);
    } catch (error) {
      console.log(error);
    }
  },
  async FETCH_LIST({ commit }, pageName) {
    try {
      const response = await fetchList(pageName);
      commit('SET_LIST', response.data);
      return response;
    } catch (error) {
      console.log(error);
    }
  }
}