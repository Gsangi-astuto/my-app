export const tableSchema = [
  {
    id: "name",
    title: "Name",
    cell: "TEXT",
  },
  {
    id: "age",
    title: "Age",
    cell: "NUMBER",
  },
  {
    id: "email",
    title: "Email",
    cell: "TEXT",
  },
  {
    id: "address",
    title: "Address",
    cell: "INPUT",
  },
  {
    id: "toggle",
    title: "Toggle",
    cell: "TOGGLE",
  },
];

export const tableData = Array.from({ length: 10 }, (_, index) => ({
  name: `User ${index + 1}`,
  age: Math.floor(Math.random() * 50) + 20,
  email: `user${index + 1}@example.com`,
  address: `${Math.floor(Math.random() * 999) + 1} ${
    ["Main St", "Oak Ave", "Maple Rd", "Cedar Ln"][
      Math.floor(Math.random() * 4)
    ]
  }, Anytown, USA`,
  toggle: Math.random() > 0.5,
}));
