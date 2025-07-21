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

// this type is a union of two types: one for primitive types and one for objects ( nested schemas)
export type JsonSchemaProperty =
  | { type: "string" | "number" | "boolean" | "array" | "date" | "null" | "object" }
  | {
      type: "object"
      required: boolean
      properties: JsonSchemaResult
    }

// this type represents the result of the JSON schema generation
// it can either be a simple property or an object with nested properties

type JsonSchemaResult = Record<string, JsonSchemaProperty>

export interface JsonSchema {
  type: "object"
  properties: Record<string, JsonSchemaProperty>
  required?: string[]
}