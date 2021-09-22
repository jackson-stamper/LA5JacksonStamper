/* 
Fourth program - create a program that uses required string functions to alter strings. 
form named 'strings'.
all string functions work correctly. 
the user number displayed has 10 added to it.
All code runs correctly with either no or trivial errors.
Project is in students' Remote Repository (GitHub), with branch for each form, and url to it works. 
*/
//variables up top
let quoteString = "Failure is simply the opportunity to begin again this time more intelligently."
let authorString = "- Henry Ford"
let completeString = quoteString.concat(authorString)
let found = completeString.includes("Henry")

quoteString = quoteString.toUpperCase()
console.log(`Upper case string is ${quoteString}`)

console.log(`Concatenated string is: ${completeString}`)

if (found == true) {
  console.log(`Henry was in completeString`)
} else {
  console.log(`Henry was NOT in completeString`)
}