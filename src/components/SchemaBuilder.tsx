import { useState } from "react"
import FieldList from "./FieldList"
import type { Field } from "./types"
import { CheckCircle, FileJson } from "lucide-react"

function SchemaBuilder() {
  const [fields, setFields] = useState<Field[]>([])
  const [showSuccess, setShowSuccess] = useState(false)

  const buildSchema = (fields: Field[]): any => {
    const result: Record<string, any> = {}

    fields.forEach((field) => {
      if (!field.key) return

      if (field.type === "nested") {
        result[field.key] = {
          type: "object",
          required: field.required,
          properties: buildSchema(field.children || []),
        }
      } else {
        result[field.key] = field.required ? field.type : `${field.type}?`
      }
    })

    return result
  }

  const handleSubmit = () => {
    const schema = buildSchema(fields)
    localStorage.setItem("generatedSchema", JSON.stringify(schema, null, 2))
    setShowSuccess(true)
    setTimeout(() => setShowSuccess(false), 3000)
  }

  return (
    <div className="flex flex-col md:flex-row gap-8 p-4 max-w-[1200px] mx-auto">
      {/* Left Panel: Field Input Form */}
      <div className="w-full md:w-1/2">
        <div className="bg-white/5 backdrop-blur-lg border border-white/20 rounded-2xl shadow-lg p-6">
          <h2 className="text-3xl font-extrabold text-white mb-6 flex items-center gap-3">
            🧩 JSON Schema Builder
          </h2>
          <FieldList fields={fields} onChange={setFields} />

          <button
            onClick={handleSubmit}
            className="mt-6 bg-[#113F67] text-white px-5 py-2 rounded hover:opacity-90 transition flex items-center gap-2"
          >
            <CheckCircle className="w-4 h-4" />
            Submit Schema
          </button>
        </div>

        {/* Success Toast */}
        {showSuccess && (
          <div className="fixed top-6 right-6 z-50 bg-green-500 text-white px-4 py-3 rounded-lg shadow-lg flex items-center gap-2">
            ✅ <span>Schema submitted successfully!</span>
          </div>
        )}
      </div>

      {/* Right Panel: JSON Output */}
      <div className="w-full md:w-1/2">
        <div className="bg-white/5 backdrop-blur-lg border border-white/20 rounded-2xl shadow-lg p-6 h-full">
          <h2 className="text-2xl font-semibold mb-4 text-white flex items-center gap-2">
            <FileJson className="w-5 h-5" />
            Generated Schema
          </h2>
          <pre className="bg-white/10 backdrop-blur-sm border border-white/10 p-4 rounded-md h-[500px] overflow-auto text-sm text-white">
            {JSON.stringify(buildSchema(fields), null, 2)}
          </pre>
        </div>
      </div>
    </div>
  )
}

export default SchemaBuilder
