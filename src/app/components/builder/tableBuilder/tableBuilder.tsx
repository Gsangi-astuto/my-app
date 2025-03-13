"use client";

import React from "react";
import { tableSchema, tableData } from "./data";
import { tableCellVsComponent } from "./displayMap";
import cn from "@/app/utils/utils";
import { getRowProps } from "./tableBuilder.config";
import { onAction } from "./tableBuilder.action";

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
  onAction,
  config,
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
      onAction={onAction}
      config={config}
    />
  );
};

const RenderRow = ({
  tableState,
  tableSchemaState,
  setTableState,
  onAction,
}) => {
  const { rowIdConfig, rowClassName } = getRowProps({
    tableSchema: tableSchemaState,
    tableData: tableState,
  });
  return (
    <>
      {tableState?.map((row, rowIndex) => (
        <tr key={row.name} className={cn(rowClassName)}>
          {tableSchemaState.map((column, columnIndex) => {
            return (
              <td
                key={column.id}
                className={cn(rowIdConfig[column.id]?.cellClassName)}
              >
                <CellWrapper
                  key={`${row.name}-${column.id}`}
                  value={row[column.id as keyof typeof row]}
                  row={row}
                  column={column}
                  rowIndex={rowIndex}
                  columnIndex={columnIndex}
                  tableState={tableState}
                  setTableState={setTableState}
                  onAction={onAction}
                  config={rowIdConfig[column.id]}
                />
              </td>
            );
          })}
        </tr>
      ))}
    </>
  );
};

const MemoizedRenderHeader = React.memo(RenderHeader);
const MemoizedRenderRow = React.memo(RenderRow);

const TableBuilder = () => {
  const [tableState, setTableState] = React.useState(tableData);

  return (
    <div>
      <table>
        <thead>
          <MemoizedRenderHeader tableSchemaState={tableSchema} />
        </thead>
        <tbody>
          <MemoizedRenderRow
            tableState={tableState}
            tableSchemaState={tableSchema}
            setTableState={setTableState}
            onAction={onAction}
          />
        </tbody>
      </table>
    </div>
  );
};

export default TableBuilder;
