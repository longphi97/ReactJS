# REACTJS
## What is React?
React là thư viện JavaScript phổ biến nhất để xây dựng giao diện người dùng(UI).
Components của công cụ này được phát triển bởi Facebook.
React giúp cho trang web mượt, nhanh, khả năng mở rộng cao và đơn giản.
## Các tính năng chính của React
- Biến các thành phần UI phức tạp trở thành những component độc lập.
- Chuyển các dữ liệu đã được tùy biến đến một UI component cụ thể.
- Khả năng xác định chính xác khi nào cần render lại cũng như khi nào bỏ đi phần tử DOM.
- Giúp bạn có thể thay đổi trạng thái cho nhiều component con và không gây ảnh hưởng đến component gốc dù đang ở trong đang ở trạng thái Stateful.
## Sự khác biệt giữa Element và Component?
- Element:
	- là một đối tượng đơn giản mô tả những gì bạn muốn xuất hiện trên màn hình dưới dạng DOM nodes hoặc Components.
	- Các Element có thể chứa các element khác trong props của chúng.

	```
	const element = React.createElement('div', { id: 'login-btn' }, 'Login');
	```
- Component:
	- Có thể được khai báo theo nhiều cách khác nhau.
	- Nó có thể định nghĩa như một hàm.
	```
	const Button = ({ onLogin }) => (
  		<div id={'login-btn'} onClick={onLogin}>
    		Login
  		</div>
	);
	```

## Các cách tạo Component trong React
Có 2 cách tạo component trong React đó là Class Component và Function Component.  
Khi tạo một thành phần React, tên của thành phần PHẢI bắt đầu bằng chữ hoa.
```
class Car extends React.Component {
  render() {
    return <h1>Hi, I am a Car!</h1>;
  }
}
```
```
function Car() {
  return (
    <>
      <h1>Hi, I am a Car!</h1>
    </>
  );
}
```
## What is Pure Component?
Một function được gọi là Pure Component nếu nó đáp ứng 2 điều kiện sau:  
Giá trị trả về của nó chỉ được xác định bởi các giá trị đầu vào của nó.  
Giá trị trả về của nó luôn giống nhau đối với các các giá trị đầu.  
Một Component React được coi là Pure Component nếu nó hiển thị cùng một đầu ra cho cùng prop và state.  
Pure components giúp ta hạn chế số lần render() không cần thiết.
## What is State in React?
Trong React, state là các thành phần để xây dựng nên một component.  
State dùng để lưu trữ giá trị của component, khi state thay đổi thì component cũng đc render lại.
## What are Props in React?
Properties.  
Props sử dụng để gửi dữ liệu đến component.  
Props là bất biến(không thể thay đổi được).
## Sự Khác nhau giữa state và props?
Điểm khác biệt giữa sate và props là state có thể thay đổi còn props thì không thể thay thế được.
## Tại sao chúng ta không nên cập nhật trạng thái trực tiếp?
Nếu chúng ta cập nhật trạng thái trực tiếp, việc gọi setState() sau đó chỉ có thể thay thế bản cập nhật mà ta đã thực hiện.  
Nó không thay đổi trạng thái ngay lập tức.  
 Nó tạo ra một chuyển đổi trạng thái đang chờ xử lý và việc truy cập nó sau khi gọi phương thức này chỉ trả về giá trị hiện tại.
Bạn sẽ mất quyền kiểm soát state trên các component.
## Mục đích của hàm gọi lại như một đối số của setState () là gì?
Sử dụng hàm gọi lại setState là khá rõ ràng. Bạn sử dụng nó khi muốn một function chạy sau khi SPECIFIC state đã được cập nhật. Nếu bạn muốn function này render(), nó sẽ chạy mỗi khi bất kỳ state được cập nhật.
## What is the difference between HTML and React event handling?
Trong HTML sự kiện được viết bằng chữ thường.  
React được viết bằng CamelCase.  
Trong HTML, hàm được gọi bằng cách chèn "()" vào tên hàm. Nếu không muốn sử dụng theo cách này, chúng tôi có thể sử dụng addEventLisener để cung cấp các sự kiện và trình nghe, tuy nhiên trong React thì yêu cầu tên phương thức không có "()" được thêm vào.
```
<button onclick='handlersubmit()'>

<button onClick={handlersubmit}>

```
Trong HTML, chúng ta có thể tránh hành vi mặc định bằng cách trả về false, nhưng trong React, chúng ta phải gọi preventDefault()một cách rõ ràng.

