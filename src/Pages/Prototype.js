// javascipt is a prototype based language,
// Whenever  we create a function using javascipt ==> javascipt Engine adds  a prototype property to that function

// Prototype Property basically is an object (also known as prototype object) 



// We can attach methods and properties in prototype object 

// where we can attach methods and properties in a prototype object, 
//which enables all the other objects to inherit these methods and properties



function Person(name, job, yearOfBirth){   
    this.name= name;
    this.job= job;
    this.yearOfBirth= yearOfBirth;
}
// this will show Person's prototype property.
console.log(Person.prototype);