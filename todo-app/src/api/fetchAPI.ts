import axios from "axios";
import { DELETE_FAILED, DELETE_SUCCESSFUL } from "../constants/messages";

const baseURL = "http://localhost:3000/";

const getAll = async (tableName: string, filter?: any, id?: number) => {
  const query = filter
    ? `?${new URLSearchParams({ filter: JSON.stringify(filter) }).toString()}`
    : "";
  if (tableName === "todos") {
    tableName = `todo-lists/ ${id}/todos`;
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
    setStatus("success");
    setOpenNotification(true);
  }
};

const patchItemById = async (
  tableName: string,
  id: number,
  data: any
) => {
  try {
    const response: Response = await axios({
      url: `${baseURL}${tableName}/${id}`,
      method: "PATCH",
      data: data,
      headers: { "Content-Type": "application/json" },
    });

  } catch (e) {}
};

export { getAll, deleteById };
