#环境搭建
> 安装`redux`包`cnpm i react-redux redux redux-thunk --save-dev`
> 
> ![](../../../img/redux.png)
> 1.创建组件`components/Counter.js`
>   并从组件中获取props属性并应用
> 2.创建容器containers/App.js
>   
  
        //将state.counter绑定到props的counter
        function mapStateToProps(state) {
          return {
            counter: state.counter
          }
        }
        //通过redux的connect方法实现将state.counter和action绑定到Counter组件上
        export default connect(mapStateToProps, CounterActions)(Counter)

> 3.创建action和reducer
> 
> 4.注册store(store/configureStore.js)

        import { createStore, applyMiddleware } from 'redux'
        import thunk from 'redux-thunk'
        import reducer from '../reducers'
        const createStoreWithMiddleware = applyMiddleware(thunk)(createStore)
        export default function configureStore(initialState) {
            const store = createStoreWithMiddleware(reducer, initialState)
                return store
        }
        //applyMiddleware、thunkapplyMiddleware来自redux可以包装 store 的 dispatch()，什么是包装store的dispatch()，就是说当执行dispatch()时，给它赋予一些新的参数之类的，比如：thunk
        //thunk作用是使被 dispatch 的 function 会接收 dispatch 作为参数，并且可以异步调用它，actions的后两个方法中都有dispatch参数，可以去看看。

> 5.输出(index.js)

        import React from 'react'
        import { render } from 'react-dom'
        import { Provider } from 'react-redux'
        import App from './containers/App'
        import configureStore from './store/configureStore' 
        const store = configureStore();
        render(
          <Provider store={store}>
            <App />
          </Provider>,
          document.getElementById('root')
        )


>#总结：
>###容器：通过react-redux提供的connect方法将我们需要的state中的数据和actions中的方法绑定到props上
 
        //将state.counter绑定到props的counter
        function mapStateToProps(state) {
          return {
            counter: state.counter
          }
        }
        //将action的所有方法绑定到props上
        function mapDispatchToProps(dispatch) {
          return bindActionCreators(CounterActions, dispatch)
        }

        //通过react-redux提供的connect方法将我们需要的state中的数据和actions中的方法绑定到props上
        export default connect(mapStateToProps, CounterActions)(Counter)
        或者
        export default connect(mapStateToProps, mapDispatchToProps)(Counter)

