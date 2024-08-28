
import fs from 'fs'
const pathFile= "./src/files/people.json"

export const archivo=(pathFile)=>{
if (!fs.existsSync(pathFile)) fs.writeFileSync(pathFile,'[]','utf-8')
const adi={nombre:'pedro',telefono:1234455, email:'jdgf@gmail.com'}
const people={nombre:"juan Pablo",apellido:'tuttolomndo',...adi,edad:15,email:'123@123.com'}

let a =[]
a.push(people)
 const leido= JSON.parse(fs.readFileSync(pathFile,"utf-8"))

 if(leido[0].nombre!==a[0].nombre) fs.writeFileSync(pathFile,JSON.stringify(a),"utf-8")
const file=JSON.parse(fs.readFileSync(pathFile,"utf-8"))

console.log(file);
 
}