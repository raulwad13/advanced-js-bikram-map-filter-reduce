//RESUELVE LOS EJERCICIOS AQUI
// 1.- Dado el array numbers cuyo valor sea [4, 5, 6, 7, 8, 9, 10], crea una función elevados que devuelva un array con el cuadrado de cada uno de los elementos.

const numbers = [4, 5, 6, 7, 8, 9, 10]
const elevados = () => numbers.map(num => num**num )


//2- Dado el array foodList con valor ['Pizza', 'Ramen', 'Paella', 'Entrecot'], generar un segundo array que consiga generar de salida el resultado esperado.

const foodList = ['Pizza', 'Ramen', 'Paella', 'Entrecot']
const paises = ["Como soy de Italia, amo comer","Como soy de Japón, amo comer","'Como soy de Valencia, amo comer", "Aunque no como carne, el","es sabroso"] 
const result2 = foodList.map((plato,i,arr)=>   {
    
})


//3- Dado el array staff, crear un segundo array que forme frases como en el ejemplo accediendo a las propiedades del objeto proporcionado:
   
const staff = [
  {
    name: 'Pepe',
    role: 'The Boss',
    hobbies: ['leer', 'ver pelis']
  },
  {
    name: 'Ana',
    role: 'becaria',
    hobbies: ['nadar', 'bailar']
  },
  {
    name: 'Luis',
    role: 'programador',
    hobbies: ['dormir', 'comprar']
  },
  {
    name: 'Carlos',
    role: 'secretario',
    hobbies: ['futbol', 'queso']
  }
];



// Resultado esperado
/*
  [
    'Pepe es The Boss y le gusta leer y ver pelis',
    'Ana es becaria y le gusta nadar y bailar',
    'Luis es programador y le gusta dormir y comprar',
    'Ana es becaria y le gusta nadar y bailar',
    'Carlos es secretario y le gusta futbol y queso'
  ]
*/



//4- Crea un segundo array result4 a partir del array numbers2 que devuelva solo los impares
const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result4 = numbers2.filter(num => num %2 !== 0)

//5- Dado el array foodList2, genera un segundo array result5 que filtre los platos veganos y saque una sentencia como la del ejemplo
const foodList2 =[
    {
      name: 'Tempeh',
      isVeggie: true
    },
    {
      name: 'Cheesbacon burguer',
      isVeggie: false
    },
    {
      name: 'Tofu burguer',
      isVeggie: true
    },
    {
      name: 'Entrecot',
      isVeggie: false
    }];

const result5 = foodList2.filter(plato => plato.isVeggie == true)

// 6- Dado el array inventory, devolver un array con los nombres de los elementos que valgan más de 300 euros.


// 7- Concatena todos los elementos del array con reduce para que devuelva una sola frase
const numeros3 = [39, 2, 4, 25, 62];
const result7 = numeros3.reduce((a, b) => a * b);

// 8.- Obtener el monto total de los elementos que pertenecen a catergory "code" en el siguiente array.

