const numerals = [
    {value: 10, numerals: 'X'}
]

const kata = {
    translate: (num) => {
        let result = ""
        numerals.forEach(function(item) {
            while (num >= item.value) {
                result += item.numerals;
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