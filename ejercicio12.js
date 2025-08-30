const duplicates = [
  'sushi',
  'pizza',
  'burger',
  'potatoe',
  'pasta',
  'ice-cream',
  'pizza',
  'chicken',
  'onion rings',
  'pasta',
  'soda'
];

function removeDuplicates(list) {
  // Usando Set para eliminar duplicados y spread para convertirlo en array
  return [...new Set(list)];
}

console.log(removeDuplicates(duplicates));
