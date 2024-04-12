import React, { ReactNode } from "react";

export type DynamicObject = { [key: string]: ReactNode };

export interface SimpleTableField<T> {
  /**
   * The Title for the column
   */
  key: ReactNode;
  /**
   * The field to take the value
   */
  value_field: keyof T;
  /**
   * The css style for the cell
   */
  cell_style?: React.CSSProperties;
  /**
   * The style for the column header
   */

  header_style?: React.CSSProperties;
  /**
   * A function to make a custom render for the cell
   *
   * @param row This is the current row of the cell
   * @returns
   */

  maxWidth?: Property.Width<string | number> | undefined;
  minWidth?: Property.Width<string | number> | undefined;
  width?: Property.Width<string | number> | undefined;

  customGetter?: (row: T) => ReactNode;
  /**
   *
   * @param row This is the current row of the cell
   * @param stopPropagation prevent the event from triggering parent elements events
   * @returns
   */
  onClick?: (row: T) => unknown;
  stopOnClickPropagation?: boolean;
}

export interface SimpleTableParams<T extends DynamicObject> {
  /**
   * The content to display on the table
   */
  datasource: T[];
  fields: SimpleTableFields<T>[];
  onRowClick: (row: T) => void;
}
