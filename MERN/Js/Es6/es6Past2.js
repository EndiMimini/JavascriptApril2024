const person = { 
    firstName: 'Bob', 
    lastName: 'Marley', 
    email: 'bob@marley.com', 
    password: 'sekureP@ssw0rd9', 
    username: 'barley', 
    createdAt: 1543945177623
};
const animals = ['horse', 'dog', 'lion', 'cat', 'bird'];

// var firstName = person.firstName 
// console.log(firstName)

const { firstName, lastName, username, password } = person

const [ ...thirdAnimal ] = animals
const dog = animals.filter (animal => animal )
// console.log(dog)
// console.log(thirdAnimal)

// const values = [1, 2, 3, 4, 5];
// const evens = values.filter( val => val % 2 === 0 );

// console.log(evens)



// function addTwoNumbers(a,b){
//     return a+b
// }

// var sum = addTwoNumbers(3,4)
// console.log(sum)



const sum = (a,b) => {
    console.log('You are adding two numbers')
    console.log(a+b)
    return a+b
}

let result = sum(3,4)


let canAfford = (itemPrice, accountBalance) => {

    itemPrice>accountBalance? `Cannot afford. You are  ${itemPrice - accountBalance} short!`:
    'Item bought!'
}


let today = '4' 
today === 4 ? console.log('Equal'):console.log('Not equal')