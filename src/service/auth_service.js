import { firebaseAuth, googleProvider, githubProvider } from "./firebase";

class AuthService {
    login(providerName) {
        const authProvider = this.getProvider(providerName);
        return firebaseAuth.signInWithPopup(authProvider)
    }

    getProvider(providerName){
        switch(providerName){
            case 'Google':
                return googleProvider;
            case 'Github':
                return githubProvider;
            default:
                throw new Error(`not supported provider`)
        }
    }
}

export default AuthService