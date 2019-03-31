// Ngũ hành
var FiveElements = {1: 'Kim', 2: 'Thủy', 3: 'Mộc', 4: 'Hỏa', 5: 'Thổ'};

// Phần Ngũ hành ko quan trọng đối với Thiên Can
var HeavenlyStems = {
	1: { name: 'Giáp', value: 6, element: 3 },
	2: { name: 'Ất', value: 2, element: 3 },
	3: { name: 'Bính', value: 8, element: 4 },
	4: { name: 'Đinh', value: 7, element: 4 },
	5: { name: 'Mậu', value: 1, element: 5 },
	6: { name: 'Kỷ', value: 9, element: 5 },
	7: { name: 'Canh', value: 3, element: 1 },
	8: { name: 'Tân', value: 4, element: 1 },
	9: { name: 'Nhâm', value: 6, element: 2 },
	10: { name: 'Quý', value: 2, element: 2 }
};

var HeavenlyStemsByName = {
	'Giáp': 1, 'Ất': 2, 'Bính': 3, 'Đinh': 4, 'Mậu': 5,
	'Kỷ': 6, 'Canh': 7, 'Tân': 8, 'Nhâm': 9, 'Quý': 10
};

var EarthlyBranches = {
	1: { name: 'Tý', value: 6, element: 2 },
	2: { name: 'Sửu', value: 5, element: 5 },
	3: { name: 'Dần', value: 3, element: 3 },
	4: { name: 'Mão', value: 8, element: 3 },
	5: { name: 'Thìn', value: 5, element: 5 },
	6: { name: 'Tỵ', value: 2, element: 4 },
	7: { name: 'Ngọ', value: 7, element: 4 },
	8: { name: 'Mùi', value: 10, element: 5 },
	9: { name: 'Thân', value: 4, element: 1 },
	10: { name: 'Dậu', value: 9, element: 1 },
	11: { name: 'Tuất', value: 10, element: 5 },
	12: { name: 'Hợi', value: 1, element: 2 },
};

var MonthsByEarthlyBranches = {1: 3, 2: 4, 3: 5, 4: 6, 5: 7, 6: 8, 7: 9, 8: 10, 9: 11, 10: 12, 11: 1, 12: 2};

/*
Dựa trên trị số Tiên Thiên, phương vị Hậu Thiên
secondValue = trị số Hậu Thiên
trigrams = đơn quái (từ tự chế)
externalMatch = nạp Giáp cho ngoại quái
internalMatch = nạp Giáp cho nội quái
*/
var Trigrams = {
	1: {
		name: 'Càn',
		code: '111',
		element: 1,
		direction: 'Tây Bắc',
		secondValue: 6,
		externalMatch: ['Nhâm Tuất', 'Nhâm Thân', 'Nhâm Ngọ'],
		internalMatch: ['Giáp Thìn', 'Giáp Dần', 'Giáp Tý']
	},
	2: {
		name: 'Đoài',
		code: '011',
		element: 1,
		direction: 'Tây',
		secondValue: 7,
		externalMatch: ['Đinh Mùi', 'Đinh Dậu', 'Đinh Hợi'],
		internalMatch: ['Đinh Sửu', 'Đinh Mão', 'Đinh Tỵ']		
	},
	3: {
		name: 'Ly',
		code: '101',
		element: 4,
		direction: 'Nam',
		secondValue: 9,
		externalMatch: ['Kỷ Tỵ', 'Kỷ Mùi', 'Kỷ Dậu'],
		internalMatch: ['Kỷ Hợi', 'Kỷ Sửu', 'Kỷ Mão']
	},
	4: {
		name: 'Chấn',
		code: '001',
		element: 3,
		direction: 'Đông',
		secondValue: 3,
		externalMatch: ['Canh Tuất', 'Canh Thân', 'Canh Ngọ'],
		internalMatch: ['Canh Thìn', 'Canh Dần', 'Canh Tý']
	},
	5: {
		name: 'Tốn',
		code: '110',
		element: 3,
		direction: 'Đông Nam',
		secondValue: 4,
		externalMatch: ['Tân Mão', 'Tân Tỵ', 'Tân Mùi'],
		internalMatch: ['Tân Dậu', 'Tân Hợi', 'Tân Sửu']
	},
	6: {
		name: 'Khảm',
		code: '010',
		element: 2,
		direction: 'Bắc',
		secondValue: 6,
		externalMatch: ['Mậu Tý', 'Mậu Tuất', 'Mậu Thân'],
		internalMatch: ['Mậu Ngọ', 'Mậu Thìn', 'Mậu Dần']
	},
	7: {
		name: 'Cấn',
		code: '100',
		element: 5,
		direction: 'Đông Bắc',
		secondValue: 8,		
		externalMatch: ['Bính Dần', 'Bính Tý', 'Bính Tuất'],
		internalMatch: ['Bính Thân', 'Bính Ngọ', 'Bính Thìn']
	},
	8: {
		name: 'Khôn',
		code: '000',
		element: 5,
		direction: 'Tây Nam',
		secondValue: 2,
		externalMatch: ['Quý Dậu', 'Quý Hợi', 'Quý Sửu'],
		internalMatch: ['Ất Mão', 'Ất Tỵ', 'Ất Mùi']		
	}
};

