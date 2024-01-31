import {v4 as uuidv4} from 'uuid';
import {apiService} from "./api.service.js";
import {BASE_URL} from "../utils/constants.js";

const addTask = async (taskData) => {
  try {
    const id = uuidv4();

    const currentTime = Date.now();

    const dataToSave = JSON.stringify({
      ...taskData,
      id,
      createdAt: currentTime,
      editedAt: currentTime,
    });

    const url = '/tasks'

    const options = {
      method: 'POST',
      body: dataToSave,
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const result = await apiService.apiRequest(BASE_URL, url, options);

    return {
      data: result,
      title: 'Success',
      text: 'The task was successfully added',
      type: 'success',
    }
  } catch (error) {
    return {
      data: null,
      title: 'Error',
      text: 'Something went wrong',
      type: 'error',
    }
  }
}

const updateTask = async (taskData) => {
  try {
    const currentTime = Date.now();

    const dataToSave = JSON.stringify({
      ...taskData,
      editedAt: currentTime,
    });

    const url = `/tasks/${taskData.id}`

    const options = {
      method: 'PATCH',
      body: dataToSave,
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const result = await apiService.apiRequest(BASE_URL, url, options);

    return {
      data: result,
      title: 'Success',
      text: 'The task was successfully updated',
      type: 'success',
    }
  } catch (error) {
    return {
      data: null,
      title: 'Error',
      text: 'Something went wrong',
      type: 'error',
    }
  }
}

const deleteTaskById = async (taskId) => {
  try {
    const url = `/tasks/${taskId}`

    const options = {
      method: 'DELETE',
    };

    const result = await apiService.apiRequest(BASE_URL, url, options);

    return {
      data: result,
      title: '',
      text: '',
      type: '',
    }
  } catch (error) {
      return {
        data: null,
        title: 'Error',
        text: 'Something went wrong',
        type: 'error',
      }
  }
}

const getTaskById = async (taskId) => {
  try {
    const url = `/tasks/${taskId}`
    const result = await apiService.apiRequest(BASE_URL, url);

    return {
      data: result,
      title: '',
      text: '',
      type: '',
    }
  } catch (error) {
    return {
      data: null,
      title: 'Error',
      text: 'Something went wrong',
      type: 'error',
    }
  }

}

const getTasksList = async () => {
  try {
    const url = `/tasks`
    const result = await apiService.apiRequest(BASE_URL, url);

    return {
      data: result,
      title: '',
      text: '',
      type: '',
    }
  } catch (error) {
    return {
      data: null,
      title: 'Error',
      text: 'Something went wrong',
      type: 'error',
    }
  }
}

export const tasksService = {
  addTask,
  updateTask,
  getTaskById,
  getTasksList,
  deleteTaskById,
};
