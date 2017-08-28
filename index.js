module.exports.tfsjson2csv = function (data, fields, file) {
    var json2csv = require('json2csv');
    var csv = json2csv({ data: data, fields: fields });
    var Stream = require('stream');
    var stream = new Stream();
    var fs = require('fs');

    stream.pipe = function(dest) {
      dest.write(csv);
      return dest;
    };
    
    var file = fs.createWriteStream(file);
    stream.pipe(file); // in this case the terminal, change to ya-csv

}
