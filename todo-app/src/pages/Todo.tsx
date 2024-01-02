import { useParams } from "react-router-dom";
import DataTable from "../components/DataTableComponent";
import { TODO_FORM_FIELDS } from "../constants/form-field-configurations.constant";
import {
  TABLE_CONFIGURATION,
  TODOS_TABLE,
} from "../constants/table-configurations.constant";

const Todo = () => {
  const { columns, name, pageSize } = TABLE_CONFIGURATION[TODOS_TABLE];
  const fields = TODO_FORM_FIELDS;
  //GetParams
  const params = useParams();
  let todoListId: number = params.id !== undefined ? parseInt(params.id) : 0;
  const formData = {
    id: "",
    title: "",
    description: "",
    isComplete: false,
    todoListId: todoListId,
  };
  return (
    <DataTable
      pageSize={pageSize}
      tableName={name}
      columns={columns}
      fields={fields}
      formData={formData}
      todoListId={todoListId}
    />
  );
};

export default Todo;
