let size = prompt("what is the size of your shoes");
let birth = prompt("enter your birth year");
function calculate(size, birth){
    let result =  (size / 2 + 5) * 50 - birth + 1766;
    return result
}
alert(calculate(size, birth))