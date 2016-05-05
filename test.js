var chrome = require('./index');
chrome.getCookies('http://devci-prisma-ny.mediaocean.com', 'header', function(err, cookies) {
    console.log(cookies);
});