```
//HTML
<form onsubmit="console.log('You clicked submit.'); return false">
   <input  type="text" name="name" />
   <button type="submit">Submit</button>
</form>

//React
function Form() {
  function handleSubmit(e) {
    e.preventDefault();
    console.log('You clicked submit.');
  }
 return (
   <form onsubmit="{handleSubmit}">
    <input  type="text" name="name" />
    <button type="submit">Submit</button>
   </form>
  );
}
```
## Làm cách nào để liên kết các phương thức hoặc trình xử lý sự kiện trong các lệnh gọi lại JSX??
Có 3 cách:
- cách 1: Binding in Constructor.
```
class Example extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
	alert("Demo");
  }
}
```
- Cách 2: Public class fields syntax.
```
handleClick = () => {
  console.log("Demo");
<button onClick={this.handleClick}>Pick</button>
};
```
- Cách 3: Arrow functions in callbacks.
```
<button onClick={(e) => this.handleClick(e)}>Pick</button>
```
## Làm thế nào để truyền một tham số cho một trình xử lý sự kiện hoặc gọi lại?
Sử dụng hàm mũi tên để bao quanh sự kiên và truyền vào tham số.  
Truyền các đối số cho một hàm, hàm đó được định nghĩa là arrow function
## What are synthetic events in React?
SyntheticEvent là một trình bao bọc trình duyệt chéo xung quanh sự kiện gốc của trình. Nó có giao diện giống sự kiện gốc của trình duyệt, bao gồm stopPropagation() và  preventefault().
## What are inline conditional expressions?
Có 2 cách
- Toán tử điều kiện if-else nội tuyết(bậc ba)
```
function App () {
    const todoList = ['write article', 'read article', 'Review article'];
    const totalTask = todoList.length;
    return (
      <div>
         <h1 style={{color: "green"}}>GeeksForGeeks</h1>
         <b>{totalTask > 0 ?
         (<h2>The user has total {totalTask} task pending</h2>) :
         (<h2>The user has not any task pending</h2>) }</b>      
      </div>
    );
}
```
- NỘi tuyến if và toán tử &&
```
function App() {
    const todoList = [];
    const totalTask = todoList.length;
    return (
      <div>
        <h1 style={{color: "green"}}>GeeksForGeeks</h1>
         {
           (totalTask > 0) &&
           (<h2>The user has total {totalTask} task pending</h2>)
         }
         {
           (totalTask === 0) &&
           (<h2>The user has not any pending task.</h2>)
         }    
      </div>
    );
}
```
## What is the use of refs?
Sử dụng cho các tham chiếu trong React.
Sử dụng khi chúng ta muốn thay đổi giá trị của child component mà không sử dụng props.
Nó cung cấp cách để truy cập các React DOM node hoặc React Component và cách tương tác với nó.
## How to create refs?
Có 2 cách để tạo refs
- cách 1: Sử dụng React.createRef(). Nó có thể gắn cho các phần tử React thông qua thuộc tính ref
```
class MyComponent extends React.Component {  
  constructor(props) {  
    super(props);  
    this.callRef = React.createRef();  
  }  
  render() {  
    return <div ref={this.callRef} />;  
  }  
}  
```
- cách 2: Sử dụng ref Callback.
```
class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.txtSearch = null;
    this.state = { term: '' };
    this.setInputSearchRef = (e) => {
      this.txtSearch = e;
    };
  }
  onInputChange(event) {
    this.setState({ term: this.txtSearch.value });
  }What are forward refs?
  render() {
    return (
      <input
        value={this.state.term}
        onChange={this.onInputChange.bind(this)}
        ref={this.setInputSearchRef}
      />
    );
  }
}
```
## What are forward refs?
forwardRef là một hàm với các tham số props và ref. Kết quả trả về là một JSX element.  
forwardRef là một method cho phép các components cha truyền các refs xuống các components con.
```
const FakeButton = React.forwardRef((props, ref) => (
  <button ref={ref} className="FakeButton">
    {props.children}
  </button>
));
const ref = React.createRef();
<FakeButton ref={ref}>123</FakeButton>;

```

