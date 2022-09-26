import chalk from 'chalk';

export const error = chalk.bold.red;
export const info = chalk.bold.green;
// const name = 'Sindre';
// console.log(chalk.green('Hello %s'), name);

import readline from "readline"

export function readData(question){
    const inputStream = readline.createInterface({
        input:process.stdin,
        output:process.stdout
    })
    return new Promise((resolve, reject)=>{
        inputStream.question(question, val => {
            inputStream.close()
            const numVal = Number(val)
            if(isNaN(numVal)){
                reject(`Non number given ${val}`)
            }
            resolve(numVal)
        })
    })    
}
