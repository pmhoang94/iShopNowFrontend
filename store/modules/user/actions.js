import _ from 'lodash'

async function getUsers() {
  let response = await this.$axios.get(
    '/api/ishop/user/getAll'
  )
  debugger
  var data = response.data.data
  await context.commit('SET_USER', data)
}
export default {
  getUsers
}
