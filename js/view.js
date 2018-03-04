'use strict';

class View {
	constructor() {
		this.$newTodo = document.querySelector('.new-todo');
		this.$todoList = document.querySelector('.todo-list');
		this.todoFooter = {
			$todoCounter: document.querySelector('.todo-counter'),
			$allFilter: document.querySelector('.filter-all'),
			$activeFilter: document.querySelector('.filter-active'),
			$completedFilter: document.querySelector('.filter-completed'),
			$clearCompletedBtn: document.querySelector('.clear-completed')
		};
	}
}