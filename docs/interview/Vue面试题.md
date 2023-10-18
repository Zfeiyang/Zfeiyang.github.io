[TOC]

#### # 1. MVC 和 MVVM 区别

    MVC
    
    MVC 全名是 Model View Controller，是模型 (model)－视图(view)－控制器(controller) 的缩写，一种软件设计典范
    Model（模型）：是应用程序中用于处理应用程序数据逻辑的部分。通常模型对象负责在数据库中存取数据
    View（视图）：是应用程序中处理数据显示的部分。通常视图是依据模型数据创建的
    Controller（控制器）：是应用程序中处理用户交互的部分。通常控制器负责从视图读取数据，控制用户输入，并向模型发送数据
    
    MVC 的思想：一句话描述就是 Controller 负责将 Model 的数据用 View 显示出来，换句话说就是在 Controller 里面把 Model 的数据赋值给 View。
    
    MVVM
    
    MVVM 新增了 ViewModel 层, 做了两件事达到了数据的双向绑定 一是将Model【模型】转化成View【视图】，即将后端传递的数据转化成所看到的页面。实现的方式是：数据绑定。二是将【视图】转化成【模型】，即将所看到的页面转化成后端的数据。实现的方式是：DOM 事件监听。
    
    MVVM 与 MVC 最大的区别就是：它实现了 View 和 Model 的自动同步，也就是当 Model 的属性改变时，我们不用再自己手动操作 Dom 元素，来改变 View 的显示，而是改变属性后该属性对应 View 层显示会自动改变（对应 Vue 数据驱动的思想）

#### #2. 为什么 data 是一个函数

    组件中的 data 写成一个函数，数据以函数返回值形式定义，这样每复用一次组件，就会返回一份新的 data，类似于给每个组件实例创建一个私有的数据空间，让各个组件实例维护各自的数据。而单纯的写成对象形式，就使得所有组件实例共用了一份 data，就会造成一个变了全都会变的结果

#### #3. Vue 组件通讯有哪几种方式

    props 和 $emit 父组件向子组件传递数据是通过 prop 传递的，子组件传递数据给父组件是通过 $emit 触发事件来做到的
    $parent,$children 获取当前组件的父组件和当前组件的子组件
    $attrs 和 $listeners A->B->C。Vue 2.4 开始提供了 $attrs 和 $listeners 来解决这个问题
    provide inject  传递数据 数据不是响应式的
    $refs 获取组件实例
    eventBus 兄弟组件 $emit $on
    vueX

##### #3.1 如何将组件所有props传递给子组件？

 v-bind='$props'
 v-bind="$attrs"  可以将自身接收到的所有非props的特性(class和style除外)传递给它的子组件。（子组件添加inheritAttrs: false，避免父作用域的不被认作props的特性绑定应用在子组件的根元素上） attribute
 v-bind='$props' 可以将自身接收到的所有props传递给它的子组件，子组件需要在其props:{} 中定义要接受的参数名。
 v-on=“$listeners” 可以将父组件绑定的事件传递给子组件，子组件可以通过this.$emit(eventName)触发父组件绑定的事件
 vue3中合并了 $attrs和$listeners

##### #3.2 多个组件有相同逻辑 如何抽离

 使用mixin对公共部分的逻辑进行抽离

##### #3.3 ref 的作用

 获取dom元素 this.$refs.box
 获取子组件中的data this.$refs.box.msg
 调用子组件的方法 this.$refs.box.open()

#### #4.  Vue 的生命周期方法有哪些,一般在哪一步发请求?

    beforeCreate 在实例初始化之后，数据观测 (data observer) 和 event/watcher 事件配置之前被调用。在当前阶段 data、methods、computed 以及 watch 上的数据和方法都不能被访问
    created 实例已经创建完成之后被调用。在这一步，实例已完成以下的配置：数据观测 (data observer)，属性和方法的运算， watch/event 事件回调。这里没有 $el, 如果非要想与 Dom 进行交互，可以通过 vm.$nextTick 来访问 Dom
    beforeMount 在挂载开始之前被调用：相关的 render 函数首次被调用。
    mounted 在挂载完成后发生，在当前阶段，真实的 Dom 挂载完毕，数据完成双向绑定，可以访问到 Dom 节点
    beforeUpdate 数据更新时调用，发生在虚拟 DOM 重新渲染和打补丁（patch）之前。可以在这个钩子中进一步地更改状态，这不会触发附加的重渲染过程
    updated 发生在更新完成之后，当前阶段组件 Dom 已完成更新。要注意的是避免在此期间更改数据，因为这可能会导致无限循环的更新，该钩子在服务器端渲染期间不被调用。
    beforeDestroy 实例销毁之前调用。在这一步，实例仍然完全可用。我们可以在这时进行善后收尾工作，比如清除计时器。 解绑自定义事件event.$off  解绑自定义dom事件，如windom.scroll等
    destroyed Vue 实例销毁后调用。调用后，Vue 实例指示的所有东西都会解绑定，所有的事件监听器会被移除，所有的子实例也会被销毁。 该钩子在服务器端渲染期间不被调用。
    activated keep-alive 专属，组件被激活时调用
    deactivated keep-alive 专属，组件被销毁时调用
异步请求在哪一步发起？
    可以在钩子函数 created、beforeMount、mounted 中进行异步请求，因为在这三个钩子函数中，data 已经创建，可以将服务端端返回的数据进行赋值。
    如果异步请求不需要依赖 Dom 推荐在 created 钩子函数中调用异步请求，因为在 created 钩子函数中调用异步请求有以下优点：
    能更快获取到服务端数据，减少页面 loading 时间；
    ssr 不支持 beforeMount 、mounted 钩子函数，所以放在 created 中有助于一致性；

#### #5. v-if 和 v-show 的区别

 v-show和v-if都能控制元素的显示和隐藏。
 v-if 在编译过程中会被转化成三元表达式, 条件不满足时不渲染此节点。
 v-show 会被编译成指令，条件不满足时控制样式将对应节点隐藏 （display:none）
 v-if 适用于在运行时很少改变条件，不需要频繁切换条件的场景
 v-show 适用于需要非常频繁切换条件的场景

#### #6. Vue 内置指令

    v-once 只执行一次
    v-cloak 页面闪动的解决方法
    v-bind 绑定属性
    v-on 绑定事件
    v-html innerHTML 注意防止xss攻击 
    v-text 更新元素的textContent 
    v-model 双向数据绑定 
    v-if / v-else-if / v-else 元素显示隐藏
    v-show 元素显示隐藏 display:none;
    v-for 循环 比v-if优先级高 不建议同一个元素同时使用 
    v-pre 跳过这个元素和其子元素的编译过程，加快项目的编译速度

#### #7. Vue单向数据流

    数据从父组件传到子组件，子组件无权限修改父组件传递过来的数据。
    只能请求父组件对原始数据进行修改。这样会防止从子组件意外改变父级组件的状态。
    改变父组件的 prop 值 可以再 data 里面定义一个变量 并用 prop 的值初始化它 之后用 $emit 通知父组件去修改
    或者在computed里面get set定义一个变量，来修改
