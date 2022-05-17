const fs = require('fs');

const currentTimeStamp = " Current time stamp is" + new Date();
const today = new Date();
const dateTime = "Date" + today.getDate() + "/" + (today.getMonth()+1) + "/" + today.getFullYear() + "-" + today.getHours() + ":" + today.getMinutes();

fs.writeFile(`./currentDay/date-${today.getDate()}-time ${today.getHours() + "-" + today.getMinutes()}.html`, currentTimeStamp, (err) => {
    console.log("completed writing");
})

// Retrieve all files from particular folders and

fs.readdir("./currentDay", (err, files) => {
    if(err){
        console.log(err);
    }
    console.log(files);
})
