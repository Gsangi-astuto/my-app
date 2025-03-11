import { Input } from "./cell";

type CellVsComponent = {
  [key: string]: React.ComponentType<any>;
};

export const cellVsComponent: CellVsComponent = {
  input: Input,
};
