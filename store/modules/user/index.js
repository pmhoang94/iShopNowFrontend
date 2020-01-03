import actions from './actions'
import getters from './getters'
import mutations from './mutations'

const state = {
  headers: {
    email: true,
    avatar: true,
    address: true
  },
  searchRequest: {
    description: '',
    currentPage: 1,
    pageSize: 10,
    sort: { field: "createdAt", sortOrder: -1 }
  },
}

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations
}
