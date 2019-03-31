/*
Requires:
	jquery.js
	jquery.custom-utils.js
*/
var Resources = {
    Labels: {
        NumberOfLines: 'Số dòng',
		NumberOfLines_LineLength: 'Số dòng; Độ dài mỗi dòng (vd: 3-5; 2-3)'
    }
};

var DataType = {
	Names: "names",
	Titles: "titles",
	Texts: "texts",
	Numbers: "numbers",
	Reg: "reg",
	Letters: "letters",
	AlphaNumerics: "alphaNumerics",
	PokerCards: 'pokerCards',
	Misc01: "name-number-reg-char",
	Misc: "misc"
};

var DataTypeDisplayName = {
	Names: "Từ, cụm từ",
	Titles: "Tiêu đề",
	Texts: "Đoạn, bài văn",
	Numbers: "Số",
	Reg: "Số xe",
	Letters: "Dãy chữ cái",
	AlphaNumerics: "Dãy chữ cái và chữ số",
	PokerCards: 'Lá bài',
	Misc01: "Hỗn hợp (trừ Tiêu đề và Đoạn văn)",
	Misc: "Hỗn hợp (Tất cả)"
};

var DataTypeKeys = [];

(function(){
	for(var key in DataType){
		if (key.indexOf('Misc') == 0) { continue; }
		DataTypeKeys.push(key);
	}
})();

var CardShapes = ['c', 'd', 'h', 's']
	, CardOrders = ['a', '2', '3', '4', '5', '6', '7', '8', '9', 't', 'j', 'q', 'k'];

function randomPokerCard(){
	var cardId = CardOrders[randomInt(CardOrders.length - 1)] + CardShapes[randomInt(CardShapes.length - 1)];
	return "<img src='images/poker-cards/{0}.gif' class='poker-card'/>".format(cardId);
}

function randomPokerCards(count){
	return randomString(count, randomPokerCard);
}

function MemoryTester(options) {
    var defaults = {
        inputForm: undefined // A selector referring to the input form
        , buttons: undefined // A selector referring to a list of buttons (elements having data-command attribute)
        , messageArea: undefined // A selector referring to the message area
        , showMessageItem: this._showMessageItem // The function that shows a message item. It looks like this: function(index, item){...}
        , data: undefined // The data container, which looks like this: {names: [...], titles: [...], texts: [...]}
        , bigMessageCss: 'big-message' // The CSS class applied to the message area when showing each message item at a time
        , bigMessageContentCss: 'big-message-content' // The CSS class applied to the message content when showing each message item at a time
        , bigMessageIndexCss: 'big-message-index' // The CSS class applied to the message index when showing each message item at a time
		, mediumMessageCss: 'medium-message' // The CSS class applied to the message area when showing each text item at a time
        , mediumMessageContentCss: 'medium-message-content' // The CSS class applied to the message content when showing each text item at a time
        , mediumMessageIndexCss: 'medium-message-index' // The CSS class applied to the message index when showing each text item at a time
        , smallMessageCss: 'small-message' // The CSS class applied to the message area when showing all message items at the same time
        , smallMessageContentCss: 'small-message-content' // The CSS class applied to the message content when showing all message items at the same time
        , smallMessageIndexCss: 'small-message-index' // The CSS class applied to the message index when showing all message items at the same time
    };
    $.extend(defaults, options);
    this._options = defaults;
    
    this._inputForm = $(defaults.inputForm);
	this._inputFields = this._inputForm.find('.input-fields');
    this._buttons = $(defaults.buttons);
    this._messageArea = $(defaults.messageArea);
    this._data = defaults.data;

    this._initializeComponents();
    this._reset();    
}

