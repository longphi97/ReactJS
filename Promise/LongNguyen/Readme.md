# Async

## Callback
    Hàm Gọi lại là một hàm được truyền như một đối số cho một hàm khác.

## Promise
    Đối tượng Promise trong JavaScript có thể là:

        - Chưa giải quyết
        - Hoàn thành
        - Từ chối
    Đối tượng Promise hỗ trợ hai thuộc tính: trạng thái và kết quả .
    Trong khi một đối tượng Promise đang "chờ xử lý" (đang hoạt động), kết quả là không xác định.
    Khi một đối tượng Promise được "hoàn thành", kết quả là một giá trị.
    Khi một đối tượng Promise bị "từ chối", kết quả là một đối tượng lỗi.

### Async/Await
    Từ khóa asynctrước một hàm làm cho hàm trả về một promise:
    Từ await khóa chỉ có thể được sử dụng bên trong một async hàm.
