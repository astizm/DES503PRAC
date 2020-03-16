//break omission from switch statements
const yo = 0
let output = "";
switch (yo) {
    case 0:
        output += 'Yo,';
        case 1:
            output += 'Mama'
            output += 'So'
            case 2:
                output += 'Old'
                console.log(output); //Yo,MamaSoOld
                break;
                case 3:
                    output += 'You'
                    case 4:
                        output += 'Know'
                        break;
                        case 5:
                            output += '!';
                            console.log(output);
                            break;
                            default:
                                console.log('Pick a number 5 or less!');


}
