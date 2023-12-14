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
Mảng được sử dụng để lưu trữ một lượng lớn các phần tử có cùng kiểu dữ liệu, cho phép truy xuất phần tử ở vị trí bất kỳ một cách nhanh chóng và hiệu quả bằng chỉ mục, để sắp xếp dữ liệu theo thứ tự tăng dần hoặc giảm dần, để biểu diễn ma trận trong các phép tính toán học như nhân ma trận, đại số tuyến tính và xử lý ảnh. 
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
Map được sử lưu trữ và truy xuất dữ liệu hiệu quả, nhanh chóng dựa trên Key. Map còn được sử dụng rộng rãi trong nhiều ứng dụng, bao gồm lập chỉ mục cơ sở dữ liệu, định tuyến mạng và lập trình web.
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
# Programming
#### 1. Compiler
##### 1. What is compiler?
Trình biên dịch (Compiler) là phần mềm chuyển đổi chương trình được viết bằng ngôn ngữ cấp cao (Source Code) sang ngôn ngữ cấp thấp (Object Code). Nó lấy chương trình được viết bằng ngôn ngữ lập trình cấp cao làm đầu vào và dịch nó thành một chương trình tương đương bằng các ngôn ngữ cấp thấp như ngôn ngữ máy hoặc hợp ngữ. Quá trình dịch mã nguồn sang mã máy bao gồm nhiều giai đoạn, bao gồm phân tích từ vựng, phân tích cú pháp, phân tích ngữ nghĩa, tạo mã và tối ưu hóa. Trình biên dịch xác minh tất cả các loại giới hạn, phạm vi, lỗi,... Trình biên dịch chạy trên cùng một máy và tạo mã máy cho cùng một máy mà nó đang chạy. Trình biên dịch có thể chạy trên một máy và tạo mã máy cho máy tính khác, trong trường hợp đó nó được gọi là trình biên dịch chéo.
##### 2. Why is compiler needed?
- Trình biên dịch dùng dể dịch các ngôn ngữ lập trình bậc cao thành mã máy để máy có thể hiểu và thực thi. Nếu không biên dịch thì không có chương trình nào được viết bằng ngôn ngữ cấp cao có thể được thực thi.
- Hiệu quả: Các chương trình được biên dịch thường hiệu quả hơn các chương trình được thông dịch vì mã máy do trình biên dịch tạo ra được tối ưu hóa cho nền tảng phần cứng cụ thể mà nó sẽ chạy trên đó.
- Tính di động: Sau khi chương trình được biên dịch, mã máy thu được có thể chạy trên bất kỳ máy tính hoặc thiết bị nào có phần cứng và hệ điều hành phù hợp, khiến nó có tính di động cao.
- Kiểm tra lỗi: Trình biên dịch thực hiện kiểm tra lỗi toàn diện trong quá trình biên dịch, điều này có thể giúp phát hiện các lỗi cú pháp, ngữ nghĩa và logic trong mã trước khi chạy.
- Tối ưu hóa: Trình biên dịch có thể thực hiện nhiều tối ưu hóa khác nhau cho mã máy được tạo, chẳng hạn như loại bỏ các code dư thừa hoặc sắp xếp lại code để có hiệu suất tốt hơn.
#### 2. What is the thread?
Một thread là đơn vị thực thi nhỏ nhất có thể được quản lý bởi hệ điều hành. Process là một nhóm các thread có liên kết, thực thi cùng nhau trên cùng một môi trường và cùng chia sẻ tài nguyên trên đó với nhau. Nghĩa là các thread trong cùng một process chia sẻ với nhau cùng một memory space và có thể giao tiếp trực tiếp với nhau. Mỗi luồng sẽ thường có bộ đếm chương trình (program counter), ngăn xếp và biến cục bộ của riêng nó. Một thread không thể tồn tại bên ngoài một process. Ngoài ra, mỗi một thread chỉ có thể tồn tại trong một process. Một thread còn có thể coi là một light-weight processes. Một single-threaded process là một process chỉ tồn tại duy nhất một thread, một multi-threaded process là một process có thể tồn tại một hoặc nhiều thread. Thread được sử dụng chủ yếu để cải thiện ứng dụng thông qua việc tính toán song song (parallelism). Trên thực tế chỉ có một thread được thực thi tại một thời điểm bởi CPU, nhưng CPU có thể chuyển đổi nhanh chóng giữa các thread để tạo hiệu ứng giống như các thread đang được thực thi song song với nhau.
#### 3. What is a lock? What is deadlock?
- Lock:
Khóa là một biến được gán cho bất kỳ mục dữ liệu nào nhằm theo dõi trạng thái của mục dữ liệu đó để đảm bảo tính cách ly và không can thiệp trong các giao dịch đồng thời. Khóa cơ sở dữ liệu tồn tại để ngăn hai hoặc nhiều người dùng cơ sở dữ liệu thực hiện bất kỳ thay đổi nào trên cùng một mục dữ liệu cùng một lúc.
- Deadlock:
Deadlock là hiện tượng tranh chấp tài nguyên giữa hai hay nhiều lệnh trong đó lệnh này giữ tài nguyên mà lệnh kia cần dẫn tới việc không lệnh nào có thể kết thúc để giải phóng tài nguyên. Nếu không được xử lý sẽ dẫn đến hiện tượng các câu lệnh sẽ chờ nhau và không 1 tiến trình nào sẽ được thực hiện tiếp.
#### 4. What is race condition?
Race condition xảy ra khi nhiều luồng đọc và ghi cùng một biến, tức là chúng có quyền truy cập vào một số dữ liệu được chia sẻ và cố gắng thay đổi dữ liệu đó cùng một lúc. Trong tình huống như vậy, các luồng đang “chạy đua” với nhau để truy cập/thay đổi dữ liệu. Vì thuật toán chuyển đổi việc thực thi giữa các threads có thể xảy ra bất cứ lúc nào, nên không thể biết được thứ tự của các threads truy cập và thay đổi dữ liệu đó sẽ dẫn đến giá trị của data sẽ không như mong muốn.
#### 5. Languages
##### 1. What are advantages and disadvantages of programming language?
- Advantages:
  - Trừu tượng hóa và đơn giản hóa: Các ngôn ngữ cấp cao cung cấp mức độ trừu tượng cao hơn, cho phép các lập trình viên tập trung vào logic và chức năng của chương trình thay vì các chi tiết phức tạp của phần cứng hoặc các hoạt động cấp thấp.
  - Dễ đọc và bảo trì: Code được viết bằng ngôn ngữ cấp cao thường dễ đọc và dễ hiểu hơn, giúp các lập trình viên gỡ lỗi và duy trì các dự án phần mềm dễ dàng hơn.
  - Năng suất: Các ngôn ngữ cấp cao cung cấp các chức năng, thư viện và khung tích hợp giúp đẩy nhanh quá trình phát triển.
  - Giảm lỗi: Tính trừu tượng và tự động hóa được cung cấp bởi các ngôn ngữ cấp cao giúp giảm khả năng xảy ra lỗi của con người, chẳng hạn như các vấn đề quản lý bộ nhớ, thường gặp ở các ngôn ngữ cấp thấp.
  - Bảo mật nâng cao: Nhiều ngôn ngữ cấp cao bao gồm các tính năng và cơ chế bảo mật giúp ngăn ngừa các lỗ hổng phổ biến, giúp phát triển phần mềm an toàn hơn.
  - Phát triển nhanh: Các ngôn ngữ cấp cao thường cung cấp các tính năng như quản lý bộ nhớ tự động và cú pháp ngắn gọn, cho phép tạo mẫu và phát triển ứng dụng phần mềm nhanh chóng.
  - Cộng đồng và Tài nguyên: Các ngôn ngữ cấp cao phổ biến có cộng đồng lớn và tích cực, dẫn đến tài liệu, hướng dẫn và tài nguyên trực tuyến phong phú hỗ trợ các lập trình viên học tập và giải quyết vấn đề.
