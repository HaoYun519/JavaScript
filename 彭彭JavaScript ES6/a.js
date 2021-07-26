// let f=() =>(5);
// let result=f();
// console.log(result);

// let f=(message)=>{
//     console.log(message);
// };
// f("Hello, Arrow Function");

// // 在排程中使用「箭頭函式」撰寫「匿名函式」
// setTimeout(()=>{
//     console.log("過了一秒鐘");
// }, 1000);

// 電動車(在子類別中加入專屬的 charge 方法))範例:
    // // 定義一個類別
    // class Car{ 
    //     constructor(color){this.color=color;}
    //     run(){console.log("Car "+this.color+" is Running");}
    // }
    // // 定義子類別
    // class ElectricCar extends Car{
    //     constructor(color){super(color); this.battery=100;}
    //     run(distance){ // 衍伸更多子類別, 電動車專屬的定義
    //         this.battery-=distance;
    //         console.log("Car "+this.color+" Runs "+distance+" KM");
    //     }
    //     charge(){ // 在子類別中定義專屬的 charge 方法
    //         this.battery=100;
    //     }
    // }
    // // 產生子類別物件
    // let car=new ElectricCar("green");
    // car.run(10); // 使用子類別中定義的「方法」
    // car.charge(); // 使用子類別中定義的「方法」
    // console.log("目前的電量:"+car.battery); // 使用子類別中定義的「屬性」

// // 定義一個類別
// class Car{
//     constructor(color){this.color=color;}
//     run(){}
// }
// // 產生類別物件
// let car=new Car("green");
// // 取得並將原型物件顯示出來
// let carProto=Object.getPrototypeOf(car); // Car 原型物件
// console.log(carProto);
// let objProto=Object.getPrototypeOf(carProto); // Object 原型物件
// console.log(objProto);
// let lastOne=Object.getPrototypeOf(objProto); // 原型鍊的終點:ull
// console.log(lastOne);

// // 定義一個類別
// class Car{
//     constructor(color){this.color=color;}
//     run(){}
// }
// // 定義子類別
// class ElectricCar extends Car{
//     constructor(color){super(color); this.battery=100;}
//     run(distance){}
//     charge(){}
// }
// // 產生子類別物件
// let car=new ElectricCar("green");
// car.run(50); // 這個如何運作?

// // 定義一個類別
// class Car{
//     constructor(color){this.color=color;}
//     run(){}
// }
// // 定義子類別
// class ElectricCar extends Car{
//     constructor(color){super(color); this.battery=100;}
//     run(distance){}
//     charge(){}
// }
// // 產生子類別物件
// let car=new ElectricCar("green");
// // 在物件實體上直接建立方法或屬性
// car.name="彭彭的車";
// car.test=function(){
//     console.log("建立物件後, 在物件實體上新增方法");
//     console.log(this.name); // 印出 我的車
// };
// car.test();

// //定義、呼叫靜態方法 Static
// class Car{
//     constructor(color){this.color=color;}
//     run(){console.log("Car "+this.color+" Running");}
//     static showColors(){ // 定義一個靜態方法
//         console.log("We support three colors: blue, red, green. ");
//     }
// }
// // 直接使用類別名稱, 呼叫靜態方法
// Car.showColors();
//     // Car.run(); // 錯誤的程式, run 非靜態方法, 必須由物件實體呼叫

// // 產生新物件實體
// let carObj=new Car("blue");
// carObj.run(); // 使用物件實體, 呼叫物件的方法 run();
//     // carObj.showColors(); // 錯誤的程式, showColors 為靜態方法, 必須由類別名稱呼叫

// 例如：時間排程
    // // 主程式設定排程後, 交由【背景子程式】負責監控時間
    // // 主程式設定排程後, 交由【背景子程式】負責監控時間
    // window.setTimeout(function(){ // 此為回呼函式
    //     alert("兩秒後執行"); // 兩秒後, 【背景子程式】喚醒【主程式】, 執行此函式
    // }, 2000);
    // // 主程式設定排成後, 立刻往下執行
    // alert("立刻被呼叫");
    // // 主程式結束,暫時沒事做

