//RESUELVE LOS EJERCICIOS AQUI
//1
const numbers = [4, 5, 6, 7, 8, 9, 10]
const elevados = () => numbers.map(num => num**num )
//2
const paises = ["Como soy de Italia, amo comer ","Como soy de Japón, amo comer ","Como soy de Valencia, amo comer ", "Aunque no como carne, el es sabroso"]
const foodList = ['Pizza', 'Ramen', 'Paella', 'Entrecot']
const result2 = foodList.map((food, i , array) => {
  if (i == 3){
     return paises[3].slice(0, 25) + food +" " +paises[3].slice(25)
  }
      return paises[i] + food
})
//3
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
const result3 = staff.map((member, i , array) => {
  return member.name + " es " + member.role + " y le gusta " + member.hobbies[0] + " y " +member.hobbies[1]
})
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
//4
const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result4 = numbers2.filter(num => num %2 !== 0)
//5
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
const result5 = foodList2
        .filter(comida =>  comida.isVeggie == true)
        .map((comida, i , array) => {
          if (i == 1){
            return "Que rica " + comida.name + " me voy a comer!"
         }
          return "Que rico " + comida.name + " me voy a comer!"
      })
//6
const inventory = [
  {
    name: 'Mobile phone',
    price: 199
  },
  {
    name: 'TV Samsung',
    price: 459
  },
  {
    name: 'Viaje a Cancún',
    price: 600
  },
  {
    name: 'Mascarilla',
    price: 1
  }
];
const result6 = inventory
            .filter(item =>  item.price >300)
            .map((item, i , array) => {
              return item.name
          })
//7
const numeros3 = [39, 2, 4, 25, 62];
const result7 = numeros3.reduce((a, b) => a * b);
//8
const sentenceElements = [
  'Me',
  'llamo',
  /* Tu nombre aqui! */,
  'y',
  'quiero',
  'sentir',
  'la',
  'fuerza',
  'con',
  'javascript'
];
sentenceElements.splice(2, 1, "Pepito");
const result8 = sentenceElements.reduce((acumulador, elemento)=> {
  return acumulador + " "+ elemento
  });
//9
const books = [
  {
    name: ' JS for dummies',
    author: 'Emily A. Vander Veer',
    price: 20,
    category: 'code'
  },
  {
    name: 'Don Quijote de la Mancha',
    author: 'Cervantes',
    price: 14,
    category: 'novel'
  },
  {
    name: 'Juego de tronos',
    author: 'George R. Martin',
    price: 32,
    category: 'Fantasy'
  },
  {
    name: 'javascript the good parts',
    author: 'Douglas Crockford',
    price: 40,
    category: 'code'
  }
];
const result9 = books
    .filter(libro =>  libro.category =="code")
    .map(libro => libro.price)
    .reduce((a, b) => a + b)