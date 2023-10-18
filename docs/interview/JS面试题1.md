##  JavaScript

### 数据类型

```javascript
// 基本数据结构
/*
栈 只允许在一段进行插入、删除操作的线性表，是一种先进后出的数据结构
堆 堆是基于散列算法的数据结构
队列 先进先出(FIFO)的数据结构
*/

// ----------------//
// JavaScript中数据类型的存储
// JavaScript中将数据类型分为基本数据类型和引用数据类型，它们其中有一个区别就是存储的位置不同。
/*
基本数据类型
String, Number, Boolean, Unedfined, Null, Symbol
基本数据类型都是一些简单的数据段，存储在栈内存中。

引用数据类型
Array, Object
保存在堆内存中，然后在栈内存中保存一个对堆内存中实际对象的引用。
所以，JavaScript中对引用数据类型的操作都是操作对象的引用而不是实际的对象。
栈内存中保存了一个地址，这个地址和堆内存中的实际值是相关的
------------------------------
复制
	基本数据类型
		系统自动为新的变量在栈内存中分配一个新值
	引用数据类型
		系统自动为新的变量在栈内存中分配一个值，但这个值只是一个地址。跟原有变量具有相同的地址值，指向堆内存中的同一个对象。
------------------------------
比较
为什么基础数据类型存在栈中，而引用数据类型存在堆中呢？

堆比栈大，栈比对速度快。
基础数据类型比较稳定，而且相对来说占用的内存小。
引用数据类型大小是动态的，而且是无限的。
堆内存是无序存储，可以根据引用直接获取。
		
		
*/
```



### Factory functions 工厂函数

### Constructor functions 构造函数

```javascript
// 工厂函数是将返回一个新的object的任何不是类或者构造函数的函数。在js中，任何函数都能够返回一个object.如果我们不是通过new function()的方式来获得这个对象的，那么她就是一个factory工厂函数(普通函数).
// 工厂函数
function person(firstName, lastName, age) {
  const person = {};
  person.firstName = firstName;
  person.lastName = lastName;
  person.age = age;
  return person;
}

// 构造函数
// 实例的构造函数属性（constructor）指向构造函数。
// constructor 返回创建实例对象时构造函数的引用。此属性的值是对函数本身的引用
function Person(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
}
var person1 = new Person('Zaxlct', 'Software Engineer', 28);
var person2 = new Person('Mick', 'Doctor', 23);
// person1 和 person2 都是 Person 的实例。这两个实例都有一个 constructor （构造函数）属性，该属性（是一个指针）指向 Person。
console.log(person1.constructor == Person); //true
console.log(person2.constructor == Person); //true

// 工厂函数通过new关键词使用
const mikeFactory = new person('mike', 'grand' 23);
mikeFactory.__proto__ === person.prototype; // false
mikeFactory.__proto__ === Function.prototype // false
mikeFactory.__proto__ === Object.prototype // true

// 构造函数通过new关键词使用
const mikeConstructor = new Person('mike', 'grand' 23);
mikeConstructor.__proto__ === Person.prototype; // true
mikeConstructor.__proto__.__proto__ === Object.prototype; // true

// 通过 new 构造函数方式创建object时有以下几个过程发生：
function Person(firstName, lastName, age) {
    // this = {};
    // this.__proto__ = Person.prototype;
    // Set up logic such that: if
    // there is a return statement
    // in the function body that
    // returns anything EXCEPT an
    // object, array, or function:
    //     return this (the newly
    //     constructed object)
    //     instead of that item at
    //     the return statement;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    // return this;
}
/*
1.创建一个新的空object并且bind到this关键字

2.设置该对象的__proto__指向为构造函数的prototype.

3.增加以下逻辑：如果函数体中有return语句，但是返回的如果不是Object,array,或者function的话，则直接返回this指针

4.返回this object
*/

// 不通过new关键词使用构造函数，为undefined，Person函数本身未返回任何内容，但Person中的属性都被添加到window全局对象上。
```



### 函数声明式和函数表达式

#### 	区别

- 以函数声明的方法定义的函数,函数名是必须的,而函数表达式的函数名是可选的。（**函数声明整体会被提升到当前作用域的顶部，函数表达式也提升到顶部但是只有其变量名提升**）
- 以函数声明的方法定义的函数,函数可以在函数声明之前调用,而函数表达式的函数只能在声明之后调用。

- 以函数声明的方法定义的函数并不是真正的声明,它们仅仅可以出现在全局中,或者嵌套在其他的函数中,但是它们不能出现在循环,条件或者try/catch/finally中,而函数表达式可以在任何地方声明。换句话说，函数声明不是一个完整的语句，所以不能出现在if-else,for循环，finally，try catch语句以及with语句中。

```javascript
// 函数声明式
function greeting() {
	console.log('hello')
}
// 函数表达式
let greeting = function() {
	console.log('hello')
}
// 如果函数表达式声明的函数有函数名,那么这个函数名就相当于这个函数的一个局部变量,只能在函数内部调用
let f = function fact(x) {
    if (x <= 1) return 1;
    else return x*fact(x - 1)
}
alret(fact()); // Uncaught ReferemceError: fact is not defined
```



### JavaScript中的执行上下文和执行栈

#### **执行上下文**	

​	什么是执行上下文： 执行上下文是评估和执行JavaScript代码的环境的抽象概念，每当JavaScript代码在运行时，都是在执行上下文中运行

​		执行上下文的类型：
​			全局执行上下文：默认的上下文，任何不在函数内部的代码都在全局上下文中，做两件事（创建一个全局的Window对象，并设置this的值等于这个全局对象），一个程序中只有一个全局执行上下文

​			函数执行上下文：每当一个函数被调用时，都会为该函数创建一个新的上下文，每个函数都有他自己的执行上下文（该函数被调用时创建），函数上下文可以有任意个。按定义顺序执行。

​			Eval函数执行上下文：执行在eval函数内部的代码也会有自己的执行上下文（eval不常用，不了解）

#### **执行栈**

​	什么是执行栈：其他编程语言中的“调用栈“，拥有LIFO（后进先出）数据结构的栈，被用来存储代码运行时创建的所有执行上下文。

​	当JavaScript引擎第一次遇到你的脚本时，会创建一个全局的执行上下文并压入当前执行栈，每当引擎遇到一个函数调用，他会为该函数创建一个新的执行上下文并压入栈的顶部。

​	执行时，先执行栈顶部的函数，该函数执行结束则从栈中弹出并达到栈中的下一个上下文

#### **创建执行上下文**

​	创建阶段：

- this的绑定
  - 全局执行上下文中，this的值，指向全局对象。（在浏览器中this引用window对象）
  - 在函数执行上下文中，this的值取决于该函数是如何被调用的，对象调用（this会被设置为该对象），否则this的值被设置为全局对象或者undefined（严格模式下）

- 创建**词法环境**组件

  - ES6中的定义为：词法环境是一种规范类型，基于ECMAScript代码的词法嵌套结构来定义**标识符**和具体变量和函数的关联，由环境记录器和一个可能的引用**外部**词法环境的空值组成。
  - 词法环境是一种持有**标识符-变量映射**的结构（**标识符**指变量/函数的名字，变量是对实际对象【包含函数类型对象】或原始数据的引用）
  - 词法环境的**内部**的两个组件：
    -  **环境记录器** ：是存储变量和函数声明的实际位置。
    - 一个**外部环境的引用**：**外部环境的引用**意味着它可以访问其父级词法环境（作用域）。
  - **词法环境**的两种类型：
    - 全局环境（在全局执行上下文中）是没有外部环境引用的词法环境。全局环境的外部环境引用是 **null**。它拥有内建的 Object/Array/等、在环境记录器内的原型函数（关联全局对象，比如 window 对象）还有任何用户定义的全局变量，并且 `this`的值指向全局对象。
    - 在**函数环境**中，函数内部用户定义的变量存储在**环境记录器**中。并且引用的外部环境可能是全局环境，或者任何包含此内部函数的外部函数。

  - **环境记录器**的两种类型
    - **声明式环境记录器**存储变量、函数和参数。
    - **对象环境记录器**用来定义出现在**全局上下文**中的变量和函数的关系。

