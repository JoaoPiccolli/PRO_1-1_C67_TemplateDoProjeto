import firebase from 'firebase';

// adicione SDK do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyA0fi-fgd0P0iV9Li9AzsYNTRwCp7dnTz4",
  authDomain: "contribuindo-com-projetos.firebaseapp.com",
  projectId: "contribuindo-com-projetos",
  storageBucket: "contribuindo-com-projetos.appspot.com",
  messagingSenderId: "988747932556",
  appId: "1:988747932556:web:3b0cd89e09175525cf6ca9"
};
// Initialice o Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();