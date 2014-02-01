function holla(msg) {
    this.echo(msg);
    this.capture('google-1-' + msg + '-' + Date.now() + '.png', undefined, {
        format: 'jpg',
        quality: 75
    });
}


var casper = require('casper').create({
    verbose: true,
    logLevel: "debug",
    waitTimeout: 15000,
    stepTimeout: 15000,
    viewportSize: {
        width: 600,
        height: 800
    },
    onWaitTimeout: function() {
        holla.call(this, 'Wait TimeOut Occured');
        this.exit();
    },
    onStepTimeout: function() {
        holla.call(this, 'Step TimeOut Occured');
        this.exit();
    }
});

casper.on('remote.message', function(msg) {
    logConsole('***remote message caught***: ' + msg);
});

var plusURL = 'https://accounts.google.com/ServiceLogin?service=oz&amp;passive=1209600&amp;continue=https://plus.google.com/?gpsrc%3Dgplp0%26partnerid%3Dgplp0',
    plusURL = 'http://mail.google.com/mail/',
    plusURL = 'https://plus.google.com/',
    plusURL = 'https://google.com/';

casper.userAgent('Mozilla/5.0 (Macintosh; Intel Mac OS X)');

var locked = true;
function main() {

    var passwdEl = 'Passwd',
        emailEl = 'Email';
    // arguments.forEach(function(el, i, arr) {
    //     console.log(i);
    //     console.log(el);
    // });
    this.debugHTML();


    holla.call(this, "URL " + plusURL);
    this.echo(this.getTitle());
    holla.call(this, "Page Title " + document.title);
    holla.call(this, "Get Title " + this.getTitle());

    holla.call(this, 'Loaded page');

    // this.fillSelectors('form#gaia_loginform', {
    //     '#Passwd': username,
    //     '#Email': password
    // }, true);
    holla.call(this, 'Filled form');

    holla.call(this, 'Dunzo');

    locked = false;

}

console.log('started now opening google plus');

casper.start();

casper.userAgent("Mozilla/5.0 (Windows; U; Windows NT 6.1; en-US) AppleWebKit/534.16 (KHTML, like Gecko) Chrome/10.0.648.204 Safari/534.16");

casper.thenOpen(plusURL, function() {

    setTimeout(function() {
        console.log("scheduling main");
        main.call(this);
    }, 10000);

    // while (locked);
});
// casper.thenOpen(plusURL, );

casper.thenEvaluate(function(){
   holla.call(this, "Then Evaluate Page Title " + document.title);
});

casper.run();
