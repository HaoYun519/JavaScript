// 物件屬性, 方法的綜合操作
class Car{ // 定義一個類別
    constructor(color){
        this.color=color;
        this.speed=0; // 車子的初始速度固定為 0
    }
    run(speed){
        this.speed=speed; // 更新車子的速度
            console.log("Car "+this.color+" Running at "+this.speed+" KM/HR");
    }
    stop(){
        this.speed=0; // 更新車子的速度
        console.log("Car " +this.color+ " Stopped");
    }
}
// 產生新物件, 物件擁有 color, speed 屬性, 與 run, stop 方法
let car1=new Car("blue");
car1.run(50); // 印出 "Car blue Running at 50 KM/HR"
car1.stop(); //  印出 "Car blue Stopped"

電動車範例:
    // 定義一個類別
    class Car{ 
        constructor(){
            console.log("執行父類別建構式, 建立基本的 Car 物件");
        }
    }
    // 定義子類別
    class ElectricCar extends Car{
        constructor(){
            super();   // 呼叫父類別建構式
            console.log("繼續執行子類別建構式, 衍伸出 ElectricCar 物件");
        }
    }
    // 產生子類別物件
    let car=new ElectricCar();

電動車(加入 color 屬性)範例:
    // 定義一個類別
    class Car{ 
        constructor(color){
            this.color=color; // 定義 color 屬性在父類別中
        }
    }
    // 定義子類別
    class ElectricCar extends Car{
        constructor(color){
            super(color);
        }
    }
    // 產生子類別物件
    let car=new ElectricCar("green");
    console.log("車子顏色:"+car.color); // 子類別物件同樣擁有父類別中定義的「屬性」

電動車(加入 run 方法)範例:
    // 定義一個類別
    class Car{ 
        constructor(color){this.color=color;}
        run(){ // 定義 run 方法在父類別中
            console.log("Car "+this.color+" is Running");
        }
    }
    // 定義子類別
    class ElectricCar extends Car{
        constructor(color){
            super(color);
        }
    }
    // 產生子類別物件
    let car=new ElectricCar("green");
    car.run(); // 子類別物件同樣擁有父類別中定義的「方法」

電動車(加入 battery 屬性, 紀錄電量)範例:
    // 定義一個類別
    class Car{ 
        constructor(color){this.color=color;}
        run(){console.log("Car "+this.color+" is Running");}
    }
    // 定義子類別
    class ElectricCar extends Car{
        constructor(color){
            super(color);
            this.battery=100; // 衍伸更多子類別, 電動車專屬的定義
        }
    }
    // 產生子類別物件
    let car=new ElectricCar("green");
    console.log("目前的電量:"+car.battery); // 使用子類別中定義的「屬性」

電動車(子類別取代父類別的 run 方法))範例:
    // 定義一個類別
    class Car{ 
        constructor(color){this.color=color;}
        run(){console.log("Car "+this.color+" is Running");}
    }
    // 定義子類別
    class ElectricCar extends Car{
        constructor(color){super(color); this.battery=100; 
        run(distance){ // 衍伸更多子類別, 電動車專屬的定義
            this.battery-=distance;
            console.log("Car "+this.color+" Runs "+distance+" KM");
        }
    }
    // 產生子類別物件
    let car=new ElectricCar("green");
    car.run(10); // 使用子類別中定義的「方法」
    console.log("目前的電量:"+car.battery); // 使用子類別中定義的「屬性」

電動車(在子類別中加入專屬的 charge 方法))範例:
    // 定義一個類別
    class Car{ 
        constructor(color){this.color=color;}
        run(){console.log("Car "+this.color+" is Running");}
    }
    // 定義子類別
    class ElectricCar extends Car{
        constructor(color){super(color); this.battery=100;}
        run(distance){ // 衍伸更多子類別, 電動車專屬的定義
            this.battery-=distance;
            console.log("Car "+this.color+" Runs "+distance+" KM");
        }
        charge(){ // 在子類別中定義專屬的 charge 方法
            this.battery=100;
        }
    }
    // 產生子類別物件
    let car=new ElectricCar("green");
    car.run(10); // 使用子類別中定義的「方法」
    car.charge(); // 使用子類別中定義的「方法」
    console.log("目前的電量:"+car.battery); // 使用子類別中定義的「屬性」

// 定義一個類別
    class Car{
        constructor(color){this.color=color;}
        run(){}
    }
    // 產生類別物件
    let car=new Car("green");
    // 取得並將原型物件顯示出來
    let carProto=Object.getPrototypeOf(car); // Car 原型物件
    console.log(carProto);
    let objProto=Object.getPrototypeOf(carProto); // Object 原型物件
    console.log(objProto);
    let lastOne=Object.getPrototypeOf(objProto); // 原型鍊的終點:ull
    console.log(lastOne);

// 定義一個類別
    class Car{
        constructor(color){this.color=color;}
        run(){}
    }
    // 定義子類別
    class ElectricCar extends Car{
        constructor(color){super(color); this.battery=100;}
        run(distance){}
        charge(){}
    }
    // 產生子類別物件
    let car=new ElectricCar("green");
    car.run(50); // 這個如何運作?

//定義、呼叫靜態方法 Static
    class Car{
        constructor(color){this.color=color;}
        run(){console.log("Car "+this.color+" Running");}
        static showColors(){ // 定義一個靜態方法
            console.log("We support three colors: blue, red, green. ");
        }
    }
    // 直接使用類別名稱, 呼叫靜態方法
    Car.showColors();
    Car.run(); // 錯誤的程式, run 非靜態方法, 必須由物件實體呼叫
    // 產生新物件實體
    let carObj=new Car("blue");
    carObj.run(); // 使用物件實體, 呼叫物件的方法 run();
    carObj.showColors(); // 錯誤的程式, showColors 為靜態方法, 必須由類別名稱呼叫