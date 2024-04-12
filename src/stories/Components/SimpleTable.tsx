import React from "react";

import {
  SimpleTableParams,
  SimpleTableField,
  DynamicObject,
} from "./SimpleTable.d";

export function generateColumnTemplate<T>(
  fields: SimpleTableField<T>[]
): string {
  let resultTemplate = "";

  fields.forEach((field) => {
    resultTemplate = `${resultTemplate} minmax(${field.minWidth ?? "0"}, ${field.maxWidth ?? "1fr"})`;
  });

  return resultTemplate;
}

export default function SimpleTable<T extends DynamicObject>({
  datasource,
  fields,
}: SimpleTableParams<T>) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: generateColumnTemplate(fields),
        gap: "0px",
        width: "100%",
      }}
    >
      {fields.map((field) => {
        return (
          <div
            style={{
              color: "white",
              background: "red",
              padding: "5px",
              textAlign: "center",
            }}
          >
            {field.key}
          </div>
        );
      })}
      {datasource.map((row) => {
        return fields.map((field) => {
          const item: SimpleTableField<T> = field;
          return (
            <div
              style={{
                cursor: item.onClick ? "pointer" : "default",
                textAlign: "center",
                padding: "5px",
                borderBottom: "1px solid lightgrey",
                ["&:hover"]: { background: "red" },
              }}
              onClick={(event) => {
                if (item.onClick) {
                  if (item.stopOnClickPropagation) event.stopPropagation();
                  item.onClick(row);
                }
              }}
            >
              {item?.customGetter
                ? item.customGetter(row)
                : row[item.value_field]}
            </div>
          );
        });
      })}
    </div>
  );
}
