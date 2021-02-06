import React, { useState } from 'react';
import Card from './card/card';
import Edit from './edit/edit';
import Footer from './footer/footer';
import Header from './header/header';

const Home = props => {
	const [cards, setCards] = useState({
		'1':{
			id : 1,
			name : '박소현',
			office : '가나다 회사',
			address : '서울시 강남구 A길 123-12',
			phone : '010-1234-5678',
			email : 'abcd12@ghi.com'
		},
		'2':{
			id : 2,
			name : '김제니',
			office : '지금 회사',
			address : '서울시 강서구 B길 587-12',
			phone : '010-5678-1234',
			email : 'aaccc8@iii.com'
		}
	});

	const addUpdateCard=(card)=>{
		setCards(cards => {
			const update = {...cards};
			update[card.id]=card
			return update;
		})
	}

	const deleteCard=(card)=>{
		setCards(cards => {
			const update = {...cards};
			delete update[card.id]
			return update;
		})
	}

	return(
		<section className="home">
			<Header />
			<div className="content">
				<Edit cards={cards} onAddCard={addUpdateCard} updateCard={addUpdateCard} deleteCard={deleteCard}/>
				<Card cards={cards}/>
			</div>
			<Footer />
		</section>
	)
}

export default Home;