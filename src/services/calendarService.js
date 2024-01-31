import {helpers} from "../utils/helpers.js";

const getTasksDataForTheMonth = (month, tasksList) => {
  const allTasksList = tasksList.filter(task => helpers
    .getYearAndMonthFromDateString(task.deadline) === helpers
    .getYearAndMonthFromDate(month));

  const allTasks = allTasksList.length;
  const activeTasks = allTasksList.filter(task => !task.isCompleted).length;
  const completedTasks = allTasksList.filter(task => task.isCompleted).length;

  return allTasks > 0 ? {
    allTasks,
    activeTasks,
    completedTasks,
  } : null;
}

const getTasksForTheDay = (day, tasksList) => {
  const dayAsString = helpers.getDateString(day);

  const tasksForTheDay = tasksList.filter(task => task.deadline === dayAsString);

  const tasksToDisplay = tasksForTheDay.map(task => ({
    type: task.isCompleted ? 'success' : 'warning',
    content: task.description,
  }));

  return tasksToDisplay;
}

export const calendarService = {
  getTasksForTheDay,
  getTasksDataForTheMonth,
}