MemoryTester.prototype._initializeComponents = function () {
    var thisTester = this;
    var onButtonClickHandler = function (e) {
        var command = $(this).attr('data-command');
        if (thisTester[command]) { thisTester[command](); }
    }
    this._buttons.click(onButtonClickHandler);

	var inputForm = this._inputForm
		, lblArguments = $('[name=lblArguments]', inputForm)
		, txtArguments = $('[name=arguments]', inputForm);
    $('[name=itemType]', inputForm).change(function () {
		var typeId = $(this).val();
        var typeName = thisTester._getDataTypeName(typeId);
        switch (typeName) {
            case DataType.Numbers:
			case DataType.Letters:
			case DataType.AlphaNumerics:
			case DataType.PokerCards:
			case DataType.Misc01:
			case DataType.Misc:
                lblArguments.text(Resources.Labels.NumberOfLines_LineLength).show();
                txtArguments.show();
                break;
            default:
                lblArguments.hide();
                txtArguments.hide();
                break;
        }
    });
}

/* 
@args should be a string having these properties:
- Contain 2 parts separated by a semicolon
- Each part may contain 2 sub-part separated by a dash
like one of these: 
	3
	3;
	;3
	3;3
	3;3-4
	3-4;3
	3-4;3-5	
*/
MemoryTester.prototype._parseArguments = function (args) {
	if (!args){
		return {
			minNOL: 1,
			maxNOL: 1,
			minLineLength: 6,
			maxLineLength: 6
		}
	}
	
	var parts = args.split(';')
		, nolParts = parts[0].split('-')
		, lenParts = (parts.length > 1 ? parts[1].split('-') : ['6', '6'])
		, minNOL = parseInt(nolParts[0])
		, maxNOL = (nolParts.length > 1 ? parseInt(nolParts[1]) : NaN)
		, minLen = parseInt(lenParts[0])
		, maxLen = (lenParts.length > 1 ? parseInt(lenParts[1]) : minLen);
	if (isNaN(minNOL)){ 
		minNOL = (isNaN(maxNOL) ? 1 : maxNOL); 
	}
	if (isNaN(maxNOL)) { maxNOL = minNOL; }
	return {
		minNOL: minNOL,
		maxNOL: maxNOL,
		minLineLength: minLen,
		maxLineLength: maxLen
	}
}

MemoryTester.prototype._getParameters = function () {
    var form = this._inputForm;
	var showTime = parseInt(form.find(':text[name=showTime]:first').val())
		, newItemInterval = parseInt(form.find(':text[name=newItemInterval]:first').val());
    var options = {
        itemType: form.find(':input[name=itemType]:first').val(),
		arguments: form.find(':input[name=arguments]:first').val(),
        usesSameOrder: (form.find(':checkbox[name=usesSameOrder]:first').attr('checked') == 'checked'),
        itemCount: parseInt(form.find(':text[name=itemCount]:first').val()),
        newItemInterval: newItemInterval,
        showTime: showTime
    };
	
	var timerInterval;
	if (newItemInterval == showTime && showTime > 5){
		var halfShowTime = showTime / 2;
		timerInterval = Math.round(halfShowTime);
		if (showTime % 2 != 0 && halfShowTime > timerInterval){
			timerInterval++;
		}
	} else {
		timerInterval = getGCD(newItemInterval, showTime) / 2;
	}
	options.timerInterval = Math.max(timerInterval, 5);
	
	return options;
}

MemoryTester.prototype._showInputFields = function (on) {
	if (on) { this._inputFields.show(); }
	else { this._inputFields.hide(); }
}

MemoryTester.prototype._reset = function () {
    this._stopTimer();
    this._messageArea.empty();
    this._dataToShow = undefined;
    this._showOptions = undefined;
    this._currentIndex = 0;
    this._counter = 0;
	this._showInputFields(true);

    this._turnOnButtons('start');
}

MemoryTester.prototype._prepareData = function () {
    var data = this._data, input = this._getParameters();
    var dataToShow = [];
    var length = input.itemCount;
    for (var i = 0; i < length; i++) {
        dataToShow[i] = this._getDataItem(input.itemType, (input.usesSameOrder ? i : undefined), input.arguments);
    }
    this._dataToShow = dataToShow;
    this._showOptions = input;
}

