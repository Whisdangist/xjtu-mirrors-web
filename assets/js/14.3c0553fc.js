(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{202:function(e,r,a){"use strict";a.r(r);var s=a(0),t=Object(s.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this,r=e.$createElement,a=e._self._c||r;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"rpmfusion镜像使用帮助"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rpmfusion镜像使用帮助","aria-hidden":"true"}},[e._v("#")]),e._v(" RPMFusion镜像使用帮助")]),e._v(" "),a("h2",{attrs:{id:"收录架构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#收录架构","aria-hidden":"true"}},[e._v("#")]),e._v(" 收录架构")]),e._v(" "),a("ul",[a("li",[e._v("ALL")])]),e._v(" "),a("h2",{attrs:{id:"收录版本"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#收录版本","aria-hidden":"true"}},[e._v("#")]),e._v(" 收录版本")]),e._v(" "),a("ul",[a("li",[e._v("ALL")])]),e._v(" "),a("h2",{attrs:{id:"使用说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用说明","aria-hidden":"true"}},[e._v("#")]),e._v(" 使用说明")]),e._v(" "),a("p",[e._v("首先安装GPG公钥：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("sudo yum install --nogpgcheck http://download1.rpmfusion.org/free/fedora/rpmfusion-free-release-$(rpm -E %fedora).noarch.rpm http://download1.rpmfusion.org/nonfree/fedora/rpmfusion-nonfree-release-$(rpm -E %fedora).noarch.rpm\n")])])]),a("p",[e._v("或者使用镜像：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("sudo yum install --nogpgcheck http://mirrors.xjtu.edu.cn/rpmfusion/free/fedora/rpmfusion-free-release-$(rpm -E %fedora).noarch.rpm http://mirrors.xjtu.edu.cn/rpmfusion/nonfree/fedora/rpmfusion-nonfree-release-$(rpm -E %fedora).noarch.rpm\n")])])]),a("p",[e._v("配置"),a("code",[e._v("RPMFusion")]),e._v("镜像(/etc/yum.repos.d/rpmfusion.repo):")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("[rpmfusion-free]\nname=RPM Fusion for Fedora $releasever - Free\nbaseurl=http://mirrors.xjtu.edu.cn/rpmfusion/free/fedora/releases/$releasever/Everything/$basearch/os/\nmirrorlist=http://mirrors.rpmfusion.org/mirrorlist?repo=free-fedora-$releasever&arch=$basearch\nenabled=1\nmetadata_expire=7d\ngpgcheck=1\ngpgkey=file:///etc/pki/rpm-gpg/RPM-GPG-KEY-rpmfusion-free-fedora-$releasever-$basearch\n\n[rpmfusion-free-debuginfo]\nname=RPM Fusion for Fedora $releasever - Free - Debug\nmirrorlist=http://mirrors.rpmfusion.org/mirrorlist?repo=free-fedora-debug-$releasever&arch=$basearch\nenabled=0\nmetadata_expire=7d\ngpgcheck=1\ngpgkey=file:///etc/pki/rpm-gpg/RPM-GPG-KEY-rpmfusion-free-fedora-$releasever-$basearch\n\n[rpmfusion-free-source]\nname=RPM Fusion for Fedora $releasever - Free - Source\nbaseurl=http://mirrors.xjtu.edu.cn/rpmfusion/free/fedora/releases/$releasever/Everything/source/SRPMS/\nmirrorlist=http://mirrors.rpmfusion.org/mirrorlist?repo=free-fedora-source-$releasever&arch=$basearch\nenabled=0\nmetadata_expire=7d\ngpgcheck=1\ngpgkey=file:///etc/pki/rpm-gpg/RPM-GPG-KEY-rpmfusion-free-fedora-$releasever-$basearch\n")])])]),a("p",[e._v("修改源配置文件后，更新本地缓存:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("sudo yum makecache\n")])])]),a("h2",{attrs:{id:"参考资料"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考资料","aria-hidden":"true"}},[e._v("#")]),e._v(" 参考资料")]),e._v(" "),a("ul",[a("li",[e._v("RPMFusion官方参考：http://rpmfusion.org/Configuration")])])])}],!1,null,null,null);t.options.__file="rpmfusion.md";r.default=t.exports}}]);