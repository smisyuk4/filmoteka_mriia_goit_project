import { initializeApp } from 'firebase/app';
import { getFirestore, doc, setDoc, getDocs, addDoc, collection } from 'firebase/firestore/lite';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, GithubAuthProvider } from "firebase/auth";
import { MovieLibrary } from "./library-scripts";

const firebaseConfig = {
	apiKey: "AIzaSyA756Xx20U4xEMkmEZ4Kna0GUuwGBG7_2c",
	authDomain: "filmoteka-mriia-goit-project.firebaseapp.com",
	projectId: "filmoteka-mriia-goit-project",
	storageBucket: "filmoteka-mriia-goit-project.appspot.com",
	messagingSenderId: "446362755279",
	appId: "1:446362755279:web:a10dff493942ebfa5ad7ba"
};
const app = initializeApp(firebaseConfig);

const providerGit = new GithubAuthProvider();
const providerGoogle = new GoogleAuthProvider();

const auth = getAuth(app);
let userData;
onAuthStateChanged(auth, (user) => {
	if (user) {
		userData = user
	} else {
		signInWithPopup(auth, providerGoogle)
			.then((result) => {
				const credential = GoogleAuthProvider.credentialFromResult(result);
				const token = credential.accessToken;
				userData = result.user;
			}).catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				const email = error.customData.email;
				const credential = GoogleAuthProvider.credentialFromError(error);

			});
	}
	const libData = new MovieLibrary;
	const db = getFirestore(app);

	setDoc(doc(db, "queue" + userData.uid, "list"), libData.watched)
		.finally(() => {
			getDocs(collection(db, "queue" + userData.uid))
				.then(data => console.log(data.forEach((doc) => {
					console.log(`${doc.id} => ${doc.data()}`);
				})))
				.catch(error => console.log(error));
		});


});
