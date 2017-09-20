import firebase from 'firebase';

class Auth {
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

  addListeners (){
    this.store.addListener('logIn', this.logIn);
    this.store.addListener('newPassword', this.newPassword);
    this.store.addListener('signUp', this.signUp);
    this.store.addListener('logOut', this.logOut);
  }

  logOut = () => {
    const self = this;
    
    firebase.auth().signOut().then(function() {
      self.store.set('loggedIn', false);
      self.store.set('alert', {message: 'You are logged out', type: 'success', action: 'newPassword'});
    }).catch(function(error) {
      self.store.set('alert', {message: error.message, type: 'error', action: 'newPassword'});
    });
  }

  newPassword = (newPassword) => {
    const self = this;

    firebase.auth().currentUser.updatePassword(newPassword).then(function() {
      self.store.set('alert', {message: 'Password has been changed successfully', type: 'success', action: 'newPassword'});
    }).catch(function(error) {
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
    firebase.auth().signInWithEmailAndPassword(user.email, user.password).then(user => {
      this.store.set('alert', {message: 'You are logged in', type: 'success', action: 'logIn'});
      this.store.set('loggedIn', true);
    }).catch(error => {
      this.store.set('alert', {message: error.message, type: 'error', action: 'logIn'});
    });
  }

}
export default Auth;