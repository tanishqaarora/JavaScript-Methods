// bind() method looks same as call() method
// only difference is in call() method we are calling the method directly and using it
// while in bind() method, we will bind the method with the object and return a copy of a function
// then we can invoke that function later on

let name = {
    firstName: "Jim",
    lastName: "Lee",
    }

let = printFullName = function(city, state) {
        console.log(this.firstName + " " + this.lastName + " from " + city + "," + state);
}

let getFullName = printFullName.bind(name, "Delhi", "UP");
console.log(getFullName);
// involing the function
getFullName();                