import { useEffect, useState } from "react";
import { DataGrid, GridActionsCellItem, GridRowParams } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import AddIcon from "@mui/icons-material/Add";
import {
  getAll,
  deleteById,
  patchItemById,
  createNew,
  putItemById,
} from "../api/fetchAPI";
import Notification from "../components/NotificationComponent";
import Confirmation from "../components/ConfirmationComponent";
import Checkbox from "@mui/material/Checkbox";
import FormDialog from "./FormDialogComponent";

//size, columns, rows,
const DataTable = (props: any) => {
  const { tableName, pageSize, includes, fields, formData, todoListId } = props;
  let { columns = [] } = props;

  //Data state
  const [data, setData] = useState([]);

  //Form state
  const [openForm, setOpenForm] = useState(false);
  const [actionForm, setActionForm] = useState<String | null>(null);
  const [dataForm, setDataForm] = useState<any>(formData);

  // Notification states
  const [openNotification, setOpenNotification] = useState(false);
  const [messageNotification, setMessageNotification] = useState<String | null>(
    null
  );
  const [status, setStatus] = useState<String | null>(null);

  //Confirmation states
  const [openConfirmation, setOpenConfirmation] = useState(false);
  const [messageConfirmation, setMessageConfirmation] = useState<String | null>(
    null
  );
  const [deleteId, setDeleteId] = useState(0);

  useEffect(() => {
    const getItems = async () => {
      const data = await getAll(`${tableName}`, includes, todoListId);
      setData(data);
    };
    getItems();
  }, []);

  //Create columns for table
  if (tableName === "todos") {
    columns = [
      ...columns,
      {
        field: "completed",
        type: "actions",
        headerName: "Completed",
        width: 90,
        align: "center",
        headerAlign: "center",
        getActions: (params: GridRowParams) => [
          <Checkbox
            checked={params.row.isComplete}
            onChange={() => handleCompletedChange(params.row)}
            inputProps={{ "aria-label": "controlled" }}
          />,
        ],
      },
    ];
  }

  columns = [
    ...columns,
    {
      field: "options",
      type: "actions",
      headerName: "Options",
      align: "center",
      headerAlign: "center",
      width: 100,
      getActions: (params: GridRowParams) => [
        <GridActionsCellItem
          icon={<EditIcon />}
          label="Update"
          color="success"
          onClick={() => updateOnClicked(params.row)}
        />,

        <GridActionsCellItem
          icon={<DeleteIcon />}
          label="Delete"
          color="error"
          disabled={params.row.todos != null ? true : false}
          onClick={() => deleteOnClicked(params.row)}
        />,
      ],
    },
  ];

  //Delete item
  const deleteOnClicked = (item: any) => {
    setOpenConfirmation(true);
    setMessageConfirmation(item.title);
    setDeleteId(item.id);
  };

  const handleDelete = async (id: number) => {
    await deleteById(
      id,
      tableName,
      setData,
      setMessageNotification,
      setStatus,
      setOpenNotification,
      includes,
      todoListId
    );
    setOpenConfirmation(false);
  };

  //Add new item
  const addNewOnClicked = () => {
    setOpenForm(true);
    setActionForm("Create");
    setDataForm(formData);
  };

  //Update item
  const updateOnClicked = (row: any) => {
    if (row.todos) {
      delete row.todos;
    }
    let data = { ...formData, ...row };
    setDataForm(data);
    setOpenForm(true);
    setActionForm("Update");
  };

  //Handle completed
  const handleCompletedChange = async (data: any) => {
    data.isComplete = !data.isComplete;
    await patchItemById(tableName, data, setData, includes);
  };

  //Handle action form
  const handleActionForm = (dataInput: any) => {
    if (actionForm === "Create") {
      let data = { ...dataForm, ...dataInput };
      delete data.id;
      createNew(
        tableName,
        data,
        setData,
        setMessageNotification,
        setStatus,
        setOpenNotification,
        includes
      );
      setOpenForm(false);
      setDataForm(formData);
    } else if (actionForm === "Update") {
      let data = { ...dataForm, ...dataInput };
      putItemById(
        tableName,
        data,
        setData,
        setMessageNotification,
        setStatus,
        setOpenNotification,
        includes
      );
      setOpenForm(false);
      setDataForm(formData);
    }
  };

  //Handle close Form
  const handleCloseForm = () => {
    setDataForm(formData);
    setOpenForm(false);
  };

  //Handle notification
  const handleCloseNotification = () => {
    setOpenNotification(false);
  };

  //Handle confirmation
  const handleCloseConfirmation = () => {
    setOpenConfirmation(false);
  };

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <h1>{tableName.toUpperCase()}</h1>
          </div>
          <div style={{ display: "flex", justifyContent: "right" }}>
            <Button
              style={{ marginBottom: "20px" }}
              variant="contained"
              color="primary"
              startIcon={<AddIcon />}
              onClick={() => addNewOnClicked()}
            >
              Add new
            </Button>
          </div>
          <Box sx={{ height: "fit-content", width: "fit-content" }}>
            <DataGrid
              rows={data}
              columns={columns}
              initialState={{
                pagination: {
                  paginationModel: {
                    pageSize: pageSize,
                  },
                },
              }}
              pageSizeOptions={[pageSize]}
              disableRowSelectionOnClick
            />
          </Box>
        </div>
      </div>
      <FormDialog
        open={openForm}
        action={actionForm}
        fields={fields}
        data={dataForm}
        handleAction={handleActionForm}
        handleClose={handleCloseForm}
      />
      <Notification
        open={openNotification}
        message={messageNotification}
        status={status}
        handleClose={handleCloseNotification}
      />
      <Confirmation
        open={openConfirmation}
        message={messageConfirmation}
        id={deleteId}
        handleDelete={handleDelete}
        handleClose={handleCloseConfirmation}
      />
    </div>
  );
};

export default DataTable;
