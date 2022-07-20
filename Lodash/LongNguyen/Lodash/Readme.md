## LODASH
# Lodash _.isEmpty() Method
    Phương thức này trả về true khi giá trị là null.
    Phương thức này trả về true khi giá trị là emty.
    Phương thức này trả về true với giá trị Boolean.

# Lodash - filter
	_.filter sẽ lặp qua tất cả các element và trả về 1 array gồm tất cả element thoả mãn điều kiện của hàm callback ở tham số thứ 2.
# lodash -map
	_.map cũng giống với foreach lặp qua các phần tử trong danh sách nhưng khác là nó sẽ trả về một danh sách mới.
# lodash - clone
    Creates a shallow clone of value.

    Note: This method is loosely based on the structured clone algorithm and supports cloning arrays, array buffers, booleans, date objects, maps, numbers, Object objects, regexes, sets, strings, symbols, and typed arrays. The own enumerable properties of arguments objects are cloned as plain objects. An empty object is returned for uncloneable values such as error objects, functions, DOM nodes, and WeakMaps.
## lodash clonedeep
    giống clone nhưng copy theo đệ quy
## lodash - reducer
    _.reduce có chút tuơng tự với function lọc. Sự khác biệt duy nhất là bạn có thể chọn hình thức của object trả về.
## lodash - flatten
    The Lodash.flatten() method is used to flatten the array to one level deep.
## lodash - get
    _.get sẽ lấy value theo path của object, nếu value là undefined thì trả về defaultValue.
## lodash - pick
    Tạo một đối tượng bao gồm các objectthuộc tính đã chọn.
## lodash - assign
    Gán các thuộc tính có khóa chuỗi có thể liệt kê của riêng đối tượng nguồn cho đối tượng đích. Các đối tượng nguồn được áp dụng từ trái sang phải. Các nguồn tiếp theo ghi đè các chỉ định thuộc tính của các nguồn trước đó.
## lodash - omit
    Ngược lại với _.pick; phương thức này tạo ra một đối tượng bao gồm các đường dẫn thuộc tính có thể liệt kê và kế thừa của riêng object nó mà không bị bỏ qua.
## lodash - merge
    Phương thức này giống như _.assign ngoại trừ việc nó hợp nhất một cách đệ quy các thuộc tính chuỗi có thể liệt kê được kế thừa và sở hữu của các đối tượng nguồn vào đối tượng đích. Thuộc tính nguồn giải quyết thành undefinedbị bỏ qua nếu tồn tại giá trị đích. Thuộc tính mảng và đối tượng thuần túy được hợp nhất một cách đệ quy. Các đối tượng và kiểu giá trị khác được ghi đè bởi phép gán. Các đối tượng nguồn được áp dụng từ trái sang phải. Các nguồn tiếp theo ghi đè các chỉ định thuộc tính của các nguồn trước đó.





