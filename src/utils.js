const capitalizeFirstLetter = (s) =>  s.charAt(0).toUpperCase() + s.slice(1)
let miles = 100; //import from user

export const utils = {
    capitalizeFirstLetter,
    parseLocationStr: (s) => capitalizeFirstLetter(s.split("/").pop())
} 

export const co2 = (miles / 0.890668);