(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-84cc821a"],{"12b2":function(e,t,r){"use strict";r("a4d3"),r("e01a"),r("b0c0");var a=r("7a23"),n={class:"form-group"},s=Object(a["g"])("label",{for:"name"},"Name",-1),i={class:"form-group"},c=Object(a["g"])("label",{for:"categoryId"},"Category",-1),o=Object(a["g"])("option",{value:"",selected:"",disabled:""}," --請選擇-- ",-1),u=["value"],d={class:"form-group"},l=Object(a["g"])("label",{for:"tel"},"Tel",-1),b={class:"form-group"},g=Object(a["g"])("label",{for:"address"},"Address",-1),m={class:"form-group"},f=Object(a["g"])("label",{for:"opening-hours"},"Opening Hours",-1),p={class:"form-group"},O=Object(a["g"])("label",{for:"description"},"Description",-1),j={class:"form-group"},h=Object(a["g"])("label",{for:"image"},"Image",-1),v=["src"],y=["disabled"];function w(e,t,r,w,I,k){var R=Object(a["z"])("Spinner");return I.isLoading?(Object(a["s"])(),Object(a["d"])(R,{key:0})):Object(a["I"])((Object(a["s"])(),Object(a["f"])("form",{key:1,onSubmit:t[7]||(t[7]=Object(a["J"])((function(){return k.handleSubmit&&k.handleSubmit.apply(k,arguments)}),["stop","prevent"]))},[Object(a["g"])("div",n,[s,Object(a["I"])(Object(a["g"])("input",{id:"name","onUpdate:modelValue":t[0]||(t[0]=function(e){return I.restaurant.name=e}),type:"text",class:"form-control",name:"name",placeholder:"Enter name",required:""},null,512),[[a["E"],I.restaurant.name]])]),Object(a["g"])("div",i,[c,Object(a["I"])(Object(a["g"])("select",{id:"categoryId","onUpdate:modelValue":t[1]||(t[1]=function(e){return I.restaurant.categoryId=e}),class:"form-control",name:"categoryId",required:""},[o,(Object(a["s"])(!0),Object(a["f"])(a["a"],null,Object(a["y"])(I.categories,(function(e){return Object(a["s"])(),Object(a["f"])("option",{key:e.id,value:e.id},Object(a["B"])(e.name),9,u)})),128))],512),[[a["D"],I.restaurant.categoryId]])]),Object(a["g"])("div",d,[l,Object(a["I"])(Object(a["g"])("input",{id:"tel","onUpdate:modelValue":t[2]||(t[2]=function(e){return I.restaurant.tel=e}),type:"text",class:"form-control",name:"tel",placeholder:"Enter telephone number"},null,512),[[a["E"],I.restaurant.tel]])]),Object(a["g"])("div",b,[g,Object(a["I"])(Object(a["g"])("input",{id:"address","onUpdate:modelValue":t[3]||(t[3]=function(e){return I.restaurant.address=e}),type:"text",class:"form-control",placeholder:"Enter address",name:"address"},null,512),[[a["E"],I.restaurant.address]])]),Object(a["g"])("div",m,[f,Object(a["I"])(Object(a["g"])("input",{id:"opening-hours","onUpdate:modelValue":t[4]||(t[4]=function(e){return I.restaurant.openingHours=e}),type:"time",class:"form-control",name:"opening_hours"},null,512),[[a["E"],I.restaurant.openingHours]])]),Object(a["g"])("div",p,[O,Object(a["I"])(Object(a["g"])("textarea",{id:"description","onUpdate:modelValue":t[5]||(t[5]=function(e){return I.restaurant.description=e}),class:"form-control",rows:"3",name:"description"},null,512),[[a["E"],I.restaurant.description]])]),Object(a["g"])("div",j,[h,I.restaurant.image?(Object(a["s"])(),Object(a["f"])("img",{key:0,src:I.restaurant.image,class:"d-block img-thumbnail mb-3",width:"200",height:"200"},null,8,v)):Object(a["e"])("",!0),Object(a["g"])("input",{id:"image",type:"file",name:"image",accept:"image/*",class:"form-control-file",onChange:t[6]||(t[6]=function(){return k.handleFileChange&&k.handleFileChange.apply(k,arguments)})},null,32)]),Object(a["g"])("button",{type:"submit",class:"btn btn-primary",disabled:e.isProcessing},Object(a["B"])(e.isProcessing?"處理中...":"送出"),9,y)],544)),[[a["F"],!I.isLoading]])}r("d3b7"),r("3ca3"),r("ddb0"),r("2b3d"),r("96cf");var I=r("1da1"),k=r("5530"),R=r("be6c"),x=r("2fa3"),A=r("2375"),E={name:"AdminRestaurantForm",components:{Spinner:A["a"]},props:{initialRestaurant:{type:Object,default:function(){return{name:"",CategoryId:"",tel:"",address:"",description:"",image:"",openingHours:""}},isProcessing:{type:Boolean,default:!1}}},emits:["after-submit"],data:function(){return{categories:[],restaurant:Object(k["a"])({},this.initialRestaurant),isLoading:!0}},watch:{initialRestaurant:function(e){this.restaurant=Object(k["a"])(Object(k["a"])({},this.restaurant),e)}},created:function(){this.fetchCategories(),this.restaurant=Object(k["a"])(Object(k["a"])({},this.restaurant),this.initialRestaurant)},methods:{fetchCategories:function(){var e=this;return Object(I["a"])(regeneratorRuntime.mark((function t(){var r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,R["a"].categories.get();case 3:if(r=t.sent,a=r.data,"error"!==a.status){t.next=7;break}throw new Error(a.message);case 7:e.categories=a.categories,e.isLoading=!1,t.next=16;break;case 11:t.prev=11,t.t0=t["catch"](0),console.error(t.t0.message),e.isLoading=!1,x["a"].fire({icon:"error",title:"無法取得餐廳類別，請稍後再試"});case 16:case"end":return t.stop()}}),t,null,[[0,11]])})))()},handleFileChange:function(e){var t=e.target.files;if(0===t.length)this.restaurant.image="";else{var r=window.URL.createObjectURL(t[0]);this.restaurant.image=r}},handleSubmit:function(e){if(this.restaurant.name)if(this.restaurant.categoryId){var t=e.target,r=new FormData(t);this.$emit("after-submit",r)}else x["a"].fire({icon:"warning",title:"請選擇餐廳類別"});else x["a"].fire({icon:"warning",title:"請填寫餐廳名稱"})}}};E.render=w;t["a"]=E},2743:function(e,t,r){"use strict";r.r(t);var a=r("7a23"),n={class:"container py-5"};function s(e,t,r,s,i,c){var o=Object(a["z"])("AdminRestaurantForm");return Object(a["s"])(),Object(a["f"])("div",n,[Object(a["i"])(o,{"is-processing":e.isProcessing,onAfterSubmit:c.handleAfterSubmit},null,8,["is-processing","onAfterSubmit"])])}r("96cf");var i=r("1da1"),c=r("12b2"),o=r("be6c"),u=r("2fa3"),d={components:{AdminRestaurantForm:c["a"]},data:function(){return{restaurant:{isProcessing:!1}}},methods:{handleAfterSubmit:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function r(){var a,n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,t.isProcessing=!0,r.next=4,o["a"].restaurants.create({formData:e});case 4:if(a=r.sent,n=a.data,"success"===n.status){r.next=8;break}throw new Error(n.message);case 8:t.$router.push({name:"admin-restaurants"}),r.next=14;break;case 11:r.prev=11,r.t0=r["catch"](0),u["a"].fire({icon:"error",title:"無法建立餐廳，請稍後再試"});case 14:case"end":return r.stop()}}),r,null,[[0,11]])})))()}}};d.render=s;t["default"]=d},be6c:function(e,t,r){"use strict";r("b0c0");var a=r("2fa3");t["a"]={categories:{getDetail:function(e){var t=e.categoryId;return a["b"].get("/admin/categories/".concat(t))},get:function(){return a["b"].get("/admin/categories")},create:function(e){var t=e.name;return a["b"].post("/admin/categories",{name:t})},update:function(e){var t=e.categoryId,r=e.name;return a["b"].put("/admin/categories/".concat(t),{name:r})},delete:function(e){var t=e.categoryId;return a["b"].delete("/admin/categories/".concat(t))}},restaurants:{getDetail:function(e){var t=e.restaurantId;return a["b"].get("/admin/restaurants/".concat(t))},get:function(){return a["b"].get("/admin/restaurants")},create:function(e){var t=e.formData;return a["b"].post("/admin/restaurants",t)},update:function(e){var t=e.restaurantId,r=e.formData;return a["b"].put("/admin/restaurants/".concat(t),r)},delete:function(e){var t=e.restaurantId;return a["b"].delete("/admin/restaurants/".concat(t))}},users:{get:function(){return a["b"].get("/admin/users")},update:function(e){var t=e.userId,r=e.isAdmin;return a["b"].put("/admin/users/".concat(t),{isAdmin:r})}}}}}]);
//# sourceMappingURL=chunk-84cc821a.656f8151.js.map