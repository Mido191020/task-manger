// taskManager.js
export class TaskManager {
    constructor() {
      this.tasks = new Map();
    }
    
    addTask(task, dueDate) {
      this.tasks.set(task, {
        dueDate: new Date(dueDate),
        completed: false
      });
      console.log(`Task "${task}" added with due date ${dueDate}.`);
    }
    
    removeTask(task) {
      if (this.tasks.has(task)) {
        this.tasks.delete(task);
        console.log('Task has been deleted.');
      } else {
        console.log('Task not found!');
      }
    }
    
    search(task) {
      return this.tasks.has(task);
    }
    
    listTasks() {
      this.display();
    }
    
    display() {
      const taskArray = Array.from(this.tasks.entries());
      taskArray.sort((a, b) => a[1].dueDate - b[1].dueDate);
      console.log("Tasks:");
      taskArray.forEach(([task, { dueDate }]) => {
        console.log(`${task} (Due: ${dueDate.toLocaleDateString()})`);
      });
    }
    
    remindUpcomingTasks() {
      const now = new Date();
      console.log("Upcoming Tasks:");
      for (const [task, { dueDate }] of this.tasks) {
        const daysUntilDue = Math.ceil((dueDate - now) / (1000 * 60 * 60 * 24));
        if (daysUntilDue <= 7 && daysUntilDue >= 0) {
          console.log(`Reminder: Task "${task}" is due in ${daysUntilDue} days.`);
        }
      }
    }
  }
  