- Disadvantages:
  - Thực thi chậm hơn: Ngôn ngữ cấp cao thường chậm hơn ngôn ngữ cấp thấp vì chúng yêu cầu nhiều thời gian xử lý hơn để chuyển code thành mã máy.
  - Kiểm soát ít hơn: Các ngôn ngữ cấp cao trừu tượng hóa các chi tiết cấp thấp và các chức năng dành riêng cho phần cứng, gây khó khăn cho việc tối ưu hóa code cho phần cứng hoặc hệ thống cụ thể.
  - Sử dụng bộ nhớ cao hơn: Ngôn ngữ cấp cao yêu cầu nhiều bộ nhớ hơn ngôn ngữ cấp thấp vì chúng sử dụng các chức năng và cấu trúc bổ sung để cung cấp nhiều tổ chức và cấu trúc hơn cho code.
##### 2. Why Javascript?
- Hiện thực code dễ dàng và nhanh chóng.
- Có thể sử dụng để xây dựng ứng dụng da nền tảng như: Web (Front-end, Back-end), Mobile, Desktop.
- Giúp giảm tải server.
- Tương thích với nhiều trình duyệt.
- Tốc độ thực thi nhanh.
#### 6. Software design pattern
Design pattern là các giải pháp tổng thể đã được tối ưu hóa, được tái sử dụng cho các vấn đề phổ biến trong thiết kế phần mềm mà chúng ta thường gặp phải hàng ngày. Đây là tập các giải pháp đã được suy nghĩ, đã giải quyết trong tình huống cụ thể. Hệ thống các mẫu design pattern được chia thành 3 nhóm: nhóm Creational, nhóm Structural và nhóm Behavioral.
##### 1. Back-end
- MVC (Model-View-Controller) Pattern là một mẫu kiến ​​trúc phân tách một ứng dụng thành ba thành phần logic chính Model, View và Controller. Trong đó mỗi thành phần kiến ​​trúc được xây dựng để xử lý nhiệm vụ khác nhau trong một ứng dụng. MVC tách lớp logic nghiệp vụ và lớp hiển thị ra riêng biệt.<br>
  - Model: Có nhiệm vụ thao tác với Database, nó chứa tất cả các hàm, các phương thức truy vấn trực tiếp với dữ liệu. Controller sẽ thông qua các hàm, phương thức đó để lấy dữ liệu rồi gửi qua View.
  - View: Là giao diện người dùng, nơi nhận dữ liệu từ Controller và hiển thị lên giao diện.
  - Controller: Đảm nhận vai trò tiếp nhận yêu cầu từ người dùng, thông qua Model để lấy dữ liệu sau đó thông qua View để hiển thị cho người dùng.<br>
