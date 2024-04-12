import { Meta, StoryObj } from "@storybook/react";
import SimpleTable from "./SimpleTable";
import { fn } from "@storybook/test";
import { DynamicObject, SimpleTableField } from "./SimpleTable.d";

const meta = {
  title: "Components/SimpleTable",
  component: SimpleTable,
  parameters: {
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: {},
} satisfies Meta<typeof SimpleTable>;

export default meta;
type Story = StoryObj<typeof meta>;

interface SampleTableFields extends DynamicObject {
  first_name: string;
  last_name: string;
  address: string;
  age: number;
}

const fieldsToUse: SimpleTableField<SampleTableFields>[] = [
  { key: "Last Name", value_field: "last_name" },
  { key: "First Name", value_field: "first_name" },
  { key: "Age + 1", value_field: "age" },
  {
    key: "Address",
    value_field: "address",
    onClick: (row) => alert(row.age),
    stopOnClickPropagation: true,
  },
];

const sample_source: SampleTableFields[] = [
  { first_name: "hello", last_name: "test", age: 2, address: "Here" },
  { first_name: "hello", last_name: "test", age: 2, address: "Here" },
  { first_name: "hello", last_name: "test", age: 2, address: "Here" },
  { first_name: "hello", last_name: "test", age: 2, address: "Here" },
  { first_name: "hello", last_name: "test", age: 2, address: "Here" },
  { first_name: "hello", last_name: "test", age: 2, address: "Here" },
];

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    datasource: sample_source,
    fields: fieldsToUse,
    onRowClick: fn(),
  },
};
