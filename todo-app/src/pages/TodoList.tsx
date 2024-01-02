import DataTable from "../components/DataTableComponent";
import { TODO_LIST_FORM_FIELDS } from "../constants/form-field-configurations.constant";
import {
  TABLE_CONFIGURATION,
  TODO_LISTS_TABLE,
} from "../constants/table-configurations.constant";

const TodoList = () => {
  const { columns, name, pageSize, includes } = TABLE_CONFIGURATION[TODO_LISTS_TABLE];
  const fields = TODO_LIST_FORM_FIELDS;
  const formData = {
    id: "",
    title: "",
  };
  return (
    <DataTable
      pageSize={pageSize}
      tableName={name}
      columns={columns}
      includes={includes}
      fields={fields}
      formData={formData}
    />
  );
};

export default TodoList;