传递的是对象和数组可以修改，如果是基础数据类型也可以修改，但是控制台会报错
如何修改不报错

- .sync
- data 或 computed中重新定义一个变量，修改新定义的变量

#### #8. computed 和 watch 的区别和运用的场景

    computed 是计算属性，依赖其他属性计算值，并且 computed 的值有缓存，只有当计算值变化才会返回内容，它可以设置 getter 和 setter。
    watch 监听到值的变化就会执行回调，在回调中可以进行一些逻辑操作。
    计算属性一般用在模板渲染中，某个值是依赖了其它的响应式对象甚至是计算属性计算而来；而侦听属性适用于观测某个值的变化去完成一段复杂的业务逻辑

#### #9. Vue2.0 响应式数据的原理

    数据劫持 + 观察者模式
    Object.defineProperty 为对象中的每一个属性，设置 get 和 set 方法，每个声明的属性，都会有一个 专属的依赖收集器 subs，当页面使用到 某个属性时，触发 ObjectdefineProperty - get函数，页面的 watcher 就会被 放到 属性的依赖收集器 subs 中，在 数据变化时，通知更新；
    当数据改变的时候，会触发Object.defineProperty - set函数，数据会遍历自己的 依赖收集器 subs，逐个通知 watcher，视图开始更新；

```JavaScript
class Observer {
    constructor(value) {    
        this.walk(value);  
    }  
    walk(data) {
        let keys = Object.keys(data);    
        for (let i = 0; i < keys.length; i++) {      
            let key = keys[i];      
            let value = data[key];      
            defineReactive(data, key, value);
        }  
    }
}
function defineReactive(data, key, value) {  
    observe(value);       
    Object.defineProperty(data, key, {    
        get() {      
            console.log("获取值");            
            return value;    
        },    
        set(newValue) {      
            if (newValue === value) return;      
            console.log("设置值");            
            value = newValue;
        },
    });
}
export function observe(value) {    
    if (Object.prototype.toString.call(value) === "[object Object]" ||    Array.isArray(value)) {    
        return new Observer(value);  
    }
}
```

#### #10.Vue 如何检测数组变化 数据劫持

    数组考虑性能原因没有用 defineProperty 对数组的每一项进行拦截，而是选择对 7 种数组（push,shift,pop,splice,unshift,sort,reverse）方法进行重写 
    所以在 Vue 中修改数组的索引和长度是无法监控到的。需要通过以上 7 种变异方法修改数组才会触发数组对应的 watcher 进行更新

#### #11. vue3.0 用过吗，了解多少

- 响应式原理的改变 Vue3.x 使用 Proxy 取代 Vue2.x 版本的 Object.defineProperty
- 组件选项声明方式 Vue3.x 使用 Composition API setup 是 Vue3.x 新增的一个选项， 他是组件内使用 Composition API 的入口。
- 模板语法变化 slot 具名插槽语法 自定义指令 v-model 升级
- 其它方面的更改 Suspense 支持 Fragment（多个根节点）和 Protal（在 dom 其他部分渲染组建内容）组件，针对一些特殊的场景做了处理。 基于 treeshaking 优化，提供了更多的内置功能。

#### #12. Vue3.0 和 2.0 的响应式原理区别

Vue3.x 改用 Proxy 替代 Object.defineProperty。因为 Proxy 可以直接监听对象和数组的变化，并且有多达 13 种拦截方法。

```Javascript
    import { mutableHandlers } from "./baseHandlers"; 
    import { isObject } from "./util"; 
    export function reactive(target) {    
        return createReactiveObject(target, mutableHandlers);
    }
    function createReactiveObject(target, baseHandler) {  
        if (!isObject(target)) {    
            return target;
        }  
        const observed = new Proxy(target, baseHandler);  
        return observed;
    }
    const get = createGetter();
    const set = createSetter();
    function createGetter() {  
        return function get(target, key, receiver) {        
            const res = Reflect.get(target, key, receiver);  
            console.log("属性获取", key);    
            if (isObject(res)) {            
                  return reactive(res);
            }    
            return res;
        };
    }
    function createSetter() {  
        return function set(target, key, value, receiver) {    
            const oldValue = target[key];    
            const hadKey = hasOwn(target, key);    
            const result = Reflect.set(target, key, value, receiver);    
            if (!hadKey) {      
                console.log("属性新增", key, value);
            } else if (hasChanged(value, oldValue)) {      
                console.log("属性值被修改", key, value);
            }    
            return result;
        };
    }
    export const mutableHandlers = {  get,   set, };
```

#### #13. Vue 的父子组件生命周期钩子函数执行顺序

    加载渲染过程
    父 beforeCreate-> 父 created-> 父 beforeMount-> 子 beforeCreate-> 子 created-> 子 beforeMount-> 子 mounted-> 父 mounted
    子组件更新过程
    父 beforeUpdate-> 子 beforeUpdate-> 子 updated-> 父 updated
    父组件更新过程
    父 beforeUpdate-> 父 updated
    销毁过程
    父 beforeDestroy-> 子 beforeDestroy-> 子 destroyed-> 父 destroyed

#### #14. 虚拟 DOM 是什么 有什么优缺点

Vue在页面上渲染的节点，及其子节点称为“虚拟节点 (Virtual Node)”
“虚拟 DOM”是由 Vue 组件树建立起来的整个 VNode 树的称呼。
    浏览器中频繁的操作 DOM，会产生一定的性能问题，这就是虚拟 Dom 的产生原因
    优点：
    保证性能下限： 框架的虚拟 DOM 需要适配任何上层 API 可能产生的操作，它的一些 DOM 操作的实现必须是普适的，所以它的性能并不是最优的；但是比起粗暴的 DOM 操作性能要好很多，因此框架的虚拟 DOM 至少可以保证在你不需要手动优化的情况下，依然可以提供还不错的性能，即保证性能的下限；
    无需手动操作 DOM： 我们不再需要手动去操作 DOM，只需要写好 View-Model 的代码逻辑，框架会根据虚拟 DOM 和 数据双向绑定，帮我们以可预期的方式更新视图，极大提高我们的开发效率；
    跨平台： 虚拟 DOM 本质上是 JavaScript 对象, 而 DOM 与平台强相关，相比之下虚拟 DOM 可以进行更方便地跨平台操作，例如服务器渲染、weex 开发等等。
    缺点:
    无法进行极致优化： 虽然虚拟 DOM + 合理的优化，足以应对绝大部分应用的性能需求，但在一些性能要求极高的应用中虚拟 DOM 无法进行针对性的极致优化。
    首次渲染大量 DOM 时，由于多了一层虚拟 DOM 的计算，会比 innerHTML 插入慢。

#### #14. 虚拟DOM中key的作用

 key是虚拟DOM对象的标识，在更新显示时key起着极其重要的作用。
 当状态中的数据发生了变化时，Vue 会根据【新数据】生成【新的虚拟DOM】，随后 Vue 进行【新虚拟DOM】与【旧虚拟DOM】的diff比较

