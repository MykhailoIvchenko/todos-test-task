import React, {useState} from 'react';
import {Button, DatePicker, Flex, Form, Input, Switch} from 'antd';
import {useNavigate} from 'react-router-dom';
import {
  routesModel, taskModel,
  updateEntitiesResultTypes
} from '../../../utils/models.js';
import {tasksService} from '../../../services/tasks.service.js';
import LoaderWrapper from '../loader.wrapper/loader.wrapper.jsx';
import FormItem from 'antd/es/form/FormItem/index.js';
import Notification from "../notification/notification.jsx";
import './add.task.form.css';
import {helpers} from "../../../utils/helpers.js";

const AddTaskForm = ({initialData = taskModel, id = null}) => {
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);

  const [taskData, setTaskData] = useState(initialData);
  const [notification, setNotification] = useState(null);

  const updateTaskData = (newData) => {
    const fieldName = Object.keys(newData)[0];

    setTaskData(data => ({
      ...data,
      [fieldName]: newData[fieldName],
    }));
  }

  const submitForm = async () => {
    try {
      setIsLoading(true);

      let result;
      const deadline = helpers.getDateString(taskData?.deadline) || taskData?.deadline;

      const dataToSave = {
        ...taskData,
        deadline,
      }

      if (id) {
        result = await tasksService.updateTask(dataToSave);
      } else {
        result = await tasksService.addTask(dataToSave);
      }

      setNotification({
        type: result.type,
        title: result.title,
        text: result.text,
      })

      if (result.type !== updateEntitiesResultTypes.Error) {
        form.resetFields();

        setTimeout(() => {
          navigate(routesModel.home);
        }, 1500);
      }
    } catch (error) {
      setNotification({
        type: 'error',
        title: 'Error',
        text: 'Something went wrong.'
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <LoaderWrapper isLoading={isLoading}>
      <Form
        form={form}
        initialValues={initialData}
        onValuesChange={updateTaskData}
        onFinish={submitForm}
        layout={'vertical'}
        className={'AddTaskForm'}
      >
        <Form.Item
          label={'Task description'}
          name={'description'}
          rules={[{
            required: true,
            message: 'Please input task description!',
          }]}
        >
          <Input
            placeholder='Input description...'
            size={'large'}
          />
        </Form.Item>

        <Flex
          justify={'space-between'}
          gap={'middle'}
        >
          <Form.Item
            label={'Task deadline'}
            name={'deadline'}
            rules={[{
              required: true,
              message: 'Please input deadline for the task!',
            }]}
          >
            <DatePicker
              size={'large'}
              style={{width: '100%'}}
              format={'DD.MM.YYYY'}
            />
          </Form.Item>

          <FormItem
            label={`Task status: ${taskData?.isCompleted ? 'completed' : 'active'}`}
            name={'isCompleted'}
            className={'AddTaskForm-StatusLabel'}
          >
            <Switch />
          </FormItem>
        </Flex>

        <Form.Item>
          <Button
            type='primary'
            htmlType={'submit'}
          >
            Save task data
          </Button>
        </Form.Item>

        {notification &&
          <Notification
            title={notification?.title}
            type={notification?.type}
            text={notification?.text}
          />
        }
      </Form>
    </LoaderWrapper>
  );
};

export default AddTaskForm;
