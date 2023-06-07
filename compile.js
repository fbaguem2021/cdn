const { exec, execSync } = require("child_process");
const path = require('path')
const fs = require('fs')

const files_js = fs.readdirSync('src/sass')
let sass_command = 'sass -s compressed'

files_js.map(file => {
    const input = `src/sass/${file}`
    const output = `dist/css/${file.replace('.scss','.min.css')}`
    
    sass_command = `${sass_command} ${input}:${output}`;

    
    // console.log(command)
})


function execute_command(command, str=false) {
    if (str) {
        console.log(`\n${str}`);
    }
    console.log(execSync(command).toString())
}
execute_command('npm run build')
execute_command(sass_command)