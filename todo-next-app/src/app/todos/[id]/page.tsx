"use client";

import DataTable from "@/app/components/DataTableComponent";
import { TODO_FORM_FIELDS } from "@/app/lib/constants/form-field-configurations.constant";
import {
  TABLE_CONFIGURATION,
  TODOS_TABLE,
} from "@/app/lib/constants/table-configurations.constant";

export default function Page({ params }: { params: { id: string } }) {
  const { columns, name, pageSize } = TABLE_CONFIGURATION[TODOS_TABLE];
  const fields = TODO_FORM_FIELDS;
  //GetParams
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
}
