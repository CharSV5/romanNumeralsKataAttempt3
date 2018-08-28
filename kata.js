const kata = {
    translate: (num) => {
        let result = ""
        if (num === 5) {
           return result += 'V'
        } else {
        return result += 'I'.repeat(num)
        }
    }
}

module.exports = kata;