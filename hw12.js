// завдання 1

let user = {
    name: "Maria",
    age: 21,
    hobby: "singing",
    premium: true
};
user.mood = "happy";
user.hobby = "skydiving";
user.premium = false;

for (let key of Object.keys(user)) {
    console.log(`${key}: ${user[key]}`);
}



// завдання 2
function countProps(obj) {
    return Object.keys(obj).length;
}
const user = {
    name: "Dina",
    age: 20,
    hobby: "swimming",
    brother: "denis"
};

console.log(countProps(user));

//  завдання 4

function countTotalSalary(employees) {
    let totalSalary = 0;
    for (let salary of Object.values(employees)) {
        totalSalary += salary;
    }
    return totalSalary;
}
const salaries = {
    Olena: 50000,
    Oleg: 20000,
    Vlad: 150000
};
console.log(countTotalSalary(salaries));

// завдання 6

function calculateTotalPrice(allProducts, productName) {
    let totalPrice = 0;
    for (let product of allProducts) {
        if (product.name === productName) {
            totalPrice += product.price * product.quantity;
        }
    } return totalPrice;
}
const products = [
    { name: "Apple", price: 15, quantity: 1000 },
    { name: "Lemon", price: 25, quantity: 500 },
    { name: "Tomato", price: 70, quantity: 20000 },
    { name: "Kiwi", price: 60, quantity: 300 }
];

console.log(calculateTotalPrice(products, 'Apple')); 
 console.log(calculateTotalPrice(products, 'Banana'));
 console.log(calculateTotalPrice(products, 'Cherry'));