MemoryTester.prototype._getDataTypeName = function (typeId) {
	var type;
	switch (typeId) {
		case DataType.Misc01:
			switch (randomInt(4)) {
                case 0: type = DataType.Names; break;
				case 1: type = DataType.Numbers; break;
				case 2: type = DataType.Reg; break;
				case 3: type = DataType.Letters; break;
				case 4: type = DataType.AlphaNumerics; break;
            }
            break;
		case DataType.Misc: 
			var index = randomInt(DataTypeKeys.length - 1);
			type = DataType[DataTypeKeys[index]]; 
			break;
		default: type = typeId; break;		
    }
	return type;
}

MemoryTester.prototype._getDataItem = function (typeId, index, args) {
    var type = this._getDataTypeName(typeId);
	args = this._parseArguments(args);
	var minNOL = args.minNOL, maxNOL = args.maxNOL
		, minLineLength = args.minLineLength, maxLineLength = args.maxLineLength
		, count = randomInt(maxNOL, minNOL)
		, itemParts = []
		, func;
	
	if (type === DataType.Numbers){		
		for(var i = 0; i < count; i++){
			itemParts.push(randomDigits(maxLineLength, minLineLength));
		}
		return itemParts.join('<br/>');
	}
	
	if (type === DataType.Reg){
		return randomReg();
	}	
	
	switch(type){
		case DataType.Letters: func = randomLetters; break;
		case DataType.AlphaNumerics: func = randomAlphaNumerics; break;
		case DataType.PokerCards: func = randomPokerCards; break;
	}
		
	if (func){
		for(var i = 0; i < count; i++){
			itemParts.push(func(randomInt(maxLineLength, minLineLength)));
		}
		return itemParts.join('<br/>');
	}
	
    var dataArray = this._data[type];
    if (!dataArray) { return undefined; }
    
    if (typeof index == 'undefined') { index = randomInt(Math.max(dataArray.length - 1, 0)); }
    return dataArray[index];
}

MemoryTester.prototype._turnOnButtons = function () {
    this._buttons.attr('disabled', 'disabled');
    var length = arguments.length;
    for (var i = 0; i < length; i++) {
        this._buttons.filter('[data-command=' + arguments[i] + ']').removeAttr('disabled');
    }
}

MemoryTester.prototype._showMessage = function () {
    var showOptions = this._showOptions
        , itemCount = showOptions.itemCount
        , showTime = showOptions.showTime
        , interval = showOptions.newItemInterval + showTime
        , type = showOptions.itemType
        , messageArea = this._messageArea
		, timerInterval = showOptions.timerInterval;

    this._counter++;
    var remainder = (this._counter * timerInterval) % interval;

    if (this._currentIndex >= itemCount) {
        if (timerInterval == showOptions.newItemInterval || remainder >= showTime + timerInterval) {
            messageArea.text('...');
            this._stopTimer();
			this._showInputFields(true);
            this._turnOnButtons('start', 'restart', 'showAll');
        }
        return;
    }

    if (remainder == timerInterval) { // Get new data item        
		if (type == '2') // Text
			this._showTextItem(this._currentIndex, this._dataToShow[this._currentIndex++]);
		else
			this._showMessageItem(this._currentIndex, this._dataToShow[this._currentIndex++]);
        return;
    }

    if (remainder == showTime + timerInterval) { // Hide current
        messageArea.empty();
        return;
    }
}

MemoryTester.prototype._removeMessageFontSizeStyle = function () {
	this._messageArea.css('font-size', '');
}

MemoryTester.prototype._showMessageItem = function (index, item) {
	this._removeMessageFontSizeStyle();
    var html = "<div><span class='{0}'>{1}</span><br /><span class='{2}'>{3}</span></div>".format(this._options.bigMessageIndexCss, index, this._options.bigMessageContentCss, item);
    this._messageArea.html(html);
}

MemoryTester.prototype._showTextItem = function (index, item) {
	this._removeMessageFontSizeStyle();
    var html = "<div><span class='{0}'>{1}</span><br /><span class='{2}'>{3}</span></div>".format(this._options.mediumMessageIndexCss, index, this._options.mediumMessageContentCss, item);
    this._messageArea.html(html);
}

