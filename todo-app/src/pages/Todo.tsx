// import { useEffect, useState } from "react";
// import TodoTable from "../components/TodoTableComponent";
// import axios from "axios";
// import Button from "@mui/material/Button";
// import AddIcon from "@mui/icons-material/Add";
// import TodoForm from "../components/TodoFormComponent";
// import Notification from "../components/NotificationComponent";
// import Confirmation from "../components/ConfirmationComponent";
// import { useParams } from "react-router-dom";
// //import Paginate from "../components/PaginateComponent";

import DataTable from "../components/DataTableComponent";
import {
  TABLE_CONFIGURATION,
  TODOS_TABLE,
} from "../constants/table-configurations.constant";

// const Todo = () => {
//   //Todos state
//   const [todos, setTodos] = useState([]);

//   //Page state
//   const [pageNumber, setPageNumber] = useState(1);
//   const [totalPages, setTotalPages] = useState(1);

//   //Todo List params
//   const params = useParams();
//   let todoListId: number = params.id !== undefined ? parseInt(params.id) : 0;

//   //Form state
//   const [openForm, setOpenForm] = useState(false);
//   const [actionForm, setActionForm] = useState<String | null>(null);
//   const [dataForm, setDataForm] = useState<any>({
//     id: "",
//     title: "",
//     description: "",
//     isComplete: "",
//     todoListId: "",
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

//   //Fetch data todo
//   const getTodos = () => {
//     axios
//       .get("http://127.0.0.1:3000/todo-lists/" + todoListId + "/todos")
//       .then((res) => {
//         setTodos(res.data);
//       });
//   };

//   useEffect(() => {
//     setPageNumber(1);
//     getTodos();
//   }, []);

//   //Handle is complete
//   const isCompleteChange = (todo: any) => {
//     const data = {
//       isComplete: !todo.isComplete,
//     };
//     axios.patch("http://localhost:3000/todos/" + todo.id, data).then((res) => {
//       if (res.status === 204) {
//         getTodos();
//       }
//     });
//   };

//   //Handle delete Todo
//   const deleteTodoClicked = (todo: any) => {
//     setOpenConfirmation(true);
//     setMessageConfirmation(todo.title);
//     setDeleteId(todo.id);
//   };

//   const handleDeleteTodo = (id: number) => {
//     setOpenConfirmation(false);
//     axios
//       .delete("http://127.0.0.1:3000/todos/" + id)
//       .then((res) => {
//         if (res.status === 204) {
//           getTodos();

//           // if (pageNumber > totalPages) {
//           //   handlePageChange(pageNumber - 1);
//           // }

//           setMessageNotification("Delete todo successfully");
//           setStatus("success");
//           setOpenNotification(true);
//         }
//       })
//       .catch(() => {
//         setMessageNotification("Delete todo failed");
//         setStatus("error");
//         setOpenNotification(true);
//       });
//   };

//   //Handle create Todo
//   const createTodoClicked = () => {
//     setActionForm("Create");
//     setOpenForm(true);
//   };

//   //Handle update Todo
//   const updateTodoClicked = (todo: any) => {
//     setDataForm(todo);
//     setActionForm("Update");
//     setOpenForm(true);
//   };

//   //Handle todo form
//   const handleCloseForm = () => {
//     setDataForm({
//       id: "",
//       title: "",
//       description: "",
//       isComplete: "",
//       todoListId: "",
//     });
//     setOpenForm(false);
//   };

//   const handleTitleFormChange = (title: string) => {
//     let data = dataForm;
//     data.title = title.trim();
//     setDataForm(data);
//   };

//   const handleDescriptionFormChange = (description: string) => {
//     let data = dataForm;
//     data.description = description.trim();
//     setDataForm(data);
//   };

//   const handleActionForm = (action: string) => {
//     if (action === "Create") {
//       const data = {
//         title: dataForm.title.trim(),
//         description: dataForm.description.trim(),
//         isComplete: false,
//         todoListId: todoListId,
//       };
//       axios
//         .post("http://127.0.0.1:3000/todos", data)
//         .then((res) => {
//           if (res.status === 200) {
//             getTodos();

//             setMessageNotification("Create todo successfully");
//             setStatus("success");
//             setOpenNotification(true);

//             setOpenForm(false);
//             setDataForm({
//               id: "",
//               title: "",
//               description: "",
//               isComplete: "",
//               todoListId: "",
//             });
//           }
//         })
//         .catch(() => {
//           setMessageNotification("Create todo failed");
//           setStatus("error");
//           setOpenNotification(true);
//         });
//     } else if (action === "Update") {
//       axios
//         .put("http://127.0.0.1:3000/todos/" + dataForm.id, dataForm)
//         .then((res) => {
//           if (res.status === 204) {
//             getTodos();

//             setMessageNotification("Update todo successfully");
//             setStatus("success");
//             setOpenNotification(true);

//             setOpenForm(false);
//             setDataForm({
//               id: "",
//               title: "",
//               description: "",
//               isComplete: "",
//               todoListId: "",
//             });
//           }
//         })
//         .catch(() => {
//           setMessageNotification("Update todo failed");
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

//   // const handlePageChange = async (pageNumber: number) => {
//   //   setPageNumber(pageNumber);
//   //   getTodos();
//   // };

//   return (
//     <div style={{ marginTop: "45px" }}>
//       <div
//         style={{
//           marginBottom: "20px",
//           display: "flex",
//           justifyContent: "space-between",
//         }}
//       >
//         {/* <Paginate
//           totalPages={totalPages}
//           pageNumber={pageNumber}
//           handlePageChange={handlePageChange}
//         /> */}
//         <Button
//           variant="contained"
//           color="success"
//           style={{ marginRight: "15px" }}
//           startIcon={<AddIcon />}
//           onClick={() => createTodoClicked()}
//         >
//           Create Todo
//         </Button>
//       </div>
//       <div style={{ padding: "0px 15px" }}>
//         <TodoTable
//           todos={todos}
//           isCompleteChange={isCompleteChange}
//           updateTodoClicked={updateTodoClicked}
//           deleteTodoClicked={deleteTodoClicked}
//         />
//       </div>
//       <TodoForm
//         open={openForm}
//         action={actionForm}
//         data={dataForm}
//         handleTitleChange={handleTitleFormChange}
//         handleDescriptionChange={handleDescriptionFormChange}
//         handleAction={handleActionForm}
//         handleClose={handleCloseForm}
//       />
//     </div>
//   );
// };

const Todo = () => {
  const { columns, name, pageSize } = TABLE_CONFIGURATION[TODOS_TABLE];
  return <DataTable pageSize={pageSize} tableName={name} columns={columns} />;
};

export default Todo;
