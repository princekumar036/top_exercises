
import { useState, useEffect } from 'react'
import Cards from './components/Cards'

function App() {

	useEffect(() => {
		fetch('https://thronesapi.com/api/v2/Characters')
		.then(response => response.json())
		.then(data => setCards(data))
	}, [])
	
	const [cards, setCards] = useState([])
	const [clickedCards, setClickedCards] = useState([])
	const [currentScore, setCurrentScore] = useState(0)
	const [bestScore, setBestScore] = useState(0)

	function shuffleCards(event) {
		for (let i = cards.length; --i;) {
			let j = Math.floor(Math.random() * (i + 1));
			[cards[i], cards[j]] = [cards[j], cards[i]]
		}

		let clickedCard = cards.find(card => card.id == event.target.parentNode.getAttribute('data-id'))

		setClickedCards(prevState => ([...prevState, clickedCard]))

		if (checkGame(clickedCard.id)) {
			console.log('Game Over!')
		}

		setCurrentScore(prevScore => prevScore + 1)
		setCards([...cards])
	}

	function checkGame(id) {
		if (clickedCards.find(card => card.id === id) !== undefined) {
			return true
		}
	}

	return (
		<>
			<h1>Memory Card</h1>

			<p>Current Score: {currentScore}</p>
			<p>Best Score: {bestScore}</p>

			<div className="card-container">
				{cards.map(card => (
					<div className='card' key={card.id} data-id={card.id} onClick={shuffleCards}>
						<img src={card.imageUrl} alt="" />
						<p>{card.fullName}</p>
					</div>
				))}
			</div>
		</>
	)
}

export default App