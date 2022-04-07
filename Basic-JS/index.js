// Developer Test 

// Basic JavaScript (bonus for efficiency):

// Below are varriables to be used for the below questions
// Global Varriables

var departmentInfo = require('./json/departmentInfo.json');
var objectArray = require('./json/objectArray.json');
var people = require('./json/people.json');

var objectF = {
  value: 'f',
  Id: 5
};


// end Global Varriables 

// 1. Write a function that adds two given numbers
function givennumber (x, y) {
  const aux = x+','+y;
  return (aux);
 }
console.log(givennumber(10, 20));


// 2. Adding 'objectF' to an 'objectArray'
objectArray.push(objectF); console.log(objectArray);


// 3. Write a function that returns Id 3 from 'objectArray'
  function returnid3 () { 
    var data = [
          { id: 1, name: "a" },
          { id: 2, name: "b" },
          { id: 3, name: "c" },
          { id: 4, name: "d" },
          { id: 5, name: "e" },
          { id: 6, name: "f" },
      ];
      let res = data.filter((item) => {
      return item.id == 3;
    });
    
    return(res)
  };
    
    console.log(returnid3());


// 4. Write a function that merges 'people' with 'departmentInfo' based on department
function merge(a, b, prop) {
    var reduced = a.filter(function(aitem) {
      return !b.find(function(bitem) {
        return aitem[prop] === bitem[prop];
      });
    });
    return reduced.concat(b);
}
console.log(merge(departmentInfo, people, "department"));

