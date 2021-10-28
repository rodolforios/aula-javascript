const num1 = [1,2,3];
const num2 = [4,5,6];
const num3 = [7,8,9];

//usando concat()

console.log(num1.concat(num2,num3))

//usando o spread operator

const num4 = [...num1,'Rodolfo',...num2,...[10,11,12],...num3]
console.log(num4)