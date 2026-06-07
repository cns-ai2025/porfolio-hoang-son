# PLAN.md

## Thông tin cá nhân sử dụng cho website

Website được xây dựng cho:
- Họ và tên: Bùi Thị Huyền Linh
- Ngành học: Y Khoa
- Trường: Trường Đại học Y Dược - Đại học Quốc gia Hà Nội
- Sở thích: âm nhạc, thể thao
- Email: sshinehlinh@gmail.com
- Số điện thoại: 0913572007
- Avatar: `public/images/avatar-BuiThiHuyenLinh.jpg`, dùng trong code là `/images/avatar-BuiThiHuyenLinh.jpg`

## Mục tiêu học tập

Mục tiêu học tập của em là tối ưu hóa điểm số để đạt GPA cao, đồng thời tích cực hoàn thiện các chứng chỉ kỹ năng bổ trợ.

Bên cạnh kiến thức chuyên ngành, em cũng chú trọng nâng cao năng lực ngoại ngữ để mở rộng khả năng tiếp cận tài liệu quốc tế và chuẩn bị tốt hơn cho con đường học tập lâu dài trong lĩnh vực y khoa.

## Định hướng cá nhân

Em tin rằng học thuật là nền tảng quan trọng, nhưng kỹ năng mềm và trải nghiệm xã hội mới là yếu tố giúp bản thân bứt phá.

Định hướng phát triển bản thân:
- vững kiến thức chuyên môn
- chủ động trong giao tiếp
- biết hợp tác
- biết lắng nghe
- luôn sẵn sàng học hỏi từ môi trường xung quanh

## Định hướng nội dung website

Website cần nhấn mạnh hành trình học Y Khoa của Bùi Thị Huyền Linh theo tinh thần nghiêm túc, tinh tế và toàn diện: học thuật chắc, kỹ năng mềm tốt, ngoại ngữ tiến bộ, đời sống cân bằng qua âm nhạc và thể thao.

Nội dung website chỉ được dựa trên:
- `personal-info.md`
- PDF thật trong `Bài_1` đến `Bài_6` nếu không chứa thông tin sinh viên cũ hoặc dữ liệu cá nhân chưa được phép sử dụng
- yêu cầu trong `Portfolio.pdf`

Nếu thiếu minh chứng thật của Bùi Thị Huyền Linh, cập nhật `MISSING_INFO.md` và không tự tạo minh chứng thay thế.

## Phong cách thiết kế

Phong cách mong muốn:
- editorial / magazine layout
- nền kem giấy, hồng phấn dusty pink, xanh olive đậm
- tối giản, sang, nữ tính, nhẹ nhàng, hơi vintage
- typography serif thanh lịch cho tiêu đề lớn, sans-serif gọn cho nội dung
- card dạng poster/slide với viền mảnh và shadow rất nhẹ
- avatar trong khung editorial, viền mảnh và shadow nhẹ

Không dùng:
- ảnh ngoài avatar đã được cung cấp
- dữ liệu hoặc minh chứng của sinh viên cũ
- nội dung cá nhân chưa được cung cấp
- theme pastel cute của phiên bản trước

## Trạng thái hiện tại

- Đã chuẩn hóa toàn bộ project sang thông tin Bùi Thị Huyền Linh.
- Website mới không sử dụng asset minh chứng cũ trong `assets/`.
- Email và số điện thoại đã được cung cấp; mã sinh viên và lớp chưa được cung cấp nên ghi trong `MISSING_INFO.md`.
- Đã tạo lại site tĩnh ở root và `output-site/` với giao diện editorial / magazine layout responsive.
- Đã kiểm tra bằng Playwright ở desktop 1440x1000 và mobile 390x844.

## Việc tiếp theo

1. Nếu cần thêm minh chứng PDF vào website, xác minh từng file PDF trước khi liên kết hoặc render.
2. Bổ sung email, số điện thoại, mã sinh viên hoặc lớp khi có dữ liệu chính thức.
