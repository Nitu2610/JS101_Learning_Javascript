// Q1.Write a JavaScript program to list the properties of a JavaScript object.
// Sample object:
// var student = {
//     name: "David Rayy",
//     sclass: "VI",
//     rollno: 12
// };
// Sample Output: name, sclass, rollno

var student = {
    Name: "Nitesh",
    Class: " VI",
    rollno: 186,
};
console.log(student);
for (let nitesh in student) {
    console.log(student[nitesh])

}
