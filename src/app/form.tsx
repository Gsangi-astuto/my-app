"use client";

import { useState } from "react";
import FormBuilder from "./components/builder/formBuilder/formBuilder";
import { FormConfig, FormData } from "./components/builder/formBuilder/types";

const formData: FormData = {
  firstName: "Sanskar",
  lastName: "Garg",
  email: "sanskar@gmail.com",
  phone: "7392922271",
};

const formConfig: FormConfig[] = [
  {
    id: "firstName",
    label: "First Name",
    cell: "input",
    // validationType: ["required", "noTextWithout3Chars", "noTextWithoutSpaces"],
    validationType: ["required"],
  },
  {
    id: "lastName",
    label: "Last Name",
    cell: "input",
    // validationType: ["required", "noTextWithout3Chars", "noTextWithoutSpaces"],
    validationType: ["required"],
  },
  {
    id: "email",
    label: "Email",
    cell: "input",
    // validationType: ["required", "email"],
    validationType: ["required"],
  },
  {
    id: "phone",
    label: "Phone",
    cell: "input",
    // validationType: ["required", "phone"],
    validationType: ["required"],
  },
];

export default function FormBuilderPage() {
  const transformedData = Object.entries(formData).reduce(
    (acc, [key, value]) => {
      acc[key] = {
        value,
        error: null,
      };
      return acc;
    },
    {} as FormData
  );

  const [formDataState, setFormDataState] = useState<FormData>(transformedData);
  const handleSubmit = (formData: FormData) => {
    setFormDataState(formData);
  };

  return (
    <div>
      <FormBuilder
        formData={formDataState}
        config={formConfig}
        handleSubmit={handleSubmit}
      />
      <div>{JSON.stringify(formDataState)}</div>
    </div>
  );
}
