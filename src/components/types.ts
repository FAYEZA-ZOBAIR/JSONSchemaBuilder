export type FieldType =
  | "string"
  | "number"
  | "boolean"
  | "array"
  | "date"
  | "null"
  | "object"
  | "nested"

export interface Field {
  key: string
  type: FieldType
  required: boolean
  children?: Field[]
}
