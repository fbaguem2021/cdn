const { exec, execSync } = require("child_process");
const path = require('path')
const fs = require('fs')
const args = process.argv.slice(2)
const isDir = (route) => fs.statSync(route).isDirectory()

function search_files(route, arr=[]) {
    fs.readdirSync(route).map((value) => {
        const new_route = path.join(route, value);
        if ( isDir(new_route) ) {
            return search_files(new_route, arr)
        } else {
            arr.push(new_route)
        }
    })
    return arr
}
const files_sass = search_files('src/sass')
let sass_command = 'npx sass --no-source-map -s compressed'

files_sass.map(pth => {
    const input = pth
    const output = pth.replace('src/sass/','dist/css/').replace('.scss','.min.css')
    sass_command = `${sass_command} ${input}:${output}`;
})

function execute_command(command, log=undefined, output=undefined) {
    if (log) {
        if (!output) { output = command } 
        console.log('>',output);
    }
    execSync(command)
}

console.log('\n')
console.log('$ npm run build')
console.log(execSync('npm run build').toString().replace('\n\n','\n'));

if (args.includes('--minify')) {
    execute_command('uglifyjs-folder dist/js -eo dist/js', true)
    execute_command(sass_command, true, 'npx sass --no-source-map -s compressed sec/sass:dist/css')
}
