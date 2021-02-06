import { firebaseDatabase } from "./firebase";

class DataBase {
	saveData(userId, card){
		firebaseDatabase.database.ref(`${userId}/cards/${card.id}`).set(card)
	}
}

export default DataBase;