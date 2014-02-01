// Run:
// casperjs test --ssl-protocol=any --ignore-ssl-errors=yes google.js

// Responds with ;_;
// <html><head></head><body></body></html>

casper.start();

casper.on('remote.message', function(message) {
    this.echo('remote console message: ' + message);
});
casper.userAgent("Mozilla/5.0 (Windows; U; Windows NT 6.1; en-US) AppleWebKit/534.16 (KHTML, like Gecko) Chrome/10.0.648.204 Safari/534.16");

casper.thenOpen('https://plus.google.com/', function() {
    this.debugHTML();
    this.test.assertExists('#Email'); // PASS
});

casper.run(function() {
    this.test.done();
});
