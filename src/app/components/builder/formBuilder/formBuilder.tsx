"use client";

import { FormConfig, FormData } from "./types";
import { cellVsComponent } from "./cell/displayMap";
import { map, isEmpty } from "lodash";
import { useReducer, useEffect } from "react";

type FormAction = {
  type: "UPDATE_FORM_DATA" | "SET_ERROR";
  id: string;
  payload: FormData;
};

const FormBuilder = ({
  formData,
  config,
  handleSubmit,
}: {
  formData: FormData;
  config: FormConfig[];
  handleSubmit: (data: FormData) => void;
}) => {
  function formReducer(state: FormData, action: FormAction): FormData {
    switch (action.type) {
      case "UPDATE_FORM_DATA":
        return {
          ...state,
          [action.id]: {
            ...state[action.id],
            value: action.payload.value,
            error: action.payload.error,
          },
        };
      default:
        return state;
    }
  }

  const [formState, dispatch] = useReducer(formReducer, formData);

  const validate = (id: string, value: string) => {
    if (
      config
        .find((config) => config.id === id)
        ?.validationType?.includes("required") &&
      !value
    ) {
      return "Required";
    }
    return false;
  };

  const handleChange = ({ id, value }: { id: string; value: string }) => {
    const error = validate(id, value);
    dispatch({
      type: "UPDATE_FORM_DATA",
      id,
      payload: {
        value: isEmpty(value) ? "" : value,
        error: error ? error : false,
      },
    });
  };

  useEffect(() => {
    handleSubmit(formState);
  }, [formState]);

  return (
    <div className="flex flex-col gap-2">
      {map(config, (config) => {
        const Cell = cellVsComponent[config?.cell];
        const value = formState[config.id]?.value;
        return (
          <Cell
            key={config.id}
            config={config}
            value={value}
            error={formState[config.id]?.error}
            formState={formState}
            dispatch={dispatch}
            onChange={(value: string) => {
              handleChange({ id: config.id, value });
            }}
          />
        );
      })}
    </div>
  );
};

export default FormBuilder;
