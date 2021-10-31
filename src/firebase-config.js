const firebaseConfig = {
    apiKey: "AIzaSyD9NGomlh-kYoeFAPR8l19We1S0-9kYDHI",
    authDomain: "ecosistemas-de-app.firebaseapp.com",
    projectId: "ecosistemas-de-app",
    storageBucket: "ecosistemas-de-app.appspot.com",
    messagingSenderId: "71122901108",
    appId: "1:71122901108:web:5f4d902d516e7efceb5921",
    measurementId: "G-5D174K2C34"
  };

  export function getFirebaseConfig() {

    if(!firebaseConfig || !firebaseConfig.apiKey) {
        
        throw new Error("Firebase config error");
    }

    else {
        return firebaseConfig;
    }
}
