import { onAuthStateChanged } from "firebase/auth";

//local component
import { firebaseAuthentication } from './firebase';


const AuthObserver = ({navigation}) => {
    onAuthStateChanged(firebaseAuthentication, (user) => {
        if(user) {
            console.log("Sukses Coy");
            navigation.replace("home", {
                displayName: user.displayName,
            });
        } else {
            navigation.reset({index: 0, routes: [{name: 'login'}]});
        }
    })
}

export default AuthObserver;