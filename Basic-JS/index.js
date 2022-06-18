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
function addNumbers(a, b) {
    return a + b;
}

// 2. Adding 'objectF' to an 'objectArray'
objectArray.push(objectF);

// 3. Write a function that returns Id 3 from 'objectArray'
function returnTargetElement() {
    return objectArray.find((item) => item.Id === 3);
}

// 4. Write a function that merges 'people' with 'departmentInfo' based on department
function mergePeopleAndDepartmentInfo() {
    people = people.map((person) => {
        departmentInfo.forEach((department) => {
            if (person.department === department.department) {
                person = {
                    ...person,
                    ...department,
                };
                return;
            }
        });
        return person;
    });
}
