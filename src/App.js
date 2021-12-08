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
				Today is {daysOfWeek[dateObj.getDay()]}
			</header>
		</div>
	)
}

export default App
