let addTodoActions = function (text) {
	return {
		type: 'add_todo',
		text: text
	};
}

module.exports = addTodoActions