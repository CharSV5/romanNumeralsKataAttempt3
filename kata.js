const numeralChanger = (value, numeral) => {
    return {value: value, numeral: numeral};
}

const numerals = [
    numeralChanger(10, 'X')
]

const kata = {
    translate: (num) => {
        let result = ""
        numerals.forEach(function(item) {
            while (num >= item.value) {
                result += item.numeral;
                num -= item.value;
            }
        })
        
         if (num >= 9) {
            result += 'IX'
            num -= 9
         } 
        if (num >= 5) {
           result += 'V'
           num -= 5
        } 
        if (num >= 4) {
            result += 'IV'
            num -= 4
         } 
        return result += 'I'.repeat(num)
        
    }
}

module.exports = kata;