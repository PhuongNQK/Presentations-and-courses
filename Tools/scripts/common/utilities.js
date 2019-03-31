/// <reference path="jquery-1.6.2-vsdoc.js"/>
/// <reference path="jquery-ui-1.8.15.js"/>
/*
This plugin requires:
jquery.js
jquery.json-2.2.min.js
jquery.ui.js
*/

/*
Plugin template:

Function plugin definition:
jQuery.pluginName = function (...) {
...
}

Method plugin definition:
jQuery.fn.pluginName = function (options) {
var defaults = {};

var opts = $.extend(defaults, options);

return this.each(function () {
...
});
};

Plugin using closure:
(function ($) {
// Plugin definition    
})(jQuery);

*/

var constants = {
	MaxInt: 9007199254740992,
	Digits: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
	Alphabet: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
};

function throwArgumentError(message){
	var error = new Error(1, message);
	throw error;
}

/* GCD = Greatest Common Divisor */
function getGCD(a, b){
	if (a < 0 || b < 0){ throwArgumentError('a or b is invalid.'); }
	
	if (a == 0) { return b; }
	if (b == 0) { return a; }
	if (a == 1 || b == 1) { return 1; }
	
	if (a == b){ return a; }
	
	if (a < b){
		var temp = a; a = b; b = temp;
	}
	
	var remainder;
	while (true){
		remainder = a % b;
		if (remainder == 0) { return b; }
		a = b; b = remainder;
	}
}

function randomInt(maxBound, minBound) {
	if (!maxBound && maxBound != 0) { maxBound = constants.MaxInt; }
	if (!minBound) { minBound = 0; }
	if (minBound > maxBound){
		var temp = minBound;
		minBound = maxBound;
		maxBound = temp;
	}
    return Math.round(minBound + Math.random() * (maxBound - minBound));
}

function randomString(count, partRandomizer){
	var result = '';
	for( var index = 0; index < count; index++){
		result += partRandomizer();
	}
	return result;
}

function randomDigit(){
	return randomInt(9) + '';
}

function randomDigits(maxCount, minCount){
	if (!maxCount) { maxCount = 1; }
	if (!minCount) { minCount = maxCount; }
	if (maxCount < minCount){
		var temp = maxCount;
		maxCount = minCount;
		minCount = temp;
	}
	
	var minBound = Math.pow(10, minCount - 1)
		, maxBound = Math.pow(10, maxCount) - 1;
	
	var result = randomInt(maxBound, minBound) + '';
	return result;
}

function randomLetter(){
	return constants.Alphabet[randomInt(constants.Alphabet.length - 1)];
}

function randomLetters(count){
	return randomString(count, randomLetter);
}

function randomAlphaNumeric(){
	switch(randomInt(100) % 2) {
		case 0: return randomDigit();
		case 1: return randomLetter();
	}
}

function randomAlphaNumerics(count){
	return randomString(count, randomAlphaNumeric);
}

/* Returns a random vehicle's registration number */
function randomReg(){	
	return randomDigit() + randomDigit() + '-' + randomLetter() + randomLetter() 
		+ '<br/>' + randomDigit() + randomDigit() + randomDigit() + randomDigit();
}

jQuery.log = function (message) {
    if (typeof message === "object") {
        message = $.toJSON(message);
    }

    if (window.console) {
        console.log(message);
    } else {
        alert(message);
    }
}

jQuery.reduce = function (array, callback, seed) {
    if (array == undefined || array.length == 0) { return callback(seed, undefined); }

    var length = array.length;
    var result = callback(seed, array[0]);
    if (length == 1) { return result; }

    for (var index = 1; index < length; index++) {
        result = callback(result, array[index]);
    }
    return result;
};

jQuery.filterArray = function (array, callback) {
    var result = [];
    if (array == undefined || array.length == 0) { return result; }

    var count = 0;
    for (var index = 0; index < length; index++) {
        if (callback(array[index]) === true) {
            result[count] = array[index];
            count++;
        }
    }
    return result;
};

