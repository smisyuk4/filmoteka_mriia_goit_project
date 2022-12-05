import { initializeApp } from 'firebase/app';
import { getFirestore, doc, setDoc, getDocs , collection } from 'firebase/firestore/lite';
import { getAuth,signOut, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, GithubAuthProvider } from "firebase/auth";
import { Notify } from 'notiflix/build/notiflix-notify-aio';
// const providerGit = new GithubAuthProvider();
// const providerGoogle = new GoogleAuthProvider();

export class FireBaseData {
	constructor() {
		this.firebaseConfig = {
			apiKey: "AIzaSyA756Xx20U4xEMkmEZ4Kna0GUuwGBG7_2c",
			authDomain: "filmoteka-mriia-goit-project.firebaseapp.com",
			projectId: "filmoteka-mriia-goit-project",
			storageBucket: "filmoteka-mriia-goit-project.appspot.com",
			messagingSenderId: "446362755279",
			appId: "1:446362755279:web:a10dff493942ebfa5ad7ba"
		};
		this.app = initializeApp(this.firebaseConfig);
		this.providerGoogle = new GoogleAuthProvider();
		this.auth = getAuth(this.app);
		this.db = getFirestore(this.app);
		this.userData = ""
		onAuthStateChanged(this.auth, (user) => {
			if (user) {
				this.userData = user;
				this.updateLocal();
				if (window.location.pathname !== "/filmoteka_mriia_goit_project/partials/library-pg.html" && window.location.pathname !== "/partials/library-pg.html") {
					document.querySelector('.login-btn').textContent = this.userData.displayName;
				}
			}
		});
	}
	login() {
		if (this.userData) {
			const auth = getAuth();
			signOut(auth).then(() => {
				this.userData = null;
				if (window.location.pathname !== "/filmoteka_mriia_goit_project/partials/library-pg.html" && window.location.pathname !== "/partials/library-pg.html") {
					let text=''
					if (localStorage.getItem("siteOptions") == "ua") {
						text = 'Вхід';
					} else {
						text = 'Login';
					}
					document.querySelector('.login-btn').textContent = text;
				}
			}).catch((error) => {
				console.log(error)
			});
		} else {
			signInWithPopup(this.auth, this.providerGoogle)
			.then((result) => {
				const credential = GoogleAuthProvider.credentialFromResult(result);
				const token = credential.accessToken;
				this.userData = result.user;
				if (window.location.pathname !== "/filmoteka_mriia_goit_project/partials/library-pg.html" && window.location.pathname !== "/partials/library-pg.html") {
					document.querySelector('.login-btn').textContent = this.userData.displayName;
				}
				window.movieLibrary.saveData();
			}).catch((error) => {
				const errorCode = error.code;
			});
		}
	}
	readData(key) {
		if (this.userData) {
			getDocs(collection(this.db, key + this.userData.uid))
				.then(data => data.forEach((doc) => {
					return doc.data();
				}))
				.catch(error => {
					console.log(error);
				});
		}
		return {};
	}
	saveData(key, data) {
		if (this.userData) {
			setDoc(doc(this.db, key + this.userData.uid, "list"), data)
		}
	}
	updateLocal() {
		if (Object.keys(window.movieLibrary.watched).length == 0 && this.userData) {
			getDocs(collection(this.db, "Watched_List" + this.userData.uid))
				.then(data => {
					data.forEach((doc) => {
						window.movieLibrary.watched = doc.data();
						window.movieLibrary.saveData()
						Notify.info('Watched list updated');
					})
				})
				.catch(error => {
					console.log(error);
				});
		}
		if (Object.keys(window.movieLibrary.queue).length == 0 && this.userData) {
			getDocs(collection(this.db, "Queue_List" + this.userData.uid))
				.then(data => data.forEach((doc) => {
					window.movieLibrary.queue = doc.data();
					window.movieLibrary.saveData()
					Notify.info('Queue list updated');
				}))
				.catch(error => {
					console.log(error);
				});
		}
	}
}