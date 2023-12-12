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
### Data structures
#### 1. Array
##### 1. What is array?
Mảng là tập hợp các phần tử có cùng kiểu dữ liệu được lưu trữ tại các vị trí vùng nhớ liền kề. Vị trí của các phần tử trong mảng được đánh số liên tục từ 0...n.
##### 2. Why is array used?
Mảng được sử dụng để lưu trữ một lượng lớn các phần tử có cùng kiểu dữ liệu, để lưu trữ và truy xuất dữ liệu theo một thứ tự cụ thể, để sắp xếp dữ liệu theo thứ tự tăng dần hoặc giảm dần, để biểu diễn ma trận trong các phép tính toán học như nhân ma trận, đại số tuyến tính và xử lý ảnh. 
##### 3. What are the advantage and disadvantage of an array?
- Advantages:
  - Truy cập hiệu quả vào các phần tử: Mảng cấp quyền truy cập trực tiếp vào phần tử ở vị trí bất kỳ trong mảng. Thời gian truy cập vào một phần tử là không đổi và không phụ thuộc vào kích thước của mảng.
  - Truy xuất dữ liệu nhanh: Mảng cho phép truy xuất dữ liệu nhanh vì dữ liệu được lưu trữ ở các vị trí bộ nhớ liền kề.
  - Hiệu quả bộ nhớ: Các phần tử của mảng được lưu trữ ở các vị trí bộ nhớ liền kề nên kích thước của mảng được biết tại thời điểm biên dịch và điều này có nghĩa là bộ nhớ có thể được cấp phát cho toàn bộ mảng trong một khối, giảm sự phân mảnh bộ nhớ.
  - Tính linh hoạt: Mảng có thể được sử dụng để lưu trữ nhiều loại dữ liệu, bao gồm số nguyên, số dấu phẩy động, ký tự và thậm chí cả các cấu trúc dữ liệu phức tạp như đối tượng và con trỏ.
  - Dễ thực hiện: Mảng rất dễ thực hiện và dễ hiểu.
- Disadvantages:
  - Kích thước cố định: Mảng có kích thước cố định được xác định tại thời điểm tạo do đó khi cần thay đổi kích thước mảng sẽ gặp khó khăn.
  - Vấn đề cấp phát bộ nhớ: Việc cấp phát một mảng lớn có thể gặp khó khăn khi các hệ thống có bộ nhớ hạn chế. Nếu kích thước của mảng quá lớn, hệ thống có thể hết bộ nhớ, điều này có thể khiến chương trình bị lỗi.
  - Các vấn đề thêm và xóa: Việc thêm hoặc xóa một phần tử khỏi một mảng có thể sẽ khiến tất cả các phần tử sau điểm thêm hoặc xóa phải được dịch chuyển để phù hợp với thay đổi.
  - Dung lượng bị lãng phí: Nếu một mảng không sử dụng hết kích thước đã cấp phát, sẽ gây ra lãng phí không gian lưu trữ trong bộ nhớ được cấp phát cho mảng đó.
#### 2. Linked List
##### 1. What is Linked List?
Danh sách liên kết là một cấu trúc dữ liệu tuyến tính, trong đó các phần tử không được lưu trữ ở một vị trí liền kề mà chúng được liên kết bằng con trỏ. Danh sách liên kết tạo thành một chuỗi các nút được kết nối, trong đó mỗi nút lưu trữ dữ liệu và địa chỉ của nút tiếp theo.
##### 2. Why is Linked List used?
- Cấu trúc dữ liệu động: Kích thước của bộ nhớ có thể được cấp phát hoặc thu hồi trong thời gian chạy dựa trên thao tác thêm hoặc xóa.
- Dễ dàng thêm/xóa: Việc thêm và xóa các phần tử đơn giản hơn mảng vì không cần thay đổi vị trí phần tử nào sau khi thêm và xóa, chỉ cần cập nhật địa chỉ.
- Sử dụng bộ nhớ hiệu quả: Danh sách liên kết là một cấu trúc dữ liệu động, kích thước tăng hoặc giảm theo yêu cầu để tránh lãng phí bộ nhớ. 
- Triển khai: Các cấu trúc dữ liệu nâng cao có thể được triển khai bằng cách sử dụng danh sách liên kết như: Stack, Queue, HashTable.
##### 3. What are the advantage and disadvantage of Linked List?
- Advantages:
  - Kích thước động: Danh sách liên kết có thể tăng hoặc giảm linh hoạt vì việc cấp phát bộ nhớ được thực hiện trong thời gian chạy.
  - Thêm và xóa: Việc thêm hoặc xóa các phần tử khỏi danh sách liên kết rất hiệu quả, đặc biệt đối với các danh sách lớn.
  - Tính linh hoạt: Danh sách liên kết có thể dễ dàng sắp xếp lại và sửa đổi mà không yêu cầu khối bộ nhớ liền kề.
- Disadvantages:
  - Truy cập ngẫu nhiên: Danh sách liên kết không cho phép truy cập trực tiếp vào các phần tử theo chỉ mục. Để truy cập một phần tử cụ thể phải đi từ đầu danh sách và duyệt cho tới khi đến được nút cần truy cập.
  - Bộ nhớ bổ sung: Danh sách liên kết yêu cầu bộ nhớ bổ sung để lưu trữ con trỏ.
#### 3. Map
##### 1. What is Map?
Map (còn được gọi là dictionary, associative array, hash map) là một cấu trúc dữ liệu lưu trữ một tập hợp các cặp khóa-giá trị, trong đó mỗi khóa được liên kết với một giá trị duy nhất. Trong đó Map cho phép lưu trữ và truy xuất dữ liệu một cách hiệu quả dựa trên mã định danh duy nhất (key).
##### 2. Why is Map used?
##### 3. What are the advantage and disadvantage of Map?
- Advantages:
  - Truy cập dữ liệu nhanh: Map cho phép truy xuất các giá trị cụ thể một cách nhanh chóng và hiệu quả, ngay cả khi tập dữ liệu rất lớn.
  - Tính linh hoạt:  Map có thể lưu trữ bất kỳ loại dữ liệu nào, bao gồm chuỗi, số và đối tượng. Điều này làm cho chúng rất linh hoạt và hữu ích cho nhiều ứng dụng.
- Disadvantages:
  - Sử dụng bộ nhớ: Map có thể tốn nhiều bộ nhớ, đặc biệt nếu tập dữ liệu rất lớn. Đây là một vấn đề trên các hệ thống có bộ nhớ hạn chế.
  - Xung đột băm: Nếu hàm băm được map sử dụng tạo ra nhiều xung đột, nó có thể làm chậm hoạt động của Map và giảm hiệu quả.
  - Độ phức tạp: Việc triển khai và bảo trì map có thể phức tạp, đặc biệt nếu chúng được sử dụng trong các ứng dụng phức tạp.
#### 4. Set
##### 1. What is Set?
##### 2. Why is Set used?
##### 3. What are the advantage and disadvantage of Set?
- Advantages:
  - 
- Disadvantages:
  - a
