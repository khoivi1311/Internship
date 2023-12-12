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
Set là cấu trúc dữ liệu dùng để lưu trữ một tập hợp các phần tử riêng biệt, được sử dụng để lưu trữ và thao tác một nhóm các phần tử và trong đó mỗi phần tử trong tập dữ liệu là duy nhất và không trùng lặp.
##### 2. Why is Set used?
Cấu trúc dữ liệu Set thường được sử dụng trong nhiều ứng dụng khoa học máy tính, bao gồm thuật toán, phân tích dữ liệu và cơ sở dữ liệu. Ưu điểm chính của việc sử dụng cấu trúc dữ liệu Set là nó cho phép thực hiện các thao tác trên một tập hợp các phần tử một cách hiệu quả và có tổ chức. Ngoài ra Set có thể được dùng để tìm kiếm liên kết, điểm chung, sự khác biệt giữa hai bộ dữ liệu.
##### 3. What are the advantage and disadvantage of Set?
- Advantages:
  - Set được sử dụng để lưu trữ các giá trị duy nhất nhằm tránh trùng lặp các phần tử.
  - Set là cấu trúc dữ liệu động nên sẽ không có lỗi tràn dữ liệu.
  - Tìm kiếm có độ phức tạp thấp O(log(N)).
  - Kiểm tra một phần tử có trong tập hợp một cách nhanh chóng hiệu quả.
  - Set được sử dụng để cải thiện hiệu suất trong nhiều thuật toán bằng cách cung cấp khả năng tra cứu nhanh.
- Disadvantages:
  - Các phần tử trong một tập hợp chỉ có thể được truy cập bằng con trỏ và không có chỉ mục.
  - Set rất phức tạp để thực hiện vì cấu trúc và thuộc tính của nó.
  - Các thao tác cơ bản như thêm và xóa phần tử có độ phức tạp cao O(log(N)).
  - Set có thể sử dụng nhiều bộ nhớ hơn các cấu trúc dữ liệu khác, vì chúng lưu trữ từng phần tử ở một vị trí riêng biệt.
##### 4. What's the difference between Array and Linked List?
| Array    | Linked List |
| -------- | ------- |
| Được lưu trữ tại các vị trí vùng nhớ liền kề | Không được lưu ở các vị trí vùng nhớ liền kề |
| Kích thước cố định | Kích thước động |
| Cấp phát bộ nhớ trong lúc biên dịch | Cấp phát bộ nhớ trong lúc thực thi |
| Chiếm ít bộ nhớ hơn | Chiếm nhiều bộ nhớ hơn do phải lưu thêm địa chỉ của nút tiếp theo |
| Truy cập vào vị trí phần tử bất kỳ dễ dàng | Truy cập vào vị trí phần tử bất kì cần phải duyệt từ đầu danh sách cho đến vị trí cần truy cập |
| Thêm và Xóa phần tử phức tạp | Thêm và Xóa phần tử dễ dàng |
##### 5. What's the difference between Array and Map?
| Array    | Map     |
| -------- | ------- |
| Tập hợp các phần tử có cùng kiểu dữ liệu | Cấu trúc băm của các cặp khóa và giá trị |
| Các chỉ số là các số nguyên bắt đầu từ 0 | Các khóa có thể thuộc bất kỳ loại dữ liệu nào |
| Các phần tử được truy cập thông qua các chỉ mục | Các phần tử được truy cập thông qua Key-Value |
| Thứ tự của các phần tử được nhập được duy trì | Không đảm bảo việc duy trì trật tự |
| Kích thước của mảng được chỉ định trong quá trình khai báo mảng | Kích thước của Map là động. |
##### 6. What's the difference between Array and Set?
| Array    | Set     |
| -------- | ------- |
| Thu thập dữ liệu tuần tự | Tập hợp của các giá trị duy nhất |
| Được phép trùng lặp | Không được phép trùng lặp |
| Tìm kiếm tương đối chậm | Truy cập các phần tử nhanh hơn |
| Các phần tử được truy cập bằng chỉ mục | Các phần tử được truy cập bằng bảng băm |
### Algorithms
#### 1. Algorithm complexity
##### 1. What is time complexity so important?
Độ phức tạp thời gian quan trọng là vì trong bất kỳ chương trình nào thực thi thì độ phức tạp thời gian là số lần thực thi các câu lệnh phụ thuộc vào giá trị đầu vào. Để tối ưu hóa chương trình thì chúng ta cần quan tâm đến việc làm giảm số câu lệnh được thực thi khi dữ liệu đầu vào vô cùng lớn. 
##### 2. What is algorithm complexity?
Độ phức tạp của thuật toán là hàm mô tả hiệu quả của thuật toán xét về lượng dữ liệu mà nó phải xử lý. Có hai thước đo độ phức tạp cơ bản về hiệu quả của thuật toán: <br>
Độ phức tạp về thời gian là một hàm mô tả số lần thực hiện các câu lệnh của một thuật toán tính theo số lượng đầu vào mà nó nhận được.<br>
Độ phức tạp của không gian là một hàm mô tả lượng bộ nhớ (không gian) mà thuật toán yêu cầu đối với số lượng đầu vào của phương thức.
#### 2. Quick Sort
- Độ phức tạp thuật toán:
  - Trường hợp tốt: O(nlog(n))
  - Trung bình: O(nlog(n))
  - Trường hợp xấu: O(n^2)
