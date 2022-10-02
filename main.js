const prompt = require('prompt-sync')({sigint: true});
 
let Answer = String(prompt(`Would you like to 'COMBINE" || "DECONSTRUCT" a color? `))

if(Answer === "combine"){
   let firstColor = prompt("Enter colors Red, Blue or Yellow: ").toLowerCase()
   let secondColor = prompt("Enter another color from choices: ").toLowerCase()

   if(firstColor === "red" && secondColor === "blue"){
    console.log("When you mix those colors you get Purple")
   } else if(firstColor === "red" && secondColor === "yellow"){
    console.log("When you mix those colors you get Orange") 
   } else if(firstColor === "blue" && secondColor === "yellow"){
   console.log("When you mix those colors you get Green")}
else if(firstColor === "blue" && secondColor === "red"){
    console.log("When you mix those colors you get Purple")
   } else if(firstColor === "yellow" && secondColor === "red"){
    console.log("When you mix those colors you get Orange") 
   } else if(firstColor === "yellow" && secondColor === "blue"){
   console.log("When you mix those colors you get Green")
} else{
    console.log("Error!")
}}
if(Answer === "deconstruct"){
    let color = prompt("Enter a seconday color ").toLowerCase()
        if(color === "PURPLE".toLowerCase()){
            console.log(" Your primary colors are red and blue");
        }else if( color === "ORANGE".toLocaleLowerCase()){
            console.log("Your primary colors are red and yellow");
        } else if(color === "GREEN".toLowerCase()){
            console.log("Your primary colors are blue and yellow");
        }else {
            console.log("ERROR!")
        }
}
