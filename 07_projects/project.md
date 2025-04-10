# Projects related to DOM

## Project Link
[Click Here](https://stackblitz.com/edit/dom-project-chaiaurcode-grj1wokb)

### Project 1 solution

``` javascript
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
    }
    
  });
});

```

### Project 2 solution
```javascript
const form = document.querySelector('form');

// This usecase will give empty value as it is outside the function
// const weight = parseInt(document.querySelector('#weight').value)

form.addEventListener('submit', function (e) {
  e.preventDefault(); //Used to not submit the data anywhere

  const height = parseInt(document.querySelector('#height').value); //we get value in string so parse into INTEGER

  const weight = parseInt(document.querySelector('#weight').value);
  const result = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    result.innerHTML = `Please enter a valid height`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    result.innerHTML = `Please enter a valid weight`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    result.innerHTML = `<span>${bmi}</span>`;
  }
});
```
