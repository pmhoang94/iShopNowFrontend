import { request } from 'https';
import firebase, {fireAuth, GoogleProvider} from '@/plugins/firebase.js'
async function signInWithGoogle() {
  debugger
  var googleAuth = await fireAuth.signInWithRedirect(GoogleProvider)
  return googleAuth
}
export default {
  signInWithGoogle
};
