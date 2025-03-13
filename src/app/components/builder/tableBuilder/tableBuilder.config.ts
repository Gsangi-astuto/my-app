import cn from "@/app/utils/utils";

export const getRowProps = ({ tableSchema, tableData }) => {
  const rowIdConfig = tableSchema?.reduce((acc, curr) => {
    const { id } = curr;
    return {
      ...acc,
      [id]: {
        cellClassName: "p-4 border border-gray-300",
        className: cn(""),
      },
    };
  }, {});

  console.log(rowIdConfig);

  return {
    rowIdConfig,
    rowClassName: "",
  };
};
