// 1. Buy a big lump of clay
const buyClay = () => {
    const newPotteryObject = {}
    return newPotteryObject
}
let pottery = buyClay()
// console.log(pottery)

// 2. Use a pottery wheel to turn the clay into a bowl
const makePottery = (potteryObject) => {
    potteryObject.shape = "Bowl"
    return potteryObject
}
let potteryWithShape = makePottery(pottery)
// console.log(pottery)

// 3. Put the bowl into a kiln for a bisque firing
const bisqueFire = (potteryObject) => {
    potteryObject.readyForGlazing = true
    return potteryObject
}
let potteryWithFire = bisqueFire(pottery)
// console.log(pottery)

// 4. Apply glaze to bowl
const glazePottery = (potteryObject) => {
    if (potteryObject.readyForGlazing === true) {
        potteryObject.glazing = "Midnight Blue"
    } else {
        console.log("Make sure you bisque fire the pottery before you glaze it.")
    }
}
let potteryWithGlaze = glazePottery(pottery)
// console.log(pottery)

// 5. Put glazed bowl in kiln for final firing
const finalFiring = (potteryObject, temperature)=> {
    if (temperature > 1200) {
        potteryObject.cracked = true
    } else {
        potteryObject.cracked = false
    }
}
// const firedPottery1400 = finalFiring(pottery, 1400)
// console.log(pottery)

const firedPottery1200 = finalFiring(pottery, 1200)
console.log(pottery)


// 6. 💰💰💰 (haha, yeah right)