// 例如：Ajax 連線 (利用JavaScript連線後端)
    // // Ajax 預設是一個【非同步的程式】
    // let req=new XMLHttpRequest();
    // req.open("get", "data.txt");
    // req.onload=function(){
    //     // 連線完成後, 【背景子程式】觸發【主程式】的 load 事件處理函式
    //     alert(this.responseText); // 取得伺服器回應
    // };
    // // 主程式送出連線後, 交由【背景子程式】負責處理連線細節
    // req.send();
    // // 主程式送出連線, 立刻往下執行
    // alert("立刻被呼叫");
    // // 主程式結束, 暫時沒事做

// 使用回呼函式串接非同步流程
    // function getData(callback){
    //     //2. 準備做 Ajax 連線
    //     let req=new XMLHttpRequest();
    //     req.open("get", "data.txt");
    //     req.onload=function(){
    //         // 5. 等待一段時間後, 【子程式】完成連線, 觸發【主程式】的 load 事件, 取得資料
    //         // 6. 呼叫 callback, 即透過參數傳入的 showData 函式
    //         callback(this.responseText);
    //     };
    //     req.send(); // 3. 送出連線, 建立【子程式】進行非同步處理
    //     // 4.【主程式】立刻結束函式, 回傳 undefined
    // }
    // function showData(result){
    //     alert(result); // 7. 可以從 result, 取得連線後得到的資料
    // };
    // getData(showData); // 1. 呼叫取資料用的函式, 並將 showData 函式透過參數傳入

// 回呼實作練習
    // <script>
    //     function getData(callback){
    //             //2. 準備做 Ajax 連線
    //             let req=new XMLHttpRequest();
    //             req.open("get", "https://training.pada-x.com/resources/javascript-es6-react/data.out");
    //             req.onload=function(){
    //                 callback(this.responseText)
    //             };
    //             req.send();
    //         }
    //         getData(function(result){
    //             alert(result);
    //         });
    // </script>

// // 使用 Promise 物件串接非同步流程
// // 範例(加入成功函式):
//     function getData(){
//         return new Promise(function(resolve, reject){
//             let req=new XMLHttpRequest(); req.open("get", "data.txt");
//             req.onload=function(){
//                 // 如何將連線後得到的資料 this.responseText, 串接到主流程上
//                     resolve(this.responseText);
//                 };
//                 req.send();
//             });
//     }
//     // 這是主流程
//     let dataPromise=getData(); // 嘗試從網路取得資料, 回傳 Promise 物件
//     dataPromise.then(function(result){
//         console.log(result);   // 這裡可以從參數 result, 正確取得連線後得到的資料 
//     });


// // 範例(加入失敗函式):
//     function getData(){
//         return new Promise(function(resolve, reject){
//             let req=new XMLHttpRequest(); 
//             req.open("get", "url.txt");
//             req.onload=function(){resolve(this.responseText);};
//             req.onerror=function(){
//                 reject("Error"); // 失敗時, 做出失敗報告
//             };
//                 req.send();
//             });
//     }
//     // 這是主流程
//     getData().then(function(result){console.log(result);}, function(error){
//         // 這裡可以從參數 error, 取得失敗報告
//         console.log(error); 
//     });

// new Promise(function (resolve, reject) {
//     var a = 0;
//     var b = 1;
//     if (b == 0) reject("Divide zero");
//     else resolve(a / b);
// }).then(function (value) {
//     console.log("a / b = " + value);
// }).catch(function (err) {
//     console.log(err);
// }).finally(function () {
//     console.log("End");
// });

// new Promise(function (resolve, reject) {
//     console.log(1111);
//     resolve(2222);
// }).then(function (value) {
//     console.log(value);
//     return 3333;
// }).then(function (value) {
//     console.log(value);
//     throw "An error";
// }).catch(function (err) {
//     console.log(err);
// });