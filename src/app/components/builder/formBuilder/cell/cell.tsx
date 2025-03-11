import { FormConfig } from "../types";
import React from "react";

const BaseInputCell = ({
  value,
  onChange,
  config,
  error,
}: {
  value: string;
  onChange: (value: string) => void;
  config: FormConfig;
  error: string;
}) => {
  return (
    <div className="flex gap-2">
      <p>{config?.label}</p>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={config.label}
      />
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
};

export const Input = React.memo(BaseInputCell);
