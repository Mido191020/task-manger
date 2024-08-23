// main.js
import { TaskManager } from './taskManager.js';
import { NotificationManager } from './notificationManager.js';

const taskManager = new TaskManager();
const notificationManager = new NotificationManager();

taskManager.addTask('Design new feature', '2024-08-30');
taskManager.addTask('Call client', '2024-08-25');
notificationManager.sendNotification('Task assigned');
taskManager.remindUpcomingTasks(); // Check reminders for upcoming tasks
taskManager.listTasks(); // List tasks sorted by due date


