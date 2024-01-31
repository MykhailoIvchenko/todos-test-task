import React from 'react';
import { Avatar, List } from 'antd';
import {DeleteFilled} from '@ant-design/icons';
import {useNavigate} from "react-router-dom";
import {routesModel} from "../../utils/models.js";
import reactIcon from '/react.svg';
import './task.list.item.css';

const TasksListItem = ({taskData, deleteTask}) => {
  const navigate = useNavigate();

  return (
  <List.Item
    className={'TaskListItem'}
    onClick={() => navigate(`${routesModel.home}${taskData.id}`)}
  >
    <List.Item.Meta
      avatar={<Avatar src={reactIcon} />}
      title={`Deadline: ${Intl.DateTimeFormat('ua')
        .format(new Date(taskData.deadline))}`}
      description={taskData.description}
    />

    <div
      className={`TaskListItem-Status${!taskData.isCompleted 
      ? ' TaskListItem-Status_Active' : ''}`}
    >
      {taskData.isCompleted ? 'Completed' : 'Active'}
    </div>

    <div
      className={'TaskListItem-Delete'}
      title={'Delete task'}
      onClick={(event) => deleteTask(event, taskData.id)}
    >
      <DeleteFilled />
    </div>
  </List.Item>
  );
};

export default TasksListItem;
