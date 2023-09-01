
const stringSize = (text) => {
return text.length;
}
const replaceCharacterE = (text) => {
return text.replace("e", " ")
}
const concatString = (text1, text2) => {
      return text1.concat(text2);
}
const showChar5 = (text) => {
return  text.charAt(4);
}
const showChar9 = (text) => {
    return text.slice(0,9)

}
const toCapitals = (text) => {
return text.toUpperCase()
}
const toLowerCase = (text) => {
    return text.toLowerCase()

}
const removeSpaces = (text) => {
return text.trim()
}
const IsString = (text) => {
    return typeof(text) === "string"

}

const getExtension = (text) => {
return text.split(".").pop()
}
const countSpaces = (text) => {
    return text.split(' ').length -1;

}
const InverseString = (text) => {
return text.split('').reverse().join('')
}

const power = (x, y) => {
return Math.pow(x,y)
}
const absoluteValue = (num) => {
return Math.abs(num)
}
const absoluteValueArray = (array) => {
    return array.map(Math.abs)

}
const circleSurface = (radius) => {
    let  a = Math.PI;
    let b=a*radius*radius;
    let round=Math.round(b);
    return round
}
const hypothenuse = (ab, ac) => {
    return Math.hypot(ab,ac)

}
const BMI = (weight, height) => {
let BMI = weight / (height*height)
let roundeBmi = Math.round(BMI * 100)/100
return roundeBmi
}

const createLanguagesArray = () => {
let array = ['Html','CSS','Java','PHP'];
return array
}

const createNumbersArray = () => {
let number = new Array(0,1,2,3,4,5)
return number
}

const replaceElement = (languages) => {
languages[2] = "Javascript"
return languages
}

const addElement = (languages) => {
languages.push("Ruby","Python")
return languages
}

const addNumberElement = (numbers) => {
numbers.unshift(-2,-1)
return numbers
}

const removeFirst = (languages) => {
languages.shift()
return languages
}

const removeLast = (languages) => {
languages.pop()
return languages
}

const convertStrToArr = (social_arr) => {
let i = social_arr.split(",")
return i
}

const convertArrToStr = (languages) => {
let a = languages.join(",")
return a
}

const sortArr = (social_arr) => {
let i = social_arr.sort()
return i
}

const invertArr = (social_arr) => {
let i = social_arr.reverse()
return i
}