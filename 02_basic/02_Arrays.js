const school_friends= ["ayush","udit","prateek"];
const college_friends= ["soumya","utkarsh","aparmit"];
/*
school_friends.push(college_friends);
console.log(school_friends); // it will not merge but make array of array [ 'ayush', 'udit', 'prateek', [ 'soumya', 'utkarsh', 'aparmit' ] ]
console.log(school_friends[3]);

school_friends.concat(college_friends);
console.log(school_friends); // it will return school_friends array not concat for orginal answer we should use another array ans save it in that array

const allFriends= school_friends.concat(college_friends);
console.log(allFriends); // it return [ 'ayush', 'udit', 'prateek', 'soumya', 'utkarsh', 'aparmit' ]
*/

const allFriends = [...school_friends, ...college_friends];
console.log(allFriends);// same result as above

const array0 = [1,2,3,[4,5,6,],7,[5,7,[4,5]]];
const array1 = array0.flat(Infinity);
console.log(array1);

console.log(Array.isArray("Shubhankar chauhan"));
console.log(Array.from("Shubhankar chauhan"));// from create the array
console.log(Array.from({name:"shubhankar"})); //it retrun empty array [] we do not determine what is it // interview problem

let score1 = 100;
let score2 = 200;
let score3 = 200;

console.log(Array.of(score1 ,score2, score3)); // it also make array
