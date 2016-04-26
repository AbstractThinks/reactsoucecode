#react-route

>###路由跳转
> 路由跳转`onEnter`和`onAboutLeave`均在组件生命周期之前执行
> 
>       <Route 
>           path="about" 
>           component={About} 
>           onEnter={onAboutEnter} 
>           onLeave={onAboutLeave}/>
>           
>       function onAboutEnter(nextState, replaceState){
>           console.log("onAboutEnter");
>           console.log(nextState);
>           console.log(replaceState);
>       }
>       function onAboutLeave(...args){
>           console.log("onAboutLeave");
>           console.log(args);          //[]
>       }
>       
> 阻止页面跳转
> 
        需要react-router@2.4.0版本的 withRouter(component)
        (已将功能抽出放在withRouter文件中)
        routerWillLeave(nextLocation) {
            console.log(nextLocation)
            console.log('Your work is not saved! Are you sure you want to leave?');
            return false;   //return false 则阻止页面的跳转
        }
        componentDidMount () {
            console.log("About componentDidMount");
            this.props.router.setRouteLeaveHook(
                this.props.route, 
                this.routerWillLeave
            );
        }


>###组件生命周期
> 
> ######访问首页时执行(location = /)
>       App componentWillMount
>       App componentDidMount
> 
> ######访问inbox页面时(location = /inbox)
>       App componentWillReceiveProps
>       App componentWillUpdate
>           Inbox componentWillMount
>           Inbox componentDidMount
>       App componentDidUpdate
> 
> 
> ######由inbox页面跳转到about页面(location = /messages/5 => location = /messages/6)
>       App componentWillReceiveProps
>       App componentWillUpdate
>           Inbox componentWillReceiveProps
>           Inbox componentWillUpdate
>           Inbox componentDidUpdate
>       App componentDidUpdate
> 
> 
> 
> ######由inbox页面跳转到about页面(location = /inbox => location = /about)
>       App componentWillReceiveProps
>       App componentWillUpdate
>           Inbox componentWillUnmount
>           About componentWillMount
>           About componentDidMount
>       App componentDidUpdate




[reactRoute使用方法](http://www.cnblogs.com/BestMePeng/p/React_Router.html)

[react-route参考2](http://www.tuicool.com/articles/iAvmyuj)