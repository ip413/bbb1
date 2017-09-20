import firebase from 'firebase';

class Services {
  store = null;

  constructor(store) {
    this.store = store;
    this.initFirebase();
    this.addListeners();
  }

  initFirebase(){
    firebase.initializeApp({
      apiKey: "AIzaSyAMNnboZD3q0Se4qmIM8LxA5SavX54QMJE",
      authDomain: "project-620574591679.firebaseapp.com",
      databaseURL: "https://lx01-6f80c.firebaseio.com/",
      storageBucket: "lx01-6f80c.appspot.com"
    });
  }

  addListeners(){
    this.store.addListener('signup', this.signUp);
  }

  signUp = (signup) => {
    firebase.auth().createUserWithEmailAndPassword(signup.email, signup.password).then(user => {
       this.store.set('alert', {message: `User with email "${user.email}" has been created`, title: 'Success'});
    }).catch(error => {
      this.store.set('alert', {message: `${error.message}`, title: 'Error'});
    });
  }

}
export default Services;