// let name1 = prompt("Ismingizni kiriting!");
// while (!isNaN(name1) || name1 === "") {
//     alert("Iltimos, harflarda yozing!");
//     name1 = prompt("Ismingizni kiriting!");
// }
// let year = +prompt("Hozirgi yilni kiriting!")
// while (isNaN(year) || year == "") {
//     alert("Iltimos,sonlarda yozing!")
//     year = prompt("Hozirgi yilni kiriting!")
// }
// let birthday = +prompt("Tug'ilgan yilingizni kiriting!")
// while (isNaN(birthday)) {
//     alert("Iltimos,sonlarda yozing!")
//     birthday = +prompt("Tug'ilgan yilingizni kiriting!")
// }
//   let age = year - birthday
//     alert(`${name1}, yoshingiz ${age}`)
//     console.log(`${name1}, yoshingiz ${age}`);

// 2-misol
function myRandom(min = 0, max=0 ) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}
let user = +prompt("Nechta misol yechishingiz kerak")
let maxNumber = +prompt("max sonni kiriting!")
let minNumber = +prompt("min sonni kiriting")   

for ( i = 0; i < user ; i++) {
   let symble = myRandom(1,4)
    let raqam1= myRandom( minNumber , maxNumber )
    let raqam2= myRandom( minNumber , maxNumber)
    console.log(raqam1 ,raqam2);
    if (symble == 1) {
        let javobi = prompt(`${raqam1} -${raqam2} = ? `)
         javobi == raqam1 - raqam2 ? alert ("Sizning javobingiz to'g'ri"): alert("Sizning javobingiz noto'g'ri   to'g'ri javob esa: "  + (raqam1 - raqam2))
    } 
    else if (symble ==2) {
        let javobi = prompt(`${raqam1} + ${raqam2} = ? `)
         javobi == raqam1 + raqam2 ? alert ("Sizning javobingiz to'g'ri"): alert("Sizning javobingiz noto'g'ri   to'g'ri javob esa: "  + ( raqam1 + raqam2))
        
        } 
        else if (symble ==3) { 
        let javobi = prompt(`${raqam1} * ${raqam2} = ? `)
         javobi == raqam1 * raqam2 ? alert ("Sizning javobingiz to'g'ri"): alert("Sizning javobingiz noto'g'ri   to'g'ri javob esa: "  + ( raqam1 * raqam2))
    } 
    else if (symble ==4) {
     let javobi = prompt(`${raqam1} / ${raqam2} = ? `)
     javobi == raqam1 / raqam2 ? alert ("Sizning javobingiz to'g'ri"): alert("Sizning javobingiz noto'g'ri   to'g'ri javob esa: "  + ( raqam1 / raqam2))
    }
}







