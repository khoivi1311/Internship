// import Button from "@mui/material/Button";
// import AddIcon from "@mui/icons-material/Add";
// import TodoListTable from "../components/TodoListTableComponent";
// import { useEffect, useState } from "react";
// import axios from "axios";
// import Notification from "../components/NotificationComponent";
// import Confirmation from "../components/ConfirmationComponent";
// import TodoListForm from "../components/TodoListFormComponent";

import DataTable from "../components/DataTableComponent";
import { TABLE_CONFIGURATION, TODO_LISTS_TABLE } from "../constants/table-configurations.constant";

// const TodoList = () => {
//   //Todo Lists state
//   const [todoLists, setTodoLists] = useState([]);

//   //Form state
//   const [openForm, setOpenForm] = useState(false);
//   const [actionForm, setActionForm] = useState<String | null>(null);
//   const [dataForm, setDataForm] = useState<any>({
//     id: "",
//     title: "",
//   });

//   //Notification states
//   const [openNotification, setOpenNotification] = useState(false);
//   const [messageNotification, setMessageNotification] = useState<String | null>(
//     null
//   );
//   const [status, setStatus] = useState<String | null>(null);

//   //Confirmation states
//   const [openConfirmation, setOpenConfirmation] = useState(false);
//   const [messageConfirmation, setMessageConfirmation] = useState<String | null>(
//     null
//   );
//   const [deleteId, setDeleteId] = useState(0);

//   //Fetch data todo lists
//   const getTodoLists = () => {
//     axios
//       .get("http://localhost:3000/todo-lists")
//       .then((res) => {
//         setTodoLists(res.data);
//       });
//   };

//   useEffect(() => {
//     getTodoLists();
//   }, []);

//   //Handle delete todo list
//   const deleteTodoListClicked = (todoList: any) => {
//     setOpenConfirmation(true);
//     setMessageConfirmation(todoList.title);
//     setDeleteId(todoList.id);
//   };

//   const handleDeleteTodoList = (id: number) => {
//     setOpenConfirmation(false);
//     axios
//       .delete("http://127.0.0.1:3000/todo-lists/" + id)
//       .then((res) => {
//         if (res.status === 204) {
//           getTodoLists();

//           setMessageNotification("Delete todo list successfully");
//           setStatus("success");
//           setOpenNotification(true);
//         }
//       })
//       .catch(() => {
//         setMessageNotification("Delete todo list failed");
//         setStatus("error");
//         setOpenNotification(true);
//       });
//   };

//   const createTodoListClicked = () => {
//     setActionForm("Create");
//     setOpenForm(true);
//   };

//   const updateTodoListClicked = (todoList: any) => {
//     setDataForm(todoList);
//     setActionForm("Update");
//     setOpenForm(true);
//   };

//   //Handle todo form
//   const handleCloseForm = () => {
//     setDataForm({
//       id: "",
//       title: "",
//     });
//     setOpenForm(false);
//   };

//   const handleTitleFormChange = (title: string) => {
//     let data = dataForm;
//     data.title = title.trim();
//     setDataForm(data);
//   };

//   const handleActionForm = (action: string) => {
//     if (action === "Create") {
//       const data = {
//         title: dataForm.title,
//       };
//       axios
//         .post("http://127.0.0.1:3000/todo-lists", data)
//         .then((res) => {
//           if (res.status === 200) {
//             getTodoLists();

//             setMessageNotification("Create todo list successfully");
//             setStatus("success");
//             setOpenNotification(true);

//             setOpenForm(false);
//             setDataForm({
//               id: "",
//               title: "",
//             });
//           }
//         })
//         .catch(() => {
//           setMessageNotification("Create todo list failed");
//           setStatus("error");
//           setOpenNotification(true);
//         });
//     } else if (action === "Update") {
//       axios
//         .put("http://127.0.0.1:3000/todo-lists/" + dataForm.id, dataForm)
//         .then((res) => {
//           if (res.status === 204) {
//             getTodoLists();
//             setMessageNotification("Update todo list successfully");
//             setStatus("success");
//             setOpenNotification(true);
//             setOpenForm(false);
//             setDataForm({
//               id: "",
//               title: "",
//             });
//           }
//         })
//         .catch(() => {
//           setMessageNotification("Update todo list failed");
//           setStatus("error");
//           setOpenNotification(true);
//         });
//     } else {
//       return;
//     }
//   };

//   //Handle notification
//   const handleCloseNotification = () => {
//     setOpenNotification(false);
//   };

//   //Handle confirmation
//   const handleCloseConfirmation = () => {
//     setOpenConfirmation(false);
//   };

//   return (
//     <div style={{ display: "flex", justifyContent: "center" }}>
//       <div
//         style={{
//           marginTop: "45px",
//           maxWidth: 700,
//         }}
//       >
//         <div
//           style={{
//             marginBottom: "20px",
//             display: "flex",
//             justifyContent: "right",
//           }}
//         >
//           <Button
//             variant="contained"
//             color="success"
//             style={{ marginRight: "15px" }}
//             startIcon={<AddIcon />}
//             onClick={() => createTodoListClicked()}
//           >
//             Create Todo List
//           </Button>
//         </div>
//         <div style={{ padding: "0px 15px" }}>
//           <TodoListTable
//             todoLists={todoLists}
//             updateTodoListClicked={updateTodoListClicked}
//             deleteTodoListClicked={deleteTodoListClicked}
//           />
//         </div>
//         <TodoListForm
//           open={openForm}
//           action={actionForm}
//           data={dataForm}
//           handleTitleChange={handleTitleFormChange}
//           handleAction={handleActionForm}
//           handleClose={handleCloseForm}
//         />
//         <Notification
//           open={openNotification}
//           message={messageNotification}
//           status={status}
//           handleClose={handleCloseNotification}
//         />
//         <Confirmation
//           open={openConfirmation}
//           message={messageConfirmation}
//           id={deleteId}
//           handleDelete={handleDeleteTodoList}
//           handleClose={handleCloseConfirmation}
//         />
//       </div>
//     </div>
//   );
// };

const TodoList = () => {
  const { columns, name, pageSize, includes } = TABLE_CONFIGURATION[TODO_LISTS_TABLE]; 
  return (
    <DataTable
      pageSize={pageSize}
      tableName={name}
      columns={columns}
      includes={includes}
    />
  );
};

export default TodoList;
