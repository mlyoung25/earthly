const capitalizeFirstLetter = (s) => s.charAt(0).toUpperCase() + s.slice(1)

export const utils = {
    capitalizeFirstLetter,
    parseLocationStr: (s) => capitalizeFirstLetter(s.split("/").pop()),
    rectifyFormat: (s) => {
        if (!s) return null
        let b = s.split(/\D/);
        return b[0] + '-' + b[1] + '-' + b[2] + 'T' +
            b[3] + ':' + b[4] + ':' + b[5] + '.' +
            b[6].substr(0, 3) + '+00:00';
    },
    sortObject: (arr) => Object.entries(arr)
        .sort(([, b],[, a]) => a - b)
        .reduce((r, [k, v]) => ({ ...r, [k]: v }), {})
}

export const conversions = {
    co2: (miles) => (miles / 0.890668),

}