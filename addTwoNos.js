// const readline = require("readline").createInterface({
//     input:process.stdin,
//     output:process.stdout
// })

// readline.question("Enter num1?", a =>{
//     // console.log(`hello ${name}`)
//     readline.question("Enter number 2?",b=>{
//         console.log(parseInt(a)+parseInt(b))
//         readline.close()
//     })
// })
import {readData,error,info} from "utils"
async function addInLoop(){
    let total = 0
    for(let i=0;i<5;i++){
        try {
            total += await readData(`Enter num ${i+1}\n`)            
        } catch (e) {
            console.log(error(e))
        }
    }
    // console.log(total)
    console.log(info(total))
}

addInLoop()
// console.log("Outside")
