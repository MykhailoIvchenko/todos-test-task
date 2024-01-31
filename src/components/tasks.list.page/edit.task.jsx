import React, {useState, useEffect} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {tasksService} from "../../services/tasks.service.js";
import {routesModel, taskModel} from "../../utils/models.js";
import Notification from "../common/notification/notification.jsx";
import LoaderWrapper from "../common/loader.wrapper/loader.wrapper.jsx";
import AddTaskForm from "../common/add.task.form/add.task.form.jsx";
import dayjs from "dayjs";

const EditTask = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const [taskData, setTaskData] = useState(taskModel);
  const [notification, setNotification] = useState(null);

  useEffect(() => {
    if (id) {
      setIsLoading(true);
      tasksService.getTaskById(id)
        .then(result => {
          if (result.data) {
            setTaskData({
              ...result.data,
              deadline: dayjs(new Date(result?.data?.deadline)),
            });
          } else {
            setNotification({
              title: result.title,
              text: result.text,
              type: result.type,
            });

            setTimeout(() => {
              navigate(routesModel.home);
            }, 500);
          }
        }).finally(() => setIsLoading(false));
    }
  }, []);
  return (
    <LoaderWrapper isLoading={isLoading}>
      <AddTaskForm initialData={taskData} id={id} />

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

export default EditTask;
