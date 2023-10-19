let tasks = ['Buy bread!', 'Complete programming task!', 'Walk 10k'];

console.log(`Tasks count: ${tasks.length}`);
tasks.pop();

tasks.unshift('Read the book');

localStorage.setItem('tasksArray', JSON.stringify(tasks));
console.log(JSON.parse(localStorage.getItem('tasksArray')));
tasks[0] = 'Read two books';
localStorage.setItem('tasksArray', JSON.stringify(tasks));
localStorage.clear();