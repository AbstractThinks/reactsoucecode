
    http://www.wtoutiao.com/p/a53rAR.html

    http://react-china.org/t/redux/2687

#flux思想
![](./img/flux.png)
>`View`： 视图层（controller.js）
>`Action`（动作）：视图层发出的消息（比如mouseClick）(actions.js)
>`Dispatcher`（派发器）：用来接收Actions、执行回调函数(dispatcher.js)
>`Store`（数据层）：用来存放应用的状态，一旦发生变动，就提醒Views要更新页面(store.js)
> 1.`controller.js`调用`action.js`，`action.js`调用`dispatcher.js`,`dispatcher.js`调用`store.js`,最后`controller.js`添加监听事件回调函数，确保`store.js`触发事件后更新`view`层

###view(controller.js)

myButtonController.js

            var MyButtonController = React.createClass({
              createNewItem: function (event) {
                ButtonActions.addNewItem('new item');
              },
              render: function() {
                return <MyButton
                  onClick={this.createNewItem}
                />;
              }
            });

myButton.js

            var MyButton = function(props) {
              return <div>
                <button onClick={props.onClick}>New Item</button>
              </div>;
            };

###action(action.js)

ButtonActions.js

            var ButtonActions = {
              addNewItem: function (text) {
                AppDispatcher.dispatch({
                  actionType: 'ADD_NEW_ITEM',
                  text: text
                });
              },
            };

###dispatcher(dispatcher.js)

            AppDispatcher.register(function (action) {
              switch(action.actionType) {
                case 'ADD_NEW_ITEM':
                  ListStore.addNewItemHandler(action.text);
                  ListStore.emitChange();
                  break;
                default:
                  // no op
              }
            })

###Store(Store.js)

            var ListStore = assign({}, EventEmitter.prototype, {
              items: [],
              getAll: function () {
                return this.items;
              },
              addNewItemHandler: function (text) {
                this.items.push(text);
              },
              emitChange: function () {
                this.emit('change');
              },
              addChangeListener: function(callback) {
                this.on('change', callback);
              },
              removeChangeListener: function(callback) {
                this.removeListener('change', callback);
              }
            });

###Controller.js添加监听事件回调函数，确保store.js发出事件后更新view

        var MyButtonController = React.createClass({
          getInitialState: function () {
            return {
              items: ListStore.getAll()
            };
          },
          componentDidMount: function() {
            ListStore.addChangeListener(this._onChange);
          },
          componentWillUnmount: function() {
            ListStore.removeChangeListener(this._onChange);
          },
          _onChange: function () {
            this.setState({
              items: ListStore.getAll()
            });
          },
          createNewItem: function (event) {
            ButtonActions.addNewItem('new item');
          },
          render: function() {
            return <MyButton
              items={this.state.items}
              onClick={this.createNewItem}
            />;
          }
        });