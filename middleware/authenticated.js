export default async function({ store, redirect }) {
  if (!store.state.auth.user) {
    debugger
    return redirect('/login')
  }
}
