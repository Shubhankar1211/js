# Projects realted to Dom

## project link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# solution code

## project 1 

```javascript

const buttons = document.querySelectorAll('.button');
const body = document.querySelector("body");

buttons.forEach( (button) =>{
  console.log(button)
  button.addEventListener('click',function(e){
      console.log(e);
      console.log(e.target)// target karte hi hame pta chaljata h ki ye event aaa kha se raha h kyo ye ek html collection show karta h us me se hame iski id miljayegi or pta chal ajeyga ki ye kha se aarha h
      if(e.target.id ==='grey'){
        //body.style.backgroundColor = 'grey'// ye bhi likhste h ye hardcore value h or achhi programming ke liye ye likh skate h
        body.style.backgroundColor = e.target.id
      }
      else if(e.target.id === 'white'){
        body.style.backgroundColor = e.target.id
      }
      else if(e.target.id === 'blue'){
        body.style.backgroundColor = e.target.id
      }      
      else if(e.target.id === 'yellow'){
        body.style.backgroundColor = e.target.id
      }      
  })
})


```

## project 2 solution 


```javascript

const form = document.querySelector('form')
// this usecase will give you empty value
//const height = parseInt(document.querySelector('#height').value)


form.addEventListener('submit', (e)=>{
  e.preventDefault() // jo bhi default action h usee rok do 

  const height = parseInt(document.querySelector('#height').value)
  const weight = parseInt(document.querySelector('#weight').value) // agar inhe event ke bhar likha  to ye empty value store kar dega
  const results = document.querySelector('#results')
  const weightguide = document.querySelector('#weight-guide')

  if(height === '' || height < 0 || isNaN(height)){
    results.innerHTML = `please give a valid height ${height}`;
  }
  else if(weight === '' || weight < 0 || isNaN(weight)){
    results.innerHTML = `please give a valid height ${weight}`;
  }
  else{
   const bmi = (weight / ((height*height)/10000)).toFixed(2)
   results.innerHTML = `<span>${bmi}</span>`;
  }

  if(results<18.6){
    weightguide.innerHTML = 'Under Weight'
  }
  else if(results>18.6 && results<24.9){
    weightguide.innerHTML = 'Normal Range'
  }
  else{
    weightguide.innerHTML = 'Overweight'
  }
  
})

```

## project 3 solution code 

```javascript

const clock = document.querySelector('#clock')

setInterval(function(){ // set interval hame use karte lgatar change karne ke liye 
  let date = new Date();
  //console.log(date.toLocaleTimeString()); // it will display in console but we don't want to display in console tha is whu we use
  clock.innerHTML = date.toLocaleTimeString()
},1000)


```

## project 4 solution code

```javascript
 
let randomNumber = parseInt(Math.random() * 100 + 1)
console.log(randomNumber);
const submit =  document.querySelector('#subt')
const userInput = document.querySelector('#guessField'); // yha sirf hamne userinput ko select kiya h 
const userGuesses = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p')

let preGuess =[]
let numGuess = 1 

let playGame = true

if(playGame){
  submit.addEventListener('click', (e)=>{
    e.preventDefault()
    const guess = parseInt(userInput.value) // yha ham user se input lenge 
    console.log(guess)
    validateGuess(guess)
  })
}


function validateGuess(guess){
  if(isNaN(guess)){
    alert(`please enter a valid number`)
  }
  else if( guess < 1){
    alert(`please enter a positive number `)
  }
  else if(guess > 100){
    alert(`please enter a number less than 100`)
  }
  else{
    preGuess.push(guess) // here we push the user guess in the guess array
    if(numGuess>=10){ // here we check that if the user game is over or not
      displayGuess(guess) 
      displayMessage(`your game is over random number: ${randomNumber}`) // here we display the messaege and show the acutal number which user have to guess
      endGame() // finally call the end game fucntion
    }
    else{ // if upper else not execute which means user still have guesss 
        displayGuess(guess)
        checkGuess(guess)
    }
  }
}


function checkGuess(guess){
     if(guess === randomNumber){
       displayMessage(`you guess it right`)
       endGame()
     }
     else if( guess < randomNumber){
       displayMessage(`your guess number is too low`)
     }
     else if( guess > randomNumber){
       displayMessage('your guess number is too high')
     }
}


function displayGuess(guess){
  userInput.value = ''  // hamne jo userinput se guess liya h hma use update kardenge ise cleanup method bhi bol skate h koy ki exctually me hame vlaue to kahli karni hi h
  userGuesses.innerHTML += `${guess}, `    //
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`
}


function displayMessage(message){
    lowOrHi.innerHTML = `<h2>${message}</h>`
}


function endGame(){
   userInput.value ='' // jitni bhi vlaue h use clean kar dijeye
   userInput.setAttribute('disabled', '') // user or value add na karpaye
   p.classList.add('button')
   p.innerHTML ='<h2 id="newGame">Start new Game</h2>'; // yha sirf button hva me jhul raha h 
   startOver.appendChild(p) // uhs hamne p add kiya h 
   playGame = false // yha hamenplay game ko flasekar diya h jsise ye end ho jaye 
   newGame()
}


function newGame(){
  const newGmaeButton = document.querySelector('#newGame')
  newGmaeButton.addEventListener('click',(e)=>{
  randomNumber = parseInt(Math.random() * 100 + 1)
  preGuess =[] // yha hmae previous guess ko reset kar diay h 
  numGuess = 1
  userGuesses.innerHTML= ''
  remaining.innerHTML = 10
  userInput.removeAttribute('disabled') // yha ye disabled attribute hta diya  h
  startOver.removeChild(p); // yha hmne jo child add kiye tha usee hat diya h

  playGame = true
  })
} 

```