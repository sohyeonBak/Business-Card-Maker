import React, { useState } from 'react';
import Cardzone from './card/cardzone';
import Footer from './footer/footer';
import Header from './header/header';

const Home = props => {
	const [cards, setCards] = useState([{
		id : 1,
		name : '박소현',
		office : '가나다회사',
		office_address : '서울시 강남구 A길 123-12',
		phone_number : '010-1234-5678',
		email : 'abcd12@ghi.com'
	}]);
	return(
		<section className="home">
			<Header />
			<Cardzone cards={cards}/>
			<Footer />
		</section>
	)
}

export default Home;