- 创建**变量环境**组件（同样是一个词法环境，其环境记录器持有变量声明语句在执行上下文中创建的绑定关系）
  - 在 ES6 中，**词法环境**组件和**变量环境**的一个不同就是前者被用来存储函数声明和变量（`let` 和 `const`）绑定，而后者只用来存储 `var` 变量绑定。

​	执行阶段：后进先出 

​	参考 [JavaScript深入之执行上下文](https://github.com/mqyqingfeng/Blog/issues/4)

### 作用域

- 作用域是指程序源代码中定义变量的区域，作用于规定了如何查找变量，也就是确定当前执行代码对变量的访问权限。JavaScript采用**词法作用域**也就是**静态作用域**
- 作用域决定这个变量的生命周期及其可见性。 当我们创建了一个函数或者 `{}` 块，就会生成一个新的作用域。需要注意的是，通过 `var` 创建的变量只有函数作用域，而通过 `let` 和 `const` 创建的变量既有函数作用域，也有块作用域。

```javascript
var scope = "global scope";
function checkscope(){
    var scope = "local scope";
    function f(){
        return scope;
    }
    return f();
}
checkscope();
var scope = "global scope";
function checkscope(){
    var scope = "local scope";
    function f(){
        return scope;
    }
    return f;
}
checkscope()();
```



​	两段代码都会打印：local scope（**JavaScript采用的是词法作用域，函数的作用域基于函数创建的位置**）。

​	JavaScript 函数的执行用到了作用域链，这个作用域链是在函数定义的时候创建的。嵌套的函数 f() 定义在这个作用域链里，其中的变量 scope 一定是局部变量，不管何时何地执行函数 f()，这种绑定在执行 f() 时依然有效。

### 闭包

​	闭包是一个可以访问外部作用域的内部函数，即使这个外部作用域已经执行结束，并且内部函数还可以访问外部函数中定义的形参

#### **外部函数作用域**

- ```javascript
  (function autorun(p) {
  	let x = 1;
  	setTimeout(function log() {
  		console.log(x); // 1
  		console.log(p); // 10
  	}, 1000)
  })(10)
  ```

#### **外部块作用域**

- ```javascript
  // 内部函数可以访问外部块中定义的变量，即使外部块已执行完毕
  {
      let x = 1;
      setTimeout(function log() {
          console.log(x)
      }, 1000)
  }
  ```

  

#### **词法作用域**

- ```javascript
  // 词法作用域是指内部函数在定义时就决定了其外部作用域
  (
      function autorun() {
          let x = 1;
      	function log() {
              console.log(x)
          }
          //
          function run(fn) {
              let x = 100;
              fn()
          }
      	run(log);    
      })();
  
  /*
  * log()函数是一个闭包，访问的是autorun函数中的X变量，而不是run函数中的变量
  * 闭包的外部作用域是在其定义的时候决定，而不是执行时
  * aotorun()的函数作用域既是log()函数的词法作用域
  */
  ```

#### **作用域链**

- 每一个作用域都有对其父作用域的引用，当我们使用一个变量的时候，javaScript引擎会通过变量名在当前作用域查找，若没找到则沿着**作用域链一直向上查找**，直到**global**全局作用域

  - ```javascript
    let x0 = 0;
    (function autorun() {
    	let x1 = 1;
    	
    	(function autorun2() {
    		let x2 = 2;
    		(function autorun3() {
    			let x3 = 3;
    			console.log(`${x0} ${x1} ${x2} ${x3}`) //0 1 2 3
    		})();
    	})();
    })();
    // autorun3() 这个内部函数可以访问其自身局部变量 x3 ，也可以访问外部作用域中的 x1 和 x2 变量，以及全局作用域中的 x0 变量。即：闭包可以访问其外部(父)作用域中的定义的所有变量。
    ```

#### **外部作用域执行完毕后**

- 当外部作用域执行完毕后，内部函数还存活（仍在其他地方被引用）时，闭包才真正发挥其作用

  - ```javascript
    // 如Timer，事件处理，Ajax请求中被作为回调
    // Timer
    (function autorun() {
     	lex x = 1;
        settimeOut(function log(){
            console.log(x);
        }, 1000)
     })()
    /*
    变量 x 将一直存活着直到定时器的回调执行或者 clearTimeout() 被调用。 如果这里使用的是 setInterval() ，那么变量 x 将一直存活到 clearInterval() 被调用。
    */
    // Event
    (function autorun() {
        let x = 1;
        $("#btn").on("click", function log() {
            console.log(x);
        })
    })()
    // 当变量x在事件处理函数中被使用时，它将一直存活直到该事件处理函数被移除。
    
    // Ajax
    (function autorun() {
        let x = 1;
        fetch("http://").then(function log() {
            console.log(x);
        })
    })();
    // 变量x将一直存活到接受到后端返回结果，回调函数被执行
    
    // 除了 timer 定时器，事件处理，Ajax 请求等比较常见的异步任务，还有其他的一些异步 API 比如 HTML5 Geolocation，WebSockets , requestAnimationFrame()也将使用到闭包的这一特性。
    
    //...//
    // 变量的生命周期取决于闭包的生命周期。被闭包引用的外部作用域中的变量将一直存活直到闭包函数被销毁。如果一个变量被多个闭包所引用，那么直到所有的闭包被垃圾回收后，该变量才会被销毁。
    ```

#### **闭包与循环**

- 闭包只存储外部变量的引用，而不会拷贝这些外部变量的值。

  - ```javascript
    function initEvents(){
      for(var i=1; i<=3; i++){
        $("#btn" + i).click(function showNumber(){
          alert(i);//4
        });
      }
    }
    initEvents();
    // 在这个示例中，我们创建了3个闭包，皆引用了同一个变量 i，且这三个闭包都是事件处理函数。由于变量 i 随着循环自增，因此最终输出的都是同样的值。修复这个问题最简单的方法是在 for 语句块中使用 let 变量声明，这将在每次循环中为 for 语句块创建一个新的局部变量。
    ```

#### **闭包与封装性：**

封装意味着信息隐藏

#### **函数与私有状态**：

通过闭包，我们可以创建拥有私有状态的函数，闭包使得状态被封装起来。

#### **工厂模式与私有原型对象**

- ```javascript
  // 通过原型创建对象的常规方式
  let todoPrototype = {
  	toString: function() {
  		return this.id + ' ' + this.userName + ':' + this.title;
  	}
  }
  
  function Todo(todo) {
  	let newTodo = Object.create(todoPrototype);
  	Object.assign(newTodo, todo);
  	return newTodo;
  }
  // todoPrototype 原型对象是一个全局对象。
  
  
  // 我们可以通过闭包，只用创建原型对象一次，也能够被所有 Todo 函数调用所公用，并且保证其私有性
  let Todo = (function createTodoFactory() {
      let todoPrototype = {
          toString: function() {
              return this.id + ' ' + this.userName + ':' + this.title;
          }
      }
      
      return function(todo) {
          let newTodo = Object.create(todoPrototype);
          Object.assign(newTodo, todo);
          return newTodo;
      }
  })();
  
  let todo = Todo({id : 1, title: "This is a title", userName: "Cristi", completed: false });
  
  // Todo()就是一个拥有私有状态的函数
  ```

**工厂模式与私有构造函数**

```javascript
let Todo = (function createTodoFactory(){
 function Todo(spec){
   Object.assign(this, spec);
 }
 
 return function(spec){
   let todo = new Todo(spec);
   return Object.freeze(todo);
 }
})();

// 这里，Todo() 工厂函数就是一个闭包。通过它，不管是否使用 new ，我们都可以创建不可变对象，原型对象也只用创建一次，并且它是私有的。

// let todo = Todo({title : "A description"});
todo.title = "Another description"; 
// Cannot assign to read only property 'title' of object
todo.toString = function() {};
//Cannot assign to read only property 'toString' of object


// 通过闭包，我们可以创建一个map,在所有翻译调用中被使用，且是私有的

let translate = (function () {
    let translations = {};
    translations["yes"] = 'oui';
    translations['no'] = 'non';
    
    return function(key) {
        return translations[key]
    }
})()

// 自增器函数
function createAGenerate(count, increment) {
    return function() {
        conut += increment;
        return count;
    }
}
let generateNextNumber = createAGenerate(0 ，1)
console.log(generateNextNumber()); //1
console.log(generateNextNumber()); //2
console.log(generateNextNumber()); //3
let generateMultipleOfTen = createAGenerate(0, 10);
console.log(generateMultipleOfTen()); //10
console.log(generateMultipleOfTen()); //20
console.log(generateMultipleOfTen()); //30
```

#### 对象与私有状态

```javascript
// 创建一个拥有私有状态的对象。
function TodoStore() {
    let todos = [];
    function add(todo) {
        todos.push(todo);
    }
    function get() {
       return todos.filter(isPriorityTodo.map(todoViewModel)); 
    }
	function isPriorityTodo(todo) {
        return todo.type === 'RE' && !todo.completed;
    }
    function todoViewModel(todo) {
        return { id: todo.id, title: todo.title}
    }
    return Object.freeze({
        add, get
    })
}
/*
闭包 vs 纯函数
闭包就是那些引用了外部作用域中变量的函数。
为了更好的理解，我们将内部函数拆成闭包和纯函数两个方面：

闭包是那些引用了外部作用域中变量的函数。
纯函数是那些没有引用外部作用域中变量的函数，它们通常返回一个值并且没有副作用。

在上述例子中，add() 和 get() 函数是闭包，而 isPriorityTodo() 和 toTodoViewModel() 则是纯函数。
*/
```

#### 闭包在函数式编程中的应用

```javascript
// 修饰器函数也使用了闭包的特性
function not(fn) {
	return function decorator(...args) {
		return !fn.apply(this, args)
	}
}
// decorator函数使用了外部函数not的fn变量，因此是一个闭包
```

#### 垃圾回收

​	在 Javascript 中，局部变量会随着函数的执行完毕而被销毁，除非还有指向他们的引用。当闭包本身也被垃圾回收之后，这些闭包中的私有状态随后也会被垃圾回收。通常我们可以通过切断闭包的引用来达到这一目的。

```javascript
// 函数表达式
let add = (function crateAddClosure() {
	let arr = [];
    return function(obj) {
        arr.push(obj);
    }
})()

let Todo = (function createTodoFactory(){
 function Todo(spec){
   Object.assign(this, spec);
 }
 
 return function(spec){
   let todo = new Todo(spec);
   return Object.freeze(todo);
 }
})();

function addALotOfObjects(){ // 往闭包变量 arr 中加入对象。
    for(let i=1; i<=10000;i++) {
       add(new Todo(i));
    }
}
function clearAllObjects(){ // 将闭包函数置为 null 。
    if(add){
       add = null;
    }
}
$("#add").click(addALotOfObjects);
$("#clear").click(clearAllObjects);



// ####
// es6 全局声明的i
const tasks = []; // 这里存放异步操作的 Promise
const output = (i) => new Promise((resolve) => {
    setTimeout(() => {
        console.log(new Date, i);
        resolve();
    }, 1000 * i);
});

// 生成全部的异步操作
for (var i = 0; i < 5; i++) {
    tasks.push(output(i));
}

// 异步操作完成之后，输出最后的 i
Promise.all(tasks).then(() => {
    setTimeout(() => {
        console.log(new Date, i);
    }, 1000);
});

// es7
// 模拟其他语言中的 sleep，实际上可以是任何异步操作
const sleep = (timeountMS) => new Promise((resolve) => {
    setTimeout(resolve, timeountMS);
});
// 函数内i
(async () => {  // 声明即执行的 async 函数表达式
    for (var i = 0; i < 5; i++) {
        if (i > 0) {
            await sleep(1000);
        }
        console.log(new Date, i);
    }

    await sleep(1000);
    console.log(new Date, i);
})();

// 函数外部：变量不管是否用了var申明，都是全局变量。

// 函数内部：变量如果没有使用var关键字申明，那它就是全局变量，只有用var关键字申明了，才是局部变量。
```

#### 避免全局变量

```javascript
let app = Loader();
app.factory(function DataService(args) { return {} });
// factory() 方法还可以将不同的工厂函数归类到不同的模块中。
app.factory('tools')(function Timer(args) { return {} });

// 
app.start(function startApplication(factories){
  
  let dataService = factories.DataService();
  let model = factories.Model({
      dataService : dataService,
      timer : factories.tools.Timer()
  });
});


//Loader()
function Loader(){
  let modules = Object.create(null);
  let started = false;
  
  function getNamespaceModule(modulesText){
    let parent = modules;
    if(modulesText){
      let parts = modulesText.split('.');
      for(let i=0; i<parts.length; i++){
        let part = parts[i];
        if (typeof parent[part] === "undefined") {
          parent[part] = Object.create(null);
        }
        
        parent = parent[part];
      }
    }
    
    return parent;
  }
  
  function addFunction(namespace, fn){
    if(typeof(fn) !== "function") {
      throw "Only functions can be added";
    }
       
    let module = getNamespaceModule(namespace);
    let fnName = fn.name;    
    module[fnName] = fn;
  }
  
  function addNamespace(namespace){
    return function(fn){
      addFunction(namespace, fn)
    }
  }
  
  function factory(){
    if(typeof(arguments[0]) === "string"){
      return addNamespace(arguments[0]);
    } else {
      return addFunction(null, arguments[0]);
    }
  }
  
  function start(startApplication){
    if(started){
      throw "App can be started only once";
    }
     
    startApplication(Object.freeze(modules));
    started = true;
  }
  
  return Object.freeze({
    factory,
    start
  });
};
let app = Loader();

```

### this指向

​	this的指向是调用时决定的，而不是创建时决定的，this具有运行期绑定的特性。

#### 全局上下文

​	在全局执行上下文中的this都指代全局对象，this等价于window对象，var === this. === window.

#### 函数上下文

​	在函数内部，this的值取决于函数被调用时的方式

##### 	直接调用

```javascript
// this指向全局变量
function foo() {
	return this;
}
console.log(foo() === window);// true
```

##### 	call()、apply()、bind()

- ```javascript
  // call、 apply 会调用该函数
  /*
  call() 方法使用一个指定的 this 值和单独给出的一个或多个参数来调用一个函数。
  与 apply() 方法类似，只有一个区别，就是 call() 方法接受的是一个参数列表，而 apply() 方法接受的是一个包含多个参数的数组。
  */
  this指向绑定的对象上
  var person = {
      name: 'axuebin',
      age: 25
  }
  function say(job) {
      console.log(this.name + '' + this.age + '' + job)
  }
  say.call(person, 'FE'); // axuebin:25 FE 
  say.apply(person, ['FE']);
  // 定义了一个say函数是用来输出name、age和job，其中本身没有name和age属性，我们将这个函数绑定到person这个对象上，输出了本属于person的属性，说明此时this是指向对象person的。
  
  //实现继承
  // 定义父级的构造函数
  var Person = function (name, age) {
    this.name = name;
    this.age = age;
    this.gender = ['man', 'woman'];
  }
  
  // 定义子类的构造函数
  var Student = function (name, age, high) {
    
      Person.call(this, name, age);
     /*
     在Student的构造函数中，借助call方法，将父级的构造函数执行了一次，相当于将Person中的代码，在Sudent中复制了一份，其中的this指向为从Student中new出来的实例对象。call方法保证了this的指向正确，因此就相当于实现了继承
     	这一句话，相当于下面三句话，因此实现了继承
     	this.name = name;
    	this.age = age;
    	this.gender = ['man', 'woman'];
    */
    this.high = high;
  }
  Student.prototype.message = function () {
    console.log('name:' + this.name + ', age:' + this.age + ', high:' + this.high + ', gender:' + this.gender[0] + ';');
  }
  new Student('xiaom', 12, '150cm').message();
  // name:xiaom, age:12, high:150cm, gender:man;
  
  
  // bind()
  /*
  bind()方法创建一个新的函数， 当这个新函数被调用时this键值为其提供的值，其参数列表前几项值为创建时指定的参数序列。
  
  */
  // this将永久的被绑定到bind的第一个参数
  
  var person = {
      name: 'zhang', 
      age: 24
  }
  function say() {
      console.log(this.name + ':' + this.age)
  }
  var f = say.bind(person);
  console.log(f()) // zhang: 24
  ```

###### 	模拟call函数

```javascript
/*
将函数设为对象的属性
执行该函数
删除该函数
*/

// 第一版
Function.prototype.call2 = function(context) {
    // 首先要获取调用call的函数，用this可以获取
	console.log(this); // bar {} 调用call2的函数
    console.log(context); // {value: 1}
    context.fn = this;
    context.fn();
    delete context.fn;
}
// 测试一下
var foo = {
    value: 1
};
function bar() {
    console.log(this.value);
}
bar.call2(foo); // 1


// 第三版
Function.prototype.call2 = function (context) {
    var context = context || window;
    context.fn = this;
    var args = [];
    for(var i = 1, len = arguments.length; i < len; i++) {
        args.push('arguments[' + i + ']');
    }
    /*
    eval('function Test(a,b,c,d){console.log(a,b,c,d)};Test(1,2,3,4)')
	就是相当于这样
	<script>
		function Test(a,b,c,d) {
			console.log(a,b,c,d)
		};
		Test(1,2,3,4)
	</script>
    
    
    */
    var result = eval('context.fn(' + args +')');
    delete context.fn
    return result;
}
// 测试一下
var value = 2;
var obj = {
    value: 1
}
function bar(name, age) {
    console.log(this.value);
    return {
        value: this.value,
        name: name,
        age: age
    }
}
bar.call(null); // 2
console.log(bar.call2(obj, 'kevin', 18));
// 1
// Object {
//    value: 1,
//    name: 'kevin',
//    age: 18
// }
```

###### 模拟apply函数

```javascript
// apply 传入参数数组
// arguments 代表正在执行的函数和调用它的函数的参数
// caller 返回一个对函数的引用，该函数调用了当前函数。
// callee 返回正被执行的 Function 对象，也就是所指定的 Function 对象的正文。

//递归计算
var sum = function(n) {
    if(n <= 0) return 0;
    return n + arguments.callee(n - 1)
}
console.log(sum(10))

//简单模拟Symbol属性
function jawilSymbol(obj) {
    var unique_proper = "00" + Math.random();
    if (obj.hasOwnProperty(unique_proper)) {
        arguments.callee(obj)//如果obj已经有了这个属性，递归调用，直到没有这个属性
    } else {
        return unique_proper;
    }
}

Function.prototype.applyOne = function (context, arr) {
    var context = Object(context) || window;
    context.fn = this; //假想context对象预先不存在名为fn的属性
    //基本数据类型有6种：Undefined、Null、布尔值（Boolean）、字符串（String）、数值（Number）、对象（Object）。
    /*
    若存在使用 Symbol，表示独一无二的值。 es6
    var fn = Symbol()
    
    // 非es6
    var fn = jawilSymbol(context);
    
    context[fn] = this 
    */
    var result;
    if (!arr) {
        result = context.fn();
        // context[fn]()
    }
    else {
        var args = [];
        for (var i = 0, len = arr.length; i < len; i++) {
            args.push('arr[' + i + ']');
        }
        result = eval('context.fn(' + args + ')')
    }

    delete context.fn  //执行完毕之后删除这个属性
    // delete context[fn] 
    return result;
}

var obj = {
    name: 'jawil'
}

function sayHello(age) {
    return {
        name: this.name,
        age: age
    }
}

// console.log(sayHello.applyOne(obj,[24]));// 完美输出{name: "jawil", age: 24}

// call 
Function.prototype.callOne = function(context) {
    return this.applyOne(([].shift.applyOne(arguments)), arguments) 
    //巧妙地运用上面已经实现的applyFive函数
}
console.log(sayHello.callOne(obj,24));// 完美输出{name: "jawil", age: 24}

// bind 
//简单模拟Symbol属性
function jawilSymbol(obj) {
    var unique_proper = "00" + Math.random();
    if (obj.hasOwnProperty(unique_proper)) {
        arguments.callee(obj)//如果obj已经有了这个属性，递归调用，直到没有这个属性
    } else {
        return unique_proper;
    }
}
//原生JavaScript封装apply方法，第五版
Function.prototype.applyFive = function(context) {
    var context = context || window
    var args = arguments[1] //获取传入的数组参数
    var fn = jawilSymbol(context);
    context[fn] = this //假想context对象预先不存在名为fn的属性
    if (args == void 0) { //没有传入参数直接执行
        return context[fn]()
    }
    var fnStr = 'context[fn]('
    for (var i = 0; i < args.length; i++) {
        //得到"context.fn(arg1,arg2,arg3...)"这个字符串在，最后用eval执行
        fnStr += i == args.length - 1 ? args[i] : args[i] + ','
    }
    fnStr += ')'
    var returnValue = eval(fnStr) //还是eval强大
    delete context[fn] //执行完毕之后删除这个属性
    return returnValue
}
//简单模拟call函数
Function.prototype.callOne = function(context) {
    return this.applyFive(([].shift.applyFive(arguments)), arguments)
    //巧妙地运用上面已经实现的applyFive函数
}

//简单模拟bind函数
Function.prototype.bind = Function.prototype.bind || function (context) {
    var me = this;
    var args = Array.prototype.slice.callOne(arguments, 1);
    var F = function () {};
    F.prototype = this.prototype;
    var bound = function () {
        var innerArgs = Array.prototype.slice.callOne(arguments);
        var finalArgs = args.concat(innerArgs);
        return me.applyOne(this instanceof F ? this : context || this, finalArgs);
    }
    bound.prototype = new F();
    return bound;
}

```

###### 模拟bind函数

```javascript
// 返回一个函数 可以传入参数
Function.prototype.bind2 = function (context) {

    if (typeof this !== "function") {
      throw new Error("Function.prototype.bind - what is trying to be bound is not callable");
    }

    var self = this;
    var args = Array.prototype.slice.call(arguments, 1);
    var fNOP = function () {};

    var fbound = function () {
        self.apply(this instanceof self ? this : context, args.concat(Array.prototype.slice.call(arguments)));
    }

    fNOP.prototype = this.prototype;
    fbound.prototype = new fNOP();

    return fbound;

}

// instanceof 是否在显示实例对象的实例函数的 prototype 属性上出现。
// new.target 属性允许你检测函数或构造方法是否是通过new运算符被调用的。在通过new运算符被初始化的函数或构造方法中，new.target返回一个指向构造方法或函数的引用。在普通的函数调用中，new.target 的值是undefined。
// Object.defineProperties() 方法直接在一个对象上定义新的属性或修改现有属性，并返回该对象。
```



##### 	箭头函数

​		**所有的箭头函数都没有自己的this,都指向外层**

​		箭头函数会捕获其所在上下文的this值，作为自己的this值。	

```javascript
function Person(name){
  this.name = name;
  this.say = () => {
    var name = "xb";
    return this.name;
  }
}
var person = new Person("axuebin");
console.log(person.say()); // axuebin


var student = {
    name: '若川',
    doSth: function(){
        console.log(this.name);
        return () => {
            console.log('arrowFn:', this.name);
        }
    }
}
var person = {
    name: 'person',
}
student.doSth().call(person); // '若川'  'arrowFn:' '若川'
student.doSth.call(person)(); // 'person' 'arrowFn:' 'person'

```

##### 作为对象的一个方法

```javascript
// this指向调用函数的对象
var person = {
    age: 24,
    getAge: function() {
        return this.age;
    }
}
console.log(person.getAge()); // 24

// 注意
var name = "xb";
var person = {
  name: "axuebin",
  getName: function(){
    return this.name;
  }
}
// this的指向得看函数调用时
var getName = person.getName;
console.log(getName()); // xb
// 
var getName = person.getName();
console.log(getName); // axuebin



// ...
var name = 'window';
var doSth = function(){
    console.log(this.name);
}
var student = {
    name: '若川',
    doSth: doSth,
    other: {
        name: 'other',
        doSth: doSth,
    }
}
student.doSth(); // '若川'
student.other.doSth(); // 'other'
// 用call类比则为：
student.doSth.call(student);
// 用call类比则为：
student.other.doSth.call(student.other);
```

##### 作为一个构造函数

```javascript
// this被绑定到正在构造的新对象
function Person(name){
  this.name = name;
  this.age = 25;
  this.say = function(){
    console.log(this.name + ":" + this.age);
  }
}
var person = new Person("axuebin");
console.log(person.name); // axuebin
person.say(); // axuebin:25
/*
通过构造函数创建一个对象其实执行这样几个步骤：
	创建新对象
	将this指向这个对象
	给对象赋值（属性、方法）
	返回this
所以this就是指向创建的这个对象上。
*/
```

##### 作为一个DOM事件处理函数

​	this指向触发事件的元素，也就是始事件处理程序所绑定到的DOM节点。

```javascript
var ele = document.getElementById("id");
ele.addEventListener("click",function(e){
  console.log(this);
  console.log(this === e.target); // true
})
```

### JavaScript原型

#### 	普通对象与函数对象

```javascript
// Object, function是JS自带的函数对象

var o1 = {}; 
var o2 = new Object();
var o3 = new f1();

function f1(){}; 
var f2 = function(){};
var f3 = new Function('str','console.log(str)');

console.log(typeof Object); //function 
console.log(typeof Function); //function  

console.log(typeof f1); //function 
console.log(typeof f2); //function 
console.log(typeof f3); //function   

console.log(typeof o1); //object 
console.log(typeof o2); //object 
console.log(typeof o3); //object ?
//  o1 o2 o3 为普通对象，f1 f2 f3 为函数对象。怎么区分，其实很简单，凡是通过 new Function() 创建的对象都是函数对象，其他的都是普通对象。f1,f2,归根结底都是通过 new Function()的方式进行创建的。Function Object 也都是通过 New Function()创建的。
//js中万物皆对象，而对象皆出自构造（构造函数）
Function.__proto__ === Function.prototype // true
// __proto__和constructor是对象独有的。protype属性是函数独有的,但是在 JavaScript 中，函数也是对象，所以函数也拥有__proto__和 constructor属性。
// 所以 区别就在protoype属性


```

#### 	原型对象

​		在 JavaScript 中，每当定义一个对象（函数也是对象）时候，对象中都会包含一些预定义的属性。其中每个**函数对象**都有一个`prototype` 属性，这个属性指向函数的**原型对象**。

```javascript
function Person() {}
	Person.prototype.name = 'Zaxlct';
	Person.prototype.sayName = function() {
  		alert(this.name);
	}
} 
var person1 = new Person();
var person2 = new Person();
console.log(person1.sayName == person2.sayName); //true

// 什么是原型对象
## 原型对象就是 Person.prototype ? 
// 所有的原型对象都会自动获得一个 constructor（构造函数）属性，这个属性（是一个指针）指向 prototype 属性所在的函数（Person）
Person.prototype.constructor == Person
person1.constructor == Person
// person1是Person的实例， Person.prototype也是Person的实例
原型对象（Person.prototype）是 构造函数（Person）的一个实例。
```

**每个对象都有 __proto__ 属性，但只有函数对象才有 prototype 属性**

#### prototype

每个对象拥有一个**原型对象（prototype）**，对象以其原型为模板，从原型继承方法和属性，这些属性和方法定义在对象的构造器函数的 `prototype` 属性上，而非对象实例本身。

```javascript
function Parent() {}
var p = new Parent();
// Parent.prototype 实例原型
// Parent 构造函数
// p 实例
// 构造函数 Parent 有一个指向原型的指针(prototype)，实例原型 Parent.prototype 有一个指向构造函数的指针 Parent.prototype.constructor
Parent === Parent.prototype.constructor // true
```

####  	__ proto__

```javascript
// 实例用__proto__获取父级对象（构造函数）的原型(prototype); 
p.__proto__ === Parent.prototype;
// p.__proto__获取对象的原型,__proto__ 是每个实例上都有的属性，prototype 是构造函数的属性，这两个并不一样，但 p.__proto__ 和 Parent.prototype 指向同一个对象。

function Person() {}
Person.prototype.name = 'Kevin';

var person = new Person();

person.name = 'Daisy';
console.log(person.name) // Daisy

delete person.name;
console.log(person.name) // Kevin
//  person 对象中找不到 name 属性就会从 person 的原型也就是 person.__proto__ ，也就是 Person.prototype中查找




// __proto__属性既不能被 for in 遍历出来，也不能被 Object.keys(obj) 查找出来。


// 访问对象的 obj.__proto__ 属性，默认走的是 Object.prototype 对象上 __proto__ 属性的 get/set 方法。
Object.defineProperty(Object.prototype,'__proto__',{
	get(){
		console.log('get')
	}
});

({}).__proto__; // get
console.log((new Object()).__proto__); // get

// __proto__是对象所独有的，并且__proto__是一个对象指向另一个对象，也就是他的原型对象
// 它的作用就是当你在访问一个对象属性的时候，如果该对象内部不存在这个属性，那么就回去它的__proto__属性所指向的对象（父类对象）上查找，如果父类对象依旧不存在这个属性，那么就回去其父类的__proto__属性所指向的父类的父类上去查找。以此类推，知道找到 null。而这个查找的过程，也就构成了我们常说的原型链。
```

#### 原型链

每个对象拥有一个原型对象，通过 `__proto__` 指针指向上一个原型 ，并从中继承方法和属性，同时原型对象也可能拥有原型，这样一层一层，最终指向 `null`。这种关系被称为**原型链 (prototype chain)**

```javascript
p.constructor === Parent; // true
p.constructor === Parent.prototype.constructor // true
p.__proto__.constructor === Parent // true
// 实例对象 p 本身没有 constructor 属性，是通过原型链向上查找 __proto__ ，最终查找到 constructor 属性，该属性指向 Parent。
p.__proto__  --> Parent.prototype.__proto__ --> Object.prototype.__proto__ -- > null

null 和 undefined 没有 constructor 属性。
```



#### constructor 构造器

  **`	constructor`属性也是对象所独有的**，它是**一个对象指向一个函数，这个函数就是该对象的构造函数**。

​	每一个对象都有其对应的构造函数，本身或者继承而来。单从`constructor`这个属性来讲，只有`prototype`对象才有。每个函数在创建的时候，JavaScript 会同时创建一个该函数对应的`prototype`对象，而`函数创建的对象.__proto__ === 该函数.prototype`，该`函数.prototype.constructor===该函数本身`，故通过函数创建的对象即使自己没有`constructor`属性，它也能通过`__proto__`找到对应的`constructor`，所以任何对象最终都可以找到其对应的构造函数。

`Function`。它是它自己的构造函数。所以`Function.prototype === Function.__proto`。

#### typeof 

​	无法判断null, null为Object, ECMAScript设计的bug

#### instanceof

```javascript
function instance_of(L, R) {//L 表示左表达式，R 表示右表达式
 var O = R.prototype;// 取 R 的显示原型
 L = L.__proto__;// 取 L 的隐式原型
 while (true) { 
   if (L === null) 
     return false; 
   if (O === L)// 这里重点：当 O 严格等于 L 时，返回 true 
     return true; 
   L = L.__proto__; 
 } 
}

```

### 继承

#### 	es5中继承的实现

​		在JavaScript中，有两类原型继承的方式：显式继承和隐式继承

##### 		new实现	

```javascript
function objectFactory() {

    var obj = new Object(),//从Object.prototype上克隆一个对象

    Constructor = [].shift.call(arguments);//取得外部传入的构造器

    var F=function(){};
    F.prototype= Constructor.prototype;
    obj=new F();//指向正确的原型

    var ret = Constructor.apply(obj, arguments);//借用外部传入的构造器给obj设置属性

    return typeof ret === 'object' ? ret : obj;//确保构造器总是返回一个对象

};

```

##### 类式继承

```javascript
function SuperClass() {
	this.superValue = true; 
}
SuperClass.prototype.getSuperValue = function() {
    return this.superValue;
}
function SubClass() {
    this.subValue = false;
}
SubClass.prototype = new SuperClass();
SubClass.prototype.getSubValue = function() {
    return this.subValue
}
var instance = new SubClass();

console.log(instance instanceof SuperClass);// true
console.log(instance instanceof SubClass);// true
console.log(SubClass instanceof SuperClass);// false
console.log(SubClass.prototype instanceof SuperClass) // true
// SubClass.prototype === instance.__proto__ true

```

##### 构造函数继承

```javascript
function SuperClass(id) {
    this.books = ['js', 'css'];
    this.id = id;
}
SuperClass.prototype.showBooks = function() {
    console.log(this.books);
}
function SubClass(id) {
    //继承父类
    SuperClass.call(this, id);
}
//创建第一个子类实例
var instance1 = new SubClass(10);
//创建第二个子类实例
var instance2 = new SubClass(11);

instance1.books.push('html');
console.log(instance1)
console.log(instance2)
instance1.showBooks();//TypeError
//uperClass.call(this,id)是构造函数继承的核心语句.由于父类中给this绑定属性，因此子类自然也就继承父类的共有属性
```

##### 组合式继承

```javascript
function SuperClass(name) {
    this.name = name;
    this.books = ['JS', 'CSS'];
}
SuperClass.prototype.getBooks = function() {
    console.log(this.books)
}

function SubClass(name, time) {
    SuperClass.call(this, name);
    this.time = time;
}
SubClass.prototype = new SuperClass();
SubClass.prototype.getTime = function() {
    console.log(this.time);
    
}
```

##### 原型式继承		

```javascript
// prototype 原型  new出来的函数是该函数的实例

function inheritObject(o) {
    // 声明一个过渡对象
    function F() {}
    //过渡对象的原型继承父对象
    F.prototype = o;
    // 返回过渡对象的实例，该对象的原型继承了父对象
    return new F();
}

var book = {
    name:'js book',
    likeBook:['css Book','html book']
}
var newBook = inheritObject(book);
newBook.name = 'ajax book';
newBook.likeBook.push('react book');
var otherBook = inheritObject(book);
otherBook.name = 'canvas book';
otherBook.likeBook.push('node book');
console.log(newBook,otherBook);
// 原型式继承和类式继承一个样子，对于引用类型的变量，还是存在子类实例共享的情况。
// likeBook: (4) ['css Book', 'html book', 'react book', 'node book']
```

##### 寄生式继承

```javascript
function createBook(obj) {
    // 通过原型方式创建新的对象
    var o = new inheritObject(obj);
    // 拓展新对象
    o.getName = function(name) {
        console.log(name)
    }
   	// 返回拓展后的对象
    return o;
}
```

##### 寄生组合式继承

```javascript
// 处理不是对象，而是类的原型。
function inheritObject(o) {
    // 声明一个过渡对象
    function F() {}
    // 过渡对象的原型继承父对象
    F.prototype = o;
    //返回过渡对象的实例，该对象的原型继承了父对象
    return new F();
}
function inheritPrototype(subClass, superClass) {
    // 复制一份父类的原型副本到变量中
  	var p = inheritObject(superClass.prototype);
   	// 修正因为重写子类的原型导致子类的constructor属性被修改
    p.constructor = subClass;
    // 设置子类原型
    subClass.prototype = p;
}


function SuperClass(name) {
  this.name = name;
  this.books = ['js book','css book'];
}
SuperClass.prototype.getName = function() {
  console.log(this.name);
}
function SubClass(name,time) {
  SuperClass.call(this, name);
  this.time = time;
}
inheritPrototype(SubClass,SuperClass);
SubClass.prototype.getTime = function() {
  console.log(this.time);
}
var instance1 = new SubClass('React','2017/11/11')
var instance2 = new SubClass('Js','2018/22/33');

instance1.books.push('test book');

console.log(instance1.books,instance2.books); // ['js book', 'css book', 'test book']    ['js book', 'css book'] 修改constructor
instance2.getName(); // Js
instance2.getTime(); // 2018/22/33

```

### Promise

Promise 是异步编程的一种解决方案： 从语法上讲，promise是一个对象，从它可以获取异步操作的消息；从本意上讲，它是承诺，承诺它过一段时间会给你一个结果。 promise有三种状态：**pending(等待态)，fulfilled(成功态)，rejected(失败态)**；状态一旦改变，就不会再变。创造promise实例后，它会立即执行。

Promise用来解决 1.回调地狱  2.promise可以支持多个并发请求，获取并发请求中的数据 3.可以解决异步问题，但不能说promise是异步的

```javascript
/* 
Promise的构造函数接收一个参数：函数，并且这个函数需要传入两个参数：
resolve ：异步操作执行成功后的回调函数
reject：异步操作执行失败后的回调函数
*/

let p =  new Promise((resolve, reject) => {
    var num = Math.ceil(Math.random()*10); //生成1-10的随机数
    // 异步操作
    setTimeout(() => {
		console.log('num----', num);
        if (num < 5) {
        	console.log('执行完成');
        	resolve('成功') 
        } else {
            reject('失败')
        }
       
    }, 1000)
})
p.then(res => {console.log(res+'resolve'), (error) => {
	console.log('error ' + error)
}})

// -------------------------- //
// catch
// 在执行resolve的回调时，如果抛出异常了（代码出错了），那么并不会报错卡死js，而是会进到catch方法中
p.then((data) => {
    console.log('resolved',data);
}).catch((err) => {
    console.log('rejected',err);
});

// -------------------------- //
// 链式操作
p.then(res => {
	console.log(res)
    return Promise.resolve('第二次回调参数')
})
.then(res => {
	console.log('第二次 ' + res)
    return Promise.resolve('第三次回调参数')
})
.then(res => {
    console.log('第三次 ' + res)
})

// -------------------------- //
// all 并行执行异步操作，并且在所有异步操作执行完后才执行回调  
// 谁跑的慢，以谁为准执行回调。all接收一个数组参数，里面的值最终都算返回Promise对象
let p1 = new Promise((resolve, reject) => {
  resolve('成功了')
})

let p2 = new Promise((resolve, reject) => {
  resolve('success')
})

let p3 = Promse.reject('失败')

Promise.all([p1, p2]).then((result) => {
  console.log(result)               //['成功了', 'success']
}).catch((error) => {
  console.log(error)
})

Promise.all([p1,p3,p2]).then((result) => {
  console.log(result)
}).catch((error) => {
  console.log(error)      // 失败了，打出 '失败'
})
//同时有resolve 和 reject then,catch都执行

let p = Promise.all([p1, p2])
p.then((result) => {

    console.log(result)
})
/**/


// -------------------------- //
// race 谁先执行完，则就执行谁的回调 不管成功失败
let p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('success')
  },1000)
})

let p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('failed')
  }, 500)
})

Promise.race([p1, p2]).then((result) => {
  console.log(result)
}).catch((error) => {
  console.log(error)  // 打开的是 'failed'
})
```

#### 实现一个Promise

```javascript
// 创建一个构造函数promise，创建一个promisel类，在使用的时候传入了一个执行器executor，executor会传入两个参数：成功(resolve)和失败(reject)。



function resolvePromise(promise2,x,resolve,reject){
    //判断x是不是promise
    //规范中规定：我们允许别人乱写，这个代码可以实现我们的promise和别人的promise 进行交互
    if(promise2 === x){//不能自己等待自己完成
        return reject(new TypeError('循环引用'));
    };
    // x是除了null以外的对象或者函数
    if(x !=null && (typeof x === 'object' || typeof x === 'function')){
        let called;//防止成功后调用失败
        try{//防止取then是出现异常  object.defineProperty
            let then = x.then;//取x的then方法 {then:{}}
            if(typeof then === 'function'){//如果then是函数就认为他是promise
                //call第一个参数是this，后面的是成功的回调和失败的回调
                then.call(x,y => {//如果Y是promise就继续递归promise
                    if(called) return;
                    called = true;
                    resolvePromise(promise2,y,resolve,reject)
                },r => { //只要失败了就失败了
                    if(called) return;
                    called = true;
                    reject(r);  
                });
            }else{//then是一个普通对象，就直接成功即可
                resolve(x);
            }
        }catch (e){
            if(called) return;
            called = true;
            reject(e)
        }
    }else{//x = 123 x就是一个普通值 作为下个then成功的参数
        resolve(x)
    }

}

class Promise {
    constructor (executor){
        //默认状态是等待状态
        this.status = 'panding';
        this.value = undefined;
        this.reason = undefined;
        //存放成功的回调
        this.onResolvedCallbacks = [];
        //存放失败的回调
        this.onRejectedCallbacks = [];
        let resolve = (data) => {//this指的是实例
            if(this.status === 'pending'){
                this.value = data;
                this.status = "resolved";
                this.onResolvedCallbacks.forEach(fn => fn());
            }
 
        }
        let reject = (reason) => {
            if(this.status === 'pending'){
                this.reason = reason;
                this.status = 'rejected';
                this.onRejectedCallbacks.forEach(fn => fn());
            }
        }
        try{//执行时可能会发生异常
            executor(resolve,reject);
        }catch (e){
            reject(e);//promise失败了
        }
       
    }
    then(onFuiFilled,onRejected){ 
        //防止值得穿透 
        onFuiFilled = typeof onFuiFilled === 'function' ? onFuiFilled : y => y;
        onRejected = typeof onRejected === 'function' ? onRejected :err => {throw err;}        
        let promise2;//作为下一次then方法的promise
       if(this.status === 'resolved'){
           promise2 = new Promise((resolve,reject) => {
               setTimeout(() => {
                  try{
                        //成功的逻辑 失败的逻辑
                        let x = onFuiFilled(this.value);
                        //看x是不是promise 如果是promise取他的结果 作为promise2成功的的结果
                        //如果返回一个普通值，作为promise2成功的结果
                        //resolvePromise可以解析x和promise2之间的关系
                        //在resolvePromise中传入四个参数，第一个是返回的promise，第二个是返回的结果，第三个和第四个分别是resolve()和reject()的方法。
                        resolvePromise(promise2,x,resolve,reject)
                  }catch(e){
                        reject(e);
                  } 
               },0)
           }); 
       } 
       if(this.status === 'rejected'){
            promise2 = new Promise((resolve,reject) => {
                setTimeout(() => {
                    try{
                        let x = onRejected(this.reason);
                        //在resolvePromise中传入四个参数，第一个是返回的promise，第二个是返回的结果，第三个和第四个分别是resolve()和reject()的方法。
                        resolvePromise(promise2,x,resolve,reject)
                    }catch(e){
                        reject(e);
                    }
                },0)

            });
       }
       //当前既没有完成也没有失败
       if(this.status === 'pending'){
           promise2 = new Promise((resolve,reject) => {
               //把成功的函数一个个存放到成功回调函数数组中
                this.onResolvedCallbacks.push( () =>{
                    setTimeout(() => {
                        try{
                            let x = onFuiFilled(this.value);
                            resolvePromise(promise2,x,resolve,reject);
                        }catch(e){
                            reject(e);
                        }
                    },0)
                });
                //把失败的函数一个个存放到失败回调函数数组中
                this.onRejectedCallbacks.push( ()=>{
                    setTimeout(() => {
                        try{
                            let x = onRejected(this.reason);
                            resolvePromise(promise2,x,resolve,reject)
                        }catch(e){
                            reject(e)
                        }
                    },0)
                })
           })
       }
       return promise2;//调用then后返回一个新的promise
    }
    catch (onRejected) {
        // catch 方法就是then方法没有成功的简写
        return this.then(null, onRejected);
    }
}
Promise.all = function (promises) {
    //promises是一个promise的数组
    return new Promise(function (resolve, reject) {
        let arr = []; //arr是最终返回值的结果
        let i = 0; // 表示成功了多少次
        function processData(index, data) {
            arr[index] = data;
            if (++i === promises.length) {
                resolve(arr);
            }
        }
        for (let i = 0; i < promises.length; i++) {
            promises[i].then(function (data) {
                processData(i, data)
            }, reject)
        }
    })
}
// 只要有一个promise成功了 就算成功。如果第一个失败了就失败了
Promise.race = function (promises) {
    return new Promise((resolve, reject) => {
        for (var i = 0; i < promises.length; i++) {
            promises[i].then(resolve,reject)
        }
    })
}
// 生成一个成功的promise
Promise.resolve = function(value){
    return new Promise((resolve,reject) => resolve(value);
}
// 生成一个失败的promise
Promise.reject = function(reason){
    return new Promise((resolve,reject) => reject(reason));
}
Promise.defer = Promise.deferred = function () {
    let dfd = {};
    dfd.promise = new Promise( (resolve, reject) =>  {
        dfd.resolve = resolve;
        dfd.reject = reject;
    });
    return dfd
}
module.exports = Promise;

```

### 深浅拷贝

- #### 浅拷贝

  - ```javascript
    // 只是复制引用，并未 复制真正的值
    const originArray = [1,2,3,4,5];
    const cloneArray = originArray;
    console.log(cloneArray); // [1,2,3,4,5]
    
    cloneArray.push(6);
    console.log(cloneArray); // [1,2,3,4,5,6]
    console.log(originArray); // [1,2,3,4,5,6]
    ```

- 深拷贝

  - ```javascript
    // 对目标的完全拷贝 不会影响原值
    /* ---------------
    实现
    	1.利用 JSON 对象中的 parse 和 stringify
    		JSON.stringify 将一个 JavaScript 值转成一个 JSON 字符串。
    		JSON.parse将一个 JSON 字符串转成一个 JavaScript 值或对象。
    		
    		const originArray = [1,2,3,4,5];
    		const cloneArray = JSON.parse(JSON.stringify(originArray));
    		console.log(cloneArray === originArray); // false
    		## undefined、function、symbol 会在转换过程中被忽略
    	2.利用递归来实现每一层都重新创建对象并赋值
    		创建对象 -> 对象赋值
    		自己的实现
    		function deepClone(data, hash = new Map()) {
    			if (data == undefined) return data;
    			if (typeof data !== 'object') return data;
      			if (data instanceof RegExp) return new RegExp(data)
      			if (data instanceof Date) return new Date(data)
      			
      			var v = hash.get(data); // 是否已存在
      			if (v) return v;
      			
      			var instance = new data.constructor //存下构造函数
      			hash.set(data, instance)
      			for (var key in data) {
        			if (data.hasOwnProperty(key)) {
          				instance[key] = deepClone(data[key], hash)
        			}
      			}
      			return instance
    		}
    		
    		
    -------------------
    concat  可以连接两个或者更多的数组，但是它不会修改已存在的数组，而是返回一个新数组
    如果是多维数组 concat 只是对数组的第一层进行深拷贝。
    
    slice 同上
    
    Object.assign() 拷贝的是属性值。假如源对象的属性值是一个指向对象的引用，它也只拷贝那个引用值。
    
    ... 展开运算符   实现的是对象第一层的深拷贝。后面的只是拷贝的引用值。
    */
    ```

### 	宏任务、微任务、Event Loop

- ​			

```javascript
/*
	每个Web Worker 都有自己的事件循环(event loop)
	-------------------
	task: 又被称为macrotask(宏任务) 先进先出。一个event loop有一个或多个task队列 。
	当用户代理安排一个任务，必须将该任务增加到相应的event loop的一个tsak队列中。
	每一个task都来源于指定的任务源，比如可以为鼠标、键盘事件提供一个task队列，其他事件又是一个单独的队列。可以为鼠标、键盘事件分配更多的时间，保证交互的流畅。
	哪些是task任务源？
		DOM操作任务源：响应dom操作
		用户交互任务源：响应用户交互（鼠标或键盘输入）
		网络任务源： 响应网络活动
		history traversal任务源：调用history.back等类似的api时，将任务插入task队列
	ajax的onload,click,setTimeout、setInterval、setImmediate
	
	-------------------
	microtask 微任务 先进先出
		每一个event loop都有一个microtask队列，一个microtask会被排进microtask队列而不是task队列。
		microtask任务源：
			process.nextTick
			promise.then (在Promises/A+规范的Notes 3.1中提及了promise的then方法可以采用“宏任务（macro-task）”机制或者“微任务（micro-task）”机制来实现,有的浏览器将then放入了macro-task队列，有的放入了micro-task 队列)
			Object.observe
			MutationObserver 观察者
			
	-------------------
	event loops
		有两种event loops：
		浏览器上下文
			每一个用户代理必须至少有一个浏览器上下文event loop
			当一个event loop的浏览器上下文全都销毁的时候，event loop也会销毁
		workers 
			一个worker对应一个event loop
			
		浏览器上下文 browsing contexts
			是一个将 Document 对象呈现给用户的环境。在一个 Web 浏览器内，一个标签页或窗口常包含一个浏览		上下文，如一个 iframe 或一个 frameset 内的若干 frame。
	
	--------------------
	event loop 循环过程
		1.在tasks队列中选择最老的一个task,用户代理可以选择任何task队列，如果没有可选的任务，则跳到下边的microtasks步骤。
        2.将上边选择的task设置为正在运行的task。
        3.Run: 运行被选择的task。
        4.将event loop的currently running task变为null。
        5.从task队列里移除前边运行的task。
        6.Microtasks: 执行microtasks任务检查点。（也就是执行microtasks队列里的任务）
        7.更新渲染（Update the rendering）...
        8.如果这是一个worker event loop，但是没有任务在task队列中，并且WorkerGlobalScope对象的closing标识为true，则销毁event loop，中止这些步骤，然后进行定义在Web workers章节的run a worker。
        9.返回到第一步。
      event loop会不断循环的去取tasks队列的中最老的一个任务推入栈中执行，并在当次循环里依次执行并清空		microtask队列里的任务。
	  执行完microtask队列里的任务，有可能会渲染更新。（浏览器很聪明，在一帧以内的多次dom变动浏览器不会立即	  响应，而是会积攒变动以最高60HZ的频率更新视图）
	
	------------------------
	microtasks检查点（microtask checkpoint） 执行microtask队列里的任务
	
	------------------------
	执行栈（JavaScript execution context stack）先进后出
	javaScript是单线程（一个主线程），每一个函数执行的时候，都会生成新的execution context（执行上下文），执行上下文会包含一些当前函数的参数、局部变量之类的信息，它会被推入栈中， running execution context（正在执行的上下文）始终处于栈的顶部。当函数执行完后，它的执行上下文会从栈弹出。
	
	------------------------
	event loop中的Update the rendering（更新渲染） 规范允许浏览器自己选择是否更新视图
		处理 HTML 标记并构建 DOM 树。
        处理 CSS 标记并构建 CSSOM 树， 将 DOM 与 CSSOM 合并成一个渲染树。
        根据渲染树来布局，以计算每个节点的几何信息。
        将各个节点绘制到屏幕上。
*/
```



- 

























## HTML

### 如何提高页面性能

- ​	图片压缩，合并精灵图，使用字体图标，使用base64，图片懒加载
- css,js的压缩，封装复用
- 减少重排操作，例如使用transform书写动画效果，在for循环结束后再去操作dom节点
- 使用CDN网络托管
- 数据懒加载，按需加载（上滑加载更多）
- 路由懒加载
- 利用缓存来缓存文件
- 防抖节流
- 异步加载
- 减少闭包，递归优化
- webpack优化，组件按需加载，使用chunck，模板预编译等

### 浏览器从输入网址到看到网页都发生了什么？

1. ​	域名解析为ip地址
2. 客户端发送一个带有SYN标志的数据包给服务端（三次握手，第一次）
3. 服务端收到后，回传一个带有SYN/ACK标志的数据包以示传达确认信息（三次握手，第二次）
4. 客户端再回传一个带ACK标志的数据包，代表握手结束，连接成功（三次握手，第三次）
5. 服务端处理数据并返回数据
6. 客户端请求关闭连接（四次挥手，第一次）
7. 服务端确认是否还有数据要传输（四次挥手，第二次）
8. 服务端没有要传输的数据了，准备关闭连接（四次挥手，第三次）
9. 客户端断开连接（四次挥手，第四次）
10. 浏览器解析HTML，生成DOM树，解析CSS，生成CSS规则树
11. DOM树和CSS规则树合并成渲染树，开始渲染
12. 执行JavaScript脚本

### 重排和重绘

重排也叫回流，当元素因为规模尺寸，布局，隐藏等改变而需要重新构建时则成为重排。

重绘：一些元素需要更新属性，而这些属性只是影响元素的外观，风格，而不会影响布局则叫重绘。

重绘不一定重排，但是重排一定重绘。

### 缓存

#### 浏览器缓存：

就是把一个已经请求过的资源拷贝一份存储起来，当下次需要该资源时， 浏览器会根据缓存机制决定直接使用缓存资源还是再次向服务器发送请求

##### 强制缓存：

- 请求头设置cache-control；
- max-age：缓存的时间；
- no-cache：不使用本地缓存。需要使用缓存协商，先与服务器确认返回的响应是否被更改，如果之前的响应中存在ETag，那么请求的时候会与服务端验证，如果资源未被更改，则可以避免重新下载。
- no-store：直接禁止浏览器缓存数据，每次用户请求该资源，都会向服务器发送一个请求，每次都会下载完整的资源。
- public：可以被所有的用户缓存，包括终端用户和CDN等中间代理服务器。
- private：只能被终端用户的浏览器缓存，不允许CDN等中继缓存服务器对其缓存。

##### 协商缓存： 

- 请求头设置last-modified/etag

- Etag要优于Last-Modified。Last-Modified的时间单位是秒，如果某个文件在1秒内改变了多次，那么他们的Last-Modified其实并没有体现出来修改，但是Etag每次都会改变确保了精度；
- 2.在性能上，Etag要逊于Last-Modified，毕竟Last-Modified只需要记录时间，而Etag需要服务器通过算法来计算出一个hash值；
- 3.在优先级上，服务器校验优先考虑Etag。

#### h5缓存

##### 本地存储**localStorage**永久存储

##### session Storage 临时存储

##### 离线缓存：

​	在html标签上设置 manifest 属性 引入cache文件（CACHE缓存文件，NETWORK不缓存文件，FALLBACK当资源不可访问时，代替的文件）

#### 更新缓存文件

1. ​	更新manifest文件
2. 通过javaScript 操作 window.applicationCache.update()
3. 清除浏览器缓存
4. 带版本号

### 状态码

- 1字头：信息，服务器收到请求，需要请求者继续执行操作

  - 101：切换协议。

- 2字头：成功，操作被成功接收并处理

  - 200：请求成功。一般用于GET与POST请求

  - 203：非授权信息。请求成功。但返回的meta信息不在原始的服务器，而是一个副本

  - 204：无内容。服务器成功处理，但未返回内容。

- 3字头：重定向，需要进一步的操作以完成请求

  - 301：永久移动。请求的资源已被永久的移动到新URI，返回信息会包括新的URI，浏览器会自动定向到新URI。
  - 302：临时移动。
  - 304：未修改。所请求的资源未修改，服务器返回此状态码时，不会返回任何资源。
  - 305：使用代理。所请求的资源必须通过代理访问
  - 307：临时重定向。

- 4字头：客户端错误，请求包含语法错误或无法完成请求

  - 400：客户端请求的语法错误，服务器无法理解
  - 404：服务器无法根据客户端的请求找到资源（网页）
  - 405：客户端请求中的方法被禁止

- 5字头：服务器错误，服务器在处理请求的过程中发生了错误

  - 500：服务器内部错误，无法完成请求
  - 502：作为网关或者代理工作的服务器尝试执行请求时，从远程服务器接收到了一个无效的响应
  - 503：由于超载或系统维护，服务器暂时的无法处理客户端的请求。
  - 505：服务器不支持请求的HTTP协议的版本，无法完成处理

### !DOCTYPE html 是干什么的，有什么用？

​	声明文档类型是html5类型的文档。2、声明了则是标准模式，兼容ie高版本；不声明则是混杂模式，兼容ie低版本。





