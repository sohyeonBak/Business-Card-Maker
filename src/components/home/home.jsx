import React, { useState } from 'react';
import Cardzone from './card/cardzone';
import Footer from './footer/footer';
import Header from './header/header';

const Home = props => {
	const [count, setCount] = useState(0)
	const [cards, setCards] = useState({
		'1':{
			id : 1,
			name : '박소현',
			office : '가나다회사',
			address : '서울시 강남구 A길 123-12',
			phone : '010-1234-5678',
			email : 'abcd12@ghi.com'
		}
	});

	const addCard =(counts)=>{
		console.log(counts)
		setCount(counts)
	}

	const updateCard = (card) =>{
		setCards(cards=>{
			const update = {...cards}
			update[card.id]=card
			return update;
			})
		}

	const deleteCard = card =>{
		setCards(cards=>{
			const update = {...cards};
			delete update[card.id] 
			return update;
		})
	}

	return(
		<section className="home">
			<Header count={count} onAdd={addCard} cards={cards}/>
			<Cardzone count={count} cards={cards} updateCard={updateCard} deleteCard={deleteCard} />
			<Footer />
		</section>
	)
}

export default Home;