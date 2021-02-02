import {database} from "./firebase";
class DataBase {
	const writeUserData =(id, name, office, office_address, phone_number, email)=>{
		firebase.database().ref().set({
		})
	}

}

export default DataBase;