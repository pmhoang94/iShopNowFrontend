export default function({ store, redirect, route }) {
  if (!store.state.user) {
    redirect('/login')
  }
}
