const kata = {
    translate: (num) => {
        let result = ""
        while (num >= 10) {
            result += 'X'
            num -= 10
         } 
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