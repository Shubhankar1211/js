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


```