//Switch Statement dengan Break
let day = 3;
let dayName;

switch (day) {
  case 1:
    dayName = "Sunday";
    break;
  case 2:
    dayName = "Monday";
    break;
  case 3:
    dayName = "Tuesday";
    break;
  // ... (cases for other days)
  default:
    dayName = "Invalid day";
}

console.log(dayName); // Output: Tuesday


//Switch Statement tanpa Break
let fruit = "Apple";
let fruitType;

switch (fruit) {
  case "Apple":
    fruitType = "Fruit";
  case "Carrot":
    fruitType = "Vegetable";
  default:
    fruitType = "Unknown";
}

console.log(fruitType); // Output: Unknown


//Switch Statement Lebih Kompleks
let role = "Admin";
let message;

switch (role) {
  case "Admin":
    message = "Welcome, Admin!";
    break;
  case "User":
    message = "Hello, User!";
    break;
  case "Guest":
    message = "Greetings, Guest!";
    break;
  default:
    message = "Unknown role";
}

console.log(message); // Output: Welcome, Admin!


//Blok Kode Umum (Common Code Block)
let color = "Blue";
let info;

switch (color) {
  case "Red":
  case "Blue":
  case "Green":
    info = "Primary color";
    break;
  case "Yellow":
  case "Purple":
    info = "Secondary color";
    break;
  default:
    info = "Unknown color";
}

console.log(info); // Output: Primary color


//Strict Comparison dalam Switch
let number = 42;
let result;

switch (true) {
  case number === 42:
    result = "The Answer";
    break;
  case number > 0:
    result = "Positive Number";
    break;
  default:
    result = "Unknown";
}

console.log(result); // Output: The Answer
