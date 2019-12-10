console.log("Destrcuturing")

const book = {
    name : "Ego is the enemy",
    author : "Ryan Holiday",
    publisher : {
        name : "Penguin"
    }
}

const {name:publisherName="Self Published"} = book.publisher

console.log(publisherName)

//Array Destructuring

const address = []

const [,,state="UP"] = address

console.log(state)

const item = ["coffee","2.00","3.50","5.00"]

const [itemName,,mediumCoffeeCost] = item

console.log(`A medium ${itemName} costs Rs. ${mediumCoffeeCost}`)