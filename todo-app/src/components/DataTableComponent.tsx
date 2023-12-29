import { useEffect, useState } from "react";
import { DataGrid, GridActionsCellItem, GridRowParams } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import AddIcon from "@mui/icons-material/Add";
import { getAll, deleteById } from "../api/fetchAPI";
import Notification from "../components/NotificationComponent";
import Confirmation from "../components/ConfirmationComponent";
import { useParams } from "react-router-dom";

//size, columns, rows,
const DataTable = (props: any) => {
  const { tableName, pageSize, includes } = props;
  let { columns = [] } = props;

  //Data state
  const [data, setData] = useState([]);

  //GetParams
  const params = useParams();
  let todoListId: number = params.id !== undefined ? parseInt(params.id) : 0;

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
          onClick={() => {console.log(params)}}
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

  //Handle notification
  const handleCloseNotification = () => {
    setOpenNotification(false);
  };

  //Handle confirmation
  const handleCloseConfirmation = () => {
    setOpenConfirmation(false);
  };

  return (
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
          >
            Add new
          </Button>
        </div>
        <Box sx={{ height: 400, width: "fit-content" }}>
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