Ví dụ:<br>
  - Model
```
interface Post {
  id: number;
  title: string;
  content: string;
  date: Date;
}

class PostModel {
  private posts: Post[] = [];

  getPosts() {
    // fetch posts from database
    return this.posts;
  }

  addPost(post: Post) {
    // save post to database
    this.posts.push(post);
  }
}
```
  - View
```
class PostView {
  displayPosts(posts: Post[]) {
    // render posts to the HTML page
  }

  getPostFromInput(): Post {
    // retrieve input values from the HTML page
    // and create a new Post object
  }
}
```
  - Controller
```
class PostController {
  private model: PostModel;
  private view: PostView;

  constructor(model: PostModel, view: PostView) {
    this.model = model;
    this.view = view;
  }

  init() {
    // initialize the view
    this.view.displayPosts(this.model.getPosts());
  }

  addPost() {
    // get new post from view
    const post = this.view.getPostFromInput();
    // add post to model
    this.model.addPost(post);
    // update view
    this.view.displayPosts(this.model.getPosts());
  }
}
```
- Repository Pattern là lớp trung gian giữa tầng Business Logic và Data Access, giúp cho việc truy cập dữ liệu chặt chẽ và bảo mật hơn. Repository đóng vai trò là một lớp kết nối giữa tầng Business và Model của ứng dụng. Việc tách lớp chứa tất cả các hàm, các phương thức truy vấn trực tiếp với dữ liệu khỏi lớp lưu trữ dữ liệu, giúp việc kiểm tra và bảo trì từng thành phần riêng biệt trở nên dễ dàng hơn.<br>
Ví dụ:
  - Repository
