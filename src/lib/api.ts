import { TaskI } from "@/app/components/task";
import axios, { AxiosError } from "axios";

const instance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/todos",
  headers: {
    "Content-Type": "application/json",
  },
});

export const getTasks = async () => {
  try {
    const response = await instance.get<TaskI[]>("/?_limit=10");
    return response.data;
  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      console.log(error.response?.data);
    } else if (error instanceof Error) {
      console.log(error.message);
    } else {
      console.log("Unknown error occurred");
    }
  }
};

export const createTask = async (task: TaskI) => {
  try {
    const response = await instance.post("/", task);
    return response.data;
  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      console.log(error.response?.data);
    } else if (error instanceof Error) {
      console.log(error.message);
    } else {
      console.log("Unknown error occurred");
    }
  }
};

export const deleteTask = async (id: number) => {
  try {
    const response = await instance.delete(`/${id}`);
    return (response.status === 200);
  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      console.log(error.response?.data);
    } else if (error instanceof Error) {
      console.log(error.message);
    } else {
      console.log("Unknown error occurred");
    }
  }
};
