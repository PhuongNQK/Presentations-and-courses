function addGroup(builder, veryXGroup, alternativeGroup) {
	builder.append('<div class="group">');
	for (var j = 0; j < veryXGroup.length; j++) {
		builder.append('<div class="pair"><span class="veryX-word">very {0}</span><span class="alternative-word">{1}</span></div>'.format(veryXGroup[j], alternativeGroup[j]));
	}
	builder.append('</div>');
}

function markWord(sentence, word, cssClass) {
	return sentence.replaceAll(word, '<span class="{1}">{0}</span>'.format(word, cssClass));
}

function markAllWords(sentence, wordGroups) {
	var maxIndex = wordGroups.length - 1, wordGroup;
	for (var i = 0; i < maxIndex; i++) {
		wordGroup = wordGroups[i];
		for (var j = 0; j < wordGroup.length; j++) {
			sentence = markWord(sentence, wordGroup[j], 'old-word');
		}
	}
	
	wordGroup = wordGroups[maxIndex];
	for (var j = 0; j < wordGroup.length; j++) {
		sentence = markWord(sentence, wordGroup[j], 'new-word');
	}
	
	return sentence;
}



!function () {
	$('body').append('<div id="shortcuts"><ul><li><a href="#oldWords" title="Go to Old Words">Old</a></li><li><a href="#newWords" title="Go to New Words">New</a></li><li><a href="#sampleSentences" title="Go to Sample Sentences">Samples</a></li></ul></div>');
	
	var maxIndex = veryX.length - 1,
		$words = $('#words'),
		builder = new StringBuilder(),
		veryXGroup, alternativeGroup;
			
			
	builder.append('<h1 id="oldWords">Old words</h1>');
	for (var i = 0; i < maxIndex; i++) {
		addGroup(builder, veryX[i], alternatives[i]);
	}
	
	builder.append('<h1 id="newWords">New words</h1>');
	addGroup(builder, veryX[maxIndex], alternatives[maxIndex]);
	
	if (sampleSentences.length > 0) {
		builder.append('<h1 id="sampleSentences">Sample sentences</h1>');
		builder.append('<ul class="sample-sentences">');
		for (var i = 0; i < sampleSentences.length; i++) {
			builder.append('<li>{0}</li>'.format(markAllWords(sampleSentences[i], alternatives)));
		}
		builder.append('</ul>');
	}
	
	$words.append(builder.toString());
}();