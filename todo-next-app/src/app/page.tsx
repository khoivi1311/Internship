"use client";

import DataTable from "@/app/components/DataTableComponent";
import { TODO_LIST_FORM_FIELDS } from "@/app/lib/constants/form-field-configurations.constant";
import {
  TABLE_CONFIGURATION,
  TODO_LISTS_TABLE,
} from "@/app/lib/constants/table-configurations.constant";

export default function Home() {
  const { columns, name, pageSize, includes } =
    TABLE_CONFIGURATION[TODO_LISTS_TABLE];
  const fields = TODO_LIST_FORM_FIELDS;
  const formData = {
    id: "",
    title: "",
  };
  return (
    <DataTable
      tableName={name}
      pageSize={pageSize}
      includes={includes}
      fields={fields}
      formData={formData}
      columns={columns}
    />
  );
}
