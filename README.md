# To-Do List App

Welcome to my To-Do List App project! This project is a simple yet powerful application that allows users to manage their tasks effectively. The app is built using HTML, CSS, and JavaScript. Below, I'll explain the process and features of the app in detail, including the key concepts and techniques I used from a JavaScript tutorial.

## Project Overview

The To-Do List App lets users create, manage, and delete tasks. It provides an intuitive interface where users can add tasks by typing in an input field and pressing a button or the Enter key. The tasks are displayed in a list, and each task can be marked as completed or deleted. Additionally, the app features a data feature to store and retrieve tasks.

## Features

- Add Tasks: Users can add new tasks to the list.
- Mark as Completed: Users can mark tasks as completed.
- Delete Tasks: Users can delete tasks from the list.
- Data Feature: The app includes a data feature to store tasks persistently, ensuring that tasks remain available even after the page is refreshed.

## Concepts and Techniques

### Event Listeners

Event listeners are used to handle user interactions. In this project, I used onclick and onkeydown events to add tasks to the list.

- onclick: Triggered when the user clicks the "Add" button.
- onkeydown: Triggered when the user presses the Enter key in the input field.

### Arrow Functions

Arrow functions are a concise way to write functions in JavaScript. They are used throughout the project to handle events and perform operations on the task list.

### forEach Loop

The forEach method is used to iterate over the task list and perform actions on each task. It is particularly useful for applying actions like marking tasks as completed or deleting them.

## Detailed Process

### HTML Structure:

- Create the basic structure with an input field for adding tasks, a button to add tasks, and a list to display the tasks.
- Use semantic HTML elements to ensure the structure is clear and accessible.
- Add buttons for adding and deleting tasks.

### CSS Styling:

- Style the input field, button, and task list to create an attractive and user-friendly interface.
- Add hover effects and transitions to enhance the user experience.

### JavaScript Logic:

#### Adding Tasks:

- Use event listeners to capture user input from the input field.
- When the "Add" button is clicked or the Enter key is pressed, add the input value as a new task to the list.

### Mark Task as Done or Undone
Each task has a status dropdown with two options: "Done" and "Undone".
Selecting "Done" changes the task's appearance to indicate it is completed.
Selecting "Undone" reverts the task's appearance to indicate it is pending.

### Task List Styling
The task list is styled with CSS to differentiate between pending and completed tasks.
Pending tasks are displayed with a red color.
Completed tasks are displayed with a green color.

## How to Use
### Adding a Task
1. Enter a task description in the input field.
2. Select a due date using the datetime picker.
3. Click the "ADD TASK" button to add the task to the list.

### Deleting a Task
1. Click the "Delete" button next to the task you want to remove.

### Marking a Task as Done or Undone
1. Use the dropdown menu next to each task to select "Done" or "Undone".
2. The task's appearance will change based on its status.


#### Deleting Tasks:

- Add a delete button to each task item.
- Use an event listener to remove the task item from the list when the delete button is clicked.

#### Data Feature:

- Implement a feature to store tasks in local storage so that tasks persist even after the page is refreshed.

## Example Usage

### Adding a Task

When a user types a task in the input field and clicks the "Add" button or presses the Enter key, the task is added to the list. For example, if the user types "Buy groceries" and presses Enter, "Buy groceries" is added to the task list.

### Marking a Task as Completed

When a user clicks on a task, it is marked as completed. The completed tasks may have a strikethrough or a different style to indicate they are done.

### Deleting a Task

Each task has a delete button next to it. When the user clicks the delete button, the task is removed from the list.

### Data Feature

Tasks are stored in local storage, ensuring that they remain available even after the page is refreshed. This feature provides a persistent to-do list experience.

### Future Improvements
- Local Storage: Save tasks in the local storage to persist them across page reloads.
- Edit Task: Add functionality to edit task descriptions and due dates.
- Task Prioritization: Allow users to set task priorities and sort tasks accordingly.

## Summary

This To-Do List App project showcases the practical application of HTML, CSS, and JavaScript to create a functional and interactive web application. By using event listeners, arrow functions, forEach loops, and a data feature, I was able to implement key features that make the app user-friendly and efficient.

Thank you for checking out my To-Do List App project! I hope this README provides a clear and exciting overview of the app and the process I followed to build it. Enjoy!