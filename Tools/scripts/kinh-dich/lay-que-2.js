var DiaChi = {
	1: 'Tí',
	2: 'Sửu',
	3: 'Dần',
	4: 'Mão',
	5: 'Thìn',
	6: 'Tị',
	7: 'Ngọ',
	8: 'Mùi',
	9: 'Thân',
	10: 'Dậu',
	11: 'Tuất',
	12: 'Hợi'
};

var DonQuaiDict = {
	1: ['Càn', 'Thiên', [1, 1, 1]], // Tên-quẻ, Tên-trong-trùng-quái, [Hào-từ-trên-xuống]
	2: ['Đoài', 'Trạch', [0, 1, 1]],
	3: ['Ly', 'Hoả', [1, 0, 1]],
	4: ['Chấn', 'Lôi', [0, 0, 1]],
	5: ['Tốn', 'Phong', [1, 1, 0]],
	6: ['Khảm', 'Thủy', [0, 1, 0]],
	7: ['Cấn', 'Sơn', [1, 0, 0]],
	8: ['Khôn', 'Địa', [0, 0, 0]]
};

var CungChinhByNameDict = {
	'Càn': 1,
	'Đoài': 2,
	'Ly': 3,
	'Chấn': 4,
	'Tốn': 5,
	'Khảm': 6,
	'Cấn': 7,
	'Khôn': 8,
};

var TrungQuaiDict = {
	1: ['Càn', 'Càn', [1 , 1]], // Tên-quẻ, Cung-chính, [Đơn-quái-cấu-thành]
	2: ['Quải', 'Khôn', [2 , 1]], 
	3: ['Đại Hữu', 'Càn', [3 , 1]], 
	4: ['Đại Tráng', 'Khôn', [4 , 1]], 
	5: ['Tiểu Súc', 'Tốn', [5 , 1]], 
	6: ['Nhu', 'Khôn', [6 , 1]], 
	7: ['Đại Súc', 'Cấn', [7 , 1]], 
	8: ['Thái', 'Khôn', [8 , 1]], 
	
	9: ['Lý', 'Cấn', [1 , 2]], 
	10: ['Đoài', 'Đoài', [2 , 2]], 
	11: ['Khuê', 'Cấn', [3 , 2]], 
	12: ['Quy Muội', 'Đoài', [4 , 2]], 
	13: ['Trung Phù', 'Cấn', [5 , 2]], 
	14: ['Tiết', 'Khảm', [6 , 2]], 
	15: ['Tổn', 'Cấn', [7 , 2]], 
	16: ['Lâm', 'Khôn', [8 , 2]], 
	
	17: ['Đồng Nhân', 'Ly', [1 , 3]], 
	18: ['Cách', 'Khảm', [2 , 3]], 
	19: ['Ly', 'Ly', [3 , 3]], 
	20: ['Phong', 'Khảm', [4 , 3]], 
	21: ['Gia Nhân', 'Tốn', [5 , 3]], 
	22: ['Ký Tế', 'Khảm', [6 , 3]], 
	23: ['Bí', 'Cấn', [7 , 3]], 
	24: ['Minh Di', 'Khảm', [8 , 3]], 
	
	25: ['Vô Vọng', 'Tốn', [1 , 4]], 
	26: ['Tùy', 'Chấn', [2 , 4]], 
	27: ['Phệ Hạp', 'Tốn', [3 , 4]], 
	28: ['Chấn', 'Chấn', [4 , 4]], 
	29: ['Ích', 'Tốn', [5 , 4]], 
	30: ['Truân', 'Khảm', [6 , 4]], 
	31: ['Di', 'Tốn', [7 , 4]], 
	32: ['Phục', 'Khôn', [8 , 4]], 
	
	33: ['Cấu', 'Càn', [1 , 5]], 
	34: ['Đại Quá', 'Chấn', [2 , 5]], 
	35: ['Đỉnh', 'Ly', [3 , 5]], 
	36: ['Hằng', 'Chấn', [4 , 5]], 
	37: ['Tốn', 'Tốn', [5 , 5]], 
	38: ['Tỉnh', 'Chấn', [6 , 5]], 
	39: ['Cổ', 'Tốn', [7 , 5]], 
	40: ['Thăng', 'Chấn', [8 , 5]], 
	
	41: ['Tụng', 'Ly', [1 , 6]], 
	42: ['Khốn', 'Đoài', [2 , 6]], 
	43: ['Vị Tế', 'Ly', [3 , 6]], 
	44: ['Giải', 'Chấn', [4 , 6]], 
	45: ['Hoán', 'Ly', [5 , 6]], 
	46: ['Khảm', 'Khảm', [6 , 6]], 
	47: ['Mông', 'Ly', [7 , 6]], 
	48: ['Sư', 'Khảm', [8 , 6]], 
	
	49: ['Độn', 'Càn', [1 , 7]], 
	50: ['Hàm', 'Đoài', [2 , 7]], 
	51: ['Lữ', 'Ly', [3 , 7]], 
	52: ['Tiểu Quá', 'Đoài', [4 , 7]], 
	53: ['Tiệm', 'Cấn', [5 , 7]], 
	54: ['Kiển', 'Đoài', [6 , 7]], 
	55: ['Cấn', 'Cấn', [7 , 7]], 
	56: ['Khiêm', 'Đoài', [8 , 7]], 
	
	57: ['Bĩ', 'Càn', [1 , 8]], 
	58: ['Tụy', 'Đoài', [2 , 8]], 
	59: ['Tấn', 'Càn', [3 , 8]], 
	60: ['Dự', 'Chấn', [4 , 8]], 
	61: ['Quan', 'Càn', [5 , 8]], 
	62: ['Tỉ', 'Khôn', [6 , 8]], 
	63: ['Bác', 'Càn', [7 , 8]], 
	64: ['Khôn', 'Khôn', [8 , 8]]
};

