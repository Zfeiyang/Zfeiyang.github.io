import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.ca2520f5.js";const D=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"2023/ref-reacitive-toRef-toRefs-toRaw.md","filePath":"2023/ref-reacitive-toRef-toRefs-toRaw.md"}'),p={name:"2023/ref-reacitive-toRef-toRefs-toRaw.md"},o=l(`<h3 id="ref-深层响应" tabindex="-1">ref : 深层响应 <a class="header-anchor" href="#ref-深层响应" aria-label="Permalink to &quot;ref : 深层响应&quot;">​</a></h3><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// ref取值或赋值的时候要加 .value</span></span>
<span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> num </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ref</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">num.value </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> form </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ref</span><span style="color:#E1E4E8;">({age: </span><span style="color:#79B8FF;">18</span><span style="color:#E1E4E8;">});</span></span>
<span class="line"><span style="color:#E1E4E8;">form.value.age </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">24</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> arr </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ref</span><span style="color:#E1E4E8;">([]);</span></span>
<span class="line"><span style="color:#E1E4E8;">arr.value.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { ref, isRef, shallowRef, tiggerRef, customRef } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;vue&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#6A737D;">// 泛型</span></span>
<span class="line"><span style="color:#F97583;">type</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">U</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> { </span><span style="color:#FFAB70;">name</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span><span style="color:#E1E4E8;"> };</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">user</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ref</span><span style="color:#E1E4E8;">&lt;</span><span style="color:#B392F0;">u</span><span style="color:#E1E4E8;">&gt;({ name: </span><span style="color:#9ECBFF;">&#39;zhang&#39;</span><span style="color:#E1E4E8;"> }); </span><span style="color:#6A737D;">// ref&lt;U&gt;()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// Ref</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">type</span><span style="color:#E1E4E8;"> { Ref } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;vue&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">dog</span><span style="color:#F97583;">:</span><span style="color:#B392F0;">Ref</span><span style="color:#E1E4E8;">&lt;</span><span style="color:#B392F0;">U</span><span style="color:#E1E4E8;">&gt; </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ref</span><span style="color:#E1E4E8;">({ name: </span><span style="color:#9ECBFF;">&#39;dahuang&#39;</span><span style="color:#E1E4E8;"> });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// --------------------------------- //</span></span>
<span class="line"><span style="color:#6A737D;">// isRef 判断是否是ref对象 返回 Boolean</span></span>
<span class="line"><span style="color:#E1E4E8;">cosnt isRefFlag </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">isRef</span><span style="color:#E1E4E8;">(user);</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// --------------------------------- //</span></span>
<span class="line"><span style="color:#6A737D;">// shallowRef 浅层响应 只能.value整个赋值 不能对对象中的属性赋值</span></span>
<span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;">	ref , shallowRef不能同时使用。否则 shallowRef会受到ref的影响，造成shallowRef视图的更新。 </span></span>
<span class="line"><span style="color:#6A737D;">	因为ref底层更新逻辑会调用 triggerRef 函数。</span></span>
<span class="line"><span style="color:#6A737D;">*/</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">cat</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">shallowRef</span><span style="color:#E1E4E8;">({ name: </span><span style="color:#9ECBFF;">&#39;花点&#39;</span><span style="color:#E1E4E8;"> });</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">change</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    cat.value.name </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;小花&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(cat); </span><span style="color:#6A737D;">// 值改变了</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// &lt;div&gt; shallowRef: {{ cat }}  &lt;/div&gt; 视图不更新</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#E1E4E8;">    cat.value </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> { name: </span><span style="color:#9ECBFF;">&#39;大花&#39;</span><span style="color:#E1E4E8;"> }; </span><span style="color:#6A737D;">// 视图改变</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// triggerRef 更新 shallowRef 创建的对象 视图将更新</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">triggerRef</span><span style="color:#E1E4E8;">(cat); </span><span style="color:#6A737D;">// 小花 视图将改变</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// --------------------------------- //</span></span>
<span class="line"><span style="color:#6A737D;">// 自定义一个ref </span></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">settingRef</span><span style="color:#E1E4E8;">&lt;</span><span style="color:#B392F0;">T</span><span style="color:#E1E4E8;">&gt;(</span><span style="color:#FFAB70;">value</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">T</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">settingRef</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">track</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">tigger</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#B392F0;">track</span><span style="color:#E1E4E8;">(); </span><span style="color:#6A737D;">// 收集依赖</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> value;</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">newValue</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">                console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;触发修改&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">                value </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> newValue;</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#B392F0;">trgger</span><span style="color:#E1E4E8;">(); </span><span style="color:#6A737D;">// 触发依赖</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    })</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#6A737D;">// 使用方法</span></span>
<span class="line"><span style="color:#6A737D;">// script</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">obj</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">settingRef</span><span style="color:#E1E4E8;">&lt;</span><span style="color:#79B8FF;">string</span><span style="color:#E1E4E8;">&gt;(</span><span style="color:#9ECBFF;">&#39;Fish&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#6A737D;">// 视图中</span></span>
<span class="line"><span style="color:#E1E4E8;">{{ obj }}</span></span>
<span class="line"><span style="color:#6A737D;">//修改</span></span>
<span class="line"><span style="color:#E1E4E8;">obj.value </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;修改&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// --------------------------------- //</span></span>
<span class="line"><span style="color:#6A737D;">// ref 获取 dom 元素</span></span>
<span class="line"><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;">div ref</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;fetchTest&quot;</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;">{{ user }}</span><span style="color:#F97583;">&lt;/</span><span style="color:#E1E4E8;">div</span><span style="color:#F97583;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">fetchTest</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ref</span><span style="color:#E1E4E8;">&lt;</span><span style="color:#B392F0;">HTMLDivElement</span><span style="color:#E1E4E8;">&gt;();</span></span>
<span class="line"><span style="color:#E1E4E8;">fetchTest.value?.innerText</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;">ref与reactive如何选择</span></span>
<span class="line"><span style="color:#6A737D;">使用 ref：基础类型值(String，Number，Boolean，Symbol) 或单值对象【即：只有一个属性值的对象】(如：{ count: 1 })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">使用 reactive：引用类型值(Object、Array、Map、Set、WeakMap、WeakSet)</span></span>
<span class="line"><span style="color:#6A737D;">	</span></span>
<span class="line"><span style="color:#6A737D;">*/</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// ref取值或赋值的时候要加 .value</span></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> num </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ref</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">num.value </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> form </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ref</span><span style="color:#24292E;">({age: </span><span style="color:#005CC5;">18</span><span style="color:#24292E;">});</span></span>
<span class="line"><span style="color:#24292E;">form.value.age </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">24</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> arr </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ref</span><span style="color:#24292E;">([]);</span></span>
<span class="line"><span style="color:#24292E;">arr.value.</span><span style="color:#6F42C1;">push</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { ref, isRef, shallowRef, tiggerRef, customRef } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;vue&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#6A737D;">// 泛型</span></span>
<span class="line"><span style="color:#D73A49;">type</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">U</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> { </span><span style="color:#E36209;">name</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span><span style="color:#24292E;"> };</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">user</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ref</span><span style="color:#24292E;">&lt;</span><span style="color:#6F42C1;">u</span><span style="color:#24292E;">&gt;({ name: </span><span style="color:#032F62;">&#39;zhang&#39;</span><span style="color:#24292E;"> }); </span><span style="color:#6A737D;">// ref&lt;U&gt;()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// Ref</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">type</span><span style="color:#24292E;"> { Ref } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;vue&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">dog</span><span style="color:#D73A49;">:</span><span style="color:#6F42C1;">Ref</span><span style="color:#24292E;">&lt;</span><span style="color:#6F42C1;">U</span><span style="color:#24292E;">&gt; </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ref</span><span style="color:#24292E;">({ name: </span><span style="color:#032F62;">&#39;dahuang&#39;</span><span style="color:#24292E;"> });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// --------------------------------- //</span></span>
<span class="line"><span style="color:#6A737D;">// isRef 判断是否是ref对象 返回 Boolean</span></span>
<span class="line"><span style="color:#24292E;">cosnt isRefFlag </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">isRef</span><span style="color:#24292E;">(user);</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// --------------------------------- //</span></span>
<span class="line"><span style="color:#6A737D;">// shallowRef 浅层响应 只能.value整个赋值 不能对对象中的属性赋值</span></span>
<span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;">	ref , shallowRef不能同时使用。否则 shallowRef会受到ref的影响，造成shallowRef视图的更新。 </span></span>
<span class="line"><span style="color:#6A737D;">	因为ref底层更新逻辑会调用 triggerRef 函数。</span></span>
<span class="line"><span style="color:#6A737D;">*/</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">cat</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">shallowRef</span><span style="color:#24292E;">({ name: </span><span style="color:#032F62;">&#39;花点&#39;</span><span style="color:#24292E;"> });</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">change</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    cat.value.name </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;小花&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(cat); </span><span style="color:#6A737D;">// 值改变了</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// &lt;div&gt; shallowRef: {{ cat }}  &lt;/div&gt; 视图不更新</span></span>
<span class="line"><span style="color:#24292E;">    </span></span>
<span class="line"><span style="color:#24292E;">    cat.value </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> { name: </span><span style="color:#032F62;">&#39;大花&#39;</span><span style="color:#24292E;"> }; </span><span style="color:#6A737D;">// 视图改变</span></span>
<span class="line"><span style="color:#24292E;">    </span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// triggerRef 更新 shallowRef 创建的对象 视图将更新</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">triggerRef</span><span style="color:#24292E;">(cat); </span><span style="color:#6A737D;">// 小花 视图将改变</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// --------------------------------- //</span></span>
<span class="line"><span style="color:#6A737D;">// 自定义一个ref </span></span>
<span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">settingRef</span><span style="color:#24292E;">&lt;</span><span style="color:#6F42C1;">T</span><span style="color:#24292E;">&gt;(</span><span style="color:#E36209;">value</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">T</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">settingRef</span><span style="color:#24292E;">((</span><span style="color:#E36209;">track</span><span style="color:#24292E;">, </span><span style="color:#E36209;">tigger</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6F42C1;">get</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#6F42C1;">track</span><span style="color:#24292E;">(); </span><span style="color:#6A737D;">// 收集依赖</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> value;</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6F42C1;">set</span><span style="color:#24292E;">(</span><span style="color:#E36209;">newValue</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">                console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;触发修改&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">                value </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> newValue;</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#6F42C1;">trgger</span><span style="color:#24292E;">(); </span><span style="color:#6A737D;">// 触发依赖</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">    })</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#6A737D;">// 使用方法</span></span>
<span class="line"><span style="color:#6A737D;">// script</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">obj</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">settingRef</span><span style="color:#24292E;">&lt;</span><span style="color:#005CC5;">string</span><span style="color:#24292E;">&gt;(</span><span style="color:#032F62;">&#39;Fish&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#6A737D;">// 视图中</span></span>
<span class="line"><span style="color:#24292E;">{{ obj }}</span></span>
<span class="line"><span style="color:#6A737D;">//修改</span></span>
<span class="line"><span style="color:#24292E;">obj.value </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;修改&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// --------------------------------- //</span></span>
<span class="line"><span style="color:#6A737D;">// ref 获取 dom 元素</span></span>
<span class="line"><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;">div ref</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;fetchTest&quot;</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;">{{ user }}</span><span style="color:#D73A49;">&lt;/</span><span style="color:#24292E;">div</span><span style="color:#D73A49;">&gt;</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">fetchTest</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ref</span><span style="color:#24292E;">&lt;</span><span style="color:#6F42C1;">HTMLDivElement</span><span style="color:#24292E;">&gt;();</span></span>
<span class="line"><span style="color:#24292E;">fetchTest.value?.innerText</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;">ref与reactive如何选择</span></span>
<span class="line"><span style="color:#6A737D;">使用 ref：基础类型值(String，Number，Boolean，Symbol) 或单值对象【即：只有一个属性值的对象】(如：{ count: 1 })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">使用 reactive：引用类型值(Object、Array、Map、Set、WeakMap、WeakSet)</span></span>
<span class="line"><span style="color:#6A737D;">	</span></span>
<span class="line"><span style="color:#6A737D;">*/</span></span></code></pre></div><h3 id="reactive-深层响应" tabindex="-1">reactive : 深层响应 <a class="header-anchor" href="#reactive-深层响应" aria-label="Permalink to &quot;reactive : 深层响应&quot;">​</a></h3><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// !##!</span></span>
<span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> form </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">reactive</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;fish&#39;</span><span style="color:#E1E4E8;">); </span><span style="color:#6A737D;">// 不能使用string类型， 报错</span></span>
<span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> form </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">reactive</span><span style="color:#E1E4E8;">({name:</span><span style="color:#9ECBFF;">&#39;Fish&#39;</span><span style="color:#E1E4E8;">,age:</span><span style="color:#79B8FF;">18</span><span style="color:#E1E4E8;">});    </span><span style="color:#6A737D;">// 正确表示</span></span>
<span class="line"><span style="color:#F97583;">type</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">U</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> { </span><span style="color:#FFAB70;">name</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">age</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">number</span><span style="color:#E1E4E8;"> };</span></span>
<span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> form </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">reactive</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">U</span><span style="color:#E1E4E8;">)({</span></span>
<span class="line"><span style="color:#E1E4E8;">    name: </span><span style="color:#9ECBFF;">&#39;fish&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    age: </span><span style="color:#79B8FF;">18</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"><span style="color:#E1E4E8;">form.age </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">24</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#6A737D;">// 数组</span></span>
<span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> list </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">reactive</span><span style="color:#E1E4E8;">&lt;</span><span style="color:#79B8FF;">string</span><span style="color:#E1E4E8;">[]&gt;([])</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">add</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    list.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;hello&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#6A737D;">// 修改数组 1 </span></span>
<span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> res </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [</span><span style="color:#9ECBFF;">&#39;vue&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;typescript&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;nestjs&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;vite&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;pinia&#39;</span><span style="color:#E1E4E8;">] </span><span style="color:#6A737D;">// 错误 覆盖 丢失响应性</span></span>
<span class="line"><span style="color:#E1E4E8;">list.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">res)</span></span>
<span class="line"><span style="color:#6A737D;">// 2</span></span>
<span class="line"><span style="color:#E1E4E8;">将数组变为reactive 对象的一个属性后直接赋值</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// --------------------------------- //</span></span>
<span class="line"><span style="color:#E1E4E8;">readyonly 只读属性</span></span>
<span class="line"><span style="color:#6A737D;">// 接受一个对象 (不论是响应式还是普通的) 或是一个 ref，返回一个原值的只读代理。</span></span>
<span class="line"><span style="color:#6A737D;">// 只读代理是深层的：对任何嵌套属性的访问都将是只读的, 浅层只读代理 shallowReadonly()</span></span>
<span class="line"><span style="color:#6A737D;">// readonly 属性强制赋值不改变；如果原始对象变化，则改变</span></span>
<span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> obj </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">reactvie</span><span style="color:#E1E4E8;">({name:</span><span style="color:#9ECBFF;">&#39;Fish&#39;</span><span style="color:#E1E4E8;">})</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">read</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">readonly</span><span style="color:#E1E4E8;">(obj)</span></span>
<span class="line"><span style="color:#E1E4E8;">read.name </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;Fisher&#39;</span><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 无法分配到 &quot;name&quot; ， 因为它是只读属性。</span></span>
<span class="line"><span style="color:#E1E4E8;">obj.name </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;Fisher&#39;</span><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 则，obj、read 都将被改变</span></span>
<span class="line"><span style="color:#6A737D;">// 用来做响应性追踪 </span></span>
<span class="line"><span style="color:#B392F0;">watchEffect</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#6A737D;">// 因为被 readonly 代理后的对象自身无法被更改 只有当 原始对象变化时才变化。</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;">	shallowReactive 只有根部属性是响应式的 </span></span>
<span class="line"><span style="color:#6A737D;">	shallowReadonly 只有根部属性是只读的</span></span>
<span class="line"><span style="color:#6A737D;">*/</span></span>
<span class="line"><span style="color:#6A737D;">// --------------------------------- //</span></span>
<span class="line"><span style="color:#E1E4E8;">shallowReactive 浅层作用  </span></span>
<span class="line"><span style="color:#6A737D;">// 只有根级别的属性是响应式的,  ref 的属性不会被自动解包</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">state</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">shallowReactive</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  foo: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  nested: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    bar: </span><span style="color:#79B8FF;">2</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"><span style="color:#6A737D;">// 更改状态自身的属性是响应式的</span></span>
<span class="line"><span style="color:#E1E4E8;">sate.foo</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#B392F0;">isReactive</span><span style="color:#E1E4E8;">(state.nested);  </span><span style="color:#6A737D;">// false</span></span>
<span class="line"><span style="color:#6A737D;">// 不是响应式的</span></span>
<span class="line"><span style="color:#E1E4E8;">state.nested.bar</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// --------------------------------- //</span></span>
<span class="line"><span style="color:#E1E4E8;">shallowReadonly </span><span style="color:#B392F0;">readonly</span><span style="color:#E1E4E8;">() 的浅层作用形式 </span></span>
<span class="line"><span style="color:#6A737D;">//只有根层级的属性变为了只读</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">state</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">shallowReadonly</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  foo: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  nested: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    bar: </span><span style="color:#79B8FF;">2</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"><span style="color:#6A737D;">// 更改状态自身的属性会失败</span></span>
<span class="line"><span style="color:#E1E4E8;">state.foo</span><span style="color:#F97583;">++</span></span>
<span class="line"><span style="color:#6A737D;">// ...但可以更改下层嵌套对象</span></span>
<span class="line"><span style="color:#B392F0;">isReadonly</span><span style="color:#E1E4E8;">(state.nested) </span><span style="color:#6A737D;">// false</span></span>
<span class="line"><span style="color:#6A737D;">// 这是可以通过的</span></span>
<span class="line"><span style="color:#E1E4E8;">state.nested.bar</span><span style="color:#F97583;">++</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// --------------------------------- //</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// --------------------------------- //</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// !##!</span></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> form </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">reactive</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;fish&#39;</span><span style="color:#24292E;">); </span><span style="color:#6A737D;">// 不能使用string类型， 报错</span></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> form </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">reactive</span><span style="color:#24292E;">({name:</span><span style="color:#032F62;">&#39;Fish&#39;</span><span style="color:#24292E;">,age:</span><span style="color:#005CC5;">18</span><span style="color:#24292E;">});    </span><span style="color:#6A737D;">// 正确表示</span></span>
<span class="line"><span style="color:#D73A49;">type</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">U</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> { </span><span style="color:#E36209;">name</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span><span style="color:#24292E;">, </span><span style="color:#E36209;">age</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">number</span><span style="color:#24292E;"> };</span></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> form </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">reactive</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">U</span><span style="color:#24292E;">)({</span></span>
<span class="line"><span style="color:#24292E;">    name: </span><span style="color:#032F62;">&#39;fish&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    age: </span><span style="color:#005CC5;">18</span></span>
<span class="line"><span style="color:#24292E;">});</span></span>
<span class="line"><span style="color:#24292E;">form.age </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">24</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#6A737D;">// 数组</span></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> list </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">reactive</span><span style="color:#24292E;">&lt;</span><span style="color:#005CC5;">string</span><span style="color:#24292E;">[]&gt;([])</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">add</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    list.</span><span style="color:#6F42C1;">push</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;hello&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#6A737D;">// 修改数组 1 </span></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> res </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [</span><span style="color:#032F62;">&#39;vue&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;typescript&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;nestjs&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;vite&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;pinia&#39;</span><span style="color:#24292E;">] </span><span style="color:#6A737D;">// 错误 覆盖 丢失响应性</span></span>
<span class="line"><span style="color:#24292E;">list.</span><span style="color:#6F42C1;">push</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">...</span><span style="color:#24292E;">res)</span></span>
<span class="line"><span style="color:#6A737D;">// 2</span></span>
<span class="line"><span style="color:#24292E;">将数组变为reactive 对象的一个属性后直接赋值</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// --------------------------------- //</span></span>
<span class="line"><span style="color:#24292E;">readyonly 只读属性</span></span>
<span class="line"><span style="color:#6A737D;">// 接受一个对象 (不论是响应式还是普通的) 或是一个 ref，返回一个原值的只读代理。</span></span>
<span class="line"><span style="color:#6A737D;">// 只读代理是深层的：对任何嵌套属性的访问都将是只读的, 浅层只读代理 shallowReadonly()</span></span>
<span class="line"><span style="color:#6A737D;">// readonly 属性强制赋值不改变；如果原始对象变化，则改变</span></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> obj </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">reactvie</span><span style="color:#24292E;">({name:</span><span style="color:#032F62;">&#39;Fish&#39;</span><span style="color:#24292E;">})</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">read</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">readonly</span><span style="color:#24292E;">(obj)</span></span>
<span class="line"><span style="color:#24292E;">read.name </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;Fisher&#39;</span><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 无法分配到 &quot;name&quot; ， 因为它是只读属性。</span></span>
<span class="line"><span style="color:#24292E;">obj.name </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;Fisher&#39;</span><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 则，obj、read 都将被改变</span></span>
<span class="line"><span style="color:#6A737D;">// 用来做响应性追踪 </span></span>
<span class="line"><span style="color:#6F42C1;">watchEffect</span><span style="color:#24292E;">(() </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#6A737D;">// 因为被 readonly 代理后的对象自身无法被更改 只有当 原始对象变化时才变化。</span></span>
<span class="line"><span style="color:#24292E;">})</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;">	shallowReactive 只有根部属性是响应式的 </span></span>
<span class="line"><span style="color:#6A737D;">	shallowReadonly 只有根部属性是只读的</span></span>
<span class="line"><span style="color:#6A737D;">*/</span></span>
<span class="line"><span style="color:#6A737D;">// --------------------------------- //</span></span>
<span class="line"><span style="color:#24292E;">shallowReactive 浅层作用  </span></span>
<span class="line"><span style="color:#6A737D;">// 只有根级别的属性是响应式的,  ref 的属性不会被自动解包</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">state</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">shallowReactive</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">  foo: </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  nested: {</span></span>
<span class="line"><span style="color:#24292E;">    bar: </span><span style="color:#005CC5;">2</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">})</span></span>
<span class="line"><span style="color:#6A737D;">// 更改状态自身的属性是响应式的</span></span>
<span class="line"><span style="color:#24292E;">sate.foo</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#6F42C1;">isReactive</span><span style="color:#24292E;">(state.nested);  </span><span style="color:#6A737D;">// false</span></span>
<span class="line"><span style="color:#6A737D;">// 不是响应式的</span></span>
<span class="line"><span style="color:#24292E;">state.nested.bar</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// --------------------------------- //</span></span>
<span class="line"><span style="color:#24292E;">shallowReadonly </span><span style="color:#6F42C1;">readonly</span><span style="color:#24292E;">() 的浅层作用形式 </span></span>
<span class="line"><span style="color:#6A737D;">//只有根层级的属性变为了只读</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">state</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">shallowReadonly</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">  foo: </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  nested: {</span></span>
<span class="line"><span style="color:#24292E;">    bar: </span><span style="color:#005CC5;">2</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">})</span></span>
<span class="line"><span style="color:#6A737D;">// 更改状态自身的属性会失败</span></span>
<span class="line"><span style="color:#24292E;">state.foo</span><span style="color:#D73A49;">++</span></span>
<span class="line"><span style="color:#6A737D;">// ...但可以更改下层嵌套对象</span></span>
<span class="line"><span style="color:#6F42C1;">isReadonly</span><span style="color:#24292E;">(state.nested) </span><span style="color:#6A737D;">// false</span></span>
<span class="line"><span style="color:#6A737D;">// 这是可以通过的</span></span>
<span class="line"><span style="color:#24292E;">state.nested.bar</span><span style="color:#D73A49;">++</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// --------------------------------- //</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// --------------------------------- //</span></span></code></pre></div><h3 id="toref" tabindex="-1">toRef <a class="header-anchor" href="#toref" aria-label="Permalink to &quot;toRef&quot;">​</a></h3><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// 针对一个响应式对象（reactive 封装）的 prop（属性）创建一个ref，且保持响应式</span></span>
<span class="line"><span style="color:#6A737D;">// 两者 保持引用关系。</span></span>
<span class="line"><span style="color:#6A737D;">// 非响应式对象使用toRef视图无变化</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 从非函数的值中创建普通的 ref  </span></span>
<span class="line"><span style="color:#B392F0;">toRef</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">) </span><span style="color:#6A737D;">// 等同于 ref(1)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// --------------------------------- //</span></span>
<span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> person </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">reactive</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">	name:</span><span style="color:#9ECBFF;">&#39;张三&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    age:</span><span style="color:#79B8FF;">20</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    job:{</span></span>
<span class="line"><span style="color:#E1E4E8;">    	one:{</span></span>
<span class="line"><span style="color:#E1E4E8;">        	salary:</span><span style="color:#79B8FF;">20</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"><span style="color:#6A737D;">// 会与源属性同步</span></span>
<span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> name </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">toRef</span><span style="color:#E1E4E8;">(person, </span><span style="color:#9ECBFF;">&#39;name&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">name.value </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;张四&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(person.name) </span><span style="color:#6A737D;">// 张四</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//  更改源属性也会更新该 ref</span></span>
<span class="line"><span style="color:#E1E4E8;">person.name </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;张五&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(name.value) </span><span style="color:#6A737D;">// 张五</span></span>
<span class="line"><span style="color:#6A737D;">// v3.3+</span></span>
<span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> age </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">toRef</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> { person.age });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 跟ref传入数值后生成的响应式对象不同</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">ageRef</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ref</span><span style="color:#E1E4E8;">(person.age);</span></span>
<span class="line"><span style="color:#6A737D;">// 不会与 person.age 保持同步，接收到的是一个纯数值</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// 针对一个响应式对象（reactive 封装）的 prop（属性）创建一个ref，且保持响应式</span></span>
<span class="line"><span style="color:#6A737D;">// 两者 保持引用关系。</span></span>
<span class="line"><span style="color:#6A737D;">// 非响应式对象使用toRef视图无变化</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 从非函数的值中创建普通的 ref  </span></span>
<span class="line"><span style="color:#6F42C1;">toRef</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">) </span><span style="color:#6A737D;">// 等同于 ref(1)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// --------------------------------- //</span></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> person </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">reactive</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">	name:</span><span style="color:#032F62;">&#39;张三&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    age:</span><span style="color:#005CC5;">20</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    job:{</span></span>
<span class="line"><span style="color:#24292E;">    	one:{</span></span>
<span class="line"><span style="color:#24292E;">        	salary:</span><span style="color:#005CC5;">20</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">});</span></span>
<span class="line"><span style="color:#6A737D;">// 会与源属性同步</span></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> name </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">toRef</span><span style="color:#24292E;">(person, </span><span style="color:#032F62;">&#39;name&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">name.value </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;张四&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(person.name) </span><span style="color:#6A737D;">// 张四</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//  更改源属性也会更新该 ref</span></span>
<span class="line"><span style="color:#24292E;">person.name </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;张五&#39;</span></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(name.value) </span><span style="color:#6A737D;">// 张五</span></span>
<span class="line"><span style="color:#6A737D;">// v3.3+</span></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> age </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">toRef</span><span style="color:#24292E;">(() </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> { person.age });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 跟ref传入数值后生成的响应式对象不同</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">ageRef</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ref</span><span style="color:#24292E;">(person.age);</span></span>
<span class="line"><span style="color:#6A737D;">// 不会与 person.age 保持同步，接收到的是一个纯数值</span></span></code></pre></div><h3 id="torefs" tabindex="-1">toRefs <a class="header-anchor" href="#torefs" aria-label="Permalink to &quot;toRefs&quot;">​</a></h3><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// 将响应式对象（reactive封装）转成普通对象</span></span>
<span class="line"><span style="color:#6A737D;">// 对象的每个属性 Prop 都是对应的ref</span></span>
<span class="line"><span style="color:#6A737D;">// 保持 引用关系 修改会同步</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 解构reactive对象时，使用toRefs，直接解构丢失响应性</span></span>
<span class="line"><span style="color:#6A737D;">// toRefs接收一个对象作为参数，遍历reactive对象的所有属性，使其成为ref对象，然后循环调用toRef</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">obj</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">reactvie</span><span style="color:#E1E4E8;">({name:</span><span style="color:#9ECBFF;">&#39;Fish&#39;</span><span style="color:#E1E4E8;">,age:</span><span style="color:#79B8FF;">18</span><span style="color:#E1E4E8;">})</span></span>
<span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> { name , age } </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">toRefs</span><span style="color:#E1E4E8;">(obj)</span></span>
<span class="line"><span style="color:#6A737D;">// 调用时只会为源对象上可以枚举的属性创建 ref。如果要为可能还不存在的属性创建 ref，请改用 toRef</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// 将响应式对象（reactive封装）转成普通对象</span></span>
<span class="line"><span style="color:#6A737D;">// 对象的每个属性 Prop 都是对应的ref</span></span>
<span class="line"><span style="color:#6A737D;">// 保持 引用关系 修改会同步</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 解构reactive对象时，使用toRefs，直接解构丢失响应性</span></span>
<span class="line"><span style="color:#6A737D;">// toRefs接收一个对象作为参数，遍历reactive对象的所有属性，使其成为ref对象，然后循环调用toRef</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">obj</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">reactvie</span><span style="color:#24292E;">({name:</span><span style="color:#032F62;">&#39;Fish&#39;</span><span style="color:#24292E;">,age:</span><span style="color:#005CC5;">18</span><span style="color:#24292E;">})</span></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> { name , age } </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">toRefs</span><span style="color:#24292E;">(obj)</span></span>
<span class="line"><span style="color:#6A737D;">// 调用时只会为源对象上可以枚举的属性创建 ref。如果要为可能还不存在的属性创建 ref，请改用 toRef</span></span></code></pre></div><h3 id="toraw" tabindex="-1">toRaw <a class="header-anchor" href="#toraw" aria-label="Permalink to &quot;toRaw&quot;">​</a></h3><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// 将响应式对象转化为普通对象。使用场景：不想改变视图时使用</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">obj</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">reactive</span><span style="color:#E1E4E8;">({ name: </span><span style="color:#9ECBFF;">&#39;张三&#39;</span><span style="color:#E1E4E8;">, age:</span><span style="color:#79B8FF;">18</span><span style="color:#E1E4E8;"> });</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">res</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">toRaw</span><span style="color:#E1E4E8;">(obj);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// 将响应式对象转化为普通对象。使用场景：不想改变视图时使用</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">obj</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">reactive</span><span style="color:#24292E;">({ name: </span><span style="color:#032F62;">&#39;张三&#39;</span><span style="color:#24292E;">, age:</span><span style="color:#005CC5;">18</span><span style="color:#24292E;"> });</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">res</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">toRaw</span><span style="color:#24292E;">(obj);</span></span></code></pre></div><h3 id="tovalue-3-3" tabindex="-1">toValue 3.3+ <a class="header-anchor" href="#tovalue-3-3" aria-label="Permalink to &quot;toValue 3.3+&quot;">​</a></h3><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// 将值、refs 或 getters 规范化为值</span></span>
<span class="line"><span style="color:#6A737D;">// 如果参数是一个 getter，它将会被调用并且返回它的返回值。</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#B392F0;">toValue</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">) </span><span style="color:#6A737D;">//       --&gt; 1</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#B392F0;">toValue</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">ref</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">)) </span><span style="color:#6A737D;">//  --&gt; 1</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#B392F0;">toValue</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">) </span><span style="color:#6A737D;">// --&gt; 1</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// 将值、refs 或 getters 规范化为值</span></span>
<span class="line"><span style="color:#6A737D;">// 如果参数是一个 getter，它将会被调用并且返回它的返回值。</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#6F42C1;">toValue</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">) </span><span style="color:#6A737D;">//       --&gt; 1</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#6F42C1;">toValue</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">ref</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">)) </span><span style="color:#6A737D;">//  --&gt; 1</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#6F42C1;">toValue</span><span style="color:#24292E;">(() </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">) </span><span style="color:#6A737D;">// --&gt; 1</span></span></code></pre></div><ul><li>isRef() 检查某个值是否是 ref</li><li>unref() 是ref返回 obj.value 否则返回obj本身 val = isRef(val) ? val.value : val 语法糖</li><li>isProxy() 检查一个对象是否是由 reactive()、readonly()、shallowReactive() 或 shallowReadonly() 创建的代理 返回 Boolean</li><li>isReactive() 检查一个对象是否由 reactive()或者 shallowReactive() 创建的代理 返回 Boolean</li><li>isReadonly() 检查传入的值是否为只读对象。只读对象的属性可以更改,但不能直接修改该对象 readonly() 和 shallowReadonly() 创建的代理都是只读的 返回 Boolean</li></ul>`,13),e=[o];function c(t,r,y,E,i,F){return n(),a("div",null,e)}const f=s(p,[["render",c]]);export{D as __pageData,f as default};
