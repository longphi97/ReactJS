# ES6
## Var-Const-Let
Var: Function scope, global scope, re-assignable, re-declarable, Temporal Dead Zone - TDZ.  
Let: Block-scope, Block scope, re-assignable.  
Const: Block scope.

## String interpolation, Multi-line strings
ES6 Template String tạm gọi là một cú pháp, cho phép bạn viết biểu thức ngay bên trong string. Trong đó, thay vì sử dụng cặp dấu nháy đơn '' hay nháy kép "", bạn sử dụng cặp dấu backtick hay backqoute, để biểu diễn string.

## Arrow functions
Arrow function  là một trong những tính năng mới rất hay của ES6. Việc sử dụng đúng cách arrow function giúp code trở nên ngắn gọn và dễ hiểu hơn
Arrow function – Hàm mũi tên – hay còn gọi là hàm “mũi tên béo”, từ CoffeeScript (một ngôn ngữ được biên dịch) – là một cú pháp ngắn gọn hơn để viết các biểu thức hàm.
this  không bị ràng buộc .

## Multiple return values via arrays, object
JavaScript không hỗ trợ các hàm trả về nhiều giá trị. Tuy nhiên, bạn có thể bọc nhiều giá trị vào một mảng hoặc một đối tượng và trả về mảng hoặc đối tượng. Bạn hãy sử dụng ES6

## for and forEach() to for-of
Với forEach() và for/of bạn có thể truy cập trực tiếp đến giá trị của phần tử, forEach() cho phép bạn truy cập đến index của phần tử, for/of thì không.

## Handling parameters default values:
Là một tiện ích của ES6, để có thể gán một hay nhiều biến mặc định nào đó cho một function, để khi hàm thực hiện thì giá trị đó luôn gắn liền, còn các giá trị khác chưa được gán thì vẫn truyền vào bình thường.

## Handling named parameters
Là có thể truyền nhiều tham số cho hàm theo kiểu object có đặt tên cụ thể.

## Spread operator
Spread operator là ba dấu chấm ( ...), có thể chuyển đổi một mảng thành một chuỗi các tham số được phân tách bằng dấu phẩy. Nói cho dễ hiểu, nó giống như một cái xương và một cái xương sườn vậy, chia nhỏ một phần tử lớn thành những phần tử nhỏ riêng lẻ.

## Rest Parameters
Rest Parameters. Cú pháp này giống như Spread Syntax (...) nhưng có tác dụng ngược lại
Rest Parameters là một cú pháp tạo ra một array từ một số lượng giá trị không xác định

## From constructors to classes
Class là một loại hàm, nhưng thay vì sử dụng từ khóa functionđể khởi tạo nó, chúng tôi sử dụng từ khóa classvà các thuộc tính được gán bên trong một constructor()phương thức.
Phương thức constructor() là một phương thức đặc biệt để tạo và khởi tạo các đối tượng được tạo trong một lớp.
Phương thức constructor() được gọi tự động khi một lớp được khởi tạo và nó phải có tên chính xác là "constructor", trên thực tế, nếu bạn không có phương thức constructor, JavaScript sẽ thêm một phương thức constructor vô hình và trống.
Class có thể được kế thừa. Khi một class được kế thừa, các class con sẽ được thừa kế các thuộc tính và phương thức của class cha.

## ES6 Modules
Module là một cách để tái sử dụng code được linh hoạt hơn, đây cũng là cách để chúng ta tương tác giữa các file JavaScript với nhau. JavaScript module được lưu trữ ở file, thông thường thì một file tương ứng là một module. Chúng ta có 2 lựa chọn khi tạo và export một module:

- Sử dụng từ khóa export

- Sử dụng từ khóa export default