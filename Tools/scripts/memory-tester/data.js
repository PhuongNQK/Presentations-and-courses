﻿var data = {
    names: [		
        "Saw: Cái cưa", "Day: Ngày", "Noah: Nhân vật Nô-a", "Ma: Mẹ", "Ra: Chiếc xuồng", "La: Nốt La", "Jaw: Hàm răng", "Key: Chìa khóa", "Fa: Nốt Fa", "Bay: Vùng vịnh"
        , "Daisy: Hoa cúc dại", "Dad: Ba", "Dan: Đai tập võ", "Dam: Cái đập nước", "Dairy: Cuốn nhật kí", "Dale: Thung lũng", "Dash: Chạy thật nhanh", "Deck: Boong tàu", "Daffy: Người ngớ ngẩn", "Dab: Con cá bơn"
        , "NASA: Cơ quan NASA", "Net: Cái vợt", "Nun: Ni cô", "Name(board): (Bảng) tên", "Nero: Bánh xe lửa", "Nail: Móng tay", "Niche: Hốc tường", "Nag: Con ngựa già yếu", "Navy: Hải quân", "Nappy: Cái tã"
        , "Mace: Cái chùy", "Mat: Cái chiếu", "Man: Người đàn ông", "Ma'am: Người phụ nữ", "Mare: Con ngựa đực khỏe mạnh", "Mail: Lá thư", "Mesh: Cái lưới", "Mac Apple: Quả táo bị cắn 1 góc", "Mafia: Ma-phi-a", "Map: Cái bản đồ"
        , "Race: Cuộc đua", "Rat: Con chuột cống", "Rain: Mưa", "RAM: Thanh RAM", "Roar: Tiếng rống", "Rail: Đường ray xe lửa", "Rage: Cơn thịnh nộ", "Rag: Cái giẻ rách", "Roof: Mái nhà", "Ruby: Viên hồng ngọc"
        , "Lace: Dây buộc giày", "Lad: Chú bé canh chuồng ngựa", "Lion: Con sư tử", "Lama: Ông Lạt ma", "Lair: Thần giữ cửa", "Lily: Hoa li", "Lash: Cầm roi quất 1 cái", "Lake: Cái hồ", "Lava: Dung nham", "Lab: Phòng thí nghiệm"
        , "Cheese: Miếng phô mai", "Chat", "Chain: Dây xích", "Chime: Tiếng chuông", "Chair: Cái ghế", "Cello: Cây đàn cello", "Cha-cha: Nhảy múa điệu cha cha cha", "Check: Kiểm tra", "Chef: Đầu bếp trưởng", "Chap: Lỗ nứt"
        , "Case: Cái va-li", "Cat: Con mèo", "Can: Cái hộp đồ hộp", "Cameo: Đá chạm", "Car: Chiếc xe hơi", "Call: Tiếng gọi", "Cash: Tiền mặt", "Cake: Cái bánh", "Cafe: Quán cà phê", "Cap: Cái mũ kếp"
        , "Face: Khuôn mặt", "Fat: Mập mạp", "Fan: Cái quạt", "Fame: Sự nổi tiếng", "Fair: Hội chợ", "Fall: Sự rơi", "Fish: Con cá", "Fag: Sự mệt lả", "Fife: Ống tiêu", "FBI (medal): (Huy hiệu) FBI"
        , "Base: Cái bệ", "Bat: Con dơi", "Ban: Cấm", "Bam: Đóng cửa cái rầm", "Bar: Quán bar", "Ball: Trái banh", "Bash: Cú đánh mạnh", "Bag: Cái giỏ", "Beef: Miếng thịt bò", "Baby: Em bé"
		, "Egg: Cái trứng"
		/*
		, "Cái trứng"
        , "Cái cưa", "Ngày", "Nhân vật Nô-a", "Mẹ", "Chiếc xuồng", "Nốt La", "Hàm răng", "Chìa khóa", "Nốt Fa", "Vùng vịnh"
        , "Hoa cúc dại", "Ba", "Đai tập võ", "Cái đập nước", "Cuốn nhật kí", "Thung lũng", "Chạy thật nhanh", "Boong tàu", "Người ngớ ngẩn", "Con cá bơn"
        , "Cơ quan NASA", "Cái vợt", "Ni cô", "Bảng tên", "Bánh xe lửa", "Móng tay", "Hốc tường", "Con ngựa già yếu", "Hải quân", "Cái tã"
        , "Cái chùy", "Cái chiếu", "Người đàn ông", "Người phụ nữ", "Con ngựa đực khỏe mạnh", "Lá thư", "Cái lưới đánh cá", "Quả táo bị cắn 1 góc", "Ma-phi-a", "Cái bản đồ"
        , "Cuộc đua", "Con chuột cống", "Mưa", "Thanh RAM", "Tiếng rống", "Đường ray xe lửa", "Cơn thịnh nộ", "Cái giẻ rách", "Mái nhà", "Viên hồng ngọc"
        , "Dây buộc giày", "Chú bé canh chuồng ngựa", "Con sư tử", "Ông Lạt ma", "Thần giữ cửa", "Hoa li", "Cầm roi quất 1 cái", "Cái hồ", "Dung nham", "Phòng thí nghiệm"
        , "Miếng phô mai", "Chat", "Dây xích", "Tiếng chuông", "Cái ghế", "Cây đàn cello", "Nhảy múa điệu cha cha cha", "Kiểm tra", "Đầu bếp trưởng", "Lỗ nứt"
        , "Cái va-li", "Con mèo", "Cái hộp đồ hộp", "Đá chạm", "Chiếc xe hơi", "Tiếng gọi", "Tiền mặt", "Cái bánh", "Quán cà phê", "Cái mũ lưỡi trai"
        , "Khuôn mặt", "Mập mạp", "Cái quạt", "Sự nổi tiếng", "Hội chợ", "Sự rơi", "Con cá", "Sự mệt lả", "Ống tiêu", "Huy hiệu FBI"
        , "Cái bệ", "Con dơi", "Cấm", "Đóng cửa cái rầm", "Quán bar", "Trái banh", "Cú đánh mạnh", "Cái giỏ", "Miếng thịt bò", "Em bé"
		, "Egg"
		, "Saw", "Day", "Noah", "Ma", "Ra", "La", "Jaw", "Key", "Fa", "Bay"
		, "Daisy", "Dad", "Dan", "Dam", "Dairy", "Dale", "Dash", "Deck", "Daffy", "Dab"
		, "NASA", "Net", "Nun", "Name", "Nero", "Nail", "Niche", "Nag", "Navy", "Nappy"
		, "Mace", "Mat", "Man", "Ma'am", "Mare", "Mail", "Mesh", "Mac", "Mafia", "Map"
		, "Race", "Rat", "Rain", "RAM", "Roar", "Rail", "Rage", "Rag", "Roof", "Ruby"
		, "Lace", "Lad", "Lion", "Lama", "Lair", "Lash", "Lake", "Lava", "Lab"
		, "Cheese", "Chat", "Chain", "Chime", "Chair", "Cello", "Cha-cha", "Check", "Chef", "Chap"
		, "Case", "Cat", "Can", "Cameo", "Car", "Call", "Cash", "Cake", "Cafe", "Cap"
		, "Face", "Fat", "Fan", "Fame", "Fair", "Fall", "Fish", "Fag", "Fife", "FBI"
		, "Base", "Bat", "Ban", "Bam", "Bar", "Ball", "Bash", "Bag", "Beef", "Baby"

        , "Khủng long", "Giới quý tộc", "Ánh trăng", "Hẻm núi", "Tia chớp", "Nhà thờ", "Máy bay Concorde", "Lửa", "Bức tranh"
        , "Tiếng hát", "Tiếng trống", "Tiếng hí", "Tiếng rên rỉ", "Tiếng gầm rú", "Tiếng bập bềnh", "Tiếng suỵt", "Tiếng cồng chiêng", "Tiếng vĩ cầm", "Tiếng dương cầm"
        , "Rong biển", "Nhựa đường", "Hạt nhục đậu khấu", "Bạc hà", "Hoa hồng", "Da", "Phô mai cứng", "Cà phê", "Rừng", "Bánh mì"
        , "Mỳ ống", "Cà chua", "Đậu phộng", "Xoài", "Cây đại hoàng", "Chanh", "Quả anh đào", "Kem sữa", "Kẹo mềm", "Chuối"
        , "Cát", "Ẩm ướt", "Tờ báo", "Bùn", "Đá", "Bọt xà phòng", "Thạch anh", "Cỏ", "Nhung", "Vỏ cây"
        , "Bơi", "Khiêu vũ", "Ấp ủ", "Trộn lẫn", "Chà xát", "Yêu", "Lắc", "Trèo", "Bay", "Hạnh phúc"
        , "Ngựa vằn", "Chó", "Heo", "Khỉ", "Tê giác", "Voi", "Hươu cao cổ", "Chuột túi", "Cáo", "Gấu"
        , "Chim hải âu", "Con vịt", "Chim họa mi", "Chim ác là", "Chim chào mào", "Chim chiền chiện", "Con gà trống", "Chim bói cá", "Chim hồng hạc", "Con công trống"
        , "Màu đỏ", "Màu cam", "Màu vàng", "Màu xanh lá cây", "Màu xanh dương", "Màu chàm", "Màu tím", "Màu đen", "Màu xám", "Màu trắng"
        , "Mặt trời", "Thủy tinh", "Kim tinh", "Địa cầu", "Hỏa tinh", "Mộc tinh", "Mộc tinh", "Thiên Vương tinh", "Hải Vương tinh", "Diêm Vương tinh"

		*/
		, "Số: number"
        , "(Cái) tạ", "(Cái) nỏ", "Mỏ: beak", "Cái rổ", "Lẩu", "Gà", "Cá", "Voi", "Bò", "Tu sĩ"
        , "Đôi tất", "Tình cảm", "Tắm", "Táo quân", "Thay lá", "Thịt gà", "Ở tù chung", "Thi võ", "Tập", "Nhậu say"
        , "Nút", "Nến", "Nằm", "Nói quá", "Nấu lẩu", "Nấu gà", "Nấu cá", "Núi đá", "Nấu bò", "Mã số"
        , "Mặt", "Mặn", "Mắm", "Mở ra", "Mỹ lai", "Mổ gà", "Mổ cá", "Mẹ về", "Mập", "Quá xá"
        , "Quát", "Quan", "Quê mẹ", "Quỉ quái", "Quỳ lại", "Quá ghê", "Rắc", "Roi da", "Ráp", "Lo xa"
        , "Lót", "Lan", "Lâm", "Lấy roi", "Le lói", "Lẩu gà", "Lẩu cá", "Lở dở", "Lẩu bò", "Ga xe"
        , "Gặt", "Gan", "Gặm", "Ghê quá", "Gói lá", "Gỏi gà", "Gỏi cá", "Gờ đá", "Gỏi bò", "Kiêu sa"
        , "Két", "Kèn", "Kẽm", "Cây quế", "Kỳ lạ", "Cô gái", "Cúc", "Cá đá", "Cặp", "Vè xe"
        , "Vẹt", "Vân", "Vụ mùa", "Dữ quá", "Vô lễ", "Vợ giỏi", "Vạt", "Vi vu", "Vấp", "Bà xã"
        , "Bút: pen", "Bún", "Bám", "Ba rọi", "Bị la", "Bé gái", "Bắc: North", "Bờ vai: shoulder", "Bắp: Corn"

        , "Dinosaur: Khủng long", "Nobles: Giới quý tộc", "Moonlight: Ánh trăng", "Defile: Hẻm núi", "Lightning: Tia chớp", "Church: Nhà thờ", "Concorde: Máy bay Concorde", "Flame: Lửa", "Picture: Bức tranh"
        , "Singing: Tiếng hát", "Drum: Tiếng trống", "Whinny: Tiếng hí", "Moan: Tiếng rên rỉ", "Roar: Tiếng gầm rú", "Tiếng bập bềnh", "Tiếng suỵt", "Gong sound: Tiếng cồng chiêng", "Violin sound: Tiếng vĩ cầm", "Piano sound: Tiếng dương cầm"
        , "Rong biển", "Nhựa đường", "Hạt nhục đậu khấu", "Bạc hà", "Rose: Hoa hồng", "Skin: Da", "Hard cheese: Phô mai cứng", "Coffee: Cà phê", "Forest: Rừng", "Bread: Bánh mì"
        , "Spaghetti: Mỳ ống", "Tomato: Cà chua", "Nut: Đậu phộng", "Mango: Xoài", "Cây đại hoàng", "Lemon: Chanh", "Cherry: Quả anh đào", "Milk cream: Kem sữa", "Soft candy: Kẹo mềm", "Banana: Chuối"
        , "Sand: Cát", "Damp: Ẩm ướt", "Newspaper: Tờ báo", "Mud: Bùn", "Stone: Đá", "Soap bubble: Bọt xà phòng", "Quartz: Thạch anh", "Grass: Cỏ", "Velvet: Nhung", "Bark: Vỏ cây"
        , "Swim: Bơi", "Dance: Khiêu vũ", "Foster: Ấp ủ", "Mix: Trộn lẫn", "Rub: Chà xát", "Love: Yêu", "Shake: Lắc", "Climb: Trèo", "Fly: Bay", "Happy: Hạnh phúc"
        , "Zebra: Ngựa vằn", "Dog: Chó", "Pig: Heo", "Monkey: Khỉ", "Rhinocerous: Tê giác", "Elephant: Voi", "Giraffe: Hươu cao cổ", "Kangaroo: Chuột túi", "Fox: Cáo", "Bear: Gấu"
        , "Albatross: Chim hải âu", "Duck: Con vịt", "Chim họa mi", "Magpie: Chim ác là", "Red-whiskered bulbul: Chim chào mào", "Skylark: Chim chiền chiện", "Cock/Rooster: Con gà trống", "Kingfisher: Chim bói cá", "Flamingo: Chim hồng hạc", "Peacock: Con công trống"
        , "Red: Màu đỏ", "Orange: Màu cam", "Yellow: Màu vàng", "Green: Màu xanh lá cây", "Blue: Màu xanh dương", "Indigo: Màu chàm", "Purple: Màu tím", "Black: Màu đen", "Gray: Màu xám", "White: Màu trắng"
        , "Sun: Mặt trời", "Marcury: Thủy tinh", "Venus: Kim tinh", "Earth: Địa cầu", "Mars: Hỏa tinh", "Jupiter: Mộc tinh", "Saturn: Thổ tinh", "Uranus: Thiên Vương tinh", "Neptune: Hải Vương tinh", "Pluto: Diêm Vương tinh"

        , "Trong 1 khối băng", "Ngập trong dầu", "Bốc cháy ngùn ngụt", "Màu tím rộn ràng", "Vải nhung tuyệt đẹp", "Trong suốt", "Mùi thơm ưa thích", "Giữa con đường đông đúc", "Bồng bềnh trên mây"
        
		, "Từ điển", "Từ láy", "Học sinh", "Giới thiệu", "Nội dung", "Bộ phận", "Đặc biệt", "Phương thức tạo từ", "Đặc sắc", "Linh hoạt"
		, "Thể hiện", "Sự tinh tế", "Sinh động", "Siêu giảm giá", "Mừng", "Năm học mới", "Chi tiết", "Dịch vụ bọc sách", "Cao cấp", "Giao hàng miễn phí"
		, "Nội thành", "Đơn hàng", "Sách mua kèm", "Tổng giá bán", "Mua cả bộ", "Trạng thái", "Giá bìa", "Đánh giá", "Bình luận", "An toàn"
		, "Mã sản phẩm", "Kích thước", "Người đánh giá", "Tài khoản", "Đăng nhập", "Gửi nhận xét", "Danh sách từ", "Sử dụng", "Ngoại lai", "Năng động"
		, "Bốn mùa", "Trời đất", "Cách mạng", "Cải tạo xã hội", "Nhà vua", "Chú thích", "Cộng đồng", "Tương tác", "Hộp bút", "Điện thoại"
		, "bi kịch", "ca kịch", "cải biên", "chế bản", "chủ bút", "diễn tấu", "diễn thuyết", "diễn xuất", "đạo cụ"
		, "đăng tải", "đồ án", "giao hưởng", "hội thoại", "kí giả", "kí lục", "kị sĩ", "kịch trường", "kiến trúc", "mạn đàm", 
		"mĩ cảm", "mĩ hóa", "mĩ thuật", "nghệ thuật", "nguyên tác", "quảng trường", "sáng tác", "tác giả", "tác phẩm", "tạp chí"
		, "tân văn", "tham quan", "tọa đàm", "tốc kí", "triển lãm", "tư liệu", "văn hóa", "văn học", "văn minh", "vũ đài"
		, "xuất bản", "bầu trời", "cống rãnh", "lưu thông", "tài ba", "lực lưỡng", "dũng mãnh", "kiêu phong", "kiêu kì", "phóng túng"
		, "dầu thơm", "dầu xả", "dầu gội đầu", "hành lá", "hành tây", "hương thơm", "nước hoa", "chè chuối", "bánh hột gà", "bà ve chai"
		
		// , "", "", "", "", "", "", "", "", "", ""
	],
	titles: [
		"Đời thay đổi khi ta thay đổi"
        , "Cá heo là loài động vật thông minh nhất trong biển cả"
        , "Đuôi sóc giúp giữ thăng bằng, xác định phương hướng, và làm chăn"
        , "Tổ tiên gấu trúc ăn thịt, tại sao gấu trúc ăn cỏ?"
        , "Gấu trúc - biểu tượng của Tổ chức Bảo vệ động vật hoang dã thế giới"
        , "Thế giới gồm 6 châu: Âu, Á, Mĩ, Phi, Úc, Nam Cực"
        , "Bộ não gồm 2 phần: não trái và não phải"
        , "Não trái thiên về tư duy lô-gích, phân tích, ngôn ngữ"
        , "Não phải thiên về tư duy nghệ thuật, tổng hợp, sáng tạo"
        , "Bộ não được rèn luyện thường xuyên sẽ liên tục phát triển"

        , "Học là con đường ngắn nhất để vươn lên"
        , "Muốn thành công, phải có mục tiêu và nỗ lực làm"
        , "Lời khen không đúng còn tệ hơn lời chê"
        , "Dạy con dạy thuở còn thơ"
        , "Impossible = I'm possible"
        , "Chổi mới quét sạch"
        , "Napoleon lùn: trí khôn đo từ trán tới trời"
        , "Nhìn cọng rơm biết hướng gió thổi"
        , "Vật không cần thì giá nào cũng đắt"
        , "Con vợ khôn lấy thằng chồng dại, như bông hoa lài cắm bãi cứt trâu"
        , "Niềm đam mê là nguồn động lực mà ai cũng cần"
        , "Thành công = Mục tiêu + Đam mê + Nỗ lực + May mắn"
        , "Phòng bệnh hơn chữa bệnh"
        , "Người khôn nói ít hiểu nhiều"
        , "Một câu nhịn, chín câu lành"
        , "Làm việc nhẫn nại, khó mà không thành công"
        , "Không có nghề hèn, chỉ có người hèn"
        , "Nên nói ít, làm nhiều"
        , "Bạn có biết mình may mắn hơn hàng tỉ người?"
        , "Cái khó ló cái khôn"
        , "Nhu cầu là mẹ phát minh"
        , "Học hết sức, chơi hết mình"        
        , "Việc to đừng lo tốn"
        , "Nhất tự vi sư, bán tự vi sư"
        , "Tiên học lễ, hậu học văn"
        , "Lỗ nhỏ đắm thuyền"
        , "Bá nghệ bá tri, vị chi bá láp"
        , "Có công mài sắt, có ngày nên kim"
        , "Ơn chóng quên, oán nhớ đời"
        , "Làm ơn không bao giờ thiệt"
        , "Chưa đặt đít đã đặt mồm"
        , "Người ngu có lúc là thầy người khôn"
        , "Nước lúc trong lúc đục, người lúc nhục lúc vinh"
        , "Biết nhận lỗi là đã sửa được phân nửa"
        , "Nhất nghệ tinh, nhất thân vinh"
        , "Chó cậy gần nhà, gà cậy gần vườn"
        , "Muốn ăn thì lăn vào bếp"
        , "Trượt vỏ dưa thấy vỏ dừa cũng sợ"
        , "Nước đổ khó hốt, gương vỡ khó lành"
        , "Việc người thì sáng, việc mình thì quáng"
        , "Nói như rồng leo, làm như mèo mửa"

        , "Không đánh răng vẫn sống"
        , "Đường đường một đống, lỏng lỏng cũng được 1 ki"
        , "Ngó bụi hẹ, chết mẹ bụi hành"
        , "Hãy để ngày ấy lụi tàn"        
        , "Ở dơ sống lâu"
        , "Đời vẫn chưa biết tên tụi này"
        , "Băng Long khùng đổi tên thành Lùn không"
        , "Nghèo không phải tội. Vậy còn cái gì là tội?"
        , "Ăn rau 80 năm liền giúp sống lâu"
        , "Muốn giàu không khó, giàu thiệt mới khó"
        , "Hùm giết người, hùm ngủ. Người giết người, thức đủ 5 canh."
	],
	quotations: [        
        "Khi con sinh ra, mọi người cười, con khóc. Hãy sống sao cho khi con nhắm mắt, mọi người khóc, con cười."
        , "Ăn cơm với cáy thì ngáy kho kho\nĂn cơm thịt bò thì lo ngay ngáy."
        , "Sinh không tử lại hoàn không\nCho dẫu sang hèn cũng trong 3 tấc (đất)."
        , "Muốn đũa gãy thì bẻ từng cây, muốn phí sức thì bẻ từng bó."
        , "Bộ não không chết vì thời gian, mà chết vì không được sử dụng hay bị lạm dụng."
        , "Cây già theo năm tháng, người già theo suy nghĩ."
        , "Vui vẻ thì gặt thành công\nSuốt ngày sầu thảm ắt không được gì."
    ],
	texts: [        
        "Bí quyết đọc nhanh:<br/>1- đọc tới đều đặn, không đọc lùi;<br/>2- đọc từng cụm từ, không đọc từng từ;<br/>3- đọc bằng não, không đọc bằng mắt và miệng<br/>4- sử dụng vật dẫn hướng"
        , "Do phải thích nghi với môi trường nhiều trúc và khó bắt các động vật sống khác, gấu trúc thay đổi chế độ ăn uống và thành động vật ăn trúc. Tuy nhiên, thỉnh thoảng nó cũng ăn những động vật nhỏ khác như chuột trúc."
        , "Gấu trúc thích ăn trúc lãnh tiễn, trúc mặc, và đặc biệt là măng tre. Hàng năm, chúng đều tới 1 nơi nào đó để ăn măng với thực lượng 20-kg-tre-non/ngày. Do cần hấp thụ nhiều chất xơ và gỗ, gấu trúc đặc biệt thích uống nước."
	]
};