var TrungQuaiDict2 = {};
for (var key in TrungQuaiDict) {
	var trungQuai = TrungQuaiDict[key],
		tenQue = trungQuai[0],
		cungChinh = trungQuai[1],
		donQuaiArray = trungQuai[2], 
		thuongQuaiKey = donQuaiArray[0],
		thuongQuai = DonQuaiDict[thuongQuaiKey],
		haQuaiKey = donQuaiArray[1],
		haQuai = DonQuaiDict[haQuaiKey];
		
	TrungQuaiDict2[key] = {
		stt: key,
		tenQue: thuongQuaiKey == haQuaiKey ? ('Bát Thuần ' + tenQue) : (thuongQuai[1] + ' ' + haQuai[1] + ' ' + tenQue),
		cungChinh: cungChinh,
		sttCungChinh: CungChinhByNameDict[cungChinh],
		haoArray: thuongQuai[2].concat(haQuai[2])
	};	
}

var KetQuaPhoiCung = ['Sinh khí', 'Diên niên', 'Thiên y', 'Phục vị', 'Ngũ quỷ', 'Lục sát', 'Họa hại', 'Tuyệt mệnh'];

var BangPhoiCung = {
	6: [5, 3, 4, 6, 7, 1, 2, 8],
	8: [7, 1, 2, 8, 5, 3, 4, 6],
	4: [3, 5, 6, 4, 1, 7, 8, 2],
	5: [6, 4, 3, 5, 8, 2, 1, 7],
	1: [2, 8, 7, 1, 4, 6, 5, 3],
	2: [1, 7, 8, 2, 3, 5, 6, 4],
	7: [8, 2, 1, 7, 6, 4, 3, 5],
	3: [4, 6, 5, 3, 2, 8, 7, 1]
};


// Khởi tạo UI
function populateOptions($select, from, to) {
	for (var i = from; i <= to; i++) {
		$select.append("<option value='{0}'>{0}</option".format(i));
	}
}

function populateOptionsFromDictionary($select, dictionary, valueGetter){
	if (valueGetter == null){
		valueGetter = function(dict, key){
			return dict[key];
		}
	}
	
	for (var key in dictionary) {
		$select.append("<option value='{0}'>{1}</option".format(key, valueGetter(dictionary, key)));
	}
}

var $cbxYear = $('#cbxYear');
populateOptionsFromDictionary($cbxYear, DiaChi, function(dict, key){ return dict[key]; });

var $cbxMonth = $('#cbxMonth');
populateOptions($cbxMonth, 1, 12);

var $cbxDayName = $('#cbxDayName');
populateOptions($cbxDayName, 1, 31);

