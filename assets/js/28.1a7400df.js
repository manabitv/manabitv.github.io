(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{556:function(n,t,a){"use strict";a.r(t);var i=a(8),h=Object(i.a)({},(function(){var n=this,t=n.$createElement,a=n._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[a("h2",{attrs:{id:"mo-đau"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mo-đau"}},[n._v("#")]),n._v(" Mở đầu")]),n._v(" "),a("p",[n._v("Ngày nay kỹ thuật transfer learning và multi-task learning được sử dụng nhiều trong deep learning. Ở bài viết này sẽ nói sơ lược giới thiệu vè 2 kỹ thuật này.")]),n._v(" "),a("h2",{attrs:{id:"_1-transfer-learning"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-transfer-learning"}},[n._v("#")]),n._v(" 1. Transfer learning")]),n._v(" "),a("p",[n._v("Transfer learning là một kỹ thuật dùng kiến thức đã được học ở tập dữ liệu này, áp dụng sang tập dữ liệu khác.")]),n._v(" "),a("p",[n._v("Ví dụ ta đã train một mạng với tập dữ liệu rất lớn, cắt bỏ lớp cuối, rồi add vào một lớp mới phù hợp với task mới của ta.\nNhư vậy chỉ lớp output cuối cùng được thay đổi, còn lại các lớp trước đó là các lớp extract feature thì vẫn được giữ nguyên.\nDùng mạng mới này train lại với tập data mới ta để thu được mạng phù hợp. Cách làm như này chính là transfer learning.\nKhi nào thì nên thực hiện transfer learning.\nKhi mô hình mạng mới và mạng cũ đều cùng input, chỉ khác số lượng node trong output etc.\nKhi lượng data để train trên tập mới nhỏ.")]),n._v(" "),a("h2",{attrs:{id:"_2-multi-task-learning"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-multi-task-learning"}},[n._v("#")]),n._v(" 2. Multi-task learning")]),n._v(" "),a("p",[n._v("Multi-task learning là cách train nhiều task riêng biệt bằng một mạng lớn một cách đồng thời.")]),n._v(" "),a("p",[n._v("Giả sử ta có task T1: nhận diện oto, task T2: nhận diện người đi bộ, task T3: nhận diện biển báo etc.\nMặc dù ta có thể train nhiều mạng riêng lẻ để thực hiện từng task nhỏ, nhưng cách này vừa tốn thời gian,\nmà hiệu quả của model lại không tốt bằng cách gộp nhiều task T1, T2, T3 vào một mạng to rồi train đồng thời cả 3 task đó.")]),n._v(" "),a("p",[n._v("Bằng cách làm như thế, các low level feature được chiết xuất từ các tập dữ liệu của task T1, T2 có thể hỗ trợ cho task T3.\nMặc dù bề ngoài thì các task chẳng có liên quan gì đến nhau. Nhưng bằng thực nghiệm thì người ta thấy rằng đem train tổng hợp các task như thế thì performance sẽ tốt hơn là train từng task với từng mạng nhỏ riêng rẽ.")]),n._v(" "),a("p",[n._v("Về mặt bản chất việc này chính là việc transfer kiến thức từ task này sang task kia một cách đồng thời.")]),n._v(" "),a("p",[n._v("Khi nào ta dùng multi-task learning được:\nTập dữ liệu của các task phải xấp xỉ nhau.\nBằng cách train đồng thời như thế, share low level feature có thể giúp cho model hơn hơn.\nTrain bằng dữ liệu của nhiều task đồng thời, nên tập dữ liệu lớn hơn, nên có thể dùng mạng lớn hơn để làm tốt đồng thời nhiều task.")]),n._v(" "),a("h2",{attrs:{id:"ket-luan"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ket-luan"}},[n._v("#")]),n._v(" Kết luận")]),n._v(" "),a("p",[n._v("Mặc dù cả 2 kỹ thuật đều quan trọng, nhưng trong thực tế thì người ta hay dùng transfer learning nhiều hơn là multi-task learning.\nCó nhiều bài toán thể hiện performance rất tốt khi được dùng transfer learning.")])])}),[],!1,null,null,null);t.default=h.exports}}]);