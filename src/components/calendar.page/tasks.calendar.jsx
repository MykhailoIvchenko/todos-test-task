import React from 'react';
import {Badge, Calendar} from "antd";
import {calendarService} from "../../services/calendarService";
import './tasks.calendar.css';

const TasksCalendar = ({tasksList}) => {
  const monthCellRender = (monthValue) => {
    const month = calendarService.getTasksDataForTheMonth(monthValue, tasksList);
    return month ? (
      <div className={'TasksCalendar-Month'}>
        <Badge
          status={'default'}
          text={`Tasks per month: ${month.allTasks || 0}`}
          className={'TasksCalendar-MonthItem'}
        />

        <Badge
          status={'success'}
          text={`Completed: ${month.completedTasks || 0}`}
          className={'TasksCalendar-MonthItem'}
        />

        <Badge
          status={'warning'}
          text={`Active: ${month.activeTasks || 0}`}
          className={'TasksCalendar-MonthItem'}
        />
      </div>
    ) : null;
  };

  const dateCellRender = (day) => {
    const listData = calendarService.getTasksForTheDay(day, tasksList);

    return (
      <ul className={'TasksCalendar-Events'}>
        {listData.map((item) => (
          <li key={item.content}>
            <Badge status={item.type} text={item.content} />
          </li>
        ))}
      </ul>
    );
  };
  const cellRender = (current, info) => {
    if (info.type === 'date') return dateCellRender(current);
    if (info.type === 'month') return monthCellRender(current);
    return info.originNode;
  };
  return <Calendar cellRender={cellRender} />;
};
export default TasksCalendar;
