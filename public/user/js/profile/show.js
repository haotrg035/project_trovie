!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=67)}({67:function(e,t,n){e.exports=n(68)},68:function(e,t){document.addEventListener("DOMContentLoaded",(function(){var e;!function(){var e=document.querySelector("#form-generate-token"),t=null;if(null!==e){var n=function(e){return setInterval((function(){var n=(new Date).getTime(),o=e-n,r=Math.floor(o%36e5/6e4),u=Math.floor(o%6e4/1e3);a.innerHTML=r+" : "+u,o<0&&clearInterval(t)}),1e3)},o=document.querySelector("#invite-token__collapse"),r=o.querySelector("input[name=token]"),a=o.querySelector(".invite_token_timeout");e.onsubmit=function(a){a.preventDefault(),axios.get(e.action,{params:{api_token:__apiToken}}).then((function(e){r.value=e.data.data.token,clearInterval(t),t=n(new Date(e.data.data.expired_at).getTime()),tata.success("Thông báo","Mã mời có hạn sử dụng trong 15 phút!"),showBsCollapse(o)})).catch((function(e){tata.error("Thông báo",e.response.data.message)}))},o.querySelector("input[name=token]").onclick=function(){r.select(),r.setSelectionRange(0,99999),document.execCommand("copy"),tata.success("Thông báo","Đã copy mã mời!")},""!==a.innerText.trim()&&(t=n(new Date(a.innerText).getTime()),showBsCollapse(o))}}(),null!==(e=document.getElementById("form-cancel-contract"))&&(e.onsubmit=function(t){t.preventDefault(),confirm("Bạn có chắc muốn hủy hợp đồng với nhà trọ đang thuê?")&&confirm("Xác nhận hủy hợp đồng?")&&e.submit()})}))}});