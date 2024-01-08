const TODO_FORM_FIELDS = [
  {
    name: "title",
    label: "Title",
    type: "text",
    rules: {
      required: true,
    },
  },
  {
    name: "description",
    label: "Description",
    type: "text",
    rules: {
      required: false,
    },
  },
];

const TODO_LIST_FORM_FIELDS = [
  {
    name: "title",
    label: "Title",
    type: "text",
    rules: {
      required: true,
    },
  },
];

export { TODO_FORM_FIELDS, TODO_LIST_FORM_FIELDS };
