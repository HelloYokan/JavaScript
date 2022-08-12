//
// function sort() {
//   array = [1,5,-4,20,-50,32,45,19,21,-23,-41,39,-5,8];
//   for (i =0; i < array.length; i++) {
//     for (j = 0; j < array.length; j++) {
//       if (array[i] > array[j]) {
//         swap = array[i];
//         array[i] = array[j];
//         array[j] = swap;
//       }
//     }
//   }
//   console.log('sorted array from the biggest number to the smallest one : ',array);
//   for (i =0; i < array.length; i++) {
//     for (j = 0; j < array.length; j++) {
//       if (array[j] > array[i]) {
//         swap = array[i];
//         array[i] = array[j];
//         array[j] = swap;
//       }
//     }
//   }
//   console.log('sorted array from the smallest number to the biggest one : ',array);
//   positiveArray = [];
//   negativeArray = [];
//   for ( i = 0; i < array.length; i++) {
//     if (array[i] >= 0) {
//       positiveArray.push(array[i]);
//     } else negativeArray.push(array[i]);
//   }
//   console.log('Only positive elements and 0 : ', positiveArray)
//   console.log('Only negative elements : ', negativeArray)
// }
// sort();

let arrayStudent = [
  { age: 19 , groupName: 'BD_35' },
  { age: 20 , groupName: 'BD_31' },
  { age: 15 , groupName: 'BD_33' },
  { age: 20 , groupName: 'BD_35' },
  { age: 18 , groupName: 'BD_33' },
  { age: 20 , groupName: 'BD_31' },
  { age: 17 , groupName: 'BD_35' },
  { age: 16 , groupName: 'BD_35' },
  { age: 20 , groupName: 'BD_31' },
  { age: 19 , groupName: 'BD_33' }
];
function a () {
  let groupArray = arrayStudent.map(function (namegroup) {
    return `${namegroup.groupName}`
  });
  console.log(groupArray)
}
function b() {
  const amount = arrayStudent.reduce(function (amount, param) {
    return amount + param.age
  }, 0)
  console.log(amount)
}
function c() {
  let adults = arrayStudent.filter(function (param) {
    if (this.isRun) {
      return false;
    }
    if (param["age"] < 18) {
      this.isRun = true;
      return console.log('У групі є неповнолітні ');
    }
  });
}
a();
b();
c();
