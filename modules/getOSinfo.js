var os = require('os');
var formatTime= require('../modules/formatTime');

function getOSinfo() {
	var typeSystem = os.type();
	if (typeSystem === 'Windows_NT') {
		typeSystem = "Windows";
	}
	else if (typeSystem === 'Darwin'){
		typeSystem = "macOS";
	}
   
   	var time = Math.floor(os.uptime());
   	console.log("System: ".gray + typeSystem);
    console.log("Release: ".red + os.release());
    console.log("CPU model: ".blue + os.cpus()[0].model);
    formatTime.print(time);
    console.log("User name: ".yellow + os.userInfo().username);
    console.log("Home dir: ".white + os.homedir());  
}

exports.print = getOSinfo;








