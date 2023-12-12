# Data structures and Algorithms

### Data Type
#### 1. Primitive Type
Kiểu dữ liệu nguyên thủy là kiểu dữ liệu cơ bản, thường có kích thước cố định và có giá trị mặc định và nó không phải là đối tượng và cũng không có phương thức. Có 6 kiểu dữ liệu nguyên thủy: undefined, boolean, number, string, bigint, symbol. Khi khai báo một kiểu dữ liệu nguyên thủy trong JavaScript, nó sẽ được lưu trữ trên Stack. Kiểu dữ liệu nguyên thủy lưu trên Stack được xác định bằng tên biến đã khai báo trong chương trình và mỗi khi kiểu dữ liệu nguyên thủy mới được tạo ra sẽ thêm vào Stack và xếp chồng lên nhau. Mỗi biến được tạo ra sẽ có vùng nhớ độc lập với nhau. Do đó khi gán giá trị của biến này cho biến khác thì giá trị của hai biến hoàn toàn độc lập. Khi một trong hai biến thay đổi giá trị thì giá trị của biến còn lại sẽ không bị thay đổi.<br>
Ví dụ: 
```
let a = 3; 
let b = a;
b = 6;
console.log(a); //Giá trị của a = 3
console.log(b); //Giá trị của b = 6
```
#### 2. Reference Type
Kiểu dữ liệu tham chiếu có tính chất động và không có kích thước cố định. Trong Javascript có các kiểu dữ liệu tham chiếu như: object, array, function,... và hầu hết chúng được coi là đối tượng do đó nên chúng có các phương thức. Khi khai báo một biến tham chiếu và gán giá trị đối tượng cho nó trong Javascript thì máy tính sẽ lưu trữ giá trị đối tượng của biến trên bộ nhớ Heap và con trỏ được lưu trữ trên bộ nhớ Stack. Con trỏ được xác định bằng tên đã khai báo trong chương trình và nó dùng để trỏ đến giá trị đối tượng được lưu trên Heap. Do đó khi gán giá trị đối tượng của biến này cho biến khác thì khi biến khác thay đổi giá trị thuộc tính của đối tượng được lưu trên Heap thì cũng sẽ ảnh hưởng đến kết quả giá trị của biến trước đó. Tuy nhiên khi gán giá trị đối tượng của biến này cho biến khác thì khi biến khác được gán giá trị đối tượng khác thì sẽ không ảnh hưởng đến kết quả giá trị của biến trước đó.<br>
Ví dụ: Thay đổi giá trị thuộc tính.
```
let arr1 = ['a', 'b']
let arr2 = arr1
arr2[0] = 'c';
console.log(arr1) // ['a', 'c']
console.log(arr2) // ['a', 'c']
```
Ví dụ: Thay đổi giá trị đối tượng.
```
let arr1 = ['a', 'b']
let arr2 = arr1
arr2 = ['c', 'd'];
console.log(arr1) // ['a', 'c']
console.log(arr2) // ['c', 'd']
```
#### 3. What is Pointer?
Con trỏ là biến lưu trữ địa chỉ vùng nhớ của biến khác làm giá trị của nó. Một biến con trỏ trỏ đến một kiểu dữ liệu cùng loại và được tạo bằng toán tử "*".<br>
Ví dụ:
```
int a = 10;
int* pt = &a;
```
#### 4. Why do newer programming languages omit pointers?
Các ngôn ngữ lập trình bậc cao không có con trỏ vì nó khó hiểu, phức tạp, khó sử dụng đúng cách và dễ xảy ra lỗi do đó nó có thể dẫn đến các lỗi và sự cố khó khắc phục. Một trong những lý do để các ngôn ngữ lập trình bậc cao không dùng con trỏ là truy cập trực tiếp vào các vị trí bộ nhớ, vị trí này có thể bị mã độc tấn công khai thác truy cập dữ liệu do đó có thể gây ra các lỗ hổng bảo mật. Ngoài ra nó yêu cầu thêm bộ nhớ và thời gian xử lý để quản lý và theo dõi vị trí của dữ liệu trong bộ nhớ do đó có thể làm cho các chương trình sử dụng con trỏ chậm hơn và kém hiệu quả hơn trong việc truy cập và thao tác dữ liệu.