- Cách hoạt động:
  - Bước 1: Chọn một phần tử trong mảng làm pivot (phần tử chốt). Thông thường sẽ lựa chọn phần tử cuối trong mảng làm pivot.
  - Bước 2: Tìm và chuyển hết các phần tử nhỏ hơn pivot sang trái và chuyển các phần tử lớn hơn pivot sang phải.
  - Bước 3: Sau đó sẽ lặp lại từ bước 1 cho từng bên trái và phải cho đến khi các phần tử được sắp xếp theo đúng thứ tự.
#### 3. Search
##### 1. Linear Search
- Thuật toán tìm kiếm tuyến tính là gì? Thuật toán tìm kiếm tuyến tính là phương pháp tìm kiếm một phần tử cho trước trong một danh sách bằng cách duyệt lần lượt từng phần từ của danh sách đó đến khi nào tìm được giá trị mong muốn hay đã duyệt hết qua hết danh sách.
- Độ phức tạp thuật toán:
  - Trường hợp tốt: O(1)
  - Trung bình: O(n)
  - Trường hợp xấu: O(n)
- Ý tưởng thuật toán:
  - Đầu tiên duyệt mảng từ đầu đến cuối và so sánh với phần tử cần tìm.
  - Nếu tìm thấy thì trả về vị trí của phần tử trong mảng.
  - Nếu không tìm thấy sẽ trả về giá trị -1.
##### 2. Binary Search
- Thuật toán tìm kiếm nhị phân là gì? Thụât toán tìm kiếm nhị phân thực hiện tìm kiếm một mảng đã sắp xếp bằng cách liên tục chia các khoảng tìm kiếm thành 1 nửa. Bắt đầu với một khoảng từ phần tử đầu mảng, tới cuối mảng. Nếu giá trị của phần tử cần tìm nhỏ hơn giá trị của phần từ nằm ở giữa khoảng thì thu hẹp phạm vi tìm kiếm từ đầu mảng tới giữa mảng và nguợc lại. Cứ thế tiếp tục chia phạm vi thành các nửa cho dến khi tìm thấy hoặc đã duyệt 
- Độ phức tạp thuật toán:
  - Trường hợp tốt: O(1)
  - Trung bình: O(log(n))
  - Trường hợp xấu: O(log(n))
- Ý tưởng thuật toán:
  - Bước 1: Đầu tiên xác định vị trí giữa mảng bằng cách (cuối + đầu) / 2.
  - Bước 2: Sau đó so sánh giá trị cần tìm với giá trị của phần tử vị trí ở giữa nếu lớn hơn vị trí ở giữa thì tìm sang phải còn nếu nhỏ hơn vị trí ở giữa thì tìm sang trái và nếu bằng vị trí ở giữa thì trả về vị trí đó thoát vòng lặp.
  - Bước 3: Nếu chưa tìm thấy vị trí cần tìm tiếp tục lặp lại từ bước 1 cho đến khi hết dãy. Nếu không tìm thấy trả về -1. 
##### 3. Interpolation Search

##### 4. Jump Search
- Thuật toán tìm kiếm nhảy là gì? Tìm kiếm nhảy là một thuật toán tìm kiếm các mảng được sắp xếp. Ý tưởng cơ bản là kiểm tra ít phần tử hơn bằng cách nhảy lên trước bằng các bước cố định hoặc bỏ qua một số phần tử thay vì tìm kiếm tất cả các phần tử.
- Độ phức tạp thuật toán:
  - Trường hợp tốt: O(1)
  - Trung bình: O(sqrt(n))
  - Trường hợp xấu: O(sqrt(n))
- Ý tưởng thuật toán:
  - Đầu tiên xác định bước nhảy bằng cách lấy sqrt(arr.length).
  - Sau đó thực hiện nhảy với số bước nhảy xác định trước và so sánh giá trị vị trí nhảy đến có bằng với giá trị cần tìm.
  - Nếu giá trị cần tìm.
  - Nếu không tìm thấy sẽ trả về giá trị -1.
