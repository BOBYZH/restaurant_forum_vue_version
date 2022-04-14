(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-707cba4c"],{"435b":function(e,t,r){"use strict";r("97c3")},6803:function(e,t,r){},"97c3":function(e,t,r){},9913:function(e,t,r){},ad68:function(e,t,r){"use strict";r.r(t);var n=r("7a23"),a={class:"container py-5"},s=Object(n["g"])("hr",null,null,-1);function c(e,t,r,c,i,o){var u=Object(n["z"])("Spinner"),b=Object(n["z"])("RestaurantDetail"),d=Object(n["z"])("restaurantComments"),l=Object(n["z"])("CreateComment");return Object(n["s"])(),Object(n["f"])("div",a,[i.isLoading?(Object(n["s"])(),Object(n["d"])(u,{key:0})):(Object(n["s"])(),Object(n["f"])(n["a"],{key:1},[(Object(n["s"])(),Object(n["d"])(b,{key:i.restaurant.id,"initial-restaurant":i.restaurant},null,8,["initial-restaurant"])),s,Object(n["i"])(d,{"restaurant-comments":i.restaurantComments,onAfterDeleteComment:o.afterDeleteComment},null,8,["restaurant-comments","onAfterDeleteComment"]),Object(n["i"])(l,{"restaurant-id":i.restaurant.id,onAfterCreateComment:o.afterCreateComment},null,8,["restaurant-id","onAfterCreateComment"])],64))])}r("a4d3"),r("e01a"),r("4de4"),r("b0c0"),r("96cf");var i=r("1da1"),o=r("5530"),u=function(e){return Object(n["v"])("data-v-cddee428"),e=e(),Object(n["t"])(),e},b={class:"row"},d={class:"col-md-12 mb-3"},l={class:"badge badge-secondary mt-1 mb-3"},m={class:"col-lg-4"},f=["src"],O={class:"contact-info-wrap"},j={class:"list-unstyled"},p=u((function(){return Object(n["g"])("strong",null,"Opening Hour:",-1)})),g=u((function(){return Object(n["g"])("strong",null,"Tel:",-1)})),v=u((function(){return Object(n["g"])("strong",null,"Address:",-1)})),h={class:"col-lg-8"},k={class:"buttons"},x=Object(n["h"])(" Dashboard ");function w(e,t,r,a,s,c){var i=Object(n["z"])("router-link");return Object(n["s"])(),Object(n["f"])("div",b,[Object(n["g"])("div",d,[Object(n["g"])("h1",null,Object(n["B"])(s.restaurant.name),1),Object(n["g"])("p",l,Object(n["B"])(s.restaurant.categoryName),1)]),Object(n["g"])("div",m,[Object(n["g"])("img",{class:"img-responsive center-block",src:s.restaurant.image,style:{width:"250px","margin-bottom":"25px"}},null,8,f),Object(n["g"])("div",O,[Object(n["g"])("ul",j,[Object(n["g"])("li",null,[p,Object(n["h"])(" "+Object(n["B"])(s.restaurant.openingHours),1)]),Object(n["g"])("li",null,[g,Object(n["h"])(" "+Object(n["B"])(s.restaurant.tel),1)]),Object(n["g"])("li",null,[v,Object(n["h"])(" "+Object(n["B"])(s.restaurant.address),1)])])])]),Object(n["g"])("div",h,[Object(n["g"])("p",null,Object(n["B"])(s.restaurant.description),1),Object(n["g"])("div",k,[Object(n["i"])(i,{class:"btn btn-primary btn-border mr-2",to:{name:"restaurant-dashboard",params:{id:s.restaurant.id}}},{default:Object(n["H"])((function(){return[x]})),_:1},8,["to"]),s.restaurant.isFavorited?(Object(n["s"])(),Object(n["f"])("button",{key:0,type:"button",class:"btn btn-danger btn-border favorite mr-2",onClick:t[0]||(t[0]=Object(n["J"])((function(e){return c.deleteFavorite(s.restaurant.id)}),["stop","prevent"]))}," 移除最愛 ")):(Object(n["s"])(),Object(n["f"])("button",{key:1,type:"button",class:"btn btn-primary btn-border favorite mr-2",onClick:t[1]||(t[1]=Object(n["J"])((function(e){return c.addFavorite(s.restaurant.id)}),["stop","prevent"]))}," 加到最愛 ")),s.restaurant.isLiked?(Object(n["s"])(),Object(n["f"])("button",{key:2,type:"button",class:"btn btn-danger like mr-2",onClick:t[2]||(t[2]=Object(n["J"])((function(e){return c.deleteLike(s.restaurant.id)}),["stop","prevent"]))}," Unlike ")):(Object(n["s"])(),Object(n["f"])("button",{key:3,type:"button",class:"btn btn-primary like mr-2",onClick:t[3]||(t[3]=Object(n["J"])((function(e){return c.addLike(s.restaurant.id)}),["stop","prevent"]))}," Like "))])])])}var C=r("2708"),y=r("4cce"),R=r("2fa3"),I={name:"RestaurantDetail",mixins:[C["a"]],props:{initialRestaurant:{type:Object,required:!0}},data:function(){return{restaurant:this.initialRestaurant}},watch:{initialRestaurant:function(e){this.restaurant=Object(o["a"])(Object(o["a"])({},this.restaurant),e)}},methods:{addFavorite:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function r(){var n,a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,y["a"].addFavorite({restaurantId:e});case 3:if(n=r.sent,a=n.data,"error"!==a.status){r.next=7;break}throw new Error(a.message);case 7:t.restaurant=Object(o["a"])(Object(o["a"])({},t.restaurant),{},{isFavorited:!0}),r.next=14;break;case 10:r.prev=10,r.t0=r["catch"](0),console.error(r.t0.message),R["a"].fire({icon:"error",title:"無法將餐廳加入最愛，請稍後再試"});case 14:case"end":return r.stop()}}),r,null,[[0,10]])})))()},deleteFavorite:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function r(){var n,a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,y["a"].deleteFavorite({restaurantId:e});case 3:if(n=r.sent,a=n.data,"error"!==a.status){r.next=7;break}throw new Error(a.message);case 7:t.restaurant=Object(o["a"])(Object(o["a"])({},t.restaurant),{},{isFavorited:!1}),r.next=14;break;case 10:r.prev=10,r.t0=r["catch"](0),console.error(r.t0.message),R["a"].fire({icon:"error",title:"無法將餐廳從最愛移除，請稍後再試"});case 14:case"end":return r.stop()}}),r,null,[[0,10]])})))()},addLike:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function r(){var n,a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,y["a"].addLike({restaurantId:e});case 3:if(n=r.sent,a=n.data,"error"!==a.status){r.next=7;break}throw new Error(a.message);case 7:t.restaurant=Object(o["a"])(Object(o["a"])({},t.restaurant),{},{isLiked:!0}),r.next=14;break;case 10:r.prev=10,r.t0=r["catch"](0),console.error(r.t0.message),R["a"].fire({icon:"error",title:"無法按讚，請稍後再試"});case 14:case"end":return r.stop()}}),r,null,[[0,10]])})))()},deleteLike:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function r(){var n,a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,y["a"].deleteLike({restaurantId:e});case 3:if(n=r.sent,a=n.data,"error"!==a.status){r.next=7;break}throw new Error(a.message);case 7:t.restaurant=Object(o["a"])(Object(o["a"])({},t.restaurant),{},{isLiked:!1}),r.next=14;break;case 10:r.prev=10,r.t0=r["catch"](0),console.error(r.t0.message),R["a"].fire({icon:"error",title:"無法取消按讚，請稍後再試"});case 14:case"end":return r.stop()}}),r,null,[[0,10]])})))()}}};r("435b");I.render=w,I.__scopeId="data-v-cddee428";var L=I,D=function(e){return Object(n["v"])("data-v-057ffa66"),e=e(),Object(n["t"])(),e},F=D((function(){return Object(n["g"])("h2",{class:"my-4"}," 所有評論： ",-1)})),B={class:"blockquote mb-0"},U=["onClick"],A={class:"blockquote-footer"},P=D((function(){return Object(n["g"])("hr",null,null,-1)}));function _(e,t,r,a,s,c){var i=Object(n["z"])("router-link");return Object(n["s"])(),Object(n["f"])("div",null,[F,(Object(n["s"])(!0),Object(n["f"])(n["a"],null,Object(n["y"])(r.restaurantComments,(function(t){return Object(n["s"])(),Object(n["f"])("div",{key:t.id},[Object(n["g"])("blockquote",B,[e.currentUser.isAdmin?(Object(n["s"])(),Object(n["f"])("button",{key:0,type:"button",class:"btn btn-danger float-right",onClick:Object(n["J"])((function(e){return c.handleDeleteButtonClick(t.id)}),["stop","prevent"])}," Delete ",8,U)):Object(n["e"])("",!0),Object(n["g"])("h3",null,[Object(n["i"])(i,{to:{name:"user",params:{id:t.User.id}}},{default:Object(n["H"])((function(){return[Object(n["h"])(Object(n["B"])(t.User.name),1)]})),_:2},1032,["to"])]),Object(n["g"])("p",null,Object(n["B"])(t.text),1),Object(n["g"])("footer",A,Object(n["B"])(e.fromNow(t.createdAt)),1)]),P])})),128))])}var E=r("5502"),J={create:function(e){var t=e.restaurantId,r=e.text;return R["b"].post("/comments",{restaurantId:t,text:r})},delete:function(e){var t=e.commentId;return R["b"].delete("/comments/".concat(t))}},S={mixins:[C["b"]],props:{restaurantComments:{type:Array,required:!0}},emits:["after-delete-comment"],computed:Object(o["a"])({},Object(E["b"])(["currentUser"])),methods:{handleDeleteButtonClick:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function r(){var n,a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,t.isProcessing=!0,r.next=4,J.delete({commentId:e});case 4:if(n=r.sent,a=n.data,"error"!==a.status){r.next=8;break}throw new Error(a.message);case 8:t.$emit("after-delete-comment",e),R["a"].fire({icon:"success",title:"移除評論成功"}),t.isProcessing=!1,r.next=18;break;case 13:r.prev=13,r.t0=r["catch"](0),console.error(r.t0.message),t.isProcessing=!1,R["a"].fire({icon:"error",title:"無法移除評論，請稍後再試"});case 18:case"end":return r.stop()}}),r,null,[[0,13]])})))()}}};r("df6b");S.render=_,S.__scopeId="data-v-057ffa66";var q=S,z=function(e){return Object(n["v"])("data-v-0dbe44b6"),e=e(),Object(n["t"])(),e},H={class:"form-group"},N=z((function(){return Object(n["g"])("label",{for:"text"},"留下評論：",-1)})),$={class:"text-right"},T=["disabled"];function V(e,t,r,a,s,c){return Object(n["s"])(),Object(n["f"])("form",{onSubmit:t[1]||(t[1]=Object(n["J"])((function(){return c.handleSubmit&&c.handleSubmit.apply(c,arguments)}),["stop","prevent"]))},[Object(n["g"])("div",H,[N,Object(n["I"])(Object(n["g"])("textarea",{"onUpdate:modelValue":t[0]||(t[0]=function(e){return s.text=e}),class:"form-control",rows:"3",name:"text"},null,512),[[n["E"],s.text]])]),Object(n["g"])("div",$,[Object(n["g"])("button",{type:"submit",class:"btn btn-primary mr-0",disabled:s.isProcessing}," Submit ",8,T)])],32)}r("a9e3");var G={props:{restaurantId:{type:Number,required:!0}},emits:["after-create-comment"],data:function(){return{text:"",isProcessing:!1}},methods:{handleSubmit:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(t.prev=0,e.text){t.next=4;break}return R["a"].fire({icon:"warning",title:"您尚未填寫任何評論"}),t.abrupt("return");case 4:return e.isProcessing=!0,t.next=7,J.create({restaurantId:e.restaurantId,text:e.text});case 7:if(r=t.sent,n=r.data,"error"!==n.status){t.next=11;break}throw new Error(n.message);case 11:e.$emit("after-create-comment",{commentId:n.commentId,restaurantId:e.restaurantId,text:e.text}),e.isProcessing=!1,e.text="",t.next=21;break;case 16:t.prev=16,t.t0=t["catch"](0),console.error(t.t0.message),e.isProcessing=!1,R["a"].fire({icon:"error",title:"無法新增評論，請稍後再試"});case 21:case"end":return t.stop()}}),t,null,[[0,16]])})))()}}};r("d62c");G.render=V,G.__scopeId="data-v-0dbe44b6";var K=G,M=r("2375"),Q=r("c4c3"),W={name:"RestaurantPage",components:{RestaurantDetail:L,RestaurantComments:q,CreateComment:K,Spinner:M["a"]},data:function(){return{restaurant:{id:-1,name:"",categoryName:"",image:"",openingHours:"",tel:"",address:"",description:"",isFavorited:!1,isLiked:!1},restaurantComments:[],isLoading:!0}},computed:Object(o["a"])({},Object(E["b"])(["currentUser"])),created:function(){var e=this.$route.params.id;this.fetchRestaurant(e)},methods:{fetchRestaurant:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function r(){var n,a,s,c,i,o,u,b,d,l,m,f,O,j;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,t.isLoading=!0,r.next=4,Q["a"].getRestaurant({restaurantId:e});case 4:if(n=r.sent,a=n.data,"error"!==a.status){r.next=8;break}throw new Error(a.message);case 8:s=a.restaurant,c=a.isFavorited,i=a.isLiked,o=s.id,u=s.name,b=s.Category,d=s.image,l=s.opening_hours,m=s.tel,f=s.address,O=s.description,j=s.Comments,t.restaurant={id:o,name:u,categoryName:b?b.name:"未分類",image:d,openingHours:l,tel:m,address:f,description:O,isFavorited:c,isLiked:i},t.restaurantComments=j,t.isLoading=!1,r.next=19;break;case 15:r.prev=15,r.t0=r["catch"](0),t.isLoading=!1,R["a"].fire({icon:"error",title:"無法取得餐廳資料，請稍後再試"});case 19:case"end":return r.stop()}}),r,null,[[0,15]])})))()},beforeRouteUpdate:function(e,t,r){var n=e.params.id;this.fetchRestaurant(n),r()},afterCreateComment:function(e){var t=e.commentId,r=e.restaurantId,n=e.text;this.restaurantComments.push({id:t,RestaurantId:r,User:{id:this.currentUser.id,name:this.currentUser.name},text:n,createdAt:new Date})},afterDeleteComment:function(e){this.restaurantComments=this.restaurantComments.filter((function(t){return t.id!==e}))}}};W.render=c;t["default"]=W},d62c:function(e,t,r){"use strict";r("6803")},df6b:function(e,t,r){"use strict";r("9913")}}]);
//# sourceMappingURL=chunk-707cba4c.c8560e3d.js.map