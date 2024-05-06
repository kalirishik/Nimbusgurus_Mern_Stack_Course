// const fs=require('fs');
// fs.writeFile("output2.txt","Hello Guys",(error,data)=>{
//     if(error) throw error;
//     else
//         console.log(data);
// });
// fs.readFile("output2.txt","utf8",(error,data)=>{
//     if(error) throw error;
//     else
//         console.log(data);
// });

//---------------------------------------------------------------------------///
// const  generateName=require('sillyname'); // random name generator packages
// var name=generateName();
// console.log("Newly generated name is  "+name);
//--------------------------------------------------------------------------///
// const superheroes = require('superheroes');
 
// superheroes.all;
// //=> ['3-D Man', 'A-Bomb', …]
 
//  let name=superheroes.random();
// //=> 'Spider-Ham'
// console.log(name);
import inquirer from 'inquirer';
import fs from 'fs';
import qr from 'qr-image';
inquirer
  .prompt([{
      message: "please type in the webpage URL",
      name: "URL"
  }
    /* Pass your questions in here */
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    const url =answers.URL;
    var qr_svg=qr.image(url);
    qr_svg.pipe(fs.createWriteStream("qr_image.png"));


fs.writeFile("Qr_Code.txt",url,(error,data)=>{
    if(error) throw error;
        console.log("File Saved");
});
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });

