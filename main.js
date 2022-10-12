// Your code here.

//getFirstName

let person1 = {firstName: 'Colin', lastName: 'Jaffe'};
let person2 = {firstName: 'Petra', lastName: 'Solano'};

function getFirstName(person){

 return person.firstName;
}

console.log(getFirstName(person1));


//getLastName

function getLastName(person){

  return person.lastName;
 }
 
 console.log(getLastName(person1));


//get fullname

function getFullName(person){

  return `${person.firstName} ${person.lastName}`;

}

console.log(getFullName(person1))

// Set firstname

function setFirstName(person1,newFirstName){

person1.firstName = newFirstName;

}

console.log(setFirstName(person1, "Anthony"))

//set age

function setAge (person, age){

  person['age'] = age;

}

console.log(setAge(person1, 40));


//giveBirthday

function giveBirthday(person1){

  
  if(person1.age === undefined)
  {
    person1.age = 1;
  } else {
    person1.age += 1;
  }

 
}

console.log(giveBirthday(person1))


//marry

function marry (person1, person2){

  person1['married'] = true;
  person2['married'] = true;
  person1['spouseName'] = `${person2.firstName} ${person2.lastName}`;
  person2['spouseName'] = `${person1.firstName} ${person1.lastName}`;

}

console.log(marry(person1,person2))

//divorce 


function divorce (person1, person2){

    person1['married'] = false;
    person2['married'] = false;
    delete person1.spouseName;
    delete person2.spouseName;
  
  }
  
  console.log(divorce(person1,person2))




// Our code here. Don't touch!
if (typeof getFirstName === 'undefined') {
  getFirstName = undefined
}

if (typeof getLastName === 'undefined') {
  getLastName = undefined
}

if (typeof getFullName === 'undefined') {
  getFullName = undefined
}

if (typeof setFirstName === 'undefined') {
  setFirstName = undefined
}

if (typeof setAge === 'undefined') {
  setAge = undefined
}

if (typeof giveBirthday === 'undefined') {
  giveBirthday = undefined
}

if (typeof marry === 'undefined') {
  marry = undefined
}

if (typeof divorce === 'undefined') {
  divorce = undefined
}


module.exports = {
  getFirstName,
  getLastName,
  getFullName,
  setFirstName,
  setAge,
  giveBirthday,
  marry,
  divorce,
}
