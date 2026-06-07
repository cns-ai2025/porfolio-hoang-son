# README_DEPLOY.md

## Trạng thái deploy

Website tĩnh trong `output-site/` được cập nhật thành portfolio của Bùi Thị Huyền Linh.

## Cấu trúc website

- `index.html`: nội dung portfolio một trang.
- `style.css`: thiết kế editorial / magazine layout với nền kem giấy, hồng phấn, olive đậm, typography serif thanh lịch và texture giấy nhẹ bằng CSS.
- `script.js`: menu mobile, thanh tiến độ đọc, active nav và hiệu ứng reveal nhẹ.
- `images/avatar-BuiThiHuyenLinh.jpg`: avatar phục vụ đường dẫn `/images/avatar-BuiThiHuyenLinh.jpg` khi deploy static.

Chỉ sử dụng avatar đã được cung cấp; không sử dụng asset minh chứng cũ.

## Deploy GitHub Pages

1. Đưa toàn bộ nội dung bên trong `output-site/` lên branch hoặc thư mục deploy.
2. Trong GitHub repository, mở `Settings` -> `Pages`.
3. Chọn nguồn deploy phù hợp với cách đặt file.
4. Nếu nội dung `output-site/` được đặt làm root của site, `index.html` sẽ là trang chính.
