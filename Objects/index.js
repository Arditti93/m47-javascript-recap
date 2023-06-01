

const cafe = {
    name: "whitesheep",
    seatingCapacity: 100,
    hasSpecialOffers: true,
    drinks: [
        "Cappuccino",
        "Latte",
        "Filter Coffee",
        "Tea",
        "Hot chocolate"
    ],
    breakfastOffer: "Free crossant with a coffee",
    lunchOffer: "free drink with a sandwich",
    noOffer: "Sorry no offer"
}

cafe.biscuits = ["waffle", "custard creams", "hobnob"]
console.log(cafe)
cafe.biscuits = ['chocolate biscuit']
cafe.biscuits.push("chocolate biscuit")
console.log(cafe)


console.log(cafe.name)
console.log(cafe["name"])
console.log(cafe["drinks"][2])
console.log(cafe.breakfastOffer)

let offer = "none"
let time = 1000 // 12:00pm
// if the time is less than 1100 - log the breakfast offer
// else if  the time is greater than 1200 but less than 1500 log the lunch offer
// else log no offer

// if else statment
if (time < 1200) {
    offer = cafe.breakfastOffer
} else if (time < 1500) {
    offer = cafe.lunchOffer
} else {
    offer = cafe.noOffer
}
console.log(offer)

// array of objects
const user = [
    {
        username : "Alex",
        email : "alex@email.com",
        password : "password"
    },
    {
        username : "Steve",
        email : "steve@email.com",
        password : "password"
    },
    {
        username : "Alice",
        email : "alice@email.com",
        password : "password"
    },
]

console.log(user[1].username)
// in the terminal log all the usernames of each user
// for loop

for(let i = 0; i < user.length; i++) {
    console.log(user[i].username)
}

user.map(item => {
    console.log(item.username)
})





