const capitalizeFirstLetter = (s) =>  s.charAt(0).toUpperCase() + s.slice(1)

export const utils = {
    capitalizeFirstLetter,
    parseLocationStr: (s) => capitalizeFirstLetter(s.split("/").pop())
} 