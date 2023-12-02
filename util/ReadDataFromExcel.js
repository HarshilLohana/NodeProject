const xlsx = require('xlsx')

const readDataFromExcel = (filePath) => {
    const file = xlsx.readFile(filePath);
    var data = [];
    const sheets = file.SheetNames;
    for(i=0 ; i<sheets.length;i++){
        
    }
}