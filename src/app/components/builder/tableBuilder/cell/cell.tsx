import cn from "@/app/utils/utils";
import React from "react";

export type CellProps = {
  value: string;
};

const WithTableSelectCell = (Component: React.ComponentType<CellProps>) => {
  const WithTableSelectCell = (props: CellProps) => {
    const {
      tableState,
      rowIndex,
      column,
      setTableState,
      onAction,
      config,
      rowIndex,
      columnIndex,
    } = props;

    const onChange = (action: string, payload: any) => {
      onAction({
        action,
        tableState,
        setTableState,
        rowIndex,
        column,
        payload,
        columnIndex,
      });
    };
    return <Component {...props} onChange={onChange} />;
  };

  return WithTableSelectCell;
};
const BaseTextCell = (props: CellProps) => {
  const { config } = props;
  return (
    <div className={cn(config?.className)}>
      <h1>{props.value}</h1>
    </div>
  );
};

export const TextCell = WithTableSelectCell(BaseTextCell);

const BaseNumberCell = (props: CellProps) => {
  const { tableState, rowIndex, column, setTableState, onAction } = props;
  return (
    <div>
      <h1>{props.value}</h1>
    </div>
  );
};

export const NumberCell = WithTableSelectCell(BaseNumberCell);

const BaseInputCell = (props: CellProps) => {
  const { tableState, rowIndex, column, setTableState, onAction } = props;
  return (
    <input
      type="text"
      defaultValue={props.value}
      onChange={(e) =>
        onAction({
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

export const InputCell = WithTableSelectCell(BaseInputCell);

const BaseToggleCell = (props: CellProps) => {
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

export const ToggleCell = WithTableSelectCell(BaseToggleCell);