```
class PostRepository {
  private db: any; // Database connection object

  constructor(db: any) {
    this.db = db;
  }

  async getPosts(): Promise<Post[]> {
    const result = await this.db.query('SELECT * FROM books');
    return result.rows;
  }

  async addPost(post: Post): Promise<void> {
     await this.db.query('INSERT INTO posts (title, content, date) VALUES ($1, $2, $3)', [post.title, post.content, post.date]);
  }
}
```
  - Controller
```
class PostController {
  private repository: PostRepository;
  private view: PostView;

  constructor(repository: PostRepository, view: PostView) {
    this.repository = repository;
    this.view = view;
  }

  init() {
    // initialize the view
    this.view.displayPosts(this.repository.getPosts());
  }

  addPost() {
    // get new post from view
    const post = this.view.getPostFromInput();
    // add post
    this.repository.addPost(post);
    // update view
    this.view.displayPosts(this.repository.getPosts());
  }
}
```
- Dependency Injection Pattern là một design pattern trong lập trình, giúp quản lý sự phụ thuộc giữa các thành phần của ứng dụng. Trong DI, các module không giao tiếp trực tiếp với nhau mà thông qua interface. Các module cấp thấp sẽ hiện thực interface, và module cấp cao sẽ giao tiếp thông qua interface này.<br>
Ví dụ:
```
// Define an interface for a database connection object
interface DatabaseConnection {
  query(sql: string, params?: any[]): Promise<any>;
}

// Define a class for a PostgreSQL database connection
class PostgresConnection implements DatabaseConnection {
  private client: any; // PostgreSQL client object

  constructor() {
    this.client = new PostgreSQLClient(); // Instantiate a PostgreSQL client object
    this.client.connect(); // Connect to the database
  }

  async query(sql: string, params?: any[]): Promise<any> {
    const result = await this.client.query(sql, params);
    return result.rows;
  }
}

// Define a class for a BookService that depends on a database connection
class BookService {
  private db: DatabaseConnection; // Database connection object

  constructor(db: DatabaseConnection) {
    this.db = db;
  }

  async getAllBooks(): Promise<Book[]> {
    const result = await this.db.query('SELECT * FROM books');
    return result.map((row: any) => ({ id: row.id, title: row.title, author: row.author, publishedDate: row.published_date }));
  }

  async getBookById(id: number): Promise<Book> {
    const result = await this.db.query('SELECT * FROM books WHERE id = $1', [id]);
    return { id: result.id, title: result.title, author: result.author, publishedDate: result.published_date };
  }

  async createBook(book: Book): Promise<void> {
    await this.db.query('INSERT INTO books (title, author, published_date) VALUES ($1, $2, $3)', [book.title, book.author, book.publishedDate]);
  }

  async updateBook(id: number, book: Book): Promise<void> {
    await this.db.query('UPDATE books SET title = $1, author = $2, published_date = $3 WHERE id = $4', [book.title, book.author, book.publishedDate, id]);
  }

  async deleteBook(id: number): Promise<void> {
    await this.db.query('DELETE FROM books WHERE id = $1', [id]);
  }
}

// Example usage of the BookService class with a PostgresConnection object
const db = new PostgresConnection(); // Instantiate a PostgresConnection object
const bookService = new BookService(db); // Instantiate a BookService object with the PostgresConnection object as its dependency
const books = await bookService.getAllBooks(); // Get all books from the database
const book = await bookService.getBookById(1); // Get a book by its ID
const newBook = { title: 'New Book', author: 'Jane Doe', publishedDate: new Date() };
await bookService.createBook(newBook); // Create a new book in the database
await bookService.updateBook(1, { title: 'Updated Book', author: 'John Smith', publishedDate: new Date() });
```
- Observer Pattern là mẫu thiết kế cho phép một đối tượng (Subject) thông báo cho các đối tượng khác (Observer) khi trạng thái của nó thay đổi. Nó cung cấp cách để các đối tượng giao tiếp với nhau mà không cần biết trực tiếp về sự tồn tại của nhau.<br>
Ví dụ:
  - Define subject interface Topic, which will notify its observers (subscribers) of any updates
