import { useSelector } from 'react-redux'
import './styles.css'

const FruitsPage = () => {
	const fruits = useSelector((state) => state.fruits)

	return (
		<div>
			{fruits.map((fruit) => (
				<p key={fruit}> {fruit} </p>
			))}
		</div>
	)
}

export default FruitsPage
