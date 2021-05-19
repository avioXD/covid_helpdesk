const excelToJson = require('convert-excel-to-json');

const result = excelToJson({sourceFile: './hospitals.xls'});

console.log(result.Sheet1);