#### #15. 虚拟DOM实现原理

 用JavaScript对象模拟真实DOM树，对真实DOM进行抽象
 diff算法：比较两棵虚拟树的差异
 pach算法：将两个虚拟DOM对象的差异应用到真实的DOM树

##### #15.1. diff算法

    diff算法是一种通过同层的树节点进行比较的高效算法
    diff算法的目的就是找出新旧不同虚拟DOM之间的差异,使最小化的更新视图，所以 diff 算法本质上就是比较两个js对象的差异
    特点
        1. 比较只会在同层级进行，不会跨层级比较
        2. 在diff比较的构成中，循环从两边向中间比较，比较的过程中，循环从两边向中间收拢
    比较方式：diff整体策略为：深度优先，同层比较
    原理： 
    数据改变 ----触发--> setter---触发--->Dep.notify ---通知订阅者---> patch(oldvnode, newvnode
    之后判断新旧两个节点是否为同类标签，如果不是同类标签就直接替换；如果是同类标签的话，进一步执行patchVnode()方法，在这个方法内部，也是需要先判断一下新旧虚拟节点是否相同，如果相等，就直接return；如果不相等就需要分情况来比对，比对的原则就是以新虚拟节点的结果为准，分为以下几种情况：
    oldvnode和newvnode都有文本节点---执行--->用新的文本节点替换旧文本节点
    oldvnode没有子节点，newvnode有子节点---执行--->添加新的子节点
    oldvnode有子节点，newvnode没有子节点---执行--->删除旧的子节点
    oldvnode和newvnode都有子节点---执行--->updateChildren()方法
    updateChildren
    同级比对 --- 减少比对次数，可以最大化的提高比对性能

##### #15.2. 为什么vue采用异步渲染

 如果不采用异步更新，那么每次更新数据都会对当前组件进行重新渲染；所以为了性能考虑，Vue会在本轮数据更新后，再去异步更新视图。

1. 调用 notify() 方法，通知watcher 进行更新操作
2. 依次调用watcher 的 update 方法
3. 对watcher 进行去重操作（通过id），放到队列里
4. 执行完后异步清空这个队列， nextTick(flushSchedulerQueue) 进行批量更新操作

##### #15.3. Vue 的异步更新机制是如何实现的？

 Vue 的异步更新机制的核心是利用了浏览器的异步任务队列来实现的，首选微任务队列，宏任务队列次之。
 当响应式数据更新后，会调用 dep.notify 方法，通知 dep 中收集的 watcher 去执行 update 方法，watcher.update 将 watcher 自己放入一个 watcher 队列（全局的 queue 数组）。
 然后通过 nextTick 方法将一个刷新 watcher 队列的方法（flushSchedulerQueue）放入一个全局的 callbacks 数组中。
 如果此时浏览器的异步任务队列中没有一个叫 flushCallbacks 的函数，则执行 timerFunc 函数，将 flushCallbacks 函数放入异步任务队列。如果异步任务队列中已经存在 flushCallbacks 函数，等待其执行完成以后再放入下一个 flushCallbacks 函数。
 flushCallbacks 函数负责执行 callbacks 数组中的所有 flushSchedulerQueue 函数。
 flushSchedulerQueue 函数负责刷新 watcher 队列，即执行 queue 数组中每一个 watcher 的 run 方法，从而进入更新阶段，比如执行组件更新函数或者执行用户 watch 的回调函数。

#### #16. v-model 原理

    v-model 只是语法糖而已 v-on 以及 v-bind
    v-model 在内部为不同的输入元素使用不同的 property 并抛出不同的事件：
    text 和 textarea 元素使用 value property 和 input 事件；
    checkbox 和 radio 使用 checked property 和 change 事件；
    select 字段将 value 作为 prop 并将 change 作为事件。
    注意: 对于需要使用输入法（如中文、日文、韩文等）的语言，你会发现 v-model 不会在输入法组合文字过程中得到更新。
    <input v-model="sth" />      
    <input v-bind:value="sth" v-on:input="sth = $event.target.value" />
    <currency-input v-model="price"></currentcy-input>
    Vue.component('currency-input', { 
        template: `<span>   <input    ref="input"    :value="value"    @input="$emit('input', $event.target.value)"   > </span> `, 
        props: ['value']
    })

#### #17. v-for 为什么要加 key  

    如果不使用 key，Vue 会使用一种最大限度减少动态元素并且尽可能的尝试就地修改 / 复用相同类型元素的算法。key 是为 Vue 中 vnode 的唯一标记，通过这个 key，我们的 diff 操作可以更准确、更快速
    快速查找到节点，减少渲染次数，提升渲染性能

#### #18. Vue 事件绑定原理

    $on、$emit 是基于发布订阅模式的，维护一个事件中心，on 的时候将事件按名称存在事件中心里，称之为订阅者，然后 emit 将对应的事件进行发布，去执行事件中心里的对应的监听器

#### #19 vue-router是什么？有哪些组件？

 Vue.js官方的路由管理器
 <router-link>和<router-view>和<keep-alive>

#### #19.1 vue-router 路由钩子函数是什么 执行顺序是什么

    路由钩子的执行流程, 钩子函数种类有: 全局守卫、路由守卫、组件守卫
    完整的导航解析流程:
    导航被触发。
    在失活的组件里调用 beforeRouteLeave 守卫。
    调用全局的 beforeEach 守卫。
    在重用的组件里调用 beforeRouteUpdate 守卫 (2.2+)。
    在路由配置里调用 beforeEnter。
    解析异步路由组件。
    在被激活的组件里调用 beforeRouteEnter。
    调用全局的 beforeResolve 守卫 (2.5+)。
    导航被确认。
    调用全局的 afterEach 钩子。
    触发 DOM 更新。
    调用 beforeRouteEnter 守卫中传给 next 的回调函数，创建好的组件实例会作为回调函数的参数传入。

#### #19.2 vue-router 路由模式有几种？

 3种，hash、history、abstract
 hash: 使用 URL hash 值来作路由。支持所有浏览器，包括不支持 HTML5 History Api 的浏览器；
 .history : 依赖 HTML5 History API 和服务器配置。具体可以查看 HTML5 History 模式；
 abstract : 支持所有 JavaScript 运行环境，如 Node.js 服务器端。如果发现没有浏览器的 API，路由会自动强制进入这个模式.

#### #20. vue-router 动态路由是什么 有什么问题

    需要把某种模式匹配到的所有路由，全都映射到同个组件。例如，我们有一个 User 组件，对于所有 ID 各不相同的用户，都要使用这个组件来渲染。那么，我们可以在 vue-router 的路由路径中使用 “动态路径参数”(dynamic segment) 来达到这个效果：
    const User = {  template: "<div>User</div>",};
    const router = new VueRouter({  routes: [{ path: "/user/:id", component: User },  ],});
    问题: vue-router 组件复用导致路由参数失效怎么办？
    1. 通过 watch 监听路由参数再发请求
    watch: {  "$route": function(){ this.getData(this.$route.params.xxx); }}
    2. 用 key 来阻止 复用
    <router-view :key="$route.fullPath" />
动态路由的两种方式

- params：在 router 目录下的 index.js 文件中，对 path 属性加上 /:id，使用 router 对象的 params.id 获取
- query 不需要配置路由格式，使用 router 对象的 query.id 获取。

#### #21. 谈一下对 vuex 的个人理解

    vuex 是专门为 vue 提供的全局状态管理系统，用于多个组件中数据共享、数据缓存等。（无法持久化、内部核心原理是通过创造一个全局实例 new Vue）
    主要包括以下几个模块：
    1. State：定义了应用状态的数据结构，可以在这里设置默认的初始状态。
    2. Getter：允许组件从 Store 中获取数据，mapGetters 辅助函数仅仅是将 store 中的 getter 映射到局部计算属性。
    3. Mutation：是唯一更改 store 中状态的方法，且必须是同步函数。
    4. Action：用于提交 mutation，而不是直接变更状态，可以包含任意异步操作，可以整合多个mutation。
    5. Module：允许将单一的 Store 拆分为多个 store 且同时保存在单一的状态树中。
    getter 可以对 state 进行计算操作，它就是 store 的计算属性,虽然在组件内也可以做计算属性，但是 getter 可以在多组件之间复用，如果一个状态只在一个组件内使用，是可以不用 getters

##### #21.1. Vuex解决了什么问题

- 多个组件依赖于同一状态时，对于多层嵌套的组件的传参将会非常繁琐，并且对于兄弟组件间的状态传递无能为力
- 来自不同组件的行为需要变更同一状态，

##### #21.2. 什么时候使用Vuex

 如果应用够简单，最好不要使用 Vuex
 需要构建一个中大型单页应用时，使用Vuex能更好地在组件外部管理状态，当项目遇到多个组件依赖于同一状态时，来自不同组件的行为需要变更同一状态

##### #21.3. Vuex中状态存储在那里？怎么改变它

 存储在state中，改变Vuex中的状态的唯一途径就是显式地提交(commit)mutation

#### #22. Vuex 页面刷新数据丢失怎么解决

    需要做 vuex 数据持久化 一般使用本地存储的方案来保存数据 可以自己设计存储方案 也可以使用第三方插件 
    页面刷新前 window.addEventListener("beforeunload", () => {})
    推荐使用 vuex-persist 插件，它就是为 Vuex 持久化存储而生的一个插件。不需要你手动存取 storage ，而是直接将状态保存至 cookie 或者 localStorage 中

#### #23. Vuex 为什么要分模块并且加命名空间

    臃肿 
    模块: 由于使用单一状态树，应用的所有状态会集中到一个比较大的对象。当应用变得非常复杂时，store 对象就有可能变得相当臃肿。为了解决以上问题，Vuex 允许我们将 store 分割成模块（module）。每个模块拥有自己的 state、mutation、action、getter、甚至是嵌套子模块。
    命名空间：默认情况下，模块内部的 action、mutation 和 getter 是注册在全局命名空间的——这样使得多个模块能够对同一 mutation 或 action 作出响应。如果希望你的模块具有更高的封装度和复用性，你可以通过添加 namespaced: true 的方式使其成为带命名空间的模块。当模块被注册后，它的所有 getter、action 及 mutation 都会自动根据模块注册的路径调整命名。

#### #24.使用过 Vue SSR 吗？说说 SSR

    SSR 也就是服务端渲染，也就是将 Vue 在客户端把标签渲染成 HTML 的工作放在服务端完成，然后再把 html 直接返回给客户端。
    优点：
    SSR 有着更好的 SEO、并且首屏加载速度更快
    缺点： 开发条件会受到限制，服务器端渲染只支持 beforeCreate 和 created 两个钩子，当我们需要一些外部扩展库时需要特殊处理，服务端渲染应用程序也需要处于 Node.js 的运行环境。
    服务器会有更大的负载需求

#### #25. vue 中使用了哪些设计模式

1. 工厂模式 - 传入参数即可创建实例
    虚拟 DOM 根据参数的不同返回基础标签的 Vnode 和组件 Vnode
2. 单例模式 - 整个程序有且仅有一个实例
    vuex 和 vue-router 的插件注册方法 install 判断如果系统存在实例就直接返回掉
3. 发布 - 订阅模式 (vue 事件机制)
4. 观察者模式 (响应式数据原理)
5. 装饰模式: (@装饰器的用法)
6. 策略模式 策略模式指对象有某个行为, 但是在不同的场景中, 该行为有不同的实现方案 - 比如选项的合并策略

#### #26. Vue.mixin 的使用场景和原理

    在日常的开发中，我们经常会遇到在不同的组件中经常会需要用到一些相同或者相似的代码，这些代码的功能相对独立，可以通过 Vue 的 mixin 功能抽离公共的业务逻辑，原理类似 “对象的继承”，当组件初始化时会调用 mergeOptions 方法进行合并，采用策略模式针对不同的属性进行合并。当组件和混入对象含有同名选项时，这些选项将以恰当的方式进行 “合并”。

#### #27. nextTick 使用场景和原理

    nextTick 中的回调是在下次 DOM 更新循环结束之后执行的延迟回调。在修改数据之后立即使用这个方法，获取更新后的 DOM。主要思路就是采用微任务优先的方式调用异步方法去执行 nextTick 包装的方法

#### #28. keep-alive 使用场景和原理

    keep-alive 是 Vue 内置的一个组件，可以实现组件缓存，当组件切换时不会对当前组件进行卸载。
    常用的两个属性 include/exclude，允许组件有条件的进行缓存。
    两个生命周期 activated/deactivated，用来得知当前组件是否处于活跃状态。
    keep-alive 的中还运用了 LRU(最近最少使用) 算法，选择最近最久未使用的组件予以淘汰。
    LRU 的核心思想是如果数据最近被访问过，那么将来被访问的几率也更高，所以我们将命中缓存的组件 key 重新插入到 this.keys 的尾部,缓存数量达到最大值后，删除栈头数据

#### #29. Vue.set 方法原理

    在两种情况下修改数据 Vue 是不会触发视图更新的
    1. 在实例创建之后添加新的属性到实例上（给响应式对象新增属性）
    2. 直接更改数组下标来修改数组的值
    Vue.set 或者说是 $set 原理如下
    因为响应式数据 我们给对象和数组本身都增加了__ob__属性，代表的是 Observer 实例。当给对象新增不存在的属性 首先会把新的属性进行响应式跟踪 然后会触发对象__ob__的 dep 收集到的 watcher 去更新，当修改数组索引时我们调用数组本身的 splice 方法去更新数组

- 为对象添加一个新的响应式数据：调用 defineReactive 方法为对象增加响应式数据，然后执行 dep.notify 进行依赖通知，更新视图
- 为数组添加一个新的响应式数据：通过 splice 方法实现

#### #30.自定义指令

    指令本质上是装饰器，是 vue 对 HTML 元素的扩展，给 HTML 元素增加自定义功能。vue 编译 DOM 时，会找到指令对象，执行指令的相关方法。
    自定义指令有五个生命周期（也叫钩子函数），分别是 
    bind 只调用一次，指令第一次绑定到元素时调用 、
    inserted 被绑定元素插入父节点时调用 (仅保证父节点存在，但不一定已被插入文档中)、
    update 被绑定于元素所在的模板更新时调用，而无论绑定值是否变化。通过比较更新前后的绑定值，可以忽略不必要的模板更新。、
    componentUpdated 被绑定元素所在模板完成一次更新周期时调用。、
    unbind 只调用一次，指令与元素解绑时调用
    1. 在生成 ast 语法树时，遇到指令会给当前元素添加 directives 属性
    2. 通过 genDirectives 生成指令代码
    3. 在 patch 前将指令的钩子提取到 cbs 中, 在 patch 过程中调用对应的钩子
    4. 当执行指令对应钩子函数时，调用对应指令定义的方法

#### #31. Vue 修饰符

事件修饰符

```
    .stop 阻止事件继续传播
    .prevent 阻止标签默认行为
    .capture 使用事件捕获模式, 即元素自身触发的事件先在此处处理，然后才交由内部元素进行处理
    .self 只当在 event.target 是当前元素自身时触发处理函数
    .once 事件将只会触发一次
    .passive 告诉浏览器你不想阻止事件的默认行为
```

v-model 的修饰符

```
    .lazy 通过这个修饰符，转变为在 change 事件再同步
    .number 自动将用户的输入值转化为数值类型
    .trim 自动过滤用户输入的首尾空格
```

键盘事件的修饰符

```
    .enter
    .tab
    .delete (捕获 “删除” 和“退格”键)
    .esc
    .space
    .up
    .down
    .left
    .right
```

#### #32. Vue 模板编译原理

    Vue 的编译过程就是将 template 转化为 render 函数的过程 分为以下三步
    第一步是将 模板字符串 转换成 element ASTs（解析器）
    第二步是对 AST 进行静态节点标记，主要用来做虚拟DOM的渲染优化（优化器）
    第三步是 使用 element ASTs 生成 render 函数代码字符串（代码生成器）

```Javascript
export function compileToFunctions(template) {        
    let ast = parse(template);                    
    let code = generate(ast);    
    let renderFn = new Function(`with(this){return ${code}}`);  
    return renderFn;
}
```

#### #33.生命周期钩子是如何实现的

Vue 的生命周期钩子核心实现是利用发布订阅模式先把用户传入的的生命周期钩子订阅好（内部采用数组的方式存储）然后在创建组件实例的过程中会一次执行对应的钩子方法（发布）

```Javascript
export function callHook(vm, hook) {    
    const handlers = vm.$options[hook];  
    if (handlers) {    
        for (let i = 0; i < handlers.length; i++) {      
            handlers[i].call(vm);     
            
        }
    }
}

Vue.prototype._init = function (options) {  
    const vm = this;  
    vm.$options = mergeOptions(vm.constructor.options, options);  
    callHook(vm, "beforeCreate");     
    initState(vm);  
    callHook(vm, "created");   
    if (vm.$options.el) {    
        vm.$mount(vm.$options.el);  
    }
};
```

#### #34.函数式组件使用场景和原理

    1.函数式组件需要在声明组件是指定 functional:true
    2.不需要实例化，所以没有this,this通过render函数的第二个参数context来代替
    3.没有生命周期钩子函数，不能使用计算属性，watch
    4.不能通过$emit 对外暴露事件，调用事件只能通过context.listeners.click的方式调用外部传入的事件
    5.因为函数式组件是没有实例化的，所以在外部通过ref去引用组件时，实际引用的是HTMLElement
    6.函数式组件的props可以不用显示声明，所以没有在props里面声明的属性都会被自动隐式解析为prop,而普通组件所有未声明的属性都解析到$attrs里面，并自动挂载到组件根元素上面(可以通过inheritAttrs属性禁止)
    优点 1. 由于函数式组件不需要实例化，无状态，没有生命周期，所以渲染性能要好于普通组件 2. 函数式组件结构比较简单，代码结构更清晰

#### #35. vue-router 中常用的路由模式实现原理吗

    hash 模式:
        location.hash 的值实际就是 URL 中 #后面的东西 它的特点在于：hash 虽然出现 URL 中，但不会被包含在 HTTP 请求中，对后端完全没有影响，因此改变 hash 不会重新加载页面。
        可以为 hash 的改变添加监听事件
        window.addEventListener("hashchange", funcRef, false);
        每一次改变 hash（window.location.hash），都会在浏览器的访问历史中增加一个记录利用 hash 的以上特点，就可以来实现前端路由 “更新视图但不重新请求页面” 的功能了
        特点：兼容性好但是不美观
    history 模式
        利用了 HTML5 History Interface 中新增的 pushState() 和 replaceState() 方法.
        这两个方法应用于浏览器的历史记录站，在当前已有的 back、forward、go 的基础之上，它们提供了对历史记录进行修改的功能。这两个方法有个共同的特点：当调用他们修改浏览器历史记录栈后，虽然当前 URL 改变了，但浏览器不会刷新页面，这就为单页应用前端路由 “更新视图但不重新请求页面” 提供了基础。
        特点：虽然美观，但是刷新会出现 404 需要后端进行配置

##### #35.1 hash与history的区别

 直观区别：hash模式url带#号，history模式不带#号。
 如果后台没有做相应配置,history页面会在再次刷新的时候,报404错误;

#### #36. uniapp与Vue的对比

    用着vue的指令和小程序的组件和API
    uniapp的配置文件、入口文件、主组件、页面管理部分
        pages.json
            配置文件，全局页面路径配置，应用的状态栏、导航条、标题、窗口背景色设置等
        main.js
            入口文件，主要作用是初始化vue实例、定义全局组件、使用需要的插件如 vuex，注意uniapp无法使用vue-router，路由须在pages.json中进行配置。如果开发者坚持使用vue-router，可以在插件市场找到转换插件。
        App.vue
            是uni-app的主组件，所有页面都是在App.vue下进行切换的，是页面入口文件。但App.vue本身不是页面，这里不能编写视图元素。除此之外，**应用生命周期仅可在App.vue中监听**，在页面监听无效。
        pages
            页面管理部分用于存放页面或者组件
        manifest.json
            文件是应用的配置文件，用于指定应用的名称、图标、权限等。HBuilderX 创建的工程此文件在根目录，CLI 创建的工程此文件在 src 目录。
        package.json
            配置扩展。
        跨端适配— 条件编译
            以 #ifdef 或 #ifndef 加 %平台名称% 开头，以 #endif 结尾。
        Uniapp 中常用的指令语句
            v-for：循环渲染 （注意加：key）
            v-if ：控制元素的删除添加       
            v-show：控制元素的显示隐藏
            v-model：双向数据绑定
            v-on：事件绑定（简写@）
            v-bind：属性绑定（简写：）
        Uniapp中的本地缓存
            同步存储：uni.setStorageSync，获取：uni.getStorageSync
            异步存储：uni.setStorage，获取：uni.getStorage
        uni-app全局变量怎么定义，怎么获取
            在app.js中设置globalData设置，在需要的地方的js文件
            let app=getApp()
            app.globalData.数据

#### #37. Vue登录权限

    登录 -> 获取用户对应的role 
    permission.js中配置路由守卫 beforeEach判断是否登录，是否已经获取权限表，未获取则获取权限表并匹配前端路由(store/user/permission) addRoutes组成路由表
    axios 请求拦截器
    request 拦截器 添加token
    response 拦截器 处理状态码

#### #38. axios是什么？怎么使用它，怎么[解决跨域](https://so.csdn.net/so/search?q=解决跨域&spm=1001.2101.3001.7020)？

- Axios 是一个基于 promise 的 HTTP 库，可以用在浏览器和 node.js 中。前端最流行的 ajax 请求库，
- react/vue 官方都推荐使用 axios 发 ajax 请求

```
基于 promise 的异步 ajax 请求库，支持promise所有的API
浏览器端/node 端都可以使用，浏览器中创建XMLHttpRequests
支持请求／响应拦截器
支持请求取消
可以转换请求数据和响应数据，并对响应回来的内容自动转换成 JSON类型的数据
批量发送多个请求
安全性更高，客户端支持防御 XSRF，就是让你的每个请求都带一个从cookie中拿到的key, 根据浏览器同源策略，假冒的网站是拿不到你cookie中得key的，这样，后台就可以轻松辨别出这个请求是否是用户在假冒网站上的误导输入，从而采取正确的策略。

## 常用语法
axios(config): 通用/最本质的发任意类型请求的方式
axios(url[, config]): 可以只指定 url 发 get 请求
axios.request(config): 等同于 axios(config)
axios.get(url, config): 发 get 请求
axios.delete(url, config): 发 delete 请求
axios.post(url, data, config): 发 post 请求
axios.put(url, data, config): 发 put 请求
axios.defaults.xxx: 请求的默认全局配置
axios.interceptors.request.use(): 添加请求拦截器
axios.interceptors.response.use(): 添加响应拦截器
axios.create([config]): 创建一个新的 axios(它没有下面的功能)
axios.Cancel(): 用于创建取消请求的错误对象
axios.CancelToken(): 用于创建取消请求的 token 对象
axios.isCancel(): 是否是一个取消请求的错误
axios.all(promises): 用于批量执行多个异步请求
axios.spread(): 用来指定接收所有成功数据的回调函数的方法
```

#### #39. 什么阶段（生命周期）才能访问操作dom？为什么

```
 在钩子函数mounted()中才能开始访问操作dom，因为在mounted()生命周期前，dom刚好渲染好，但还未挂载到页面，如果在这之前进行dom操作，将找不到dom节点
```

#### #40. 什么阶段（生命周期）才能访问操作dom？为什么

 在钩子函数mounted()中才能开始访问操作dom，因为在mounted()生命周期前，dom刚好渲染好，但还未挂载到页面，如果在这之前进行dom操作，将找不到dom节点

#### #41. scoped 样式隔离

 Vue在创建组件的时候，会给组件生成唯一的id值，当style标签给scoped属性时，会给组件的html节点都加上这个id值标识，如data-v4d5aa038，然后样式表会根据这id值标识去匹配样式，从而实现样式隔离

#### #42. get POST的区别

 get参数通过url传递，post放在request body中
 post比get更安全，因为get参数都暴漏在url中，所以不能用来传递敏感信息
 get请求只能进行url编码，而post支持多种编码方式
 get请求会浏览器主动cache，而post支持多种编码方式
 get请求参数会被完整保留在浏览器历史记录里，而post中的参数不会被保留
 get和post本质上就是TCP链接，并无差别，但由于HTTP的规定和浏览器/服务器的限制，导致他们在应用过程中体现出一些不同
 get请求参数长度由浏览器厂商进行了限制

#### #43. Cookie 和 seesion 的区别

 cookie数据存放在客户的浏览器上，session存放在服务器
 cookie不是很安全，别人可以分析存放在本地的COOKIE进行COOKIE欺骗，考虑安全应该使用seesion
 session会在一定事件内保存在服务器上，当访问增多，会比较占用你的服务器的性能，考虑到减轻服务器性能方面，应当使用cookie
 单个cookie保存的数据不能超过4k，很多浏览器都限制一个站点最多保存20个cookie

#### #44. 跨域的方法

安全机制，采用同源策略，**域名，协议，端口号一致** 的才可以进行访问;
如果是协议和端口造成的跨域问题“前台”是无能为力的，
 jsonp：是通过script标签的src属性来实现跨域的，通过src传过去一个函数，把数据放在函数的实参调用就可以拿到数据，由于是用src的链接，所以jsonp只支持get方式
 cors：改变请求头信息，客户端加：Origin:地址。服务器：Access-Control-Allow-Origin:地址.支持IE10以上。
 webpack:devServer里配置proxy:{api:'地址'};
 nginx反向代理

#### #45. Vue-loader

 作用：解析和转换.vue文件。提取出其中的逻辑代码 script,样式代码style,以及HTML 模板template，再分别把他们交给对应的loader去处理
 用途：js可以写es6，style样式可以 scss或less，template可以加js

#### #46. v-el

 提供一个在页面上以存在的DOM元素作为Vue实例的挂载目标，可以是CSS选择器，也可以是一个HTMLElement实例

#### #47. 首屏加载优化

 把不常改变的库放到index.html中，通过cdn引入
 将Vue通过cdn引入，config.js中 externals进行配置，将项目中使用import引入Vue,Vue-router axios 等去掉
 vue路由的懒加载
 vue组件尽量不要全局引入
 使用轻量级的工具库
 Nginx 开启 gzip

#### #48. vue.cli项目中src目录每个文件夹和文件的用法

 assets 静态资源；
 components 组件；
 router是定义路由相关的配置
 view 视图
 app.vue是一个应用主组件
 main.js是入口文件

#### #49. 原型与原型链，原型链的作用有哪些？

原型对象 存放实例对象的公有属性和公有方法。
**构造函数的 prototype 属性指向 原型对象，原型对象的 constructor指向该构造函数。**
通过new创建的实例对象的 **proto** 指向 原型对象即 Person.prototype
function Person(name, age) {}
let per1 = new Person();
per1.**proto** === Person.prototype

Person === Person.prototype.constructor
 在JS中，我们所创建的每一个函数自带一个属性prototype，我们就把prototype称为原型.prototype它指向了一个对象，你可以把prototype想象成一个指针,prototype指向的这个对象我们就称之为原型对象.原型对象prototype里面有一个constructor属性，它指向了Person构造函数
 prototype的维度是函数，而__proto__的维度是对象。__proto__是每个对象都有的属性，我们通常把它称为"隐式原型"，把prototype称为"显式原型"。

```javaScript
 function Person(name) {
  }
  // 在函数的原型上添加变量和方法
  Person.prototype.name = "小猪课堂";
  Person.prototype.say = function () {
    console.log("你好小猪课堂");
  }


  let obj = new Person();
  console.log(obj.name); // 小猪课堂
  obj.say(); // 你好小猪课堂
  console.log(obj.__proto__ === Person.prototype) // true
  obj对象想要获取name或者say，首先判断自己的属性当中有没有，如果没有找到，那么就在__proto__属性中去找，而这个时候__proto__与Person的prototype是相等的，也就是__proto__指向Person，那么便可以找到name和say。
   
   所有函数都可以看做是Function()的实例
   console.log(Person.constructor === Function); // true
 console.log(Object.constructor === Function); // true
 console.log(Function.constructor === Function); // true
 
 console.log(Person.__proto__ === Function.prototype); // true
 console.log(Object.__proto__ === Function.prototype); // true
 console.log(Function.__proto__ === Function.prototype); // true
  
```

##### #49.1. 构造函数与普通函数的区别

 命名方式
     构造函数名称通常首字母要大写
     普通函数名称首字母要小写, 使用驼峰命名方式。
  this的指向问题
     构造函数的this会绑定到创建的对象实例上;
     普通函数的this则属于此函数的调用者;
   调用方式的不同
     构造函数需要使用new运算符调用, 如果构造函数没有参数可以省略小括号, 比如new Object；
     普通函数的调用不需要new 运算符, 而且必须有小括号。比如: function(){};

#### #50. 普通函数，箭头函数的区别

 箭头函数没有原型，原型是undefined
 箭头函数this指向全局对象，而函数指向引用对象
 call，apply，bind方法改变不了箭头函数的指向

#### #51. Vue和JQuery的区别在哪？为什么放弃JQuery用Vue？

 JQuery是直接操作DOM，Vue不直接操作DOM，Vue的数据与视图是分开的，Vue只需要操作数据就行了
 在操作DOM频繁的场景里，JQuery的操作DOM行为是频繁的，而Vue利用虚拟DOM的技术，大大提高了更新DOM时的性能
 Vue中不提倡直接操作DOM，开发者只需要把大部分精力放在 数据层面上
 Vue集成的一些库，大大提高开发效率，比如Vuex，Router等

#### #52. slot插槽

 slot插槽，可以理解为slot在组件模板中提前占据了位置，当复用组件时，使用相关的slot标签时，标签里的内容就会自动替换组件模板中对应slot标签的位置，作为承载分发内容的出口
 主要作用是：复用和扩展组件，做一些定制化组件的处理
 匿名插槽：只能有一个
 实名插槽：可以有多个，在使用时必须使用name属性来标识
 作用域插槽：父组件获取子组件slot中携带的数据
原理

1. 父组件先解析，把插槽当作子组件的子元素处理；
2. 子组件解析，slot作为一个占位符，会被解析成一个函数；
3. 函数传入参数执行，拿到第一步解析得到的插槽节点，并返回；

#### #53. Vue的两个核心点

- 数据驱动 ViewModel 保证数据和视图的一致性
- 组件系统 应用类UI可以看作全部都是由组件树构成的

#### #53. map与set的区别

- Set 是一种叫做集合的数据结构，Map 是一种叫做字典的数据结构。
- set是以 [value]的形式储存元素，字典 是以 [key：value] 的形式储存

#### #54. 页面渲染为什么使用 key？

当有相同标签名的元素切换时，为避免渲染问题，需要通过 key 特性设置唯一的值来标记以让 Vue 区分它们，否则 Vue 为了效率只会替换不同标签元素

#### #55. setup组合api的优点

- 没有this，降低组件的耦合性，使组件复用，开发修改团队合作更加方便
- 写更加直观，接近原生js
- 按需导入方式，节省资源

#### #56. 数据层级结构太深

- $forceUpdate
- $set
- 绑定key属性

#### #57. Vue初始化过程中（new Vue(options)）都做了什么？

- 处理组件配置项；初始化根组件时进行了选项合并操作，将全局配置合并到根组件的局部配置上；初始化每个子组件时做了一些性能优化，将组件配置对象上的一些深层次属性放到 vm.$options 选项中，以提高代码的执行效率；
- 初始化组件实例的关系属性，比如 p a r e n t 、 parent、parent、children、r o o t 、 root、root、refs 等
- 处理自定义事件
- 调用 beforeCreate 钩子函数
- 初始化组件的 inject 配置项，得到 ret[key] = val 形式的配置对象，然后对该配置对象进行响应式处理，并代理每个 key 到 vm 实例上
- 数据响应式，处理 props、methods、data、computed、watch 等选项
- 解析组件配置项上的 provide 对象，将其挂载到 vm._provided 属性上
- 调用 created 钩子函数
- 如果发现配置项上有 el 选项，则自动调用 $mount 方法，也就是说有了 el 选项，就不需要再手动调用 $mount 方法，反之，没提供 el 选项则必须调用 $mount
- 接下来则进入挂载阶段

#### #58. 指令 directive

 按钮权限
钩子函数

- bind 只调用一次，指令第一次绑定到元素时调用，在这里可以进行一次性的初始化设置 bind时父节点为null，bind是在dom书绘制前调用
- inserted 被绑定元素插入父节点时调用（仅保证父节点存在，但不一定被插入文档中）
- update 所在组件的vnode更新时调用，但是可能发生在其子vnode更新之前，指令的值可能发生了变化，也可能没有
- componentUpdated  指令所在组件的vnode及其子vnode全部更新后调用
- unbind 只调用一次，指令与元素解绑时调用
参数
- el 指令所绑定的元素，可以用来直接操作 DOM
- binding 一个对象，包含以下属性：name: 指令名、value: 指令的绑定值、oldValue: 指令绑定的前一个值、expression: 绑定值的字符串形式、arg: 传给指令的参数、modifiers: 一个包含修饰符的对象
- vnode Vue 编译生成的虚拟节点
- oldVnode 上一个虚拟节点，仅在 update 和 componentUpdated 钩子中可用

#### #59. Vue.use

 作用：用来注册使用插件或者组件的方法。
 1 检测组件是否注册，避免重复注册；
 2 处理入参，将第一个参数之后的参数归集，并在首部插入 this 上下文；
 3 第一个参数是对象就执行对象里面的install方法，是方法则直接执行这个方法，然后缓存；
 4 返回；

#### #60. Vue 组件渲染和更新的过程

- 渲染

1. 把模板解析为render函数
2. 触发响应式，监听data属性getter setter
3. 执行render函数，生成vnode，patch（elem，vnode）

- 更新

1. 修改data，触发setter（此前在getter中已被监听）
2. 重新执行render函数，生成newVnode
3. patch（vnode，newVnode） patch(对比 更新节点)

#### #61. Vue过滤器

 vue3中已移除
 常用于文本的格式化，过滤器可以用到两个地方：插值表达式和v-bind属性绑定
 过滤器应该添加在JavaScript表达式的尾部，由“管道符”进行调用。
 <p>{{ msssage | capitalize }}</p>
 <div v-bind:id="rawId | formatId"></div>
 过滤器函数中一定要有返回值
 过滤器要定义到filters这个节点之下，本质是一个函数
 过滤器可以串联调用
 过滤器可以传参 {{ msssage | capitalize(a1, a2) }}  filter: { capitalize(msg, a1, a2) {}  }

#### #62. vue中编写可复用的组件

 1. 在 Vue 组件中，状态称为 props，事件称为 events，片段称为 slots。
 Props 允许外部环境传递数据给组件
 Events 允许组件触发外部环境的副作用 $emit
 Slots 允许外部环境将额外的内容组合在组件中。
 组件的构成部分也可以理解为组件对外的接口。良好的可复用组件应当定义一个清晰的公开接口。
 2.组件间通信
  在 Vue.js 中，父子组件的关系可以总结为 props down, events up 。父组件通过 props 向下传递数据给子组件，子组件通过 events 给父组件发送消息。
 3.命名 跟业务无关。应该依据组件的功能为组件命名。
 4.业务数据无关
  可复用组件只负责 UI 上的展示和一些交互以及动画，如何获取数据跟它无关，因此不要在组件内部去获取数据，以及任何与服务端打交道的操作。可复用组件只实现 UI 相关的功能。
 5.组件职责
  约束好组件的职责，能让组件更好地解耦，知道什么功能是组件实现的，什么功能不需要实现。
  组件可以分为通用组件（可复用组件）和业务组件（一次性组件）。
        1.可复用组件实现通用的功能（不会因组件使用的位置、场景而变化）：
        UI 的展示
        与用户的交互（事件）
        动画效果
        2.业务组件实现偏业务化的功能：
        获取数据
        和 vuex 相关的操作
        埋点
        引用可复用组件
      可复用组件应尽量减少对外部条件的依赖，所有与 vuex 相关的操作都不应在可复用组件中出现。组件应当避免对其父组件的依赖，不要通过 this.parent来操作父组件的示例。父组件也不要通过 this.parent 来操作父组件的示例。父组件也不要通过 this.parent来操作父组件的示例。父组件也不要通过this.children 来引用子组件的示例，而是通过子组件的接口与之交互。
 6. 命名空间
  可复用组件除了定义一个清晰的公开接口外，还需要有命名空间。 modules,命名空间可以避免与浏览器保留标签和其他组件的冲突。特别是当项目引用外部 UI 组件或组件迁移到其他项目时，命名空间可以避免很多命名冲突的问题。
 7.上下文无关
  可复用组件应尽量减少对外部条件的依赖。没有特别需求且单个组件不至于过重的的前提下，不要把一个有独立功能的组件拆分成若干个小组件。
 8.数据扁平化
  每个 prop 应该是一个简单类型的数据。这样做有下列几点好处：
   1.组件接口清晰
   2.props 校验方便
   3.当服务端返回的对象中的 key 名称与组件接口不一样时，不需要重新构造一个对象
 9.使用自定义 watch 优化 DOM 操作  
  在开发中，有些逻辑无法使用数据绑定
 10.项目骨架
  单组件不异过重，组件在功能独立的前提下应该尽量简单，越简单的组件可复用性越强。当你实现组件的代码，不包括CSS，有好几百行了（这个大小视业务而定），那么就要考虑拆分成更小的组件。

#### #63.父组件异步获取动态数据传递给子组件

问题：    由于父组件中的数据是异步获取的，而子组件在一开始便会渲染，所以会造成子组件渲染完成后，数据还未获取到的情况
解决方案：在子组件渲染前，判断父组件数据是否获取完成，数据获取完成后再渲染子组件. v-if判断数据是否获取到

#### #64.完整的说下从url解析到显示页面过程，结合项目中说

1. 首先浏览器主进程接管，开了一个下载线程。
2. 然后进行HTTP请求（DNS查询、IP寻址等等），中间会有三次握手，等待响应，开始下载响应报文。
3. 将下载完的内容转交给Renderer进程管理。
4. Renderer进程开始解析css rule tree和dom tree，这两个过程是并行的，所以一般我会把link标签放在页面顶部。
5. 解析绘制过程中，当浏览器遇到link标签或者script、img等标签，浏览器会去下载这些内容，遇到时候缓存的使用缓存，不适用缓存的重新下载资源。
6. css rule tree和dom tree生成完了之后，开始合成render tree，这个时候浏览器会进行layout，开始计算每一个节点的位置，然后进行绘制。
7. 绘制结束后，关闭TCP连接，过程有四次挥手

#### #99. Vue3

##### #1.Vue3.0 里为什么要用 Proxy API替代 defineProperty API？

- defineProperty API 的局限性最大原因是它只能针对单例属性做监听。

 Vue2.x中的响应式实现正是基于defineProperty中的descriptor，对 data 中的属性做了遍历 + 递归，为每个属性设置了 getter、setter。这也就是为什么 Vue 只能对 data 中预定义过的属性做出响应的原因。

- Proxy API的监听是针对一个对象的，那么对这个对象的所有操作会进入监听操作， 这就完全可以代理所有属性，将会带来很大的性能提升和更优的代码。

 Proxy 可以理解成，在目标对象之前架设一层“拦截”，外界对该对象的访问，都必须先通过这层拦截，因此提供了一种机制，可以对外界的访问进行过滤和改写

- 响应式是惰性的。

 在 Vue.js 2.x 中，对于一个深层属性嵌套的对象，要劫持它内部深层次的变化，就需要递归遍历这个对象，执行 Object.defineProperty 把每一层对象数据都变成响应式的，这无疑会有很大的性能消耗。
 在 Vue.js 3.0 中，使用 Proxy API 并不能监听到对象内部深层次的属性变化，因此它的处理方式是在 getter 中去递归响应式，这样的好处是真正访问到的内部属性才会变成响应式，简单的可以说是按需实现响应式，减少性能消耗。

##### #2.Proxy 与 Object.defineProperty 优劣对比

1.Proxy 可以直接监听对象而非属性；
2.Proxy 可以直接监听数组的变化；
3.Proxy 有多达 13 种拦截方法,不限于 apply、ownKeys、deleteProperty、has 等等是 Object.defineProperty 不具备的；
4.Proxy 返回的是一个新对象,我们可以只操作新的对象达到目的,而 Object.defineProperty 只能遍历对象属性直接修改；
5.Proxy 作为新标准将受到浏览器厂商重点持续的性能优化，也就是传说中的新标准的性能红利；
6.Object.defineProperty 的优势如下:
兼容性好，支持 IE9，而 Proxy 的存在浏览器兼容性问题,而且无法用 polyfill 磨平，因此 Vue 的作者才声明需要等到下个大版本( 3.0 )才能用 Proxy 重写。