var $cbxHour = $('#cbxHour');
populateOptions($cbxHour, 1, 12);

var $cbxHaoDong = $('#cbxHaoDong');
populateOptions($cbxHaoDong, 1, 12);

var $cbxQueThuong = $('#cbxQueThuong');
populateOptionsFromDictionary($cbxQueThuong, TrungQuaiDict2, function(dict, key){ return key + ' - ' + dict[key].tenQue; })

var $cbxQueHa = $('#cbxQueHa');
populateOptionsFromDictionary($cbxQueHa, TrungQuaiDict2, function(dict, key){ return key + ' - ' + dict[key].tenQue; })

$('#btnTinhQueHuuThuong').click(function(e){
	e.preventDefault();
	
	var sttThuongTrungQuai = (getVal($cbxYear) + getVal($cbxMonth) + getVal($cbxDayName)) % 64,
		sttHaTrungQuai = (sttThuongTrungQuai + getVal($cbxHour)) % 64,
		sttHaoDong = (sttThuongTrungQuai + getVal($cbxHour)) % 12;
		
	var queDict = tinhQue(sttThuongTrungQuai, sttHaTrungQuai, sttHaoDong);
	hienQue(queDict);
});

$('#btnTinhQueVoThuong').click(function(e){
	e.preventDefault();
	
	var sttThuongTrungQuai = getVal($cbxQueThuong),
		sttHaTrungQuai = getVal($cbxQueHa),
		sttHaoDong = getVal($cbxHaoDong);
		
	var queDict = tinhQue(sttThuongTrungQuai, sttHaTrungQuai, sttHaoDong);
	hienQue(queDict);
});

function getVal($comboBox){
	return parseInt($comboBox.val());
}

function tinhQue(sttThuongTrungQuai, sttHaTrungQuai, sttHaoDong){
	var thuongTrungQuai = TrungQuaiDict2[sttThuongTrungQuai],
		haTrungQuai = TrungQuaiDict2[sttHaTrungQuai],
		haoArray_Merged = thuongTrungQuai.haoArray.concat(haTrungQuai.haoArray),
		haoArrayCuaQuePhu = tinhHaoArrayCuaQuePhu(haoArray_Merged);
		haoArrayCuaQuePhu_Merged = haoArrayCuaQuePhu[0].concat(haoArrayCuaQuePhu[1]);
	
	sttHaoDong = 12 - sttHaoDong; // inputted sttHaoDong is bottom up and 1-based, while haoArray is top down and 0-based. 
	// TODO Tính Phối cung
	
	var queDict = {
		'Chính': { thuongQuai: thuongTrungQuai, haQuai: haTrungQuai },
		'Hộ': timQueDuaTrenHaoArray(tinhHaoArrayCuaQueHo(haoArray_Merged)),
		'Hoán': timQueDuaTrenHaoArray(tinhHaoArrayCuaQueHoan(haoArray_Merged)),
		'Phụ': timQueDuaTrenHaoArray(haoArrayCuaQuePhu),
		'Hộ 1': timQueDuaTrenHaoArray(tinhHaoArrayCuaQueHo(haoArrayCuaQuePhu_Merged)),
		'Hoán 1': timQueDuaTrenHaoArray(tinhHaoArrayCuaQueHoan(haoArrayCuaQuePhu_Merged)),
		'Biến': timQueDuaTrenHaoArray(tinhHaoArrayCuaQueBien(haoArray_Merged, sttHaoDong))
	};
	
	var cungArray;
	
	for (var key in queDict){
		var que = queDict[key];
		que.thuongQuai = $.extend({}, que.thuongQuai);
		que.haQuai = $.extend({}, que.haQuai);
		
		if (key == 'Chính'){
			var queThe = (sttHaoDong >= 6 ? que.thuongQuai : que.haQuai); // Tất cả các quẻ có hào 6 trở lên động thì quẻ dụng đều là quẻ hạ
			queThe.isThe = true; // Quẻ Thể
			cungArray = BangPhoiCung[queThe.sttCungChinh];			
			break;
		}
	}
	
	for (var key in queDict){
		var que = queDict[key],
			thuongQuai = que.thuongQuai,
			haQuai = que.haQuai;		
		
		if (!thuongQuai.isThe) {
			thuongQuai.ketQuaPhoiCung = KetQuaPhoiCung[cungArray.indexOf(thuongQuai.sttCungChinh)];
		}
		
		if (!haQuai.isThe) {
			haQuai.ketQuaPhoiCung = KetQuaPhoiCung[cungArray.indexOf(haQuai.sttCungChinh)];
		}
	}
	
	return queDict;
}

