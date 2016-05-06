var chrome = require('./index');

function deleteByName(cookie, name, index, array) {
	if (name === cookie.name) {
		array.splice(index, 1);
	}
}

//console.log(process.argv)
chrome.getCookies(process.argv[2], process.argv[3], 'raw', function(err, cookies) {
	//console.log(cookies);
 	cookies.forEach(function (entry, index, array) {
 		deleteByName(entry, '_mkto_trk', index, array);
 	});
    console.log("Cookie:" + chrome.convertRawToHeader(cookies));
});