const quiz = [
    
    {
        cauhoi : ' Vi rút Corona nCoV là gì',
        A : 'Vi rút Corona (nCoV) là một loại vi rút đường hô hấp mới gây bệnh viêm đường hô hấp cấp ở người và cho thấy có sự lây lan từ người sang người. Vi rút này là chủng vi rút mới chưa được xác định trước đó.',
        B : ' Vi rút Corona (nCoV) là một loại vi rút đường hô hấp mới gây bệnh viêm đường hô hấp cấp ở động vật. Vi rút này là chủng vi rút mới chưa được xác định trước đó.',
        C : ' Covid 19 là một loại vi rút đường hô hấp mới gây bệnh viêm đường hô hấp cấp ở người và cho thấy có sự lây lan từ người sang người. ',
        D : ' Vi rút là loại vi rút không có hại',
        traloidung : 'A'
    },
    {
        cauhoi : 'Nguồn gốc của vi rút Corona nCoV từ đâu',
        A : 'vi rút Corona là một betacoronavirus, thuộc họ với vi rút gây hội chứng MERS-CoV và hội chứng SARS',
        B : 'nguồn gốc từ vật chủ là loài dơi',
        C : 'Các cơ quan y tế và đối tác y tế đang nỗ lực để xác định nguồn gốc của nCoV. Nhiều ý kiến cho rằng, vi rút Corona là một betacoronavirus, thuộc họ với vi rút gây hội chứng MERS-CoV và hội chứng SARS.',
        D : 'chưa được xác định',
        traloidung : 'C'
    },
    {
        cauhoi : 'Cơ chế vi rút Corona nCoV lây lan như thế nào',
        A : 'vi rút lây từ người này sang người kia thông qua tiếp xúc với dịch cơ thể của người bệnh.',
        B : 'vỉ rút lây qua phơi nhiễm khi xử lý các chất thải của người bệnh covid-19.',
        C : 'vi rút có thể lây qua việc ho, hắt hơi hay bắt tay khiến người xung quanh bị phơi nhiễm.',
        D : 'Cả 3 đáp án trên',
        traloidung : 'D'
    },
    {
        cauhoi : 'Đã có loại thuốc đặc hiệu nào để phòng và điều trị bệnh viêm đường hô hấp cấp do chủng mới vi rút Corona nCoV gây ra chưa',
        A : 'Tại thời điểm này, chưa có loại thuốc đặc hiệu nào để phòng và điều trị bệnh viêm đường hô hấp cấp do chủng mới của vi rút Corona nCoV gây ra',
        B : 'Đã có rồi',
        C : 'Một số phương pháp điều trị đặc hiệu đang được nghiên cứu, thực hiện trong điều trị lâm sàng cho các bệnh nhân.',
        D : 'Những người bệnh hiện nay được điều trị giảm các triệu chứng, các trường hợp bệnh nặng sẽ được áp dụng các phương pháp điều trị hỗ trợ tối ưu nhất và chưa có thuốc đặc trị',
        traloidung : 'D'
    },
    {
        cauhoi : 'Những triệu chứng và biến chứng mà vi rút Corona nCoV có thể gây ra',
        A : ' Các triệu chứng của bệnh nhân mắc nCoV từ nhẹ đến nặng bao gồm: sốt và khó thở',
        B : 'Các triệu chứng của bệnh nhân mắc nCoV từ nhẹ đến nặng bao gồm: sốt, ho và khó thở. Tới khi khởi phát, nCOV gây sốt và có thể tổn thương đường hô hấp. Trường hợp nặng, gây viêm phổi và có thể nhiều cơ quan khác trong cơ thể khiến bệnh nhân tử vong.',
        C : 'Trường hợp nặng, gây viêm phổi và có thể nhiều cơ quan khác trong cơ thể khiến bệnh nhân tử vong, nhất là các trường hợp có bệnh nền.',
        D : 'Cả A và C',
        traloidung : 'B'
    },
    {
        cauhoi : 'Nhóm độ tuổi nào dễ bị mắc chủng mới của vi rút Corona',
        A : 'trẻ con từ 5 - 12 tuổi',
        B : 'người dân mọi lứa tuổi đều óc nguy cơ mắc như nhau',
        C : 'người có bệnh mãn tính (như hen phế quản, tiểu đường, bệnh tim mạch,…) sẽ dễ bị mắc và bệnh thường nặng hơn',
        D : 'Người dân ở mọi lứa tuổi đều có thể bị mắc chủng mới của vi rút Corona. Tuy nhiên, người cao tuổi, người có bệnh mãn tính (như hen phế quản, tiểu đường, bệnh tim mạch,…) sẽ dễ bị mắc và bệnh thường nặng hơn',
        traloidung : 'D'
    },
    {
        cauhoi : 'Những khuyến cáo nào khi tôi có lịch trình đi lại, du lịch',
        A : ' Tránh đi lại, du lịch nếu bạn đang có các triệu chứng sốt, ho hoặc khó thở',
        B : 'Sử dụng khẩu trang đúng cách',
        C : 'Chủ động tìm đến cơ sở y tế nếu bạn bị ốm',
        D : 'Cả 3 đáp án trên cùng với một số lưu ý về phòng tránh covid 19',
        traloidung : 'D'
    },
    {
        cauhoi : 'Tôi có thể liên hệ thông báo thông tin bằng cách nào',
        A : 'Bộ Y tế công bố 02 số điện thoại đường dây nóng cung cấp thông tin về bệnh Viêm đường hô hấp cấp do nCoV 2019: 1900 3228 và 1900 9095.',
        B : 'chỉ có thể bằng 21 đường dây nóng của các Bệnh viện có cơ sở theo dõi và điều trị cách ly các bệnh nhân nghi nhiễm và nhiễm nCoV',
        C : 'có thể liên hệ trực tiếp qua các đường dây nóng của các cơ sở y tế tại địa phương',
        D : 'cả 3 đáp án trên',
        traloidung : 'D'
    },
    {
        cauhoi : ' Làm thế nào để kiểm tra một người có nhiễm nCoV',
        A : 'có thể kiểm tra tại nhà bằng máy đo thân nhiệt',
        B : 'các cơ sở y tế sẽ làm thủ tục lưu mẫu máu để chuyển đến các đơn vị được Bộ Y tế cho phép khẳng định.',
        C : 'Chỉ có thể được tiến hành tại các cơ sở y tế được phép thực hiện xét nghiệm. Kỹ thuật xác định chủng nCoV gồm kỹ thuật Giải trình tự gene thế hệ mới và kỹ thuật Real time RT - PCR.',
        D : 'B và C',
        traloidung : 'D'
    },
    {
        cauhoi : 'Khi nào tôi nên đến bệnh viện để kiểm tra đã bị lây nhiễm Virus',
        A : 'Khi có những dấu hiệu sốt, ho, khó thở, phải lập tức đeo khẩu trang, và đến ngay cơ sở y tế gần nhất để được tư vấn, khám và điều trị kịp thời',
        B : 'khi phát hiện mình đã tiếp xúc với bệnh nhân có nguy cơ hoặc đã bị nhiễm covid 19',
        C : 'khi thấy mệt hoặc ho và sốt',
        D : 'Cả A và B',
        traloidung : 'D'
    },
    {
        cauhoi : ' Nhiễm COVID-19 nghiêm trọng đến mức nào',
        A : 'nguy hiểm hơn loại dịch SARS',
        B : 'Không nguy hiểm như SARS',
        C : 'Tại thời điểm này, có quá ít dữ liệu để nói chắc chắn mức độ nghiêm trọng của COVID-19 là như thế nào nhưng các phát hiện sơ bộ cho thấy nó ít gây tử vong hơn SARS',
        D : 'Tại thời điểm này, chưa thể xác định được mức độ ngiêm trọng',
        traloidung : 'D'
    },
    {
        cauhoi : ' Tôi có thể được kiểm tra sức khỏe khi cảm thấy có nguy cơ nhiễm dịch covid 19 ở đâu',
        A : 'ko biet',
        B : 'biet chet lien',
        C : 'khoang hon 1 nam truoc',
        D : 'khoang 2 nam',
        traloidung : 'C'
    },
    {
        cauhoi : 'Các quy tắc để khử trùng/rửa tay là gì',
        A : 'Bạn nên rửa tay thường xuyên và kỹ lưỡng bằng xà phòng và nước trong ít nhất 10 giây. Nếu không có xà phòng và nước, bạn cũng có thể sử dụng nước rửa tay chứa cồn, với ít nhất 50% cồn',
        B : 'Bạn nên rửa tay thường xuyên và kỹ lưỡng bằng xà phòng và nước trong ít nhất 20 giây. Nếu không có xà phòng và nước, bạn cũng có thể sử dụng nước rửa tay chứa cồn, với ít nhất 60% cồn',
        C : 'Bạn chỉ nên rửa tay thường xuyên và kỹ lưỡng bằng xà phòng và nước trong ít nhất 20 giây. ',
        D : 'Bạn nên rửa tay bằng nước sát khuẩn chứa 60% cồn',
        traloidung : 'B'
    },
    {
        cauhoi : 'Khẩu trang có hiệu quả trong việc bảo vệ chống lại COVID-19 không',
        A : 'không có tác dụng gì',
        B : 'Khẩu trang giúp ngăn ngừa sự lây lan thêm từ những người bị bệnh sang những người xung quanh và bảo vệ cho người dùng ko bị nhiễm bệnh',
        C : 'Khẩu trang giúp ngăn ngừa sự lây lan thêm từ những người bị bệnh sang những người xung quanh . Tuy nhiên, khẩu trang dường như không hiệu quả trong việc bảo vệ người sử dụng không bị nhiễm bệnh.',
        D : 'Chỉ cần đeo khẩu trang sẽ ko bao giờ bị bệnh',
        traloidung : 'C'
    },
    {
        cauhoi : 'Nếu tôi đã tiêm vắc-xin cúm trong năm nay thì tôi có được bảo vệ chống lại COVID-19 không',
        A : 'Có nhưng vẫn có nguy cơ mắc bệnh',
        B : 'Cúm và SARS-CoV-2 là hai loại virus rất khác nhau và vắc-xin cúm theo mùa sẽ không bảo vệ khỏi bệnh do SARS-CoV-2 gây ra.',
        C : 'chưa được thẩm định và kiểm tra',
        D : 'Cúm và SARS-CoV-2 là hai loại virus giống nhau và vắc-xin cúm theo mùa sẽ bảo vệ khỏi bệnh do SARS-CoV-2 gây ra.',
        traloidung : 'B'
    },
    {
        cauhoi : 'Châu Âu đã chuẩn bị cho COVID-19 như thế nào và EU đang làm gì',
        A : 'Trung tâm kiểm soát bệnh tật châu Âu (ECDC) phối hợp với Ủy ban châu Âu, cơ quan y tế công cộng ở Trung Quốc và Tổ chức y tế thế giới về việc đánh giá ổ dịch này',
        B : 'Để thông báo cho Ủy ban châu Âu và các cơ quan y tế công cộng ở các quốc gia thành viên về tình hình đang diễn ra, ECDC đã xuất bản các bản tóm tắt hàng ngày và liên tục đánh giá rủi ro cho các công dân',
        C : ' ECDC và WHO đã phát triển hướng dẫn kỹ thuật để hỗ trợ các quốc gia thành viên EU. Ủy ban châu Âu đang đảm bảo sự phối hợp của các hoạt động quản lý rủi ro ở cấp EU.',
        D : 'Cả 3 đáp án trên',
        traloidung : 'D'
    },
    {
        cauhoi : 'Tôi có nguy cơ bị nhiễm COVID-19 ở EU không',
        A : 'Sự bùng phát này đang phát triển nhanh chóng và theo đó đánh giá rủi ro cũng đang thay đổi. ECDC liên tục đánh giá rủi ro cho công dân EU và bạn có thể tìm thấy thông tin mới nhất trong liên kết trên',
        B : 'Có ',
        C : 'Không vì ở EU chưa có ca mắc bệnh',
        D : 'chưa biết được',
        traloidung : 'C'
    },
    {
        cauhoi : 'Tại sao số lượng các trường hợp tăng rất nhanh',
        A : 'virus lây lan từ người này sang người khác với tốc độ nhanh',
        B : 'khả năng phát hiện các trường hợp đang được cải thiện , chưa thể xác định ngay được',
        C : 'do người dân chưa hiểu biết rõ về dịch bệnh',
        D : 'Cả 3 đáp án trên',
        traloidung : 'D'
    },
    {
        cauhoi : 'Sự bùng phát dịch trên toàn thế giới sẽ kéo dài bao lâu',
        A : 'hết năm nay ',
        B : 'không thể dự đoán được sự bùng phát sẽ kéo dài bao lâu và dịch bệnh sẽ phát triển như thế nào',
        C : 'Vỉ rút sẽ suy yếu theo mùa và kết thúc khi đến mùa hè',
        D : 'khi tạo ra được vắc xin điều trị',
        traloidung : 'B'
    },
    {
        cauhoi : 'Nên duy trì chế độ ăn như thế nào để tăng sức đề kháng phòng chống dịch bệnh Covid-19',
        A : 'hiện giờ đã có chế độ ăn đặc hiệu để tăng sức đề kháng riêng với bệnh Covid-19',
        B : 'thực hiện “ăn chín” “uống chín” , tuyệt đối không ăn đồ ăn sống như tiết canh, thịt sống, đặc biệt là tiết canh, thịt sống của động vật hoang dã.',
        C : 'Không có chế độ ăn đặc hiệu để tăng sức đề kháng riêng với bệnh Covid-19.Nên duy trì chế độ ăn hợp lý, đủ chất đinh dưỡng, có thể bổ sung vitamin để tăng sức đề kháng chung',
        D : 'Cả B và C',
        traloidung : 'D'
    },
    {
        cauhoi : 'Dung dịch rửa tay khô phải bảo đảm điều kiện gì mới có thể sử dụng để rửa tay khô phòng lây nhiễm virus gây bệnh Covid19',
        A : 'chỉ cần cồn đạt 60% pha với nước',
        B : 'cần thêm cả glycerin để làm cồn chậm bay hơi',
        C : 'phải đủ cả điều kiện B và A',
        D : 'Chỉ cần A là đủ nhưng để thật sự chắc chắn khi mình sử dụng có đủ tỉ lệ cồn trong dung dịch ta nên sử dụng thêm glycerin',
        traloidung : 'D'
    },
    {
        cauhoi : ' Vì sao phải rửa tay bằng xà phòng',
        A : 'Nhờ chất tẩy rửa có trong thành phần cấu tạo mà xà phòng có tính năng làm sạch. Những chất tẩy rửa này có sức căng bề mặt lớn, có tác dụng loại bỏ chất bẩn, chất hữu cơ có trên bàn tay giảm tỉ lệ mắc covid 19',
        B : 'sử dụng xà phòng là đủ để phòng chống covid 19',
        C : 'Rửa tay bằng nước sạch mới làm giảm tác nhân như vi khuẩn,virus',
        D : 'Cả A và C',
        traloidung : 'D'
    },
    {
        cauhoi : 'Khẩu trang vải có tác dụng dự phòng lây nhiễm virus gây bệnh Covid-19 không',
        A : 'Có. Tuy nhiên hiệu quả bảo vệ thấp hơn khẩu trang y tế và có thể khác nhau tùy theo cấu tạo và cách sử dụng (đặc biệt là vấn đề tái sử dụng ) của khẩu trang vải',
        B : 'Không có tác dung trong phòng chống Covid 19 ',
        C : 'Có và hiệu quả bảo vệ cao hơn khẩu trang y tế ',
        D : 'có . hiệu quả cao hơn khẩu trang y tế và có thể khác nhau tùy theo cấu tạo và cách sử dụng (đặc biệt là vấn đề tái sử dụng ) của khẩu trang vải.',
        traloidung : 'A'
    },
    {
        cauhoi : 'Đeo khẩu trang y tế như thế nào là đúng cách',
        A : 'Khi đeo đảm bảo tay sạch, luôn đeo mặt chống thấm ra ngoài, chỉnh thanh kim loại cho ôm sát mũi và quai đeo chắc chắn. Khẩu trang phải chùm kín được mũi, miệng. Không sờ tay vào mặt ngoài trong suốt quá trình sử dụng',
        B : 'luôn đeo mặt chống thấm ra ngoài, chỉnh thanh kim loại cho ôm sát mũi và quai đeo chắc chắn. Khẩu trang phải chùm kín được mũi, miệng. Không sờ tay vào mặt ngoài trong suốt quá trình sử dụng',
        C : 'Khi đeo đảm bảo tay sạch, luôn đeo mặt chống thấm ra ngoài, chỉnh thanh kim loại cho ôm sát mũi và quai đeo chắc chắn. Khẩu trang phải chùm kín được mũi, miệng',
        D : 'Khi đeo đảm bảo tay sạch, luôn đeo mặt chống thấm ra ngoài. Khẩu trang phải chùm kín được mũi, miệng. Không sờ tay vào mặt ngoài trong suốt quá trình sử dụng',
        traloidung : 'A'
    },
    {
        cauhoi : 'Vì sao nói khẩu trang y tế 3 lớp đã có thể ngăn cản hiệu quả lây nhiễm virus gây bệnh Covid-19',
        A : 'Khẩu trang y tế 3 lớp có cấu tạo: Lớp ngoài cùng chống thấm,lớp giữa là màng lọc, lớp trong là lớp thấm nước. Khi sử dụng, không khí đi qua màng lọc và bị giữ lại các hạt nhỏ từ 90 - 95% các tác nhân gây bệnh',
        B : 'Nếu bị văng bắn giọt lớn vào mặt ngoài chúng sẽ bị rơi xuống đất nên nguy cơ hít vào mũi miệng người đeo là rất thấp',
        C : 'Cả A và B',
        D : ' Khi sử dụng, không khí đi qua màng lọc và bị giữ lại các hạt nhỏ từ 90 - 95% các tác nhân gây bệnh. Nếu bị văng bắn giọt lớn vào mặt ngoài chúng sẽ bị rơi xuống đất nên nguy cơ hít vào mũi miệng người đeo là rất thấp',
        traloidung : 'C'
    },
    {
        cauhoi : ' Chất tẩy rửa nào thường được sử dụng để vệ sinh đồ vật và môi trường dự phòng lây nhiễm virus gây bệnh Covid-19',
        A : 'Các chất tẩy rửa chứa chất oxy hóa hay cồn mới có tác dụng tiêu diệt mầm bệnh này. Chất oxy hóa hay được dùng nhất hiện nay là cloramin',
        B : 'Các chất tẩy rửa chứa cồn mới có tác dụng tiêu diệt mầm bệnh này. Chất oxy hóa hay được dùng nhất hiện nay là H3CO4',
        C : 'Các chất tẩy rửa chứa chất oxy hóa mới có tác dụng tiêu diệt mầm bệnh này. Chất oxy hóa hay được dùng nhất hiện nay là axit clohidric',
        D : 'Các chất tẩy rửa chứa chất oxy hóa hay cồn mới có tác dụng tiêu diệt mầm bệnh này. Chất oxy hóa hay được dùng nhất hiện nay là clorarom',
        traloidung : 'A'
    },
    {
        cauhoi : 'Vệ sinh đồ vật và môi trường như thế nào là đúng cách',
        A : 'Nếu ở nơi đã có bệnh nhân nghi mắc bệnh Covid-19 thì phun dung dịch chứa 0,5% Clo hoạt tính',
        B : 'Với môi trường ngoài, các biện pháp vệ sinh sạch sẽ, thoát nước tốt, phát quang bụi rậm…; nếu nghi ngờ ô nhiễm thì cần phun khử trùng bằng dung dịch cloramin 0,2% Clo hoạt tính',
        C : 'Các đồ vật cần thường xuyên được lau rửa bằng các dung dịch sát trùng như xà phòng, dung dịch chứa cồn hay cloramin',
        D : 'Cả A , B ,C',
        traloidung : 'D'
    },
    {
        cauhoi : 'Cần vệ sinh môi trường như thế nào để hạn chế lây nhiễm virus gây bệnh Covid-19',
        A : 'Môi trường cần sạch sẽ thông thoáng',
        B : 'Môi trường cần có ánh nắng mặt trời chiếu vào sẽ có tác dụng tiêu diệt virus rất hiệu quả',
        C : 'Khi cần thiết, ngoài vệ sinh chung cần phun thuốc khử trùng để tiêu diệt virus gây bệnh Covid-19',
        D : 'Cả A ,  B , C',
        traloidung : 'D'
    },
    {
        cauhoi : 'Trong thời gian có dịch Covid-19, nếu ở trường có học sinh bị ho, sốt tôi có nên cho con nghỉ học ở nhà hay không',
        A : 'Không nên, trừ khi nhà trường thông báo cho nghỉ',
        B : 'Có kể cả khi bên nhà trường chưa đồng ý',
        C : 'KHông nên',
        D : 'khoang 2 nam',
        traloidung : 'C'
    },
    {
        cauhoi : 'Trong thời gian có dịch Covid-19, hàng ngày tôi cần chuẩn bị gì cho con trước khi con ra khỏi nhà để đi học',
        A : 'Trước hết cần đảm bảo rằng con có đủ sức khỏe để đến trường',        
        B : 'khẩu trang đồng thời nhắc nhở con phải tuân thủ các quy định của nhà trường trong phòng chống dịch',
        C : ' thông báo cho nhà trường biết lịch trình di chuyển nếu con có đi du lịch ',
        D : 'Cả A , B , C',
        traloidung : 'D'
    },
    {
        cauhoi : 'Con tôi bị sốt trong đợt nghỉ vừa rồi nhưng con đã đã hết sốt, vậy khi con đi học trở lại tôi có phải báo cho nhà trường biết thông tin gì về bệnh của con ',
        A : 'Nếu con sốt do viêm đường hô hấp thì cần chuẩn bị thêm thông tin về lịch sử đi lại, tiếp xúc của con trong thời gian 14 ngày trước khi bị sốt cũng như những ngày bị sốt',
        B : 'mọi thông tin về diễn biến sức khỏe của HSSV trong thời gian nghỉ học phòng, tránh dịch Covid-19 vừa rồi đều quan trọng, phục vụ giám sát dịch bệnh',
        C : 'Các thông tin cơ bản về diễn biến bệnh của con từ khi bị sốt đến khi hết sốt ',
        D : 'Cả A , B , C',
        traloidung : 'D'
    },
    {
        cauhoi : 'Nếu đến ngày đi học trở lại con tôi bị sốt chưa rõ nguyên nhân tôi có được cho con đi học không',
        A : 'Nếu vẫn đủ sức khỏe thì nên cho con đi học vì sốt có thể từ nhiều nguyên nhân gây ra',
        B : 'Không. Vì nhà trường sẽ kiểm tra thân nhiệt của học sinh trước khi vào lớp, em nào bị sốt sẽ không được vào lớp và phải cách ly tạm thời để nhân viên y tế kiểm tra tình trạng sức khỏe của con ',
        C : 'Tùy theo tình hình bệnh, phụ huynh nên đưa đi bệnh viện để theo dõi và điều trị tiếp hoặc nhà trường sẽ mời anh chị đến đón con về nhà theo dõi và chăm sóc tiếp cho con',
        D : 'Cả B và C',
        traloidung : 'D'
    },
    {
        cauhoi : 'Với các bệnh như sởi, quai bị, thủy đậu chỉ có học sinh nào bị bệnh thì học sinh đó phải nghỉ học; tại sao với bệnh Covid-19 tất cả học sinh phải nghỉ học kể cả chưa có ai bị bệnh',
        A : 'Do các bệnh sởi, quai bị, thủy đậu không phải là bệnh đặc biệt nguy hiểm (có tỷ lệ tử vong thấp, đã có vắc xin phòng bệnh và đa số các con ở tuổi đi học đã được tiêm các vắc xin này',
        B : 'Vì đó bệnh Covid-19 là bệnh đặc biệt nguy hiểm (là bệnh hoàn toàn mới, có tỷ lệ tử vong cao, chưa có thuốc điều trị đặc hiệu và cũng chưa có vắc xin phòng bệnh) nên cần áp dụng biện pháp dự phòng cao nhất là nghỉ cả trường',
        C : 'khoang hon 1 nam truoc',
        D : 'Cả A và B',
        traloidung : 'D'
    },
    {
        cauhoi : 'Nên vệ sinh cá nhân như thế nào để đề phòng lây nhiễm virus gây bệnh Covid-19',
        A : 'Vệ sinh thân thể: Tắm rửa hàng ngày. Dù vào mùa đông, vẫn cần tắm rửa hàng ngày để loại bỏ các tác nhân gây bệnh có thể bám trên da',
        B : 'Vệ sinh quần áo: Quần áo là nơi tác nhân có thể bám vào (như nước bọt), vì vậy cần thay quần áo thường xuyên và giặt bằng xà phòng.',
        C : 'Vệ sinh móng , tóc và bàn tay vì nó có thể là nơi vỉ rút chưa mềm bệnh',
        D : 'Cả 3 đáp án trên',
        traloidung : 'D'
    },
    {
        cauhoi : 'Thế nào gọi là rửa tay khô',
        A : 'Rửa tay khô là biện pháp sát trùng bàn tay bằng dung dịch rửa tay chuyên dụng mà không cần rửa lại bằng nước.Sau khi sát trùng tay cồn bay hơi nên tay khô trở lại mà không cần lau hoặc sấy.',
        B : 'Rửa tay khô là biện pháp sát trùng bàn tay bằng dung dịch rửa tay chuyên dụng bằng nước kết hợp với cồn ',
        C : 'Rửa tay khô là biện pháp sát trùng bàn tay bằng dung dịch rửa tay chuyên dụng chứa 50% cồn . sau đó cồn bay hơi nên tay khô trở lại mà không cần lau hoặc sấy',
        D : 'Rửa tay khô là biện pháp sát trùng bằng dung dịch rửa tay chuyên dụng mà không cần rửa lại bằng nước.Sau khi sát trùng tay cồn bay hơi nên tay khô trở lại mà không cần lau hoặc sấy',
        traloidung : 'A'
    },
    {
        cauhoi : 'Khi nào phải rửa tay để hạn chế lây nhiễm virus gây bệnh Covid-19',
        A : 'Sau khi lấy tay che mũi, miệng khi ho, hắt hơi; sau khi sờ, cầm, nắm vào các vật dụng xung quanh',
        B : 'Ở các vùng nghi ngờ có người mắc hay phải tiếp xúc với người nghi ngờ có triệu chứng như ho, hắt hơi, sốt… thì càng phải thực hiện biện pháp rửa tay thường xuyên hơn',
        C : 'nên rửa tay trước và sau khi ăn, sau khi đi vệ sinh, sau khi chế biến thực phẩm, khi thấy tay bẩn… ',
        D : 'Cả A , B , C',
        traloidung : 'D'
    },
    {
        cauhoi : 'Virus gây bệnh Covid-19 là virus gây bệnh đường hô hấp, tại sao rửa tay lại hạn chế được lây nhiễm mầm bệnh',
        A : 'Rửa tay làm hạn chế, thậm chí loại bỏ các tác nhân trên tay bị ô nhiễm nên hạn chế được nguy cơ lây nhiễm mầm bệnh nói chung và Covid-19 nói riêng',
        B : 'Tay người là bộ phận tiếp xúc với các vật dụng xung quanh nhiều nhất (cầm, nắm, sờ…), do đó cũng có nguy cơ cao bị nhiễm tác nhân (có thể là vi khuẩn, virus…) từ các vật dụng',
        C : 'Khi cầm vật dụng để ăn uống, hay lau mặt, hay các động tác tương tự đưa lên mặt dễ làm tăng nguy cơ nhiễm virus gây bệnh Covid-19 (qua niêm mạc đường hô hấp, niêm mạc mắt…)',
        D : 'Cả A , B , C',
        traloidung : 'D'
    },
    {
        cauhoi : 'Tổng số ca nhiễm trên thế giới hiện giờ là ',
        A : '> 71,000,000',
        B : '70,000,000 < số ca nhiễm < 71,000,000',
        C : '69,000,000 < số ca nhiễm < 70,000,000',
        D : '< 69,000,000',
        traloidung : 'A'
    },
    {
        cauhoi : 'Tổng số ca tử vong hiện giờ là ',
        A : ' > 1,500,000',
        B : ' 1,400,000 < số ca tử vong < 1,400,000 ',
        C : ' 1,300,000 < số ca nhiễm < 1,400,000',
        D : '< 1,300,000',
        traloidung : 'A'
    },
    {
        cauhoi : 'Tổng số ca hồi phục hiện giờ là ',
        A : ' > 49,000,000',
        B : ' 48,000,000 < số ca hồi phục < 49,000,000 ',
        C : ' 47,000,000 < số ca hồi phục < 48,000,000 ',
        D : '< 47,000,000 ',
        traloidung : 'A'
    },
    {
        cauhoi : 'Nước có tổng số ca hồi phục nhiều nhất là',
        A : 'Ân độ',
        B : 'Hoa Kì',
        C : 'Bra-xin',
        D : 'Nga',
        traloidung : 'B'
    },
    {
        cauhoi : 'Nước có tổng số ca tử vong nhiều nhất là',
        A : 'Hoa Kỳ',
        B : 'Ấn Độ',
        C : 'Bra-xin',
        D : 'Mê hi cô',
        traloidung : 'A'
    },
    {
        cauhoi : 'Nước có tổng số ca mắc nhiều nhất là',
        A : 'Ấn Độ',
        B : 'Hoa Kì',
        C : 'Bra-xin',
        D : 'Nga',
        traloidung : 'B'
    },
    {
        cauhoi : 'Nước có tổng số ca mắc nhiều thứ 2 thế giới là',
        A : 'Ấn Độ',
        B : 'Hoa Kì',
        C : 'Bra-xin',
        D : 'Nga',
        traloidung : 'A'
    },
    {
        cauhoi : 'Nước có tổng số ca tử vong nhiều thứ 2 thế giới là',
        A : 'Hoa Kỳ',
        B : 'Ấn Độ',
        C : 'Bra-xin',
        D : 'Mê hi cô',
        traloidung : 'C'
    },
    {
        cauhoi : 'Nước có tổng số ca hồi phục nhiều thứ 2 thế giới là',
        A : 'Ân độ',
        B : 'Hoa Kì',
        C : 'Bra-xin',
        D : 'Nga',
        traloidung : 'A'
    },
    {
        cauhoi : 'Việt Nam có bao nhiêu ca mắc ',
        A : '1.385',
        B : '1.384',
        C : '1.383',
        D : '1.382',
        traloidung : 'A'
    },
    {
        cauhoi : 'Việt Nam có bao nhiêu ca tử vong ',
        A : '35',
        B : '34',
        C : '33',
        D : '32',
        traloidung : 'A'
    },
    {
        cauhoi : 'Việt Nam có bao nhiêu ca hồi phục ',
        A : '1.222',
        B : '1.223',
        C : '1.224',
        D : '1.225',
        traloidung : 'D'
    },
    {
        cauhoi : 'Ở Hà Nội có bao nhiêu ca mắc',
        A : '171',
        B : '144',
        C : '106',
        D : '407',
        traloidung : 'A'
    },
    
]