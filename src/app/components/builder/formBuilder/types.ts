export type FormConfig = {
  id: string;
  label: string;
  cell: "input" | "select" | "textarea";
  validationType: string[];
};

export type FormData = {
  [key: string]: Record<string, string | boolean> | boolean;
};
