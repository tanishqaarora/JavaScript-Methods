let name = {
    firstName: "Jim",
    lastName: "Lee",
    }

let = printFullName = function(city, state) {
        console.log(this.firstName + " " + this.lastName + " from " + city + "," + state);
}


// function borrowing using call method
// call() method call a function with a given 'this' value and arguments provided individually
printFullName.call(name, "Delhi", "Uttar Pradesh");

let name2 = {
    firstName: "Aman",
    lastName: "Arora",
}

printFullName.call(name2, "Chandigarh", "Punjab");