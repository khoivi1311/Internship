import {
  GridColDef,
  GridRowParams,
  GridActionsCellItem,
} from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import ViewListIcon from "@mui/icons-material/ViewList";

//Todo List
export const TODO_LISTS_TABLE = "todo-lists";

const TODO_LISTS_COLUMNS: GridColDef[] = [
  {
    field: "id",
    type: "number",
    headerName: "ID",
    width: 90,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "details",
    type: "actions",
    headerName: "Details",
    width: 90,
    align: "center",
    headerAlign: "center",
    getActions: (params: GridRowParams) => [
      <Link to={`todos/${params.id}`}>
        <GridActionsCellItem
          icon={<ViewListIcon />}
          label="View"
          color="primary"
        ></GridActionsCellItem>
      </Link>,
    ],
  },
  {
    field: "title",
    type: "string",
    headerName: "Title",
    width: 250,
    align: "center",
    headerAlign: "center",
  },
];

const TODO_LISTS_INCLUDES = {
  include: ["todos"],
};

//Todo
export const TODOS_TABLE = "todos";

const TODOS_COLUMNS: GridColDef[] = [
  {
    field: "id",
    type: "number",
    headerName: "ID",
    width: 90,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "title",
    type: "string",
    headerName: "Title",
    width: 250,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "description",
    type: "string",
    headerName: "Description",
    width: 500,
    align: "center",
    headerAlign: "center",
  },  
];

export const TABLE_CONFIGURATION = {
  [TODO_LISTS_TABLE]: {
    columns: TODO_LISTS_COLUMNS,
    name: TODO_LISTS_TABLE,
    pageSize: 5,
    includes: TODO_LISTS_INCLUDES,
  },
  [TODOS_TABLE]: {
    columns: TODOS_COLUMNS,
    name: TODOS_TABLE,
    pageSize: 5,
  },
};
