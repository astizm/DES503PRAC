/*JS Block scope variable within switch statements, 
include braces between case blocks to allow more than one let or const within the same switch block
*/
const colour = 'Red'
switch (colour) {
    case 'Green': {
    let shade = 'Green';
    break;
}
case 'Yellow': {
    let shade = 'Yellow'
    break;
}
case 'Silver': {
    let shade = 'Silver'
    break;
}
case 'Indigo': {
    let shade = 'Indigo'
    break;
}
default: {
    console.log(colour); //Red
    break;
}
}
