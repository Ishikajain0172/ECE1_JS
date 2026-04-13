//FOR IN LOOP
for (key in object) {
    //code block to be executed
}
const person = { fname: "John", lname: "Doe", age: 25 };
for (let x in person) {
    console.log("person details: " + x + ": " + person[x]);
}