```
interface Topic {
  subscribe(observer: Observer): void;
  unsubscribe(observer: Observer): void;
  notify(): void;
}
```
  - Implement the Topic interface in a concrete subject class TopicManager, which manages a list of subscribers and notifies them whenever new content is added
```
class TopicManager implements Topic {
  private subscribers: Observer[] = [];

  public subscribe(observer: Observer): void {
    this.subscribers.push(observer);
  }

  public unsubscribe(observer: Observer): void {
    const index = this.subscribers.indexOf(observer);
    if (index !== -1) {
      this.subscribers.splice(index, 1);
    }
  }

  public notify(): void {
    for (const subscriber of this.subscribers) {
      subscriber.update();
    }
  }

  public addContent(topic: string, content: string): void {
    // Add new content to the topic
    // ...

    // Notify all subscribers of the new content
    this.notify();
  }
}
```
  - Define observer interface Observer, which has an update method that will be called by the subject
```
interface Observer {
  update(): void;
}
```
  - Implement the Observer interface in a concrete observer class User, which receives notifications when new content is added to a subscribed topic
```
class User implements Observer {
  private readonly username: string;

  constructor(username: string) {
    this.username = username;
  }

  public update(): void {
    console.log(`[${this.username}] New content has been added to a subscribed topic`);
  }
}
```
  - Use TopicManager and User classes to implement subscription feature
```
// Create a new topic manager
const topicManager = new TopicManager();

// Create two users
const user1 = new User("Alice");
const user2 = new User("Bob");

// Subscribe the users to a topic
topicManager.subscribe(user1);
topicManager.subscribe(user2);

// Add new content to the topic
topicManager.addContent("science", "New scientific discovery!");

// Output:
// [Alice] New content has been added to a subscribed topic
// [Bob] New content has been added to a subscribed topic
```
- Decorator Pattern cho phép người dùng thêm chức năng mới vào đối tượng hiện tại mà không muốn ảnh hưởng đến các đối tượng khác. Kiểu thiết kế này có cấu trúc hoạt động như một lớp bao bọc cho lớp hiện có. Mỗi khi cần thêm tính năng mới, đối tượng hiện có được bao bọc trong một đối tượng mới (decorator class).<br>
Ví dụ:
  - A class Car that represents a basic car with some properties and methods
```
class Car {
  private make: string;
  private model: string;
  private year: number;
  private price: number;

  constructor(make: string, model: string, year: number, price: number) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.price = price;
  }

  public getMake(): string {
    return this.make;
  }

  public getModel(): string {
    return this.model;
  }

  public getYear(): number {
    return this.year;
  }

  public getPrice(): number {
    return this.price;
  }
}
```
  - Define an abstract base class CarFeature that all decorators will inherit
```
abstract class CarFeature extends Car {
  protected car: Car;

  constructor(car: Car) {
    super(car.getMake(), car.getModel(), car.getYear(), car.getPrice());
    this.car = car;
  }

  public abstract getPrice(): number;
}
```
  - Implement concrete decorator classes that add the desired functionality to the Car class:
