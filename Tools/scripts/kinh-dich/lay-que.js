var years = ['Tí', 'Sửu', 'Dần', 'Mão', 'Thìn', 'Tị', 'Ngọ', 'Mùi', 'Thân', 'Dậu', 'Tuất', 'Hợi'];
var months = ['Dần', 'Mão', 'Thìn', 'Tị', 'Ngọ', 'Mùi', 'Thân', 'Dậu', 'Tuất', 'Hợi', 'Tí', 'Sửu'];

/*
Input: ngày tháng năm giờ âm lịch
Output:
	Quẻ chủ
	Quẻ biến
	Quẻ hỗ
Mỗi quẻ bao gồm:
	Tên
	Triệu
	Chú giải ngắn
	Hào: Nạp Giáp/Thân/Thú/Vòng trường sinh, hào động/Thế/Ứng/Quải Thân, Gian/Phục hào, Dụng/Phục/Phi/Nguyên/Kỵ/Cừu thần
	Quan hệ liên hào: tam hợp cục, Thiên Mã, tương hình/hại, không vong
*/

/*
Các tham số đều theo Âm lịch.

Structure of hexagram object:
{
	name: 'Phong Thiên Tiểu Súc',	
	type: 'Chủ', // Các giá trị khác là 'Biến', 'Hỗ'
	group: 'Phong Mộc', // Cho biết cung của quẻ
	slogan: 'Mật vân bất vũ (Mây kéo đến đen trời mà không mưa)',
	description: '',
	monograms: [
		{ value: 0, description: ['Động', 'Quan quỷ', 'Thanh long'] },
		{ value: 1, description: ['Thê tài', 'Thanh long'] },
		...
	]
}
*/
function buildHexagram(year, month, day, hour, dayName){
	var externalSum = year + month + day,
		internalSum = externalSum + hour,
		externalTrigramIndex = externalSum % 8 || 8,
		internalTrigramIndex = internalSum % 8 || 8,
		changingMonogram = internalSum % 6 || 6,
		
		externalTrigram = Trigrams[externalTrigramIndex],
		internalTrigram = Trigrams[internalTrigramIndex],
		hexagram = getHexagramByCode(externalTrigramIndex * 10 + internalTrigramIndex),		
		groupTrigram = Trigrams[hexagram.group], // getTrigramByCode(getHexagramGroup(externalTrigram.code + internalTrigram.code)),
		groupElement = groupTrigram.element,
		monograms = [
			{value: parseInt(internalTrigram.code[2]), description: []},
			{value: parseInt(internalTrigram.code[1]), description: []},
			{value: parseInt(internalTrigram.code[0]), description: []},
			{value: parseInt(externalTrigram.code[2]), description: []},
			{value: parseInt(externalTrigram.code[1]), description: []},
			{value: parseInt(externalTrigram.code[0]), description: []}
		],
		hexagramObject = {
			name: hexagram.name,
			type: 'Chủ',
			group: groupTrigram.name + ' ' + FiveElements[groupTrigram.element],
			slogan: hexagram.slogan,			
			description: hexagram.description,
			monograms: monograms
		},
		fateIndex = hexagram.fateIndex,
		associatedFateIndex = ((fateIndex + 3) % 6 || 6),
		i, tempIndex, stem, branch;
	
	// Hào động
	monograms[changingMonogram - 1].description.push('Động');
	
	// Hào thế / ứng / gian
	monograms[fateIndex - 1].description.push('Thế');
	monograms[associatedFateIndex - 1].description.push('Ứng');
	if (fateIndex > associatedFateIndex){
		tempIndex = fateIndex;
		fateIndex = associatedFateIndex;
		associatedFateIndex = tempIndex;
	}
	monograms[fateIndex].description.push('Gian');
	monograms[fateIndex + 1].description.push('Gian');
	
	// Nạp Giáp
	monograms[0].description.push(internalTrigram.internalMatch[2]);
	monograms[1].description.push(internalTrigram.internalMatch[1]);
	monograms[2].description.push(internalTrigram.internalMatch[0]);
	monograms[3].description.push(externalTrigram.externalMatch[2]);
	monograms[4].description.push(externalTrigram.externalMatch[1]);
	monograms[5].description.push(externalTrigram.externalMatch[0]);
	
	// Nạp Thân
	monograms[0].description.push(getRelation(groupElement, internalTrigram.internalMatch[2]));
	monograms[1].description.push(getRelation(groupElement, internalTrigram.internalMatch[1]));
	monograms[2].description.push(getRelation(groupElement, internalTrigram.internalMatch[0]));
	monograms[3].description.push(getRelation(groupElement, externalTrigram.externalMatch[2]));
	monograms[4].description.push(getRelation(groupElement, externalTrigram.externalMatch[1]));
	monograms[5].description.push(getRelation(groupElement, externalTrigram.externalMatch[0]));
	
	// Nạp Thú
	stem = HeavenlyStemsByName[dayName.split(' ').shift()];
	for(i = 0; i < monograms.length; i++){
		monograms[i].description.push(getAnimal(stem, i + 1));
	}
	
	// Quải Thần
	monograms[MainSubjectsByEarthlyBranch[month] - 1].description.push('Quải Thần');
	
	return hexagramObject;
}

