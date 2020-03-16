const _ = require('lodash')
const path = require('path')
const fs = require('fs')


function binary(char) {
	return _.padStart(char.charCodeAt(0).toString(2), 8,'0')
}

function encrypt(readFile, writeFile) {
	var lines = fs.readFileSync(readFile).toString().replace(/\r/g, '').split("\n")
	lines.map(e => e.trim()) // trim whitespace
	lines = _.compact(lines) // remove empty values

	var out = []
	_.forEach(lines, function(line) {
		let chars = line.split('')
		_.forEach(chars, function(char) {
			out.push( binary(char) )
		})
		out.push( binary("\n") )
	})

	var write = ''
	var log = ''
	_.forEach(out.join('').match(/.{1,2}/g), function(b) {
		switch (b) {
			case '01':
				write += " "
				log += 's'
				break;
			case '10':
				write += "\t"
				log += 't'
				break;
			case '00':
				write += "\n"
				log += 'n'
				break;
			case '11':
				write += "\r"
				log += 'r'
				break;
		}
	})
	console.log(log)
	fs.writeFile(writeFile, write, 'ascii', (e)=>{console.log(e)})
}

function decrypt(fileName) {
	var data = fs.readFileSync(fileName, 'ascii')

	var code = ""
	var text = ""
	_.forEach(data.split(''), function(c) {
		switch (c) {
			case ' ':
				code += "01"
				break;
			case "\t":
				code += "10"
				break;
			case "\n":
				code += "00"
				break;
			case "\r":
				code += "11"
				break;
		}
		if (code.length == 8) {
			text += String.fromCharCode(parseInt(code, 2))
			code = ""
		}
	})

	console.log(text)
}


var args = process.argv.slice(2)

if (args.length == 1) {
	decrypt(args[0])
} 
else if (args.length == 2) {
	encrypt(args[0], args[1])
}
else {
	console.log(path.basename(process.argv[0]) + ' ' + path.basename(process.argv[1]) + ' [INFILE.txt] [OUTFILE.txt]')
	process.exit(1)
}