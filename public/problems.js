const isPalindrome = (value) => {
    const conLowCase = value.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    const reverseStr = conLowCase === conLowCase.split('').reverse().join('');
    return reverseStr
}

const text1 = "level"
const text2 = "hello"
const text3 = "A man, a plan, a canal: Panama"


console.log(isPalindrome(text1))   