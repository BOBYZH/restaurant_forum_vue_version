(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-be2cb5d8"],{be6c:function(e,t,a){"use strict";a("b0c0");var n=a("2fa3");t["a"]={categories:{getDetail:function(e){var t=e.categoryId;return n["b"].get("/admin/categories/".concat(t))},get:function(){return n["b"].get("/admin/categories")},create:function(e){var t=e.name;return n["b"].post("/admin/categories",{name:t})},update:function(e){var t=e.categoryId,a=e.name;return n["b"].put("/admin/categories/".concat(t),{name:a})},delete:function(e){var t=e.categoryId;return n["b"].delete("/admin/categories/".concat(t))}},restaurants:{getDetail:function(e){var t=e.restaurantId;return n["b"].get("/admin/restaurants/".concat(t))},get:function(){return n["b"].get("/admin/restaurants")},create:function(e){var t=e.formData;return n["b"].post("/admin/restaurants",t)},update:function(e){var t=e.restaurantId,a=e.formData;return n["b"].put("/admin/restaurants/".concat(t),a)},delete:function(e){var t=e.restaurantId;return n["b"].delete("/admin/restaurants/".concat(t))}},users:{get:function(){return n["b"].get("/admin/users")},update:function(e){var t=e.userId,a=e.isAdmin;return n["b"].put("/admin/users/".concat(t),{isAdmin:a})}}}},f91c:function(e,t,a){"use strict";a.r(t);a("a4d3"),a("e01a"),a("b0c0");var n=a("7a23"),r={class:"container py-5"},c={key:1,class:"row"},s={class:"col-md-12"},i={class:"badge badge-secondary mt-1 mb-3"},u={class:"col-md-4"},o=["src"],d={class:"well"},b={class:"list-unstyled"},g=Object(n["g"])("strong",null,"Opening Hour:",-1),l=Object(n["g"])("strong",null,"Tel:",-1),m=Object(n["g"])("strong",null,"Address:",-1),p={class:"col-md-8"},f=Object(n["g"])("hr",null,null,-1);function O(e,t,a,O,j,v){var h=Object(n["z"])("Spinner");return Object(n["s"])(),Object(n["f"])("div",r,[j.isLoading?(Object(n["s"])(),Object(n["d"])(h,{key:0})):(Object(n["s"])(),Object(n["f"])("div",c,[Object(n["g"])("div",s,[Object(n["g"])("h1",null,Object(n["B"])(j.restaurant.name),1),Object(n["g"])("span",i,Object(n["B"])(j.restaurant.categoryName),1)]),Object(n["g"])("div",u,[Object(n["g"])("img",{class:"img-responsive center-block",src:e.emptyImage(j.restaurant.image),style:{width:"250px","margin-bottom":"25px"}},null,8,o),Object(n["g"])("div",d,[Object(n["g"])("ul",b,[Object(n["g"])("li",null,[g,Object(n["h"])(" "+Object(n["B"])(j.restaurant.openingHours),1)]),Object(n["g"])("li",null,[l,Object(n["h"])(" "+Object(n["B"])(j.restaurant.tel),1)]),Object(n["g"])("li",null,[m,Object(n["h"])(" "+Object(n["B"])(j.restaurant.address),1)])])])]),Object(n["g"])("div",p,[Object(n["g"])("p",null,Object(n["B"])(j.restaurant.description),1)])])),f,Object(n["g"])("button",{type:"button",class:"btn btn-link",onClick:t[0]||(t[0]=function(t){return e.$router.back()})}," 回上一頁 ")])}var j=a("5530"),v=(a("96cf"),a("1da1")),h=a("2708"),y=a("be6c"),w=a("2fa3"),k=a("2375"),I={name:"AdminRestaurant",components:{Spinner:k["a"]},mixins:[h["a"]],beforeRouteUpdate:function(e,t,a){var n=e.params.id;this.fetchRestaurant(n),a()},data:function(){return{restaurant:{id:-1,name:"",categoryName:"",image:"",openingHours:"",tel:"",address:"",description:""},isLoading:!0}},mounted:function(){var e=this.$route.params.id;this.fetchRestaurant(e)},methods:{fetchRestaurant:function(e){var t=this;return Object(v["a"])(regeneratorRuntime.mark((function a(){var n,r,c,s,i,u,o,d,b,g,l;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,t.isLoading=!0,a.next=4,y["a"].restaurants.getDetail({restaurantId:e});case 4:if(n=a.sent,r=n.data,"error"!==r.status){a.next=8;break}throw new Error(r.message);case 8:c=r.restaurant,s=c.id,i=c.name,u=c.tel,o=c.address,d=c.opening_hours,b=c.description,g=c.image,l=c.Category,t.restaurant=Object(j["a"])(Object(j["a"])({},t.restaurant),{},{id:s,name:i,tel:u,address:o,openingHours:d,description:b,image:g,categoryName:l?l.name:"未分類"}),t.isLoading=!1,a.next=17;break;case 13:a.prev=13,a.t0=a["catch"](0),t.isLoading=!1,w["a"].fire({icon:"error",title:"無法取得餐廳資料，請稍後再試"});case 17:case"end":return a.stop()}}),a,null,[[0,13]])})))()}}};I.render=O;t["default"]=I}}]);
//# sourceMappingURL=chunk-be2cb5d8.608399ec.js.map