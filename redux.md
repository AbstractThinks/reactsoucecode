[redux中文文档](http://camsong.github.io/redux-in-chinese/index.html)

[redux tutorial](https://github.com/react-guide/redux-tutorial-cn)

#redux

![](./img/redux.jpg)

>##Action
> **作用：`Actions` 是把数据从应用传到 `store` 的有效载荷。它是 `store` 数据的唯一来源。用法是通过 `store.dispatch() `把 `action` 传到 `store`。**
> 
> 1.用Action来分辨具体的执行动作。比如是create 还是delete？或者是update？
> 2.操作数据首先得有数据。比如添加数据得有数据，删除数据得有ID。。action就是存这些数据的地方。

>##Reducer
> **`Action` 只是描述了有事情发生了这一事实，并没有指明应用如何更新 `state`。这是 `reducer` 要做的事情。**
>
>##Store
> **一个应用只有一个`Store`**
> 
> 1.维持应用的 state；
> 2.提供 getState() 方法获取 state；
> 3.提供 dispatch(action) 方法更新 state；
> 4.通过 subscribe(listener) 注册监听器。




>##使用步骤
> 1. 创建actionCreator
> 2. 创建reducer






###创建actionCreator
        var actionCreator = function() {
            pretty obvious now) and returns it
            return {
                type: 'AN_ACTION'
            }
        }

###创建reducer

        import { createStore } from 'redux'
        var store_0 = createStore(() => {})；
        var reducer = function (...args) {
            console.log('Reducer was called with args', args)
        }；
        var store_1 = createStore(reducer)；
        // store_1 = { 
        //    dispatch: [Function: dispatch],
        //    subscribe: [Function: subscribe],
        //    getState: [Function: getState],
        //    replaceReducer: [Function: replaceReducer] 
        // }
