
let fs = require('fs')
let path=require('path');

let filePath=path.resolve(__dirname+'/jam');

let string50 = ''


// console.log(1111)
// console.log(filePath)
//readdir方法读取文件名
//readFile方法读取文件内容
//writeFile改写文件内容
fs.readdir(filePath, 'utf8', function (err,data) {
    // console.log(err)
    // console.log(data)
    data.forEach(function(item, index) {
        // console.log(item.indexOf('50-'))
        // console.log(index)

        var fileNameReg = /([0-9\-])*?-(.*)?/;
        var filename_start = ''
        var filename_end = ''

        if(String(item).match(fileNameReg)){
            filename_start = String(item).match(fileNameReg)[1];
            filename_end = String(item).match(fileNameReg)[2];
        }

        console.log(filename)

        // return
        if(filename !== null)
        {
            if(item.indexOf('50-') !== -1){
                fs.readFile('./jam/'+ item,'utf8',function(err,files){
                    console.log(77777)
                    // console.log(files)
                    //正则取出
                    let file = String(files)
                    let matchReg = /(.*?Material, name=con[.\n\t\.\*\s\S]*?INTERACTION PROPERTIES)/;
                    console.log(file.match(matchReg)[0]);
                    string50 = file.match(matchReg)[0];

                    // replaceText = file.match(matchReg)[0];
                    //
                    // var result = files.replace(/http/g,'https');
                    // console.log(result)
                    //
                    // fs.writeFile('./jam/'+item, result, 'utf8', function (err) {
                    //     if (err) return console.log(err);
                    // });

                    fs.readFile('./jam/'+ '30-0.inp','utf8',function(err,files){
                        console.log(666)

                    })

                })

            }else{

            }

                fs.readFile('./jam/'+ '30-'+ filename,'utf8',function(err,files){
                    console.log(77777)
                    // console.log(files)
                    //正则取出
                    let file = String(files)
                    let matchReg = /(.*?Material, name=con[.\n\t\.\*\s\S]*?INTERACTION PROPERTIES)/;
                    console.log(file.match(matchReg)[0]);
                    string50 = file.match(matchReg)[0];

                    // replaceText = file.match(matchReg)[0];
                    //
                    // var result = files.replace(/http/g,'https');
                    // console.log(result)
                    //
                    // fs.writeFile('./jam/'+item, result, 'utf8', function (err) {
                    //     if (err) return console.log(err);
                    // });

                    fs.readFile('./jam/'+ '30-0.inp','utf8',function(err,files){
                        console.log(666)

                    })

                })

        }
        //
        // console.log(filename)
        // return;
        // let replaceText = "";


    });

});
