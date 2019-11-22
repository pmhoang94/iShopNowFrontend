export default function({ store, redirect, route }) {
  !store.state.user ? redirect('/login') : ''
}
