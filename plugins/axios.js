import _ from 'lodash'
export default function({ $axios, app, store ,redirect}) {
  var urlCanLoading =false;
  $axios.onRequest(config => {
    debugger
    if (store.state.auth.user.authToken) {
      config.headers.common['Authorization'] = store.state.auth.user.authToken;
      if(!urlCanLoading) store.state.loadingPage = false;
    }
  })
  $axios.onResponse(response => {
    store.state.loadingPage = true;
  })
  $axios.onError(error => {
    const code = parseInt(error.response && error.response.status);
    store.state.loadingPage = true;
    if (code === 401 || code == 504) {
      redirect('/errors')
    }
  })
}
