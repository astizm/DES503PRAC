//compare objects and arrays with ===/==
const a = {
    isHavingFun: true
}
const b = a
console.log(a === b) //f
console.log(a == b)//f
console.log(a !== b)//f
console.log(a) //{ isHavingFun: true}
console.log(b) //{ isHavingFun: true}
//truthy vs falsey
let green = 2;
let red = 5;
let orange = 4;

//switch statements
const person = 'Mart'
switch (person) {
    case 'Jane' :
        console.log('Hi Jane')
        break;
        case "Joe":
            console.log('Hi Joe')
            break;
            case 'Mart':
                console.log('Hi Mart')
                break;
                
}
//multi-criteria case
const foo = 12
switch (foo) {
  case 1:
  case 2:
  case 3:
  case 4:
    console.log('I like this number');
    break;
  case -1:
  case -2:
    console.log('I love this number');
    case 12:
    case 13:
    case 15:
        console.log('Numbers are numerical')
    break;
  default:
    console.log('I don\'t like this number.');
}
non-number
