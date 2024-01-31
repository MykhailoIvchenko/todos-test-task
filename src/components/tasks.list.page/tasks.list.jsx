import React, {useEffect, useState} from 'react';
import {List} from "antd";
import LoaderWrapper from "../common/loader.wrapper/loader.wrapper.jsx";
import TasksListItem from "./tasks.list.item.jsx";
import Notification from "../common/notification/notification.jsx";
import {tasksService} from "../../services/tasks.service.js";

const TasksList = () => {
  const [tasksList, setTasksList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [notification, setNotification] = useState(null);

  const deleteTask = (event, taskId) => {
    try {
      event.stopPropagation();
      setIsLoading(true);

      const result = tasksService.deleteTaskById(taskId);

      if (result.text) {
        setNotification({
          type: result.type,
          title: result.title,
          text: result.text,
        });

        setTimeout(() => {
          setNotification(null);
        }, 1000);

        return;
      }

      setTasksList(list => list.filter(task => task.id !== taskId));
    } catch (error) {
      setNotification({
        type: 'error',
        title: 'Error',
        text: 'Something went wrong.'
      });

      setTimeout(() => {
        setNotification(null);
      }, 1000);
    } finally {
      setIsLoading(false);
    }
  }

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
    <LoaderWrapper isLoading={isLoading}>
      <List
        bordered
        dataSource={tasksList}
        renderItem={(taskData) => (
          <TasksListItem
            key={taskData.id}
            taskData={taskData}
            deleteTask={deleteTask}
          />
        )}
      />

      {notification &&
        <Notification
          title={notification?.title}
          type={notification?.type}
          text={notification?.text}
        />
      }
    </LoaderWrapper>
  );
};

export default TasksList;
