'use strict';

class Controller {
	constructor(view) {
		this._ENTER_KEY = 13;

		this.view = view;
	}

	setViewEventHandlers() {
		const self = this;

		this.view.$newTodo.addEventListener('keypress', function(e) {
			if (e.keyCode === self._ENTER_KEY) {
				const todo = self.createTodo(this.value); 
				self.view.$todoList.appendChild(todo);
				this.value = '';
				self.updateViewTodosCount();
			}
		});

		this.view.$todoList.addEventListener('click', function(e) {
			const target = e.target;
			const tagName = target.tagName;

			if (tagName === 'INPUT') {
				const todo = target.parentNode;
				todo.classList.toggle('completed');
			} else if (tagName === 'BUTTON') {
				const todo = target.parentNode;
				self.view.$todoList.removeChild(todo);
			}
			self.updateViewTodosCount();
		});

		this.view.todoFooter.$allFilter.addEventListener('click', function() {
			const todos = self.view.$todoList.children;
			for(let i = 0; i < todos.length; i++) {
				todos[i].style.display = 'list-item';
			}
		});

		this.view.todoFooter.$activeFilter.addEventListener('click', function() {
			const todos = self.view.$todoList.children;
			for(let i = 0; i < todos.length; i++) {
				if (todos[i].className.includes('completed')) {
					todos[i].style.display = 'none';
				} else {
					todos[i].style.display = 'list-item';
				}
			}
		});

		this.view.todoFooter.$completedFilter.addEventListener('click', function() {
			const todos = self.view.$todoList.children;
			for(let i = 0; i < todos.length; i++) {
				if (!todos[i].className.includes('completed')) {
					todos[i].style.display = 'none';
				} else {
					todos[i].style.display = 'list-item';
				}
			}
		});
	}

	createTodo(text) {
		const todo = document.createElement('li');

		const checkbox = document.createElement('input');
		checkbox.type = 'checkbox';
		todo.appendChild(checkbox);

		const label = document.createElement('label');
		label.textContent = text + ' ';
		todo.appendChild(label);

		const button = document.createElement('button');
		button.textContent = '×';
		todo.appendChild(button);

		return todo;
	}

	updateViewTodosCount() {
		const activeTodos = 
		this.view.$todoList.querySelectorAll('li:not(.completed)');

		this.view.todoFooter.$todoCounter.textContent = activeTodos.length;
	}
}