// For Loop
for (let i = 0; i < 5; i++) {
    console.log(i);
  }
  
// While Loop
let j = 0;
while (j < 5) {
  console.log(j);
  j++;
}

// Do While Loop
let i = 0;  
do {
  console.log(i);
  i++;
} while (i < 5);

// Continue Statement
for (let i = 0; i < 5; i++) {
    if (i === 2) {
      continue;
    }
    console.log(i);
  }
  
// For ...Of Loop
const array = [1, 2, 3, 4, 5];
for (const element of array) {
  console.log(element);
}

// For ...In Loop
const object = { a: 1, b: 2, c: 3 };
for (const key in object) {
  console.log(key, object[key]);
}