// fateIndex: hào Thế
// slogan: triệu
var Hexagrams = {
	1: {
		code: 11,
		group: 1,
		name: 'Bát Thuần Càn',
		fateIndex: 6,
		slogan: 'Khốn long đắc thủy',
		description: ''
	},
	2: {
		code: 15,
		group: 1,
		name: 'Thiên Phong Cấu',
		fateIndex: 1,
		slogan: 'Tha hương ngộ hữu',
		description: ''
	},
	3: {
		code: 17,
		group: 1,
		name: 'Thiên Sơn Độn',
		fateIndex: 2,
		slogan: 'Nùng vân tế nhật',
		description: ''
	},
	4: {
		code: 18,
		group: 1,
		name: 'Thiên Địa Bỉ',
		fateIndex: 3,
		slogan: 'Hổ lạc hàm khanh',
		description: ''
	},
	5: {
		code: 58,
		group: 1,
		name: 'Phong Địa Quan',
		fateIndex: 4,
		slogan: 'Hạn bồng phùng hà',
		description: ''
	},
	6: {
		code: 78,
		group: 1,
		name: 'Sơn Địa Bác',
		fateIndex: 5,
		slogan: 'Ưng thước đồng lâm',
		description: ''
	},
	7: {
		code: 38,
		group: 1,
		name: 'Hỏa Địa Tấn',
		fateIndex: 4,
		slogan: 'Sử địa đắc kim',
		description: ''
	},
	8: {
		code: 31,
		group: 1,
		name: 'Hỏa Thiên Đại Hữu',
		fateIndex: 3,
		slogan: 'Nhuyễn mộc nô tước',
		description: ''
	},
	
	9: {
		code: 66,
		group: 2,
		name: 'Khảm Vi Thủy',
		fateIndex: 6,
		slogan: 'Hải đễ lao nguyệt',
		description: ''
	},
	10: {
		code: 62,
		group: 2,
		name: 'Thủy Trạch Tiết',
		fateIndex: 1,
		slogan: 'Trảm tướng phong thần',
		description: ''
	},
	11: {
		code: 64,
		group: 2,
		name: 'Thủy Lôi Truân',
		fateIndex: 2,
		slogan: 'Loạn tu vô đầu',
		description: ''
	},
	12: {
		code: 63,
		group: 2,
		name: 'Thủy Hỏa Ký Tế',
		fateIndex: 3,
		slogan: 'Kim bảng đề danh',
		description: ''
	},
	13: {
		code: 23,
		group: 2,
		name: 'Trạch Hỏa Cách',
		fateIndex: 4,
		slogan: 'Hạn miêu đắc vũ',
		description: ''
	},
	14: {
		code: 43,
		group: 2,
		name: 'Lôi Hỏa Phong',
		fateIndex: 5,
		slogan: 'Cổ kính trùng minh',
		description: ''
	},
	15: {
		code: 83,
		group: 2,
		name: 'Địa Hỏa Minh Di',
		fateIndex: 4,
		slogan: 'Qua hà chiết kiều',
		description: ''
	},
	16: {
		code: 86,
		group: 2,
		name: 'Địa Thủy Sư',
		fateIndex: 3,
		slogan: 'Mã đáo thành công',
		description: ''
	},
	
	17: {
		code: 77,
		group: 3,
		name: 'Cấn Vi Sơn',
		fateIndex: 6,
		slogan: 'Sơn trạch trùng điệp',
		description: ''
	},
	18: {
		code: 73,
		group: 3,
		name: 'Sơn Hỏa Bí',
		fateIndex: 1,
		slogan: 'Trần thế đắc khai',
		description: ''
	},
	19: {
		code: 71,
		group: 3,
		name: 'Sơn Thiên Đại Súc',
		fateIndex: 2,
		slogan: 'Hỷ khí danh môn',
		description: ''
	},
	20: {
		code: 72,
		group: 3,
		name: 'Sơn Trạch Tổn',
		fateIndex: 3,
		slogan: 'Tổn kỷ lợi nhân',
		description: ''
	},
	21: {
		code: 32,
		group: 3,
		name: 'Hỏa Trạch Khuê',
		fateIndex: 4,
		slogan: 'Thái công bất ngộ',
		description: ''
	},
	22: {
		code: 12,
		group: 3,
		name: 'Thiên Trạch Lý',
		fateIndex: 5,
		slogan: 'Phượng minh kỳ sơn',
		description: ''
	},
	23: {
		code: 52,
		group: 3,
		name: 'Phong Trạch Trung Phu',
		fateIndex: 4,
		slogan: 'Hành tẩu bạc băng',
		description: ''
	},
	24: {
		code: 57,
		group: 3,
		name: 'Phong Sơn Tiệm',
		fateIndex: 3,
		slogan: 'Hồng nhạn cao phi',
		description: ''
	},
	
	25: {
		code: 44,
		group: 4,
		name: 'Chấn Vi Lôi',
		fateIndex: 6,
		slogan: 'Thiên hạ dương danh',
		description: ''
	},
	26: {
		code: 48,
		group: 4,
		name: 'Lôi Địa Dự',
		fateIndex: 1,
		slogan: 'Thanh Long đắc vị',
		description: ''
	},
	27: {
		code: 46,
		group: 4,
		name: 'Lôi Thủy Giải',
		fateIndex: 2,
		slogan: 'Ngũ quan thoát nạn',
		description: ''
	},
	28: {
		code: 45,
		group: 4,
		name: 'Lôi Phong Hằng',
		fateIndex: 3,
		slogan: 'Ngư lai chòng võng',
		description: ''
	},
	29: {
		code: 85,
		group: 4,
		name: 'Địa Phong Thăng',
		fateIndex: 4,
		slogan: 'Chỉ nhật cao thăng',
		description: ''
	},
	30: {
		code: 65,
		group: 4,
		name: 'Thủy Phong Tỉnh',
		fateIndex: 5,
		slogan: 'Khê tỉnh sinh tuyền',
		description: ''
	},
	31: {
		code: 25,
		group: 4,
		name: 'Trạch Phong Đại Quá',
		fateIndex: 4,
		slogan: 'Dạ mộng kim ngân',
		description: ''
	},
	32: {
		code: 24,
		group: 4,
		name: 'Trạch Lôi Tùy',
		fateIndex: 3,
		slogan: 'Suy xa khảo nha',
		description: ''
	},
	
	33: {
		code: 44,
		group: 5,
		name: 'Tốn Vi Phong',
		fateIndex: 6,
		slogan: 'Cô chu đắc thủy',
		description: ''
	},
	34: {
		code: 51,
		group: 5,
		name: 'Phong Thiên Tiểu Súc',
		fateIndex: 1,
		slogan: 'Mật vân bất vũ',
		description: ''
	},
	35: {
		code: 53,
		group: 5,
		name: 'Phong Hỏa Gia Nhân',
		fateIndex: 2,
		slogan: 'Quan thủ lân chi',
		description: ''
	},
	36: {
		code: 54,
		group: 5,
		name: 'Phong Lôi Ích',
		fateIndex: 3,
		slogan: 'Khô mộc khai hoa',
		description: ''
	},
	37: {
		code: 14,
		group: 5,
		name: 'Thiên Lôi Vô Vọng',
		fateIndex: 4,
		slogan: 'Điểu bị lũng lao',
		description: ''
	},
	38: {
		code: 34,
		group: 5,
		name: 'Hỏa Lôi Phệ Hạp',
		fateIndex: 5,
		slogan: 'Cô nhân ngộ thực',
		description: ''
	},
	39: {
		code: 74,
		group: 5,
		name: 'Sơn Lôi Di',
		fateIndex: 4,
		slogan: 'Vị thủy phong hiền',
		description: ''
	},
	40: {
		code: 75,
		group: 5,
		name: 'Sơn Phong Cổ',
		fateIndex: 3,
		slogan: 'Súy ma phân đao',
		description: ''
	},
	
	41: {
		code: 33,
		group: 6,
		name: 'Bát Thuần Ly',
		fateIndex: 6,
		slogan: 'Thiên quan tứ phước',
		description: ''
	},
	42: {
		code: 37,
		group: 6,
		name: 'Hỏa Sơn Lữ',
		fateIndex: 1,
		slogan: 'Tức điểu phẫn sào',
		description: ''
	},
	43: {
		code: 35,
		group: 6,
		name: 'Hỏa Phong Đỉnh',
		fateIndex: 2,
		slogan: 'Ngư ông đắc lợi',
		description: ''
	},
	44: {
		code: 36,
		group: 6,
		name: 'Hỏa Thủy Vị Tế',
		fateIndex: 3,
		slogan: 'Tiểu hồ ngật tế',
		description: ''
	},
	45: {
		code: 76,
		group: 6,
		name: 'Sơn Thủy Mông',
		fateIndex: 4,
		slogan: 'Tiểu quỷ thâu tiên',
		description: ''
	},
	46: {
		code: 56,
		group: 6,
		name: 'Phong Thủy Hoán',
		fateIndex: 5,
		slogan: 'Cách hà vọng kim',
		description: ''
	},
	47: {
		code: 16,
		group: 6,
		name: 'Thiên Thủy Tụng',
		fateIndex: 4,
		slogan: 'Nhị nhân tranh lộ',
		description: ''
	},
	48: {
		code: 13,
		group: 6,
		name: 'Thiên Hỏa Đồng Nhân',
		fateIndex: 3,
		slogan: 'Tiên nhân chỉ lộ',
		description: ''
	},
	
	49: {
		code: 88,
		group: 7,
		name: 'Khôn Vi Địa',
		fateIndex: 6,
		slogan: 'Ngạ hổ đắc thực',
		description: ''
	},
	50: {
		code: 84,
		group: 7,
		name: 'Địa Lôi Phục',
		fateIndex: 1,
		slogan: 'Phu thê phản mục',
		description: ''
	},
	51: {
		code: 82,
		group: 7,
		name: 'Địa Trạch Lâm',
		fateIndex: 2,
		slogan: 'Phát chính thi nhân',
		description: ''
	},
	52: {
		code: 81,
		group: 7,
		name: 'Địa Thiên Thái',
		fateIndex: 3,
		slogan: 'Hỉ báo tam nguyên',
		description: ''
	},
	53: {
		code: 41,
		group: 7,
		name: 'Lôi Thiên Đại Tráng',
		fateIndex: 4,
		slogan: 'Cộng sự đắc mộc',
		description: ''
	},
	54: {
		code: 31,
		group: 7,
		name: 'Trạch Thiên Quải',
		fateIndex: 5,
		slogan: 'Du phong thoát võng',
		description: ''
	},
	55: {
		code: 61,
		group: 7,
		name: 'Thủy Thiên Nhu',
		fateIndex: 4,
		slogan: 'Minh châu xuất thổ',
		description: ''
	},
	56: {
		code: 68,
		group: 7,
		name: 'Thủy Địa Tỷ',
		fateIndex: 3,
		slogan: 'Thuyền đắc thuận phong',
		description: ''
	},
	
	57: {
		code: 22,
		group: 8,
		name: 'Đoài Vi Trạch',
		fateIndex: 6,
		slogan: 'Lưỡng trạch tương tứ',
		description: ''
	},
	58: {
		code: 26,
		group: 8,
		name: 'Trạch Thủy Khốn',
		fateIndex: 1,
		slogan: 'Loát hãn du thê',
		description: ''
	},
	59: {
		code: 28,
		group: 8,
		name: 'Trạch Địa Tụy',
		fateIndex: 2,
		slogan: 'Ngự hóa vi long',
		description: ''
	},
	60: {
		code: 27,
		group: 8,
		name: 'Trạch Sơn Hàm',
		fateIndex: 3,
		slogan: 'Manh nha xuất thổ',
		description: ''
	},
	61: {
		code: 67,
		group: 8,
		name: 'Thủy Sơn Kiển',
		fateIndex: 4,
		slogan: 'Vũ tuyết tải đồ',
		description: ''
	},
	62: {
		code: 87,
		group: 8,
		name: 'Địa Sơn Khiêm',
		fateIndex: 5,
		slogan: 'Nhị nhân phân kim',
		description: ''
	},
	63: {
		code: 47,
		group: 8,
		name: 'Lôi Sơn Tiểu Quá',
		fateIndex: 4,
		slogan: 'Phi điểu di âm',
		description: ''
	},
	64: {
		code: 42,
		group: 8,
		name: 'Lôi Trạch Quy Muội',
		fateIndex: 3,
		slogan: 'Duyên mộc cầu ngư',
		description: ''
	}
};

