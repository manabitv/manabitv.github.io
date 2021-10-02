(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{562:function(s,e,a){"use strict";a.r(e);var t=a(8),n=Object(t.a)({},(function(){var s=this,e=s.$createElement,a=s._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("Cài đặt proxy cho docker")]),s._v(" "),a("ul",[a("li",[s._v("Hệ điều hành Ubuntu")])]),s._v(" "),a("h3",{attrs:{id:"tao-file-proxy-config"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tao-file-proxy-config"}},[s._v("#")]),s._v(" Tạo file proxy config")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("$ sudo mkdir -p /etc/systemd/system/docker.service.d\n$ sudo vi /etc/systemd/system/docker.service.d/proxy.conf\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h3",{attrs:{id:"them-nhung-thong-tin-ve-proxy-vao-trong-file-proxy-conf"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#them-nhung-thong-tin-ve-proxy-vao-trong-file-proxy-conf"}},[s._v("#")]),s._v(" Thêm những thông tin về proxy vào trong file proxy.conf")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('[Service]\nEnvironment="HTTP_PROXY=http://myproxy.hostname:8080"\nEnvironment="HTTPS_PROXY=https://myproxy.hostname:8080/"\nEnvironment="NO_PROXY="localhost,127.0.0.1,::1"\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h3",{attrs:{id:"luu-lai-va-sau-đo-load-lai-config"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#luu-lai-va-sau-đo-load-lai-config"}},[s._v("#")]),s._v(" Lưu lại và sau đó load lại config")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("$ sudo systemctl daemon-reload\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"ap-dung-config-đo-vao-docker"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ap-dung-config-đo-vao-docker"}},[s._v("#")]),s._v(" Áp dụng config đó vào docker")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("$ sudo systemctl restart docker.service\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])])}),[],!1,null,null,null);e.default=n.exports}}]);