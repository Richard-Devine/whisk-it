const fs = require('fs')
const path = require('path')

fs.readdir("../images",(err,files)=>{
  console.log(files)
  let content = `export const imageArr = [`
  for(let file of files){
    content += `"${file}",`
  }
  content += "]"
  fs.writeFile("../gallery/image-array.js",content, err =>{
    if(err) console.log(err)
  })
})

