#总结

> 在入口文件通过`redux`的`createStore`方法将`reducer`整合到`redux`系统中
> 
>       let store = createStore(todoApp);
> 
> 通过`redux`的`combineReducers`方法将多个`reducer`整合成一个`reducer`
> 
>       const todoApp = combineReducers({
>           visibilityFilter,
>           todos
>        })
>  
> 通过`react-redux`的`connect`方法将`store`中的`state`绑定到组件的`props`中
>  
>       connect(mapStateToProps)(App)
>       
>       //在app容器中需手动去去触发dispatch(action);
>       
>       connect(mapStateToProps, actionCreator)(App);
>       
>       //在app容器中直接使用action，默认调用action去触发;
>       
> 触发reducer修改store中的state
>  
>  
>  
>  
> 
> 