(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{561:function(e,s,n){"use strict";n.r(s);var t=n(8),a=Object(t.a)({},(function(){var e=this,s=e.$createElement,n=e._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("p",[e._v("Cài đặt môi trường docker")]),e._v(" "),n("ul",[n("li",[e._v("Cài đặt docker engine")]),e._v(" "),n("li",[e._v("Cài đặt docker-compose")])]),e._v(" "),n("h2",{attrs:{id:"cai-đat-docker-engine"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#cai-đat-docker-engine"}},[e._v("#")]),e._v(" Cài đặt docker engine")]),e._v(" "),n("ul",[n("li",[e._v("Lưu ý hướng dẫn này chỉ dành cho "),n("a",{attrs:{href:"https://docs.docker.com/engine/install/ubuntu/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Ubuntu"),n("OutboundLink")],1)]),e._v(" "),n("li",[e._v("Để cài đặt cho Windows tham khảo "),n("a",{attrs:{href:"https://docs.docker.com/desktop/windows/install/",target:"_blank",rel:"noopener noreferrer"}},[e._v("tại đây"),n("OutboundLink")],1)]),e._v(" "),n("li",[e._v("Để cài đặt cho MacOs tham khảo "),n("a",{attrs:{href:"https://docs.docker.com/desktop/mac/install/",target:"_blank",rel:"noopener noreferrer"}},[e._v("tại đây"),n("OutboundLink")],1)])]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('# Xóa bỏ docker cũ trong máy nếu có\n$ sudo apt-get remove docker docker-engine docker.io containerd runc\n# Cập nhật phần mềm và cài đặt các thư viện cần thiết\n$ sudo apt-get update\n$ sudo apt-get install \\\n    apt-transport-https \\\n    ca-certificates \\\n    curl \\\n    gnupg \\\n    lsb-release\n# Đăng ký GPG của docker\n$ curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg\n# Đăng ký stable repository của docker\n$ echo \\\n  "deb [arch=amd64 signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu \\\n  $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null\n# Cài đặt docker engine\n$ sudo apt-get update\n$ sudo apt-get install docker-ce docker-ce-cli containerd.io\n')])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br"),n("span",{staticClass:"line-number"},[e._v("6")]),n("br"),n("span",{staticClass:"line-number"},[e._v("7")]),n("br"),n("span",{staticClass:"line-number"},[e._v("8")]),n("br"),n("span",{staticClass:"line-number"},[e._v("9")]),n("br"),n("span",{staticClass:"line-number"},[e._v("10")]),n("br"),n("span",{staticClass:"line-number"},[e._v("11")]),n("br"),n("span",{staticClass:"line-number"},[e._v("12")]),n("br"),n("span",{staticClass:"line-number"},[e._v("13")]),n("br"),n("span",{staticClass:"line-number"},[e._v("14")]),n("br"),n("span",{staticClass:"line-number"},[e._v("15")]),n("br"),n("span",{staticClass:"line-number"},[e._v("16")]),n("br"),n("span",{staticClass:"line-number"},[e._v("17")]),n("br"),n("span",{staticClass:"line-number"},[e._v("18")]),n("br"),n("span",{staticClass:"line-number"},[e._v("19")]),n("br")])]),n("h2",{attrs:{id:"cai-đat-docker-compose"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#cai-đat-docker-compose"}},[e._v("#")]),e._v(" Cài đặt docker-compose")]),e._v(" "),n("ul",[n("li",[e._v("Link tham khảo "),n("a",{attrs:{href:"https://docs.docker.com/compose/install/",target:"_blank",rel:"noopener noreferrer"}},[e._v("tại đây"),n("OutboundLink")],1)])]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('# Cài đặt\n$ sudo curl -L "https://github.com/docker/compose/releases/download/1.29.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose\n# Tạo permission cho docker-compose\n$ sudo chmod +x /usr/local/bin/docker-compose\n')])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br")])]),n("p",[e._v("🍺 Done!")])])}),[],!1,null,null,null);s.default=a.exports}}]);