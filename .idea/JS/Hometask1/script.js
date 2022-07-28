
function FirstTask() {
  sum = 0;
  let number = prompt('Enter your number, please')
  for (i = 0; i <= number; i++) {
    sum = sum + i;
  }
  console.log(sum);
}
FirstTask();

function SecondTask() {
  let number = prompt('Enter your number, please')
  if (number > 0 ) {
    console.log('The number you entered is bigger than 0')
  } else if (number < 0) {
    console.log('The number you entered is smaller than 0')
  } else {
    console.log('The number you entered equals 0')
  }
}
SecondTask();

function ThirdTask() {
  let number = prompt('Enter the right answer to the equasion 8 * 9 = ?')
  if (number == 72) {
    alert('Right!thanks')
  } else {
    alert('Wrong!Try again!')
    ThirdTask();
  }
}
ThirdTask();

function forthTask() {
  let password = prompt('Enter your password, please)')
  if (password  === 'pass123') {
    alert('You are authorized')
  } else if (password === 'admin') {
    alert('You are authorized as admin')
  } else {
    alert('Sorry, wrong password')
  }
}
forthTask();

function fifthTask() {
  number = 10;
  fibonachi = [0,1];
  for (i = 2; i <= number; i ++) {
    fibonachi[i] = fibonachi[i-1] + fibonachi[i-2];
  }
  console.log(fibonachi.slice(0,number));
}
fifthTask();
