export const actionHandler = ({
  action,
  tableState,
  setTableState,
  rowIndex,
  columnIndex,
  column,
  payload,
}) => {
  switch (action) {
    case "update":
      setTableState(
        tableState.map((row, index) =>
          index === rowIndex ? { ...row, [column.id]: payload } : row
        )
      );
      break;
    case "toggle":
      setTableState(
        tableState.map((row, index) =>
          index === rowIndex ? { ...row, [column.id]: !row[column.id] } : row
        )
      );
      break;
    default:
      break;
  }
};
