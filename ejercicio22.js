const fruits = ["Strawberry", "Banana", "Orange", "Apple"];

const foodSchedule = [
  { name: "Heura", isVegan: true },
  { name: "Salmon", isVegan: false },
  { name: "Tofu", isVegan: true },
  { name: "Burger", isVegan: false },
  { name: "Rice", isVegan: true },
  { name: "Pasta", isVegan: true },
];

let fruitIndex = 0; // para no repetir frutas

for (let i = 0; i < foodSchedule.length; i++) {
  if (!foodSchedule[i].isVegan) {
    if (fruitIndex < fruits.length) {
      foodSchedule[i].name = fruits[fruitIndex];
      foodSchedule[i].isVegan = true;
      fruitIndex++;
    } else {
      // Si no quedan frutas, se puede decidir qué hacer, 
      // aquí dejamos el elemento original sin cambios
    }
  }
}

console.log(foodSchedule);
