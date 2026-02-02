// Customer Records
let customers = [
    { 
        name: "Kylo Ren", 
        email: "Kylo.ren@gmail.com",  
        purchases: ["lightsaber", "mask", "hair dye"]
    }, 
    { 
        name: "Anakin Skywalker", 
        email: "chosen.1@gmail.com", 
        purchases: ["scar cream", "droid parts", "black gloves"] 
    }, 
    { 
        name: "Yoda", 
        email: "teachyou.ican@gmail.com", 
        purchases: ["cane", "spices", "training saber"] 
    }
]; 

//Adding and Removing Data 
customers.push(
    { 
        name: "Obi-Wan Kenobi", 
        email: "kenobi.jedi@gmail.com", 
        purchases: ["beard conditioner", "sunscreen", "light robes"]
    } 
) 
customers.shift("kylo Ren")