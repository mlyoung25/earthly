const capitalizeFirstLetter = (s) =>  s.charAt(0).toUpperCase() + s.slice(1)

export const utils = {
    capitalizeFirstLetter,
    parseLocationStr: (s) => capitalizeFirstLetter(s.split("/").pop())
} 

export const conversions = {
    co2: (miles) =>  (miles / 0.890668),
    
}