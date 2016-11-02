//Al this variable initialization ensures that we are not using any variable alredy used by anyone else:
//this logic checks if each of the variable exists, if not, it defines it as an empty object:
/*var com = com || {};
com.zombiecientifico = com.zombiecientifico || {};
com.zombiecientifico.learning = com.zombiecientifico.learning || {};
com.zombiecientifico.learning.jsdp = com.zombiecientifico.learning.jsdp || {};*/

//Module pattern demonstration (self assign and run function):
//We are now out of the global scope:
(function(win, doc, $) {
    var chatModule = (function() {
        //This part is private to this module
        //Underscore characters a the beginning mean a private element:
        var _leadself = 'Me: ',
            _leadcomputer = "PC: ",
            _aSaid = ["This is a Cyber Chat"],
            _msgYes = "Yes, that's a great idea.",
            _msgNo = "No, that must be a mistake.",
            _aSassyStuff = [
                "Like mold on books, grow myths on history.",
                "She moved like a poem and smiled like a sphinx.",
                "As long as we don’t die, this is gonna be one hell of a story.",
                "She laughed, and the desert sang.",
                "You’ve got about as much charm as a dead slug."
            ];
        //The echo function is in this other part, which makes it part of this Module's function:
        var _echo = function(msg) {
            _aSaid.push("<div>" + msg + "</div>")
            var aSaidLength = _aSaid.length;
            var start = Math.max(aSaidLength - 6, 0);
            var out = "";
            for (var i = start; i < aSaidLength; i++) {
                out += _aSaid[i]
            }
            $('#talk span').text(msg);
            $('.advert').html(out);
        };
        var talk = function(msg) {
            _echo(_leadself + msg)
        };
        var replyYesNo = function() {
            var msg = Math.random() > .5 ? _msgYes : _msgNo;
            _echo(_leadcomputer + msg);
        };
        var saySassyStuff = function() {
            var msg = _aSassyStuff[Math.floor(Math.random() * _aSassyStuff.length)];
            _echo(msg);
        };

        //I return everything that is to be public
        return {
            talk: talk,
            replyYesNo: replyYesNo,
            saySassyStuff: saySassyStuff
        }
        //this part is going to be public
        //Commenting this to favor module reveal  desihm pattern
        /*return {
		talk: function(msg) {
        echo(leadself + msg)
    },
    replyYesNo: function() {
        var msg = Math.random() > .5 ? msgYes : msgNo
        echo(leadcomputer + msg);
    },
    saySassyStuff: function() {
        var msg = aSassyStuff[Math.floor(Math.random() * aSassyStuff.length)];
        echo(msg);
    }
	};*/
    })();

    $(doc).ready(function() {
        chatModule.talk('Hello computer!');
        chatModule.replyYesNo();
        chatModule.saySassyStuff();
    });
		if(!win.chatModule) win.chatModule = chatModule;
})(window, document, jQuery);

console.log(window.chatModule)
//We are going to be creating an object to reduce global scope abuse:
//This is the One object pattern
//o = { //This is not a good name for this object, it's too common!
//Change the name to a namespace, something really large, package like, that ensures that we don't step over anything that already exists. Se above to see pre-requisites of this.
//This is the namespace pattern:
//com.zombiecientifico.learning.jsdp.pseudochat = {
/*leadself: 'Me: ',
leadcomputer: "PC: ",
aSaid: ["This is a Cyber Chat"],
msgYes: "Yes, that's a great idea.",
msgNo: "No, that must be a mistake.",
aSassyStuff: [
    "Like mold on books, grow myths on history.",
    "She moved like a poem and smiled like a sphinx.",
    "As long as we don’t die, this is gonna be one hell of a story.",
    "She laughed, and the desert sang.",
    "You’ve got about as much charm as a dead slug."
],*/

/*talk: function(msg) {
    this.echo(this.leadself + msg)
},
replyYesNo: function() {
    var msg = Math.random() > .5 ? this.msgYes : this.msgNo
    this.echo(this.leadcomputer + msg);
},
saySassyStuff: function() {
    var msg = this.aSassyStuff[Math.floor(Math.random() * this.aSassyStuff.length)];
    this.echo(msg);
},
echo: function(msg) {
    this.aSaid.push("<div>" + msg + "</div>")
    var aSaidLength = this.aSaid.length;
    var start = Math.max(aSaidLength - 6, 0);
    var out = "";
    for (var i = start; i < aSaidLength; i++) {
        out += this.aSaid[i]
    }
    $('#talk span').text(msg);
    $('.advert').html(out);
}*/
//};

/*
//Scope was overused
var leadself = 'Me: ',
		leadcomputer = "PC: ",
		aSaid= ["This is a Cyber Chat"],
		msgYes = "Yes, that's a great idea.",
		msgNo = "No, that must be a mistake.",
		aSassyStuff = ["Like mold on books, grow myths on history.",
									"She moved like a poem and smiled like a sphinx.",
									"As long as we don’t die, this is gonna be one hell of a story.",
									"She laughed, and the desert sang.",
									"You’ve got about as much charm as a dead slug."];*/
/*
//These functions are also responsible of overusing the global scope, move them to the object variables
function talk(msg) {
    echo(leadself + msg)
}

function replyYesNo() {
    var msg = Math.random() > .5 ? msgYes : msgNo
    echo(leadcomputer + msg);
}

function saySassyStuff() {
    var msg = aSassyStuff[Math.floor(Math.random() * aSassyStuff.length)];
    echo(msg);
}

function echo(msg) {
    aSaid.push("<div>" + msg + "</div>")
    var aSaidLength = aSaid.length;
    var start = Math.max(aSaidLength - 6, 0);
    var out = "";
    for (var i = start; i < aSaidLength; i++) {
        out += aSaid[i]
    }
    $('#talk span').text(msg);
    $('.advert').html(out);
}*/
