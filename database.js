const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('exam.db');

// function promisify(d){
//     return new Promise((req,res)=>{
        
//     })
// }
// db.serialize(() => {
//     db.run("CREATE TABLE lorem (info TEXT)");

//     const stmt = db.prepare
//     ("INSERT INTO lorem VALUES (?)");
//     for (let i = 0; i < 10; i++) {
//         stmt.run("Ipsum " + i);
//     }
//     stmt.finalize();

//     db.each("SELECT rowid AS id, info FROM lorem", (err, row) => {
//         console.log(row.id + ": " + row.info);
//     });
// });
 
// db.close();

function createTables(){
    let exam_query = `
    create table exam(id integer primary key, 
    exam_date date not null, topic varchar(50) not null)
`
    let question_query = `
    create table question(id integer primary key, 
                question_text text not null,
                answer int not null,
                options text not null,
                exam_id integer not null,
                foreign key(exam_id) references exam(id))`

    db.serialize(()=>{
        
        db.run(exam_query)
        console.log("exam table created!!")
        db.run(question_query)
        console.log("question table created!!")

    })
    

}

function createExam(exam_date,topic){ 
    const [year,month,day] = exam_date.split(/[-/]/)
    try {
        db.run(`insert into exam(exam_date,topic) values(?,?)`,
        [new Date(year,month,day),topic])
    } catch (error) {
        console.log(error)
    }
}

function getExams(){
    db.all("select * from exam", (err, rows)=>{
        if(err){
            console.log(err)
        }else{
            console.log(rows)
        }
    })    

    
}

const util = require("util")
const all = util.promisify(db.all)

async function foo(){
    try {
        const rows = await all.call(db,"select * from exam")
        console.log(rows)
        
    } catch (error) {
        console.log(error)
    }
}
// createTables()
// createExam("2022/12/15","DMS")
// createExam("2022/12/18","CG")
// createExam("2022/12/19","LD")
// getExams()
foo()