/* Finds the first element that makes callback(element, tip) return true. If any, returns {index: <element index>, value: <element>}. 
Otherwise, returns undefined. */
jQuery.findFirst = function (array, callback, tip) {
    if (array == undefined || array.length == 0) { return undefined; }
    var length = array.length;
    for (var index = 0; index < length; index++) {
        if (callback(array[index], tip) === true) {
            return { index: index, value: array[index] };
        }
    }
    return undefined;
};

jQuery.isLeftMouse = function (button) {
    return button == 0 || button == 1; // TODO Do it more properly, take browser into account
};

/* Returns true if the range [rangeStart, rangeEnd] overlaps the range [minBound, maxBound] */
jQuery.isOverlapping = function (minBound, maxBound, rangeStart, rangeEnd) {
    var tmp;
    if (minBound > maxBound) {
        tmp = minBound;
        minBound = maxBound;
        maxBound = tmp;
    }
    if (rangeStart > rangeEnd) {
        tmp = rangeStart;
        rangeStart = rangeEnd;
        rangeEnd = tmp;
    }

    return (rangeStart < minBound) ? (rangeEnd >= minBound) : (rangeStart <= maxBound);
};

/* Returns true if the range [rangeStart, rangeStart + rangeSize - 1] overlaps the range [minBound, minBound + boundSize - 1]. 
All arguments are expected to be int values. */
jQuery.isOverlappingBySize = function (minBound, boundSize, rangeStart, rangeSize) {
    return jQuery.isOverlapping(minBound, minBound + boundSize - 1, rangeStart, rangeStart + rangeSize - 1);
}

jQuery.fn.bgcolor = function (color) {
    return this.each(function () {
        if (color == undefined) { color = "orange"; }
        $(this).css('background-color', color);
    });
};

jQuery.fn.serializeObject = function () {
    var o = {};
    var a = this.serializeArray();
    jQuery.each(a, function () {
        if (o[this.name] !== undefined) {
            if (!o[this.name].push) {
                o[this.name] = [o[this.name]];
            }
            o[this.name].push(this.value || '');
        } else {
            o[this.name] = this.value || '';
        }
    });
    return o;
};

if (!Array.prototype.clean) {
    Array.prototype.clean = function (deleteValue) {
        for (var i = this.length - 1; i >= 0; i--) {
            if (this[i] == deleteValue) {
                this.splice(i, 1);
            }
        }
        return this;
    }
}

if (!Array.prototype.cleanEmptyOrUndefined) {
    Array.prototype.cleanEmptyOrUndefined = function () {
        for (var i = this.length - 1; i >= 0; i--) {
            if (this[i] == undefined || this[i] == '') {
                this.splice(i, 1);
            }
        }
        return this;
    }
}

if (!String.prototype.format) {
    String.prototype.format = function () {
        var txt = this;
        for (var i = 0; i < arguments.length; i++) {
            var exp = new RegExp('\\{' + (i) + '\\}', 'gm');
            txt = txt.replace(exp, arguments[i]);
        }
        return txt;
    }
}

if (!String.format) {
    String.format = function () {
        for (var i = 1; i < arguments.length; i++) {
            var exp = new RegExp('\\{' + (i - 1) + '\\}', 'gm');
            arguments[0] = arguments[0].replace(exp, arguments[i]);
        }
        return arguments[0];
    }
}



/*
Initializes a new instance of the StringBuilder class and appends the given value if supplied.
newline specifies the string that functions as newline character. By default, newline is set to '<br/>'.
*/
function StringBuilder(value, newline) {
    this.strings = new Array("");
    if (newline == undefined || newline == null || typeof (newline) !== 'string') {
        this.newline = '<br/>';
    } else {
        this.newline = newline;
    }
    this.append(value);
}

// Appends the given value to the end of this instance.
StringBuilder.prototype.append = function (value) {
    if (value) {
        this.strings.push(value);
    }
    return this;
}

