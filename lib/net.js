 /* eslint-disable-next-line */
var dns = require('dns');
function getIpFromDomain(cb) {
    return dns.resolve('baidu.com',cb);
}


dns.resolve('baidu.com', function (err, addresses) {
    if (err) {
throw err;
}
    console.log('addresses: ' + JSON.stringify(addresses));
    addresses.forEach(function (a) {
        dns.reverse(a, function (err, domains) {
            if (err) {
                console.log('reverse for ' + a + ' failed: ' +
                err.message);
            } else {
                console.log('reverse for ' + a + ': ' +
                JSON.stringify(domains));
            }
        });
    });
});