```
class SalesTaxDecorator extends CarFeature {
  public getPrice(): number {
    return this.car.getPrice() * 1.10; // 10% sales tax
  }
}

class NavigationDecorator extends CarFeature {
  public getPrice(): number {
    return this.car.getPrice() + 1500; // add $1500 for navigation system
  }
}

class SunroofDecorator extends CarFeature {
  public getPrice(): number {
    return this.car.getPrice() + 1000; // add $1000 for sunroof
  }
}
```
  - Use these decorators to add functionality to a Car object dynamically
```
// Create a basic car
const car = new Car("Honda", "Accord", 2022, 25000);

// Add sales tax to the car
const carWithSalesTax = new SalesTaxDecorator(car);

// Add a navigation system to the car
const carWithNavigation = new NavigationDecorator(carWithSalesTax);

// Add a sunroof to the car
const carWithSunroof = new SunroofDecorator(carWithNavigation);

console.log(`Make: ${carWithSunroof.getMake()}`);
console.log(`Model: ${carWithSunroof.getModel()}`);
console.log(`Year: ${carWithSunroof.getYear()}`);
console.log(`Price: ${carWithSunroof.getPrice()}`);

// Output:
// Make: Honda
// Model: Accord
// Year: 2022
// Price: 28750
```
##### 2. Front-end
- Module Pattern là mẫu thiết kế JavaScript nhằm thúc đẩy việc đóng gói và tổ chức mã. Cung cấp khả năng đóng gói dữ liệu với cả thuộc tính và phương thức dạng public/private, giúp tránh xung đột về tên đối với các function ở các script khác trên trang web. Sử dụng IIFE ({}) để bao đóng module code.<br>
Ví dụ:
```
var module = (function () {
  let options = {color:"red"}
  /*
    private code here
  */
  const setSize = function () {
    options["size"] = 12;
  };

  /*
    public code here
  */
  return {
    getOptions: function () {
      setSize();
      return options;
    }
  };
})();
module.getOptions();
```
- Strategy Pattern được sử dụng rất nhiều khi có các tác vụ tương tự nhau và cần thay đổi giữa các tác vụ trong thời gian chạy. Strategy Pattern giúp loại bỏ rất nhiều câu if-else, để làm được điều đó chỉ đơn giản là chúng tôi phải gói gọn các nhiệm vụ thành các phần nhỏ và sử dụng một đối tượng để truy cập vào.<br>
Ví dụ: Giả sử có dropdown list với các loại người dùng khác nhau (người dùng thông thường, quản trị viên và khách) và mong muốn hiển thị biểu mẫu trên cùng một trang tùy thuộc vào loại người dùng nào đã được chọn.
```
// React components section
import React from "react";
import UserForm  from "./userForm";
import AdminForm from "./adminForm";
import GuestForm from "./guestForm";

/*
* This object will help to encapsulate all the forms that could we have.
*/
const FormsManage = {
  user : {
    render(props){
      return <UserForm {...props} />
    }
  },
  admin:{
    render(props){
      return <AdminForm {...props} />
    }
  },
  guest:{
    render(props) {
      return <GuestForm {...props}/> 
    }
  }
};

/*
* Main form component
*/
const Form = (props) => {
  // here we are getting the form by type
  const userForm = FormsManage[props.type];
  return userForm.render(props);
};
export default Form;
```
- Builder Pattern là một mẫu thiết kế được dùng để cung cấp một giải pháp linh hoạt cho các vấn đề tạo đối tượng (object) khác nhau trong lập trình hướng đối tượng. Cho phép xây dựng các đối tượng phức tạp bằng cách sử dụng các đối tượng đơn giản và sử dụng tiếp cận từng bước. Builder Pattern còn cho phép tạo ra các kiểu thể hiện khác nhau của một đối tượng bằng cách sử dụng cùng một constructor code.<br>
![image](https://github.com/khoivi1311/Internship/assets/115878838/d7f0cbbd-1ce7-4888-8efa-a957d44dfb51)

Ví dụ:
```
// Product 
public class Student {
    private String id;
    private String firstName;
    private String lastName;
    private String dayOfBirth;
    private String currentClass;
    private String phone;

    public Student(String id, String firstName, String lastName, String dayOfBirth, String currentClass, String phone) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.dayOfBirth = dayOfBirth;
        this.currentClass = currentClass;
        this.phone = phone;
    }
}

// Builder 
public interface StudentBuilder {

    StudentBuilder setId(String id);

    StudentBuilder setFirstName(String firstName);

    StudentBuilder setLastName(String lastName);

    StudentBuilder setDayOfBirth(String dayOfBirth);

    StudentBuilder setCurrentClass(String currentClass);

    StudentBuilder setPhone(String phone);

    Student build();
}

// ConcreteBuilder
public class StudentConcreteBuilder implements StudentBuilder {

    private String id;
    private String firstName;
    private String lastName;
    private String dayOfBirth;
    private String currentClass;
    private String phone;

    @Override
    public StudentBuilder setId(String id) {
        this.id = id;
        return this;
    }

    @Override
    public StudentBuilder setFirstName(String firstName) {
        this.firstName = firstName;
        return this;
    }

    @Override
    public StudentBuilder setLastName(String lastName) {
        this.lastName = lastName;
        return this;
    }

    @Override
    public StudentBuilder setDayOfBirth(String dayOfBirth) {
        this.dayOfBirth = dayOfBirth;
        return this;
    }

    @Override
    public StudentBuilder setCurrentClass(String currentClass) {
        this.currentClass = currentClass;
        return this;
    }

    @Override
    public StudentBuilder setPhone(String phone) {
        this.phone = phone;
        return this;
    }

    @Override
    public Student build() {
        return new Student(id, firstName, lastName, dayOfBirth, currentClass, phone);
    }
}

//Director
public static void main(String[] args) {

        StudentBuilder studentBuilder = new StudentConcreteBuilder()
                .setFirstName("Tran")
                .setLastName("Quang Huy");

        System.out.println(studentBuilder.build());
    }
```
- Singleton Pattern được sử dụng để bảo đảm rằng mỗi một lớp (class) chỉ có được một instance duy nhất và mọi tương tác đều thông qua instance này.<br>
Ví dụ:
```
var Singleton = (function () {
    var instance;

    function createInstance() {
        var object = new Object("I am the instance");
        return object;
    }

    return {
        getInstance: function () {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    };
})();

function run() {

    var instance1 = Singleton.getInstance();
    var instance2 = Singleton.getInstance();

    console.log("Same instance? " + (instance1 === instance2));
}
```
- Factory Pattern là một trong những Design Pattern thuộc nhóm Creational. Nhiệm vụ của Factory Pattern là quản lý và trả về các đối tượng theo yêu cầu, giúp cho việc khởi tạo đổi tượng một cách linh hoạt hơn.<br>
Ví dụ:
- Tạo các class
```
class TailFactory {
  constructor(props) {
    this.tailLength = props.tailLength;
  }
};

class TorsoFactory {
  constructor(props) {
    this.color = props.color;
  }
};

class HeadFactory {
  constructor(props) {
    this.snoutLenth = props.snoutLenth;
  }
};
```
- Tạo Factory để quản lý việc tạo đối tượng
```
class ReptilePartFactory {
  constructor(type, props) {
    if(type === "tail")
      return new TailFactory(props);
    if(type === "torso")
      return new TorsoFactory(props);
    if(type === "head")
      return new HeadFactory(props);
  }
};
```
- Gọi Factory ở Main
```
let alligator = {};
let alligatorProps = {
  tailLength : 2.5, 
  color: "green",
  snoutLenth: 1
};

//gets a tail from the tail factory
alligator.tail  = new ReptilePartFactory("tail", alligatorProps); 

//gets a torso from the torso factory
alligator.torso = new ReptilePartFactory("torso", alligatorProps);

//gets a head from the head factory
alligator.head  = new ReptilePartFactory("head", alligatorProps);
```
