1. Vì sao nên sử dụng HOOK?
Component được trở nên đơn giản và dễ hiểu.
Với Hooks bạn có thể sử dụng state và lifecycles mà không cần dùng ES6 Class.
2. UseState()?  
Khi muốn có dữ liệu thì giao diện tự động được cập nhật(render theo dữ liệu).
	```
	import { useState } from 'react';
	```

3. useEffect()?  
useEffect để quản lý vòng đời của của một component và nó phục vụ chúng ta sử dụng trong function component thay vì các lifecycle như trước đây trong class component.  
useEffect cho phép chúng ta sử lý logic trong lifecycle methods.  
	```
	import { useEffect } from 'react';
	```

	Có 3 cách để sử dụng useEffect():  
	- useEffect(callback) :  
		- Gọi callback sau mỗi khi component re-render.  
		- Gọi callback sau mỗi khi component thêm element vào DOM.  
	- useEffect(callback, []):
		- Chỉ gọi callback một lần sau khi component mounted.  
	- useEffect(callback, [dep]):  
		- Callback sẽ được gọi lại sau khi mỗi deps thay đổi.  

		
4. useRef?  
Lưu các giá trị qua tham chiếu bên ngoài.  
Công dụng của useRef là cố định dữ liệu giữa các lần re-render, truy xuất giá trị đó qua thuộc tính current.
5. Sơ lược về Hook?  
Hooks mới được thêm ở phiên bản React 16.8.0.  
Chỉ sử dụng với function Components.  
Hooks là những hàm cho phép bạn “kết nối” React state và lifecycle vào các components sử dụng hàm.  
6. useMemo?  
Tránh thực hiện lại một logic nào đó không cần thiết.

7. useCallBack?  
Tránh tạo ra hàm mới một cách không cần thiết trong function component.  
	```
	useCallBack(callback, []):
	```
8. useReducer?
Khá giống với useState().  
Những gì useState() làm được thì useReducer cũng làm được.  
- Init state.
- Actions.
- Reducer.
- Dispatch.
	```
	useReducer(reducer, initstate)
	```
9. useContext?
- Create Context.
- Provider.
- Consumer.
> Trong một ứng dụng React thông thường, dữ liệu được truyền từ trên xuống (từ cha đến con) thông qua props, nhưng việc sử dụng như vậy có thể phức tạp đối với một số loại props (ví dụ: tùy chọn ngôn ngữ, chủ đề giao diện người dùng) được yêu cầu bởi nhiều thành phần trong ứng dụng. useContext cho ta cách để chia sẻ các giá trị như thế này giữa các components.Nó cũng giống như biến global được chia sẻ và sử dụng ở nhiều nơi, nhưng context được quản lí tốt hơn để maintain code dễ hơn.

10. InfinitiLoopEffect?

	
