/*switch (key) {
    case value:
        
        break;

    default:
        break;
}
        */


const month =3;
switch (month) {
    case 1:
        console.log("january");
        break;
    case 2:
        console.log("february");
        break;
    case 3:  // jha ke baad ka case match hota h uske baad ka sara code execute ho jata h
        console.log("march");
        break;

    default: console.log("no month matches")
        break;
}

const months ="feb";
switch (month) {
    case "jan":
        console.log("january");
        break;
    case "feb":
        console.log("february");
        break;
    case "mar":  // jha ke baad ka case match hota h uske baad ka sara code execute ho jata h
        console.log("march");
        break;

    default: console.log("no month matches")
        break;
}