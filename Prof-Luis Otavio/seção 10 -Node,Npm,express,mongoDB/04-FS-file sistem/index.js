//Recursão mutua/dependência circular

//file sistem tem dois tipos de função
//Sync e normal ou seja, assincrona e sincrona
const fs = require('fs').promises;

//O path módulo fornece utilitários para trabalhar
//com caminhos de arquivo e diretório.
const path = require('path');



/*
fs.readdir(path.resolve(__dirname))
.then(files => console.log(files))
.catch(e => console.log(e))

*/
async function readdir(rootDir) {
    rootDir = rootDir || path.resolve(__dirname);
    const files = await fs.readdir(rootDir);
    walk(files, rootDir);
}
async function walk(files,rootDir) {
    for (let file of files) {
        const fileFullPath = path.resolve(rootDir, file);
        const stats = await fs.stat(fileFullPath);


        if(/\.git/g.test(fileFullPath))continue;
        if(/node_modules/g.test(fileFullPath)) continue;
        

        if(stats.isDirectory()){
            readdir(fileFullPath);
            continue;

        } 

        if(!/\.css$/g.test(fileFullPath)) continue;

        

        console.log(fileFullPath);
    }
}
readdir('c:/Users/rodol/OneDrive/Documentos/GitHub/aula-javascript/Prof-Luis Otavio')