MemoryTester.prototype._startTimer = function () {
    var thisTester = this, timerInterval = this._showOptions.timerInterval;
    this._timer = setInterval(function () { thisTester._showMessage(); }, timerInterval);
}

MemoryTester.prototype._stopTimer = function () {
    if (this._timer) { clearInterval(this._timer); }
    this._timer = undefined;
}

MemoryTester.prototype._prepareMessageArea = function () {
	var type = this._showOptions.itemType, options = this._options;
	if (type == '2'){
		this._messageArea.removeClass(options.smallMessageCss).removeClass(options.bigMessageCss).addClass(options.mediumMessageCss);
	}else{
		this._messageArea.removeClass(options.smallMessageCss).removeClass(options.mediumMessageCss).addClass(options.bigMessageCss);
	}
}

MemoryTester.prototype._validateData = function () {
	var showOptions = this._showOptions
		, showTime = showOptions.showTime
        , newItemInterval = showOptions.newItemInterval
		, timerInterval = showOptions.timerInterval;
		
	if (showTime <= 0 || timerInterval <= 0 || newItemInterval <= 0){
		alert('New item interval, show time and timer interval must be larger than 0.');
		return false;
	}
	
	if (showTime < timerInterval || newItemInterval < timerInterval){
		alert('New item interval and show time must be larger than or equal to timer interval.');
		return false;
	}
	
	if (showTime % timerInterval != 0 || newItemInterval % timerInterval != 0){
		alert('New item interval and show time must be divisible by timer interval.');
		return false;
	}
	
	return true;
}

MemoryTester.prototype.start = function () {
    this._reset();
    this._prepareData();
	if (!this._validateData()){ return; }
	this._showInputFields(false);
    this._turnOnButtons('pause', 'stop');
    this._prepareMessageArea();
    this._startTimer();
}

MemoryTester.prototype.restart = function () {
	this._showInputFields(false);
	this._messageArea.empty();
    this._currentIndex = 0;
    this._counter = 0;
	
    this._turnOnButtons('pause', 'stop');
    this._prepareMessageArea();
    this._startTimer();
}

MemoryTester.prototype.stop = function () {
    this._stopTimer();
	this._showInputFields(true);
    this._turnOnButtons('start', 'restart', 'showAll');
}

MemoryTester.prototype.pause = function () {
    this._stopTimer();
    this._turnOnButtons('resume', 'stop');
}

MemoryTester.prototype.resume = function () {
    this._startTimer();
    this._turnOnButtons('pause', 'stop');
}

MemoryTester.prototype.showAll = function () {
    // Show all items
    var length = this._dataToShow.length, options = this._options;
    var builder = new StringBuilder();
    for (var i = 0; i < length; i++) {
        var html = "<div><span class='{0}'>{1}</span> - <span class='{2}'>{3}</span></div>".format(options.smallMessageIndexCss, i, options.smallMessageContentCss, this._dataToShow[i]);
        builder.appendLine(html);
    }
	var area = this._messageArea, lastFontSize = area.data('last-font-size');
    area.removeClass(options.bigMessageCss).removeClass(options.mediumMessageCss).addClass(options.smallMessageCss);
    area.html(builder.toString());
	if (lastFontSize){
		area.css('font-size', lastFontSize);
	}

	this._showInputFields(true);
    this._turnOnButtons('start', 'increaseFontSize', 'decreaseFontSize', 'goTop');
}

MemoryTester.prototype.changeMessageFontSize = function (delta) {
	var area = this._messageArea;
	var currentSize = parseInt(area.css('font-size').substring(0, area.css('font-size').length - 2));
	var newSize = Math.max(currentSize + delta, 10);
	area.css('font-size', newSize);
	area.data('last-font-size', newSize);
}

MemoryTester.prototype.increaseFontSize = function () {
	this.changeMessageFontSize(10);
}

MemoryTester.prototype.decreaseFontSize = function () {
	this.changeMessageFontSize(-10);
}

MemoryTester.prototype.goTop = function () {
    $("html, body").animate({ scrollTop: 0 }, "slow");
}