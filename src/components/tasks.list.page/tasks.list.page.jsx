import React from 'react';
import PageWrapper from "../common/page.wrapper/page.wrapper.jsx";
import PageTitle from "../common/page.title/page.title.jsx";
import {Outlet, useParams} from "react-router-dom";
import {Divider} from "antd";

const TasksListPage = () => {
  const { id } = useParams();

  return (
    <PageWrapper>
      <PageTitle>
        {id ? 'Edit task' : 'Tasks list'}
      </PageTitle>

      <Divider />

      <Outlet />
    </PageWrapper>
  );
};

export default TasksListPage;
