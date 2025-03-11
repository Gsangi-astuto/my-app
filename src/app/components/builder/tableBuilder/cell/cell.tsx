import React from "react";

export type CellProps = {
  value: string;
};

export const TextCell = (props: CellProps) => {
  return (
    <div>
      <h1>{props.value}</h1>
    </div>
  );
};

export const InputCell = (props: CellProps) => {
  const { tableState, rowIndex, column, setTableState, actionHandler } = props;
  return (
    <input
      type="text"
      defaultValue={props.value}
      onChange={(e) =>
        actionHandler({
          action: "update",
          tableState,
          setTableState,
          rowIndex,
          column,
          payload: e.target.value,
        })
      }
    />
  );
};

export const NumberCell = (props: CellProps) => {
  return (
    <div>
      <h1>{props.value}</h1>
    </div>
  );
};

export const ToggleCell = (props: CellProps) => {
  const { tableState, rowIndex, column, setTableState, actionHandler } = props;
  return (
    <div>
      <h1
        onClick={() => {
          actionHandler({
            action: "toggle",
            tableState,
            setTableState,
            rowIndex,
            column,
          });
        }}
      >
        {props.value.toString()}
      </h1>
    </div>
  );
};
