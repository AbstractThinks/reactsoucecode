#react-route

##使用
>###`<IndexRoute component={target}/>`
> 设置初始化界面
> 
>### onEnter 和 onLeave
> **`onLeave hook`** 会在所有将离开的路由中触发，从最下层的子路由开始直到最外层父路由结束
> **`onEnter hook`**会从最外层的父路由开始直到最下层子路由结束
> 
>###路径语法
>       <Route path="/hello/:name">         // 匹配 /hello/michael 和 /hello/ryan
>       <Route path="/hello(/:name)">       // 匹配 /hello, /hello/michael 和 /hello/ryan
>       <Route path="/files/*.*">           // 匹配 /files/hello.jpg 和 /files/path/to/hello.jpg
>       
>###history
>createHashHistory
>createBrowserHistory
>createMemoryHistory

>###IndexLink
 

##分析



[reactRoute使用方法](https://undefinedblog.com/react-router-0-13-3/)

[react-route参考2](http://www.tuicool.com/articles/iAvmyuj)