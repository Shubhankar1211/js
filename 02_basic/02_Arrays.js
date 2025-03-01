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

