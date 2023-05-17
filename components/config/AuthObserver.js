import { onAuthStateChanged } from "firebase/auth";
import ReactObserver from "react-event-observer";

//local component
import { firebaseAuthentication } from './firebase';


const AuthObserver = ({navigation}) => {
    onAuthStateChanged(firebaseAuthentication, (user) => {
        if(user) {
            console.log("Sukses Coy");
            navigation.replace("home");
        } else {
            console.log("Logout Coy");
            navigation.replace("login");
        }
    })
}

export default AuthObserver;