import { Facebook } from 'expo';

import { config } from '../config';
import { Firebase } from '../integrations/firebase';

export default class AuthService {
  /**
   * Login with Facebook and Firebase
   *
   * Uses Expo Facebook API and authenticates the Facebook user in Firebase
   */
  public static async loginWithFacebook() {
    const { type, token } = await Facebook.logInWithReadPermissionsAsync(
      config.facebook.appId,
      { permissions: ['public_profile', 'email'] },
    );

    if (type === 'success' && token) {
      // Build Firebase credential with the Facebook access token.
      const credential = Firebase.auth.FacebookAuthProvider.credential(token);

      // Sign in with credential from the Facebook user.
      await Firebase
        .auth()
        .signInAndRetrieveDataWithCredential(credential);
    }
  }

  /**
   * Register a subscription callback for changes of the currently authenticated user
   * 
   * @param callback Called with the current authenticated user as first argument
   */
  public static subscribeAuthChange(callback: (user: firebase.User | null) => void) {
    Firebase.auth().onAuthStateChanged(callback);
  }

  public static async logout() {
    return Firebase.auth().signOut();
  }
}
