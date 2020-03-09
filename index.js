console.log(null == 0);//false 
console.log(null === 0);//false
console.log(null > 0);//false
console.log(null < 0 );//False
console.log(null >= 0);//True


/*line 1 - 5: Why null behaves differently .?
line 1 : null is not converted to Number 0, treated as null itself
line 2 : False, because both are different Data Types
line 3 : null is converted to 0, 0 cannot be greater than 0. So false
line 4 : null is converted to 0, 0 cannot be less than 0. So comparison is false
line 5 : null is converted to 0, 0 can be greater than or equal to 0. So true 
*/

console.log(undefined == null);//True (und is = to null)
console.log(undefined === null);//False (different data types)

console.log(undefined == 0);//f
console.log(undefined === 0);//f
console.log(undefined > 0);//f
console.log(undefined >= 0);//flase

console.log(null + 1);// 1 (null = 0 + 1)
console.log(undefined > 0);//False
console.log(undefined + 1);//NaN (Not a Number) result when undefined is compared to a number or number compared/operated to a non-number
