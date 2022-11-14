const fs = require('fs');

const writeFile = (infoCon) => {
    fs.writeFile('./dist/index.html', infoCon, err => {
        if (err) {
            console.log(err);
        } else {
            console.log('Success, Enjoy your Team Profiles!');
        }
    })
};

module.exports = writeFile;