var os = require('os');
var getOSinfo = require('../modules/getOSInfo');

process.stdin.setEncoding('utf-8');
process.stdin.on('readable', function() {
    var input = process.stdin.read();
    if (input !== null) {
        var instruction = input.toString().trim();
        switch (instruction) {
        	case '/exit':
            	process.stdout.write('Quitting app!\n');
            	process.exit();
            	break;
            case '/versions':
             	console.log("Version node: " + process.versions.node);
             	console.log("Language system: " + process.versions.LANG); // macOS and Linux
             	break;
            case '/getOSinfo':
            	getOSinfo.print();
                break;
        	default:
            	process.stdout.write('Wrong instruction!\n');
        };
    }
});





















        















       