function tinhHaoArrayCuaQueHo(haoArray){
	return [
		extractArray(haoArray, [1, 2, 3, 4, 5, 6]),
		extractArray(haoArray, [5, 6, 7, 8, 9, 10])
	];
}

function tinhHaoArrayCuaQueHoan(haoArray){
	return [
		extractArray(haoArray, [2, 3, 4, 4, 5, 6]),
		extractArray(haoArray, [5, 6, 7, 7, 8, 9])
	];
}

function tinhHaoArrayCuaQuePhu(haoArray){
	return [
		extractArray(haoArray, [2, 3, 4, 7, 8, 9]),
		extractArray(haoArray, [4, 5, 6, 5, 6, 7])
	];
}

function extractArray(sourceArray, indexes){
	var targetArray = [];
	for(var i = 0; i < indexes.length; i++){
		targetArray.push(sourceArray[indexes[i]]);
	}
	
	return targetArray;
}

function tinhHaoArrayCuaQueBien(haoArray, sttHaoDong){
	var targetArray = [];
	for(var i = 0; i < haoArray.length; i++){
		if (i == sttHaoDong) {			
			targetArray.push(haoArray[i] == 0 ? 1 : 0);
		} else {
			targetArray.push(haoArray[i]);
		}
	}
	
	return [
		targetArray.slice(0, 6),
		targetArray.slice(6)
	];
}

/*
	@haoArray: array containing 2 elements: [haoArrayCuaThuongTrungQuai, haoArrayCuaHaTrungQuai]
*/
function timQueDuaTrenHaoArray(haoArray){
	return {
		thuongQuai: timTrungQuaiTheoHaoArray(haoArray[0]),
		haQuai: timTrungQuaiTheoHaoArray(haoArray[1])
	};
}

function timTrungQuaiTheoHaoArray(haoArray){
	var trungQuai;
	for(var key in TrungQuaiDict2){
		trungQuai = TrungQuaiDict2[key];
		if (areArraysEqual(haoArray, trungQuai.haoArray)){
			return trungQuai;
		}
	}
	
	return null;
}

function areArraysEqual(sourceArray, targetArray){
	if (sourceArray.length != targetArray.length){ return false; }
	
	for(var i = 0; i < sourceArray.length; i++){
		if (sourceArray[i] != targetArray[i]) { return false; }
	}
	
	return true;
}

function hienQue(queDict){
	var $result = $('#result');
	$result.children().remove();
	
	for(var key in queDict){
		var que = queDict[key], 
			thuongTrungQuai = que.thuongQuai,
			haTrungQuai = que.haQuai;
			
		$result.append('<div><p class="ten-que">Quẻ {0}</p><ul><li><b>Thượng:</b> <span class="ten-que-thuong">{1} - {2}</span> <span class="cung-thuong">({3}{4})</span>, {5}</li><li><b>Hạ:</b> <span class="ten-que-ha">{6} - {7}</span> <span class="cung-ha">({8}{9})</span>, {10}</li></ul></div>'
			.format(key, 
				thuongTrungQuai.stt, thuongTrungQuai.tenQue, thuongTrungQuai.cungChinh, 
					thuongTrungQuai.isThe ? '' : (' - ' + thuongTrungQuai.ketQuaPhoiCung), thuongTrungQuai.haoArray, 
				haTrungQuai.stt, haTrungQuai.tenQue, haTrungQuai.cungChinh, 
					haTrungQuai.isThe ? '' : (' - ' + haTrungQuai.ketQuaPhoiCung), haTrungQuai.haoArray));
	}
}

/*
var $result = $('#result');

for(var key in TrungQuaiDict2) {
	var que = TrungQuaiDict2[key];
	$result.append('<p>{3}, {0} - {1} - {2}</p>'.format(que.tenQue, que.cungChinh, que.haoArray, key));
}
*/