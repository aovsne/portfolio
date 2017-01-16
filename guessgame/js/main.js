var secretNumber = Math.floor(Math.random() * 100) + 1
var guess = 0
console.log(secretNumber)

function getInfo(){
	var userguess = document.getElementById('guess').value

	if(guess >= 9 && userguess != secretNumber){
		console.log('you lose')
		guess++
		document.getElementById('display').textContent = guess
		document.getElementById('result').textContent = 'You lose!'
		document.getElementById('result').className = 'loose'
		document.getElementById('dudu').textContent = 'Refresh page to replay the game!!'

	}
	else if(userguess == secretNumber && guess < 10){
		console.log('you win.')
		guess++
		document.getElementById('display').textContent = guess
		document.getElementById('result').textContent = 'You win!!'
		document.getElementById('result').className = 'won'
		document.getElementById('dudu').textContent = 'Refresh page to replay the game!!'
	}
	else if(userguess > secretNumber){
		console.log('guess lower')
		guess++
		document.getElementById('display').textContent = guess
		document.getElementById('result').textContent = 'guess lower'
	}
	else if(userguess < secretNumber){
		console.log('guess higher')
		guess++
		document.getElementById('display').textContent = guess
		document.getElementById('result').textContent = 'guess higher'
	}
}
