(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{554:function(n,t,h){"use strict";h.r(t);var i=h(8),a=Object(i.a)({},(function(){var n=this,t=n.$createElement,h=n._self._c||t;return h("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[h("h2",{attrs:{id:"cau-hoi"}},[h("a",{staticClass:"header-anchor",attrs:{href:"#cau-hoi"}},[n._v("#")]),n._v(" Câu hỏi")]),n._v(" "),h("ul",[h("li",[n._v("Chuyện gì sẽ xảy ra khi training và test model ở 2 tập dữ liệu khác nhau?")]),n._v(" "),h("li",[n._v("Giả sử có 2 nguồn dữ liệu ảnh\n"),h("ul",[h("li",[n._v("Nguồn 1: thu thập dữ liệu ảnh về mèo từ trên mạng về để train một model nhận diện mèo. Các ảnh thu được đều là ảnh rõ nét,\ncó không có nhiều nhiẽu, ko bị blur, bởi vì hầu hết chúng được chụp bằng những thợ ảnh chuyên nghiệp.")]),n._v(" "),h("li",[n._v("Nguồn 2: sau khi training xong model, ta gặp vấn đề thực tế là ảnh dùng để test của ta lại là ảnh được chụp từ mobile app, ảnh bị nhiễu, bị blur,\nvì ảnh được chụp từ thợ ảnh nghiệp dư.")])])]),n._v(" "),h("li",[n._v("Thêm một giả định nữa, ảnh từ nguồn 1 dành tập training rất nhiều, khoảng 200.000 ảnh, còn ảnh từ tập test lại rất ít, chỉ 10.000 ảnh. Ta có thể làm gì?")])]),n._v(" "),h("h2",{attrs:{id:"cac-phuong-an-co-the-lam"}},[h("a",{staticClass:"header-anchor",attrs:{href:"#cac-phuong-an-co-the-lam"}},[n._v("#")]),n._v(" Các phương án có thể làm")]),n._v(" "),h("p",[n._v("Sắp xếp lại phân bố tập của tập train, dev/test.")]),n._v(" "),h("h3",{attrs:{id:"option1"}},[h("a",{staticClass:"header-anchor",attrs:{href:"#option1"}},[n._v("#")]),n._v(" Option1")]),n._v(" "),h("ul",[h("li",[n._v("Trộn 2 tập lại với nhau, để chia tập train, dev/test lại. Tập được trộn lại sẽ có 210.000 ảnh, ta lấy ra 205000 ảnh để train,\ntập dev và tập test sẽ có mỗi tập 2500 ảnh. Bằng cách này có điểm lợi mà cũng có điểm chưa tốt.")]),n._v(" "),h("li",[n._v("Điểm tốt: Tập train, dev/test đã có cùng phân bố vì được trộn từ 2 nguồn ảnh lại với nhau.")]),n._v(" "),h("li",[n._v("Điểm chưa tốt: Mặc dù trộn 2 nguồn ảnh lại với nhau, nhưng do số lượng ảnh đến từ nguồn web vẫn quá nhiều(200.000)\nso với ảnh đến từ nguồn mobile app(10.00). Điều này dẫn đến chuyện trong tập dev/test, tính trung bình thì có tới 2381 ảnh đến từ nguồn web,\ntrong khi chỉ có 119 ảnh đến từ nguồn mobile app. => Vì tính bất hợp lý này mà ta sẽ không chọn option1.")])]),n._v(" "),h("h3",{attrs:{id:"option2"}},[h("a",{staticClass:"header-anchor",attrs:{href:"#option2"}},[n._v("#")]),n._v(" Option2")]),n._v(" "),h("ul",[h("li",[n._v("Dùng toàn bộ ảnh thu được ở nguồn 1, và 5000 ảnh thu được ở nguồn 2 làm tập train, tập dev/test sẽ chứa mỗi tập 2500 ảnh của nguồn 2.")]),n._v(" "),h("li",[n._v("Điểm lợi: Đâu là dữ liệu thực sự quan tâm. Ở trường này, dữ liệu ta thực sự quan tâm chính là dữ liệu đưa vào để test từ nguồn mobile app.\nBiết được điều này thì ta tập trung phát triển system sao cho system đưa ra kết quả tốt trên tập dev/test, tập dữ liệu chứa các ảnh thu từ nguồn mobile app.")]),n._v(" "),h("li",[n._v("Điểm bất lợi: Phân bố của tập train và tập dev/test khác nhau. Nhưng vấn đề này sẽ được giải quyết bằng những technical khác,\nvà hệ thống sẽ có kết quả tốt được nên không đáng lo lắm.")])]),n._v(" "),h("p",[n._v("Trên đây là cách để xây dựng tập train và dev/test từ 2 tập dữ liệu khác nhau. Bằng cách này thường thì performance của hệ thống sẽ được cải thiện hơn.")])])}),[],!1,null,null,null);t.default=a.exports}}]);