function getAllMatches(){
	var stemIndex, branchIndex, matches = [];
	for(var i = 1; i <= 60; i++){
		stemIndex = (i % 10) || 10;
		branchIndex = (i % 12) || 12;
		matches.push({
			value: i,
			name: HeavenlyStems[stemIndex].name + ' ' + EarthlyBranches[branchIndex].name
		});
	}
	return matches;
}

function getEarthlyBranchByName(name){
	var key, branch;
	for(key in EarthlyBranches){
		branch = EarthlyBranches[key];
		if (branch.name == name){
			return branch;
		}
	}
	
	return null;
}

function getHeavenlyStemByName(name){
	var key, stem;
	for(key in HeavenlyStems){
		stem = HeavenlyStems[key];
		if (stem.name == name){
			return stem;
		}
	}
	
	return null;
}

/* match: giáp */
function getRelation(baseElement, match){
	var baseIndex = 1, // Huynh Đệ
		earthlyBranch = match.split(' ').pop(),
		element,
		index;
		
	for(var key in EarthlyBranches){
		if (EarthlyBranches[key].name == earthlyBranch){
			element = EarthlyBranches[key].element;
			break;
		}
	}
	
	if (element == null){ return ''; }
	
	index = baseIndex + element - baseElement;
	if (index < 0) { index = index + 5; }
	else if (index > 4) { index = index % 5; }
	
	return SixRelations[index];
}

function getAnimal(dayStemValue, monogramIndex){
	var baseIndex = SixAnimalsByHeavenlyStems[dayStemValue],
		index = (baseIndex + monogramIndex - 1) % SixAnimals.length;
	return SixAnimals[index];
}

/*
Consider a dictionary of objects. Get the object whose property <property> has the value of propertyValue.
If such an object does not exist, return null.
*/
function getDictionaryValue(dictionary, property, propertyValue){
	for (var key in dictionary){
		if (dictionary[key][property] == propertyValue){
			return dictionary[key];
		}
	}
	
	return null;
}

/*
E.g. getTrigramByCode('001')
*/
function getTrigramByCode(code){
	return getDictionaryValue(Trigrams, 'code', code);
}

/*
E.g. getHexagramByCode(12)
*/
function getHexagramByCode(code){
	return getDictionaryValue(Hexagrams, 'code', code);
}

/*
E.g. getHexagramGroup('100110'); -> '110'
*/
function getHexagramGroup(hexagramCode){
	var externalTrigram = hexagramCode.substring(0, 3),
		internalTrigram = hexagramCode.substring(3);	
	if (externalTrigram == internalTrigram){ return externalTrigram; }
	
	hexagramCode = toggleAt(hexagramCode, 1);
	externalTrigram = hexagramCode.substring(0, 3);
	internalTrigram = hexagramCode.substring(3);	
	if (externalTrigram == internalTrigram){ return externalTrigram; }
	
	hexagramCode = toggleAt(hexagramCode, 2);
	externalTrigram = hexagramCode.substring(0, 3);
	internalTrigram = hexagramCode.substring(3);	
	if (externalTrigram == internalTrigram){ return externalTrigram; }
	
	hexagramCode = toggleAt(hexagramCode, 3);
	externalTrigram = hexagramCode.substring(0, 3);
	internalTrigram = hexagramCode.substring(3);	
	if (externalTrigram == internalTrigram){ return externalTrigram; }
	
	hexagramCode = toggleAt(hexagramCode, 4);
	externalTrigram = hexagramCode.substring(0, 3);
	internalTrigram = hexagramCode.substring(3);	
	if (externalTrigram == internalTrigram){ return externalTrigram; }
	
	hexagramCode = toggleAt(hexagramCode, 5);
	externalTrigram = hexagramCode.substring(0, 3);
	internalTrigram = hexagramCode.substring(3);	
	if (externalTrigram == internalTrigram){ return externalTrigram; }
	
	hexagramCode = toggleAt(hexagramCode, 4);
	externalTrigram = hexagramCode.substring(0, 3);
	internalTrigram = hexagramCode.substring(3);	
	if (externalTrigram == internalTrigram){ return externalTrigram; }
	
	hexagramCode = toggleAt(hexagramCode, 3);
	hexagramCode = toggleAt(hexagramCode, 2);
	hexagramCode = toggleAt(hexagramCode, 1);
	externalTrigram = hexagramCode.substring(0, 3);
	internalTrigram = hexagramCode.substring(3);	
	if (externalTrigram == internalTrigram){ return externalTrigram; }
	
	return null;
}