// Appends the given value as a new line to the end of this instance.
StringBuilder.prototype.appendLine = function (value) {
    if (value) {
        this.strings.push((value + this.newline));
    }
    return this;
}

// Appends the given value as a new header line to the end of this instance.
StringBuilder.prototype.appendHeaderLine = function (value, level) {
    if (value) {
        if (!level || level < 1) { level = 1; }
        this.strings.push('<h{0}>{1}</h{0}>'.format(level, value));
    }
    return this;
}

// Appends the given list of (key, value) pairs as an ordered or unordered HTML list to the end of this instance.
StringBuilder.prototype.appendKeyValueList = function (kvList, isOrdered) {
    if (kvList && typeof (kvList) === 'object') {
        isOrdered = !!isOrdered;
        this.strings.push((isOrdered ? '<ol>' : '<ul>'));
        for (var key in kvList) {
            this.strings.push('<li><em>{0}</em>: {1}</li>'.format(key, kvList[key]));
        }
        this.strings.push((isOrdered ? '</ol>' : '</ul>'));
    }
    return this;
}

// Clears the string buffer
StringBuilder.prototype.clear = function () {
    this.strings.length = 1;
    return this;
}

// Converts this instance to a String.
StringBuilder.prototype.toString = function () {
    return this.strings.join("");
}



/*
Creates a MessageDialog.
*/
jQuery.fixDialogIssues = function () {
    $("#dialog:ui-dialog").dialog("destroy");
}

$.messageDialog = function (content, options) {
    return new MessageDialog(content, options);
}

function MessageDialog(content, options) {
    var defaults = {
        dialogId: undefined,
        infoTitle: 'Info',
        warningTitle: 'Warning',
        errorTitle: 'Error',
        dialogCssClass: '',
        dialogStyle: '',
        messageCssClass: 'message',
        autoOpen: false
    };
    var opts = $.extend(defaults, options);

    var messageArea = (content ? $(content) : $('<div class="' + opts.messageCssClass + '"></div>'));

    var dialog = $('<div></div>');
    if (opts.dialogId) { dialog.attr('id', opts.dialogId); }
    if (opts.dialogCssClass) { dialog.attr('class', opts.dialogCssClass); }
    if (opts.dialogStyle) { dialog.attr('style', opts.dialogStyle); }

    dialog.append(messageArea);
    $(document).append(dialog);
    dialog.dialog(opts);

    this._options = opts;
    this._messageArea = messageArea;
    this._dialog = dialog;
}

MessageDialog.prototype.show = function () {
    this._dialog.dialog('open');
}

MessageDialog.prototype.message = function (message, title, mode) {
    this._messageArea.html(message);
    var dialog = this._dialog;
    if (!mode) { mode = "info"; }
    dialog.attr('dialog-mode', mode);
    dialog.dialog('option', 'title', title);
    dialog.dialog('open');
}

MessageDialog.prototype.info = function (message) {
    this.message(message, this._options.infoTitle, 'info');
}

MessageDialog.prototype.warn = function (message) {
    this.message(message, this._options.warningTitle, 'warning');
}

MessageDialog.prototype.error = function (message) {
    this.message(message, this._options.errorTitle, 'error');
}

MessageDialog.prototype.close = function () {
    this._dialog.dialog('close');
}



/**/
jQuery.fn.equalizeHeight = function (options) {
    var defaults = {};

    var opts = $.extend(defaults, options);

    var maxHeight = 0;
    return this.each(function () {
        var height = $(this).height();
        if (height > maxHeight) { maxHeight = height; }
    })
    .height(maxHeight);
}



/* UrlMapper helps to map a server-styled relative URL like '~/Content/Abc' to a root-relative URL like '/Content/Abc'. */
function UrlMapper(root) {
    this.root = root;
}


UrlMapper.prototype.resolve = function (url) {
    return (url.charAt(0) == '~') ? (this.root + url.substring(2)) : url;
};

// TODO : Add Logger that represents a pluggable logger to pages