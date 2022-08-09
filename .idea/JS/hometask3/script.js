function FirstTask() {
  products = ['Apple','Orange', 'Pineapple', 'Onion', 'Cucumber'];

  console.log('The last product will be : ',products[products.length - 1]);
}
FirstTask();

function SecondTask() {
  styles = ['Jazz', 'Blues'];
  console.log('You have such styles in your playlist : ', styles);
  styles.push("Rock'n'Roll");
  console.log('You have such styles in your playlist : ', styles);
  styles.splice(styles.length-2,1,"Classic")
  console.log('You have such styles in your playlist : ', styles);
  console.log('You have deleted this element in your playlist : ', styles.shift());
  console.log('You have such styles in your playlist : ', styles);
  styles.unshift('Rap','Reggi');
  console.log('You have such styles in your playlist : ', styles);
}
SecondTask();


  function find(arr, value) {
    console.log(arr.indexOf(value) != -1)
}
array = ['Hell','Heaven', 'MammaMia', 'TurnBack'];
find(array,'Heaven');

function filterRange(array, a, b) {
  newArray = [];
  for (i = 0; i < array.length; i++) {
    if (array[i] >= a && array[i] <= b) {
      newArray.push(array[i]);
    }
  }
  console.log(newArray);
}
a = 1;
b = 10;
array = [2,5,12,16,7,9,10,1,52];
filterRange(array,a,b);


function camelize(str) {
  console.log(str)
  var array = str.split('-');

  for (i = 0; i < array.length; i++) {
    array[i]=array[i].charAt(0).toUpperCase()+array[i].slice(1);
  }
  newStr = array.join('')
  console.log(newStr)
}
str = 'my-short-string';
camelize(str);