/*
Change the character at the specified position (1-based and starting from right, i.e.
position 1 is the rightmost character) from 0 to 1 or from 1 to 0.
E.g. toggleAt('100', 1) -> '101'
	toggleAt('100', 2) -> '110'
*/
function toggleAt(value, position){
	if (!value) { return ''; }
	
	var index = value.length - position,
		newChar = (value[index] == '0' ? '1' : '0'),
		newValue = value.substring(0, index) + newChar + value.substring(index + 1);	
	return newValue;
}

/*
@changingMonogram: (1-based and starting from right, i.e.position 1 is the rightmost character)

E.g. getChangedHexagram('100110', 3); -> '100011'
*/
function getChangedHexagram(hexagramCode, changingMonogram){
	return toggleAt(hexagramCode, changingMonogram);
}

/*
E.g. getSupportingHexagram('110011') -> '100001'
*/
function getSupportingHexagram(hexagramCode){
	return hexagramCode.substring(1, 4) + hexagramCode.substring(2,	5);
}

/*
Xác định cung quẻ 
Suy từ quẻ chủ ra quẻ biến và quẻ hỗ
*/

/*
Structure of hexagram object:
{
	name: 'Phong Thiên Tiểu Súc',	
	type: 'Chủ', // Các giá trị khác là 'Biến', 'Hỗ'
	group: 'Phong Mộc', // Cho biết cung của quẻ
	slogan: 'Mật vân bất vũ (Mây kéo đến đen trời mà không mưa)',
	description: '',
	monograms: [
		{ value: 0, description: ['Động', 'Quan quỷ', 'Thanh long'] },
		{ value: 1, description: ['Thê tài', 'Thanh long'] },
		...
	]
}
*/
function drawHexagram(canvas, hexagram){
	var builder = new StringBuilder();
	builder
		.append("<table class='tinh-que'><col width='100'/><col width='1*'/>")		
		.append("<tr><td class='ten-que' colspan='2'>Quẻ {0}: {1} - Nhóm {2}</td></tr>".format(hexagram.type, hexagram.name, hexagram.group));
		
	var monograms = hexagram.monograms, monogram, cssClass;
	for(var i = monograms.length - 1; i >=0; i--){
		monogram = monograms[i];
		cssClass = (monogram.value == 1 ? 'hao-duong' : 'hao-am'),
		builder.append("<tr><td class='{0}'></td><td>{1}</td></tr>".format(cssClass, monogram.description.join(', ')));
	}
		
	builder
		.append("<tr><td class='thong-tin-que' colspan='2'><p>Triệu: {0}</p><p>{1}</p></td></tr>".format(hexagram.slogan, hexagram.description))
		.append("</table>");
	
	canvas.append(builder.toString());
}

function initializeElements(){
	var i, 
		cbxYear = $('#cbxYear'),
		cbxMonth = $('#cbxMonth'),
		cbxDay = $('#cbxDay'),
		cbxDayName = $('#cbxDayName'),
		cbxHour = $('#cbxHour'),
		allMatches = getAllMatches().sort(function(a, b){
			if (a.name > b.name) { return 1; }
			if (a.name < b.name) { return -1; }
			return 0;
		});
	
	for(i = 0; i < years.length; i++){
		cbxYear.append("<option value='{0}'>{1}</option>".format(i+1, years[i]));
	}
	
	for(i = 1; i <= 12; i++){
		cbxMonth.append("<option value='{0}'>{1}</option>".format(i, i));
	}
	
	for(i = 1; i <= 31; i++){
		cbxDay.append("<option value='{0}'>{1}</option>".format(i, i));
	}
	
	for(i = 0; i < allMatches.length; i++){
		cbxDayName.append("<option value='{0}'>{1}</option>".format(allMatches[i].name, allMatches[i].name));
	}
	
	for(i = 1; i <= 12; i++){
		cbxHour.append("<option value='{0}'>{1}</option>".format(i, i));
	}
	
	$('#btnTinhQue').click(function(e){
		e.preventDefault();
		
		var year = cbxYear.val(), 
			month = cbxMonth.val(),
			day = cbxDay.val(),
			dayName = cbxDayName.val(),
			hour = cbxHour.val();
		var hexagram = buildHexagram(year, month, day, hour, 'Giáp Dần');
		var canvas = $('#result');
		canvas.html('');
		drawHexagram(canvas, hexagram);
	});
}

$(function(){
	initializeElements();
});