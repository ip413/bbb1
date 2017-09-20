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
    this.store.addListener('logIn', this.logIn);
    this.store.addListener('newPassword', this.newPassword);
    this.store.addListener('signUp', this.signUp);
  }

  newPassword = (newPassword) => {
    console.log("update pass", newPassword)
    const self = this;

    firebase.auth().currentUser.updatePassword(newPassword).then(function() {
      // Update successful.
      console.log("new pass success");
      self.store.set('alert', {message: 'Password has been changed successfully', type: 'success', action: 'newPassword'});
    }).catch(function(error) {
      console.log("new pass error", error);
      self.store.set('alert', {message: error.message, type: 'error', action: 'newPassword'});
    });
  }

  signUp = (user) => {
    firebase.auth().createUserWithEmailAndPassword(user.email, user.password).then(user => {
       this.store.set('alert', {message: `User with email "${user.email}" has been created`, type: 'success', action: 'signUp'});
    }).catch(error => {
      this.store.set('alert', {message: error.message, type: 'error', action: 'signUp'});
    });
  }

  logIn = (user) => {
    console.log("log in service");
    firebase.auth().signInWithEmailAndPassword(user.email, user.password).then(user => {
      this.store.set('alert', {message: 'You are logged in', type: 'success', action: 'logIn'});
      this.store.set('loggedIn', true);
    }).catch(error => {
      this.store.set('alert', {message: error.message, type: 'error', action: 'logIn'});
    });
  }

}
export default Services;