// Lục thú
var SixAnimals = ['Thanh long', 'Chu tước', 'Câu trần', 'Đằng xà', 'Bạch hổ', 'Huyền vũ'];

// Cho biết lục thú ở sơ hào, dựa theo thiên can của ngày dự báo
// Ví dụ: 1: 0 => Vào ngày Giáp thì sơ hào là Thanh long, hào nhị là Chu tước, ...
var SixAnimalsByHeavenlyStems = {
	1: 0, 2: 0,
	3: 1, 4: 1,
	5: 2,
	6: 3,
	7: 4, 8: 4,
	9: 5, 10: 5
};

// Nạp Thân cho hào bằng cách so ngũ hành sinh khắc của chi của nạp Giáp và cung/nhóm của quẻ.
// Ví dụ: Quẻ Lôi Hỏa Phong thuộc nhóm Khảm - Thủy. Vậy hào nào có địa chi thuộc Thủy sẽ là Huynh Đệ. 
// Hào 6 có nạp Giáp là Canh Tuất - Thổ. Do Thổ khắc Thủy nên hào 6 có Thân là Quan Quỷ.
var SixRelations = ['Phụ Mẫu', 'Huynh Đệ', 'Tử Tôn', 'Thê Tài', 'Quan Quỷ'];

// Main Subject: Quải Thần
var MainSubjectsByEarthlyBranch = {
	11: 1, 5: 1,
	12: 2, 6: 2,
	1: 2, 7: 2,
	2: 3, 8: 3,
	3: 5, 9: 5,
	4: 6, 10: 6
};

// Vòng trường sinh
var LifeCycle = ['Trường sinh', 'Mộc dục', 'Quan đới', 'Lâm quan', 'Đế vượng', 'Suy', 'Bệnh', 'Tử', 'Mộ', 'Tuyệt', 'Thai', 'Dưỡng'];