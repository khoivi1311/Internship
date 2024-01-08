import axios from "axios";
import { baseURL } from "@/app/lib/baseURL";
import { unstable_noStore as noStore } from 'next/cache';
import {
  DELETE_FAILED,
  DELETE_SUCCESSFUL,
  ADD_SUCCESSFUL,
  ADD_FAILED,
  UPDATE_SUCCESSFUL,
  UPDATE_FAILED,
} from "@/app/lib/constants/messages";

//Get all data
const getAll = async (tableName: string, filter?: any, id?: number) => {
  noStore();

  const query = filter
    ? `?${new URLSearchParams({ filter: JSON.stringify(filter) }).toString()}`
    : "";
    
  if (tableName === "todos") {
    tableName = `todo-lists/${id}/todos`;
  }

  try {
    const response: any = await axios({
      url: `${baseURL}${tableName}${query}`,
      method: "GET",
    });
    if (response.status === 200) {
      const json = await response.data;
      return json;
    }
  } catch (e) {}
};

//Delete item by id
const deleteById = async (
  id: number,
  tableName: string,
  setData: Function,
  setMessageNotification: Function,
  setStatus: Function,
  setOpenNotification: Function,
  filter?: any,
  todoListId?: number
) => {
  try {
    const response: Response = await axios({
      url: `${baseURL}${tableName}/${id}`,
      method: "DELETE",
    });
    if (response.status === 204) {
      const data = await getAll(`${tableName}`, filter, todoListId);
      setData(data);
      setMessageNotification(DELETE_SUCCESSFUL(`${tableName}`));
      setStatus("success");
      setOpenNotification(true);
    }
  } catch (e: any) {
    setMessageNotification(DELETE_FAILED(`${tableName}`));
    setStatus("error");
    setOpenNotification(true);
  }
};

//Update item by id
const patchItemById = async (
  tableName: string,
  data: any,
  setData: Function,
  filter?: any
) => {
  try {
    const response: Response = await axios({
      url: `${baseURL}${tableName}/${data.id}`,
      method: "PATCH",
      data: data,
      headers: { "Content-Type": "application/json" },
    });
    if (response.status === 204) {
      const res = await getAll(tableName, filter, data.todoListId);
      setData(res);
    }
  } catch (e) {}
};

//Create new item
const createNew = async (
  tableName: string,
  data: any,
  setData: Function,
  setMessageNotification: Function,
  setStatus: Function,
  setOpenNotification: Function,
  filter?: any
) => {
  try {
    const response: Response = await axios({
      url: `${baseURL}${tableName}`,
      method: "POST",
      data: data,
      headers: { "Content-Type": "application/json" },
    });
    if (response.status === 200) {
      const res = await getAll(`${tableName}`, filter, data.todoListId);
      setData(res);
      setMessageNotification(ADD_SUCCESSFUL(`${tableName}`));
      setStatus("success");
      setOpenNotification(true);
    }
  } catch (e: any) {
    setMessageNotification(ADD_FAILED(`${tableName}`));
    setStatus("error");
    setOpenNotification(true);
  }
};

//Replace item by id
const putItemById = async (
  tableName: string,
  data: any,
  setData: Function,
  setMessageNotification: Function,
  setStatus: Function,
  setOpenNotification: Function,
  filter?: any
) => {
  try {
    const response: Response = await axios({
      url: `${baseURL}${tableName}/${data.id}`,
      method: "PUT",
      data: data,
      headers: { "Content-Type": "application/json" },
    });
    if (response.status === 204) {
      const res = await getAll(`${tableName}`, filter, data.todoListId);
      setData(res);
      setMessageNotification(UPDATE_SUCCESSFUL(`${tableName}`));
      setStatus("success");
      setOpenNotification(true);
    }
  } catch (e: any) {
    setMessageNotification(UPDATE_FAILED(`${tableName}`));
    setStatus("error");
    setOpenNotification(true);
  }
};

export { getAll, deleteById, patchItemById, createNew, putItemById };
