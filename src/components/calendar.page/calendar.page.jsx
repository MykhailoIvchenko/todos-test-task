import React, {useEffect, useState} from 'react';
import PageWrapper from "../common/page.wrapper/page.wrapper.jsx";
import LoaderWrapper from "../common/loader.wrapper/loader.wrapper.jsx";
import {tasksService} from "../../services/tasks.service.js";
import Notification from "../common/notification/notification.jsx";
import TasksCalendar from "./tasks.calendar.jsx";
import './calendar.page.css';


const CalendarPage = () => {
  const [tasksList, setTasksList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [notification, setNotification] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    tasksService.getTasksList()
      .then(result => {
        if (result.data) {
          setTasksList(result.data);
        } else {
          setNotification({
            title: result.title,
            text: result.text,
            type: result.type,
          });
        }
      }).finally(() => setIsLoading(false));
  }, []);

  return (
  <PageWrapper>
    <LoaderWrapper isLoading={isLoading} >
      <TasksCalendar tasksList={tasksList} />

      {notification &&
        <Notification
          title={notification?.title}
          type={notification?.type}
          text={notification?.text}
        />
      }
    </LoaderWrapper>
  </PageWrapper>
  )

};

export default CalendarPage;
