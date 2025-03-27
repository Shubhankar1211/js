# Projects realted to Dom

## project link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# solution code

## project 1 

```javascript



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