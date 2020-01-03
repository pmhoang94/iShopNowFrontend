const SET_USER = (state, messages) => {
  state.user = messages
  state.total = messages.length
}
export default {
  SET_USER
}
