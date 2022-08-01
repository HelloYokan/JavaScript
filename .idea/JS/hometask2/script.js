var user = {
  name: 'Пилип',
  surname: 'Шевченко'
};
console.log('Original name : ' + user.name);
user.name = 'Сергій';
console.log('Changed name : ' + user.name);
delete user.name;
for (let obj in user) {
  console.log('keys : ' + obj + ' ' + 'values : ' + user[obj]);
}

var employeeSalaries = {
  firstone: 200,
  secondOne: 300,
  thirdOne: 400
};

var sum = 0;
for (let obj in employeeSalaries) {
  sum += employeeSalaries[obj];
  if (Object.keys(obj).length === 0) {
    console.log('There are no workers in the company. Sum of the salaries equals 0')
  }
}
console.log('Sum of all workers : ' + sum)


function Operation() {
try {
  var a = parseInt(prompt('Enter your first number'));
  var b = parseInt(prompt('Enter your second number'));
  var operation = prompt('Enter operation you want');
  if (typeof a === "string" || typeof b === "string") {
    throw 'syntax error';
  }
  switch (operation) {
    case '+':
      console.log('a + b = ' + (a + b));
      break;
    case '-':
      console.log('a - b = ' + (a - b));
      break;
    case '*':
      console.log('a * b = ' + (a * b));
      break;
    case '/':
      console.log('a/b = ' + (a / b));

  }
  }catch (e) {
  print('This is 0');

}
}
Operation();
