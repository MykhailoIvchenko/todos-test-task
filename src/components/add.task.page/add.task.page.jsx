import React from 'react';
import PageWrapper from "../common/page.wrapper/page.wrapper.jsx";
import AddTaskForm from "../common/add.task.form/add.task.form.jsx";
import PageTitle from "../common/page.title/page.title.jsx";

const AddTaskPage = () => {
  return (
    <PageWrapper>
      <PageTitle>
        Add a task
      </PageTitle>

      <AddTaskForm />
    </PageWrapper>
  );
};

export default AddTaskPage;
