### ref : 深层响应

```typescript
// ref取值或赋值的时候要加 .value
let num = ref(0);
num.value = 1;

let form = ref({age: 18});
form.value.age = 24;

let arr = ref([]);
arr.value.push(1);
import { ref, isRef, shallowRef, tiggerRef, customRef } from 'vue';
// 泛型
type U = { name: string };
const user = ref<u>({ name: 'zhang' }); // ref<U>()

// Ref
import type { Ref } from 'vue';
const dog:Ref<U> = ref({ name: 'dahuang' });

// --------------------------------- //
// isRef 判断是否是ref对象 返回 Boolean
cosnt isRefFlag = isRef(user);


// --------------------------------- //
// shallowRef 浅层响应 只能.value整个赋值 不能对对象中的属性赋值
/*
	ref , shallowRef不能同时使用。否则 shallowRef会受到ref的影响，造成shallowRef视图的更新。 
	因为ref底层更新逻辑会调用 triggerRef 函数。
*/
const cat = shallowRef({ name: '花点' });
const change = () => {
    cat.value.name = '小花';
    console.log(cat); // 值改变了
    // <div> shallowRef: {{ cat }}  </div> 视图不更新
    
    cat.value = { name: '大花' }; // 视图改变
    
    // triggerRef 更新 shallowRef 创建的对象 视图将更新
    triggerRef(cat); // 小花 视图将改变
}

// --------------------------------- //
// 自定义一个ref 
function settingRef<T>(value: T) {
    return settingRef((track, tigger) => {
        return {
            get() {
                track(); // 收集依赖
                return value;
            }
            set(newValue) {
                console.log('触发修改');
                value = newValue;
                trgger(); // 触发依赖
            }
        }
    })
}
// 使用方法
// script
const obj = settingRef<string>('Fish');
// 视图中
{{ obj }}
//修改
obj.value = '修改'

// --------------------------------- //
// ref 获取 dom 元素
<div ref="fetchTest">{{ user }}</div>
const fetchTest = ref<HTMLDivElement>();
fetchTest.value?.innerText

/*
ref与reactive如何选择
使用 ref：基础类型值(String，Number，Boolean，Symbol) 或单值对象【即：只有一个属性值的对象】(如：{ count: 1 })

使用 reactive：引用类型值(Object、Array、Map、Set、WeakMap、WeakSet)
	
*/
```

###  reactive : 深层响应

```typescript
// !##!
let form = reactive('fish'); // 不能使用string类型， 报错
let form = reactive({name:'Fish',age:18});    // 正确表示
type U = { name: string, age: number };
let form = reactive(U)({
    name: 'fish',
    age: 18
});
form.age = 24;
// 数组
let list = reactive<string[]>([])
const add = () => {
    list.push('hello')
}
// 修改数组 1 
let res = ['vue', 'typescript', 'nestjs', 'vite', 'pinia'] // 错误 覆盖 丢失响应性
list.push(...res)
// 2
将数组变为reactive 对象的一个属性后直接赋值

// --------------------------------- //
readyonly 只读属性
// 接受一个对象 (不论是响应式还是普通的) 或是一个 ref，返回一个原值的只读代理。
// 只读代理是深层的：对任何嵌套属性的访问都将是只读的, 浅层只读代理 shallowReadonly()
// readonly 属性强制赋值不改变；如果原始对象变化，则改变
let obj = reactvie({name:'Fish'})
const read = readonly(obj)
read.name = 'Fisher'    // 无法分配到 "name" ， 因为它是只读属性。
obj.name = 'Fisher'    // 则，obj、read 都将被改变
// 用来做响应性追踪 
watchEffect(() => {
	// 因为被 readonly 代理后的对象自身无法被更改 只有当 原始对象变化时才变化。
})



/*
	shallowReactive 只有根部属性是响应式的 
	shallowReadonly 只有根部属性是只读的
*/
// --------------------------------- //
shallowReactive 浅层作用  
// 只有根级别的属性是响应式的,  ref 的属性不会被自动解包
const state = shallowReactive({
  foo: 1,
  nested: {
    bar: 2
  }
})
// 更改状态自身的属性是响应式的
sate.foo++;
isReactive(state.nested);  // false
// 不是响应式的
state.nested.bar++;

// --------------------------------- //
shallowReadonly readonly() 的浅层作用形式 
//只有根层级的属性变为了只读
const state = shallowReadonly({
  foo: 1,
  nested: {
    bar: 2
  }
})
// 更改状态自身的属性会失败
state.foo++
// ...但可以更改下层嵌套对象
isReadonly(state.nested) // false
// 这是可以通过的
state.nested.bar++

// --------------------------------- //


// --------------------------------- //

```

### toRef

```typescript
// 针对一个响应式对象（reactive 封装）的 prop（属性）创建一个ref，且保持响应式
// 两者 保持引用关系。
// 非响应式对象使用toRef视图无变化

// 从非函数的值中创建普通的 ref  
toRef(1) // 等同于 ref(1)

// --------------------------------- //
let person = reactive({
	name:'张三',
    age:20,
    job:{
    	one:{
        	salary:20
        }
    }
});
// 会与源属性同步
let name = toRef(person, 'name');
name.value = '张四';
console.log(person.name) // 张四

//  更改源属性也会更新该 ref
person.name = '张五'
console.log(name.value) // 张五
// v3.3+
let age = toRef(() => { person.age });

// 跟ref传入数值后生成的响应式对象不同
const ageRef = ref(person.age);
// 不会与 person.age 保持同步，接收到的是一个纯数值 
```
### toRefs
```typescript
// 将响应式对象（reactive封装）转成普通对象
// 对象的每个属性 Prop 都是对应的ref
// 保持 引用关系 修改会同步

// 解构reactive对象时，使用toRefs，直接解构丢失响应性
// toRefs接收一个对象作为参数，遍历reactive对象的所有属性，使其成为ref对象，然后循环调用toRef
const obj = reactvie({name:'Fish',age:18})
let { name , age } = toRefs(obj)
// 调用时只会为源对象上可以枚举的属性创建 ref。如果要为可能还不存在的属性创建 ref，请改用 toRef
```
### toRaw

```typescript
// 将响应式对象转化为普通对象。使用场景：不想改变视图时使用
const obj = reactive({ name: '张三', age:18 });
const res = toRaw(obj);
```
### toValue 3.3+

```typescript
// 将值、refs 或 getters 规范化为值
// 如果参数是一个 getter，它将会被调用并且返回它的返回值。
	toValue(1) //       --> 1
	toValue(ref(1)) //  --> 1
	toValue(() => 1) // --> 1
```

- isRef()  检查某个值是否是 ref 
- unref() 是ref返回 obj.value 否则返回obj本身  val = isRef(val) ? val.value : val 语法糖
- isProxy() 检查一个对象是否是由 reactive()、readonly()、shallowReactive() 或 shallowReadonly() 创建的代理 返回 Boolean
- isReactive()  检查一个对象是否由 reactive()或者 shallowReactive() 创建的代理 返回 Boolean
- isReadonly() 检查传入的值是否为只读对象。只读对象的属性可以更改,但不能直接修改该对象  readonly() 和 shallowReadonly() 创建的代理都是只读的 返回 Boolean



