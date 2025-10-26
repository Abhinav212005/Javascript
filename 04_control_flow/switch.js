// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month = "march"
// shift+alt+down arrow for copy and pasting it downward
switch (month) {
    case "jan":
        console.log("January");
        break;
    case "feb":
        console.log("feb");
        break;
    case "march":
        console.log("march");
        break; // if there is no break then all statements after this will be printed
    case "april":
        console.log("april");
        break;

    default:
        console.log("default case match");
        break;
}