import {
  FIREBASE_API_KEY,
  FIREBASE_AUTH_DOMAIN,
  FIREBASE_DATABASE_URL,
  FIREBASE_STORAGE_BUCKET,
} from 'react-native-dotenv';

const firebase = Object.freeze({
  apiKey: FIREBASE_API_KEY as string || '',
  authDomain: FIREBASE_AUTH_DOMAIN as string || '',
  databaseURL: FIREBASE_DATABASE_URL as string || '',
  storageBucket: FIREBASE_STORAGE_BUCKET as string || '',
});

export default firebase;
