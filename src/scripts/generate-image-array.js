const fs = require("fs");

fs.readdir("../images/full-size",(err,files)=>{

  let content = `export const imageArr = [`;
  for(let file of files){
    content += `"${file}",`;
  }
  content += "]";
  fs.writeFile("../gallery/image-array.ts",content, err =>{
    if(err) console.log(err);
  });
});


