import FieldRow from "./FieldRow"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import type { Field } from "@/components/types"

interface FieldListProps {
  fields: Field[]
  onChange: (fields: Field[]) => void
}

function FieldList({ fields, onChange }: FieldListProps) {
  const addField = () => {
    onChange([...fields, { key: "", type: "string", required: false }])
  }

  const updateField = (index: number, changes: Partial<Field>) => {
    const updated = [...fields]
    updated[index] = { ...updated[index], ...changes }

    if (changes.type === "nested" && !updated[index].children) {
      updated[index].children = []
    } else if (changes.type !== "nested") {
      delete updated[index].children
    }

    onChange(updated)
  }

  const updateNestedFields = (index: number, newChildren: Field[]) => {
    const updated = [...fields]
    updated[index] = { ...updated[index], children: newChildren }
    onChange(updated)
  }

  const deleteField = (index: number) => {
    const updated = [...fields]
    updated.splice(index, 1)
    onChange(updated)
  }

  return (
    <div className="space-y-4 ml-4">
      {fields.map((field, index) => (
        <div key={index}>
          <FieldRow
            fieldKey={field.key}
            fieldType={field.type}
            required={field.required}
            onKeyChange={(val) => updateField(index, { key: val })}
            onTypeChange={(val) => updateField(index, { type: val })}
            onRequiredChange={(val) => updateField(index, { required: val })}
            onDelete={() => deleteField(index)}
          />
          {field.type === "nested" && (
            <div className="ml-6">
              <FieldList
                fields={field.children || []}
                onChange={(newChildren) => updateNestedFields(index, newChildren)}
              />
            </div>
          )}
        </div>
      ))}
      <Button
        onClick={addField}
        className="bg-[#58A0C8] text-white hover:bg-[#4a89ab] transition mt-4 flex items-center gap-2"
      >
        <Plus className="w-4 h-4" />
        Add Field
      </Button>
    </div>
  )
}

export default FieldList
