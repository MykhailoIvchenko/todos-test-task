import React from 'react';
import {Route, Routes} from "react-router-dom";
import TasksListPage from "../tasks.list.page/tasks.list.page.jsx";
import TasksList from "../tasks.list.page/tasks.list.jsx";
import {routesModel} from "../../utils/models.js";
import CalendarPage from "../calendar.page/calendar.page.jsx";
import NotFoundPage from "../not.found.page/not.found.page.jsx";
import AddTaskPage from "../add.task.page/add.task.page.jsx";
import EditTask from "../tasks.list.page/edit.task.jsx";

const MainContent = () => {
  return (
    <main>
      <Routes>
        <Route path={routesModel.home} element={<TasksListPage />} >
          <Route index element={<TasksList />} />
          <Route path={`${routesModel.home}/:id`} element={<EditTask />}/>
        </Route>

        <Route path={routesModel.addTask} element={<AddTaskPage />} />

        <Route path={routesModel.calendar} element={<CalendarPage />} />

        <Route path={'/*'} element={<NotFoundPage />}/>
      </Routes>
    </main>
  );
};

export default MainContent;
