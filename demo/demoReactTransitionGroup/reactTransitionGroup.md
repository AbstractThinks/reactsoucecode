#ReactTransitionGroup(未完成)

>###使用教程


>###componentWillEnter(callback)

在组件被添加到已有的`TransitionGroup`中的时候，该函数和`componentDidMount()`被同时调用。这将会阻塞其它动画触发，直到`callback`被调用。该函数不会在`TransitionGroup`初始化渲染的时候调用。

引用`require('react-addons-transition-group')`

>###componentWillAppear(callback)
该函数会和componentDidMount()同时调用，并阻止其他动画发生直到callback函数执行之后

>###componentDidAppear()
该函数会在componentWillAppear(callback)中的callback函数执行之后被调用

>###componentWillEnter(callback)
该函数在componentDidMount()函数同时被调用

>###componentDidEnter()

该函数在传给`componentWillEnter`的`callback`函数被调用之后调用。

>###componentWillLeave(callback)

该函数在子级从`ReactTransitionGroup`中移除的时候调用。虽然子级被移除了，`ReactTransitionGroup`将会使它继续在DOM中，直到`callback`被调用。

>###componentDidLeave()

该函数在`willLeave callback`被调用的时候调用（与`componentWillUnmount`是同一时间）。

        <ReactTransitionGroup component="ul" className="animated-list">
          ...
        </ReactTransitionGroup>


        var FirstChild = React.createClass({
          render: function() {
            var children = React.Children.toArray(this.props.children);
            return children[0] || null;
          }
        });
        <ReactTransitionGroup component={FirstChild}>
          {someCondition ? <MyComponent /> : null}
        </ReactTransitionGroup>