"use client";

import React from "react";
import { tableSchema, tableData } from "./data";
import { tableCellVsComponent } from "./displayMap";
import { actionHandler } from "./tableBuilder.action";

const RenderHeader = ({ tableSchemaState }) => {
  return (
    <tr>
      {tableSchemaState.map((column) => {
        const Cell =
          tableCellVsComponent[
            column.cell as keyof typeof tableCellVsComponent
          ];
        return <th key={column.id}>{<Cell value={column.title} />}</th>;
      })}
    </tr>
  );
};

const CellWrapper = ({
  value,
  row,
  column,
  rowIndex,
  columnIndex,
  tableState,
  setTableState,
  actionHandler,
}) => {
  const Cell =
    tableCellVsComponent[column.cell as keyof typeof tableCellVsComponent];

  return (
    <Cell
      value={value}
      row={row}
      column={column}
      rowIndex={rowIndex}
      columnIndex={columnIndex}
      tableState={tableState}
      setTableState={setTableState}
      actionHandler={actionHandler}
    />
  );
};

const RenderRow = ({
  tableState,
  tableSchemaState,
  setTableState,
  actionHandler,
}) => {
  return (
    <>
      {tableState?.map((row, rowIndex) => (
        <tr key={row.name}>
          {tableSchemaState.map((column, columnIndex) => {
            return (
              <td key={column.id}>
                <CellWrapper
                  key={`${row.name}-${column.id}`}
                  value={row[column.id as keyof typeof row]}
                  row={row}
                  column={column}
                  rowIndex={rowIndex}
                  columnIndex={columnIndex}
                  tableState={tableState}
                  setTableState={setTableState}
                  actionHandler={actionHandler}
                />
              </td>
            );
          })}
        </tr>
      ))}
    </>
  );
};

// Memoize components to prevent unnecessary re-renders
const MemoizedRenderHeader = React.memo(RenderHeader);
const MemoizedRenderRow = React.memo(RenderRow);

const TableBuilder = () => {
  const [tableState, setTableState] = React.useState(tableData);
  const [tableSchemaState, setTableSchemaState] = React.useState(tableSchema);


  return (
    <div>
      <table>
        <thead>
          <MemoizedRenderHeader tableSchemaState={tableSchemaState} />
        </thead>
        <tbody>
          <MemoizedRenderRow
            tableState={tableState}
            tableSchemaState={tableSchemaState}
            setTableState={setTableState}
            actionHandler={actionHandler}
          />
        </tbody>
      </table>
    </div>
  );
};

export default TableBuilder;