## Which is preferred option with in callback refs and findDOMNode()?
Ưu tiên sử dụng callback refs hơn findDOMNode(). Bởi vì findDOMNode() ngăn cản những cải tiến nhất định của React.
```
class MyComponent extends Component {
  componentDidMount() {
    findDOMNode(this).scrollIntoView()
  }

  render() {
    return <div />
  }
}
```
```
class MyComponent extends Component {
  componentDidMount() {
    this.node.scrollIntoView()
  }

  render() {
    return <div ref={node => this.node = node} />
  }
}
```
## What is Virtual DOM?
Virtual DOM là một định dạng dữ liệu JavaSCript nhẹ được dùng để thể hiện nội dung của DOM tại một thời điểm nhất định nào đó.
Nó giống như DOM nhưng không có khả năng tương tác lên màn hình.
Mỗi khi thay đổi trạng thái ứng dụng thì DOM ảo sẽ cập nhật trước thay vì DOM thực.
## How Virtual DOM works?
Hoạt động theo 3 bước:
- Bất cứ khi nào dữ liệu cơ bản thay đổi, toàn bộ giao diện người dùng sẽ được hiển thị lại trong biểu diễn DOM ảo.
- Sau đó, sự khác biệt giữa bản đại diện DOM trước đó và bản mới được tính toán.
- Sau khi tính toán xong, DOM thực sẽ chỉ được cập nhật với những thứ đã thực sự thay đổi.
## What is the difference between Shadow DOM and Virtual DOM?
Virtual DOM tạo một bản sao của toàn bộ đối tượng DOM và Shadow DOM tạo ra các phần nhỏ của đối tượng DOM có phạm vi riêng biệt, riêng biệt cho phần tử mà chúng đại diện.
Shadow DOM là một công nghệ trình duyệt được thiết kế chủ yếu cho các biến phạm vi và CSS trong các thành phần web . Virtual DOM là một khái niệm được triển khai bởi các thư viện bằng JavaScript trên các API của trình duyệt.
## What is the difference between createElement and cloneElement?
createElement là mã mà JSX được biên dịch hoặc chuyển đổi thành và được sử dụng bằng cách phản ứng để tạo các elements.
cloneElement được sử dụng để nhân bản các phần tử và chuyển cho chúng các new props.
## What are the different phases of component lifecycle?
Có 3 giai đoạn riêng biệt:
- Mounting:constructor(), getDerivedStateFromProps(), render(), componentDidMount().
- Updating:setState(), forceUpdate(), getDerivedStateFromProps(), shouldComponentUpdate(), render(), getSnapshotBeforeUpdate(), componentDidUpdate().
- Unmounting:componentWillUnmount().
## What are the lifecycle methods of React?
Before React 16.3:  
- componentWillMount.
- componentDidMount.
- componentWillReceiveProps.
- shouldComponentUpdate.
- componentWillUpdate.
- componentDidUpdate.
- componentWillUnmount.

React 16.3+:  
- getDerivedStateFromProps.
- componentDidMount.
- shouldComponentUpdate.
- getSnapshotBeforeUpdate.
- componentDidUpdate.
- componentWillUnmount.

## What are Higher-Order Components(HOC)?
là một hàm nhận một component và nhận về một new component.  
Có nhiều trường hợp sử dụng HOC:  
- Code reuse, logic and bootstrap abstraction.  
- Render hijacking.  
- State abstraction and manipulation.  
- Props manipulation.  
	```
	const Component = highOrderComponent ( newComponent ) ;
	```
## How to create props proxy for HOC component?
Có thể sửa/ xóa props và chuyển đến các components bằng cách sử dụng props proxy:
```
function HOC(WrappedComponent) {
  return class Test extends Component {
    render() {
      const newProps = {
        title: 'New Header',
        footer: false,
        showFeatureX: false,
        showFeatureY: true,
      };
      return <WrappedComponent {...this.props} {...newProps} />;
    }
  };
}
```
## What is children prop?
children prop cho phép bạn truyền dữ liệu từ component này đến component khác, giống như các prop khác mà bạn sử dụng.  
Có một số phương pháp có sẵn trong API React để làm việc với phần mềm hỗ trợ này. Chúng bao gồm React.Children.map,,, . React.Children.forEach_React.Children.countReact.Children.onlyReact.Children.toArray.
```

<ImageSlider>
  <img src="/assets/img-1.pg" />
  <img src="/assets/img-2.pg" />
  <img src="/assets/img-3.pg" />
</ImageSlider>

export default function ImageSlider(props) { 
    return (
      <div className="img-slider">
        {props.children}
      </div>
    );  
}
```
## How to write comments in React?
single-line comments:
```
//<div><div>
```
multi-line comments:
```
/*
<div><div>
<ul><ul>
<li><li>
*/
```
