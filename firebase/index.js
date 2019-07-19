import firebase from "firebase/app";
import "firebase/firestore";

export function init() {
  if (!firebase.apps.length) {
      firebase.initializeApp({});
  }
}

export function db() {
    init();

    return firebase.firestore();
}

export default firebase;
