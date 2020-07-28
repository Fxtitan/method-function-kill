/******************
 * YOUR CODE HERE *
 ******************/
const newPerson = (name = 'Anonymous', individual = 'Person', justAnotherNumber, marriage = false) => {
  const myObj = {                                 
    firstName: name,
    lastName: individual,
    age: justAnotherNumber,
    married: marriage,
    //So these. can be used here along with the objects name... why?
    goingOn: () => {
      return myObj.age + 1
      
    },
    
    ageUp: () => {
      myObj.age ++;
    },

    getFullName: () => {
      //why myObj and not this.??
      return myObj.firstName + ' ' + myObj.lastName
    },

    marry: (otherObj) => {
      //the param is the given person.
      myObj.married = true;
      otherObj.married = true;
      otherObj.spouseName = myObj.getFullName();
      myObj.spouseName = otherObj.getFullName();
    },

    divorce: (otherObj) => {
      myObj.married = false;
      otherObj.married = false;
      delete myObj.spouseName;
      delete otherObj.spouseName;

    }

  }
  return myObj
}





/*********************************
 * OUR CODE BELOW; DO NOT TOUCH! *
 *********************************/

if (typeof newPerson === 'undefined') {
  newPerson = undefined;
}


module.exports = newPerson;
