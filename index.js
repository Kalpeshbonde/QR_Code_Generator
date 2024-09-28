import inquirer from 'inquirer';
import qr from 'qr-image';
import fs, { writeFile } from 'fs';

inquirer
    .prompt([
        {
            message: "Type The URL: ",
            name: "URL",
        }
    ])
    .then((answers) => {
        const url = answers.URL;
        var qr_svg = qr.image(url);
        qr_svg.pipe(fs.createWriteStream('qr_img.png'));
    
        fs.writeFile('URL.txt', url, (err) => {
            if (err) {
                console.log("Error Occurred While Writing The File");
            } else {
                console.log("File Written Successfully");
            }
        });
    })
    .catch(error => {
        if (error.isTtyError) {
            console.log("Prompt Couldn't Be Rendered In The Current Environment");
        } else {
            console.log("Something Went Wrong");
        }
    });
    

