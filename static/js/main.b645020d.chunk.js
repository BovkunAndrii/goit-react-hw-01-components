(this["webpackJsonpgoit-react-hw-01-components"]=this["webpackJsonpgoit-react-hw-01-components"]||[]).push([[0],[,function(t,e,a){t.exports={profile:"Profile_profile__3qwv2",avatar:"Profile_avatar__3MHPN",name:"Profile_name__1HzrS",tag:"Profile_tag__1a8Ht",location:"Profile_location__2zbCA",stats:"Profile_stats__1U73I",item:"Profile_item__ARqJf",label:"Profile_label__3ENag",quantity:"Profile_quantity__3nX5J"}},,function(t){t.exports=JSON.parse('{"name":"Jacques Gluke","tag":"jgluke","location":"Ocho Rios, Jamaica","avatar":"https://www.flaticon.com/svg/static/icons/svg/3784/3784184.svg","stats":{"followers":5603,"views":4827,"likes":1308}}')},function(t,e,a){t.exports={statistics:"Statistics_statistics__Peue0",title:"Statistics_title__2dqR5",statList:"Statistics_statList__JwMlY",item:"Statistics_item__1j92E",percentage:"Statistics_percentage__3KkJ1"}},function(t,e,a){t.exports={item:"FriendListItem_item__z6zfZ",status:"FriendListItem_status__2OKgp",statusOnline:"FriendListItem_statusOnline__6s_4l",avatar:"FriendListItem_avatar__3j4xq",name:"FriendListItem_name__6SjJq"}},,function(t,e,a){t.exports={transactionHistory:"TransactionHistor_transactionHistory__3Q2Zv",title:"TransactionHistor_title__3fN0j"}},function(t){t.exports=JSON.parse('[{"id":"id-1","label":".docx","percentage":22},{"id":"id-2","label":".pdf","percentage":4},{"id":"id-3","label":".mp3","percentage":17},{"id":"id-4","label":".psd","percentage":47},{"id":"id-5","label":".pdf","percentage":10}]')},,function(t,e,a){t.exports={friendList:"FriendList_friendList__112_8"}},function(t){t.exports=JSON.parse('[{"avatar":"https://www.flaticon.com/svg/static/icons/svg/763/763704.svg","name":"Mango","isOnline":true,"id":1812},{"avatar":"https://www.flaticon.com/svg/static/icons/svg/1998/1998671.svg","name":"Kiwi","isOnline":false,"id":1137},{"avatar":"https://www.flaticon.com/svg/static/icons/svg/1623/1623681.svg","name":"Ajax","isOnline":true,"id":1213},{"avatar":"https://www.flaticon.com/svg/static/icons/svg/2977/2977285.svg","name":"Jay","isOnline":true,"id":1714},{"avatar":"https://www.flaticon.com/svg/static/icons/svg/1998/1998749.svg","name":"Poly","isOnline":false,"id":1284}]')},function(t){t.exports=JSON.parse('[{"id":"1e0700a2-5183-4291-85cc-2065a036a683","type":"invoice","amount":"964.82","currency":"LRD"},{"id":"a30f821b-4d25-4ff0-abdd-e340b3f0dd2b","type":"payment","amount":"686.50","currency":"WST"},{"id":"44dca67a-8e5a-4798-bf8e-b15efd4e1abd","type":"invoice","amount":"828.62","currency":"UGX"},{"id":"ea8ed3dc-2b68-4a53-905a-53ecb0adef33","type":"withdrawal","amount":"527.80","currency":"ALL"},{"id":"ea76146a-0b00-4b80-bc02-a8c822176712","type":"withdrawal","amount":"371.43","currency":"MUR"},{"id":"63ca02f9-d637-46b5-9237-f3b24425e029","type":"payment","amount":"862.44","currency":"AUD"},{"id":"ed0263e8-59a5-4bf1-87e0-2bb88e53dc34","type":"withdrawal","amount":"907.00","currency":"GEL"},{"id":"6013bad0-750c-4691-8bc2-d8f2b43969c4","type":"withdrawal","amount":"352.52","currency":"UGX"},{"id":"252c7be4-8b06-4fa7-8d42-61fb835b70d5","type":"payment","amount":"388.98","currency":"TOP"},{"id":"4eaab41b-b967-40ac-82ed-85fc66f646f1","type":"deposit","amount":"103.10","currency":"BWP"},{"id":"9648a350-8469-42d5-8bf3-18090de5fe67","type":"withdrawal","amount":"322.32","currency":"MRO"},{"id":"9c5c25fb-1a95-4b2f-8d1f-4c4426d677cc","type":"invoice","amount":"14.79","currency":"PYG"},{"id":"43ef232c-80e9-4d6f-b48a-b22405620de3","type":"payment","amount":"904.86","currency":"CHF"},{"id":"5161682e-e620-4019-ab0a-24ceb10fbd20","type":"withdrawal","amount":"307.08","currency":"NOK"},{"id":"7b119d71-42e6-4c42-a141-6818b07bb9ff","type":"invoice","amount":"275.07","currency":"AWG"},{"id":"a4f65722-65c4-4c28-b1f4-b8ed988bb205","type":"deposit","amount":"213.10","currency":"STD"},{"id":"c6e5784b-0ca3-48d6-86e5-b5128af5a523","type":"invoice","amount":"116.11","currency":"CUP CUC"},{"id":"c9ebed6a-3a02-4b49-ac0d-0534b51f2bfd","type":"invoice","amount":"878.67","currency":"HKD"},{"id":"a4a98b0e-b22c-438b-9f83-de2df52110c8","type":"invoice","amount":"725.03","currency":"UYU UYI"},{"id":"b39bfa7a-0166-4c47-94d6-87d20590f746","type":"payment","amount":"405.45","currency":"MDL"}]')},,,,,,,function(t,e,a){"use strict";a.r(e);var s=a(2),c=a.n(s),i=a(9),n=a.n(i),r=a(1),l=a.n(r),o=a(0),d=function(t){var e=t.name,a=t.tag,s=t.location,c=t.url,i=t.followers,n=t.views,r=t.likes;return Object(o.jsxs)("div",{className:l.a.profile,children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("img",{src:c,alt:"\u0410\u0432\u0430\u0442\u0430\u0440 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f",className:l.a.avatar}),Object(o.jsx)("p",{className:l.a.name,children:e}),Object(o.jsxs)("p",{className:l.a.tag,children:["@",a]}),Object(o.jsx)("p",{className:l.a.location,children:s})]}),Object(o.jsxs)("ul",{className:l.a.stats,children:[Object(o.jsxs)("li",{className:l.a.item,children:[Object(o.jsx)("span",{className:l.a.label,children:"Followers"}),Object(o.jsx)("span",{className:l.a.quantity,children:i})]}),Object(o.jsxs)("li",{className:l.a.item,children:[Object(o.jsx)("span",{className:l.a.label,children:"Views"}),Object(o.jsx)("span",{className:l.a.quantity,children:n})]}),Object(o.jsxs)("li",{className:l.a.item,children:[Object(o.jsx)("span",{className:l.a.label,children:"Likes"}),Object(o.jsx)("span",{className:l.a.quantity,children:r})]})]})]})};d.defaultProps={url:"https://www.flaticon.com/svg/static/icons/svg/3135/3135715.svg"};var b=d,m=a(4),u=a.n(m),j=function(t){var e=t.title,a=t.stats;return Object(o.jsxs)("section",{className:u.a.statistics,children:[e&&Object(o.jsx)("h2",{className:u.a.title,children:e}),Object(o.jsx)("ul",{className:u.a.statList,children:a.map((function(t){return Object(o.jsxs)("li",{className:u.a.item,style:{backgroundColor:"rgba( ".concat(f()," , ").concat(f()," , ").concat(f())},children:[Object(o.jsx)("span",{className:"label",children:t.label}),Object(o.jsxs)("span",{className:u.a.percentage,children:[t.percentage,"%"]})]},t.id)}))})]})};function f(){return Math.floor(256*Math.random())}j.defaultProps={title:""};var p=j,O=a(5),_=a.n(O),h=function(t){var e=t.avatar,a=t.name,s=t.isOnline;return Object(o.jsxs)("li",{className:_.a.item,children:[Object(o.jsx)("span",{className:s?_.a.statusOnline:_.a.status}),Object(o.jsx)("img",{className:_.a.avatar,src:e,alt:a,width:"48"}),Object(o.jsx)("p",{className:_.a.name,children:a})]})},y=a(10),v=a.n(y),x=function(t){var e=t.friends;return Object(o.jsx)("ul",{className:v.a.friendList,children:e.map((function(t){return Object(o.jsx)(h,{avatar:t.avatar,name:t.name,isOnline:t.isOnline},t.id)}))})},w=a(7),g=a.n(w),N=function(t){var e=t.transactions;return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("table",{className:g.a.transactionHistory,children:[Object(o.jsx)("thead",{children:Object(o.jsxs)("tr",{className:g.a.title,children:[Object(o.jsx)("th",{children:"Type"}),Object(o.jsx)("th",{children:"Amount"}),Object(o.jsx)("th",{children:"Currency"})]})}),Object(o.jsx)("tbody",{children:e.map((function(t){return Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{children:t.type}),Object(o.jsx)("td",{children:t.amount}),Object(o.jsx)("td",{children:t.currency})]},t.id)}))})]})})},L=a(3),P=a(8),J=a(11),S=a(12),k=function(){return Object(o.jsxs)("div",{children:[Object(o.jsx)(b,{name:L.name,tag:L.tag,location:L.location,url:L.avatar,followers:L.stats.followers,views:L.stats.views,likes:L.stats.likes}),Object(o.jsx)(p,{title:"Upload stats",stats:P}),Object(o.jsx)(p,{stats:P}),Object(o.jsx)(x,{friends:J}),Object(o.jsx)(N,{transactions:S})]})};a(18);n.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(k,{})}),document.getElementById("root"))}],[[19,1,2]]]);
//# sourceMappingURL=main.b645020d.chunk.js.map