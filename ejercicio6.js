// 1.1 Bucle for de 0 a 9 mostrando i en consola
for (let i = 0; i < 10; i++) {
  console.log(i);
}

// 1.2 Bucle for mostrando solo números pares (resto de i/2 == 0)
for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// 1.3 Bucle para contar ovejas con 10 iteraciones
for (let i = 1; i <= 10; i++) {
  if (i < 10) {
    console.log('Intentando dormir 🐑');
  } else {
    console.log('¡Dormido!');
  }
}
