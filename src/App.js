import './App.css'

function App() {
	const dateObj = new Date()
	const daysOfWeek = [
		'Sunday',
		'Monday',
		'Tuesday',
		'Wednesday',
		'Thursday',
		'Friday',
		'Saturday',
	]
	return (
		<div className='App'>
			<header className='App-header'>
				<span className='App-link'>{daysOfWeek[dateObj.getDay()]}</span>
			</header>
		</div>
	)
}

export default App
