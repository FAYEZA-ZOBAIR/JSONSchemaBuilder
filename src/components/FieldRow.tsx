import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Trash2 } from "lucide-react"
import { Switch } from "@/components/ui/switch"
import type { FieldType } from "@/components/types"

interface FieldRowProps {
  fieldKey: string
  fieldType: FieldType
  required: boolean
  onKeyChange: (newKey: string) => void
  onTypeChange: (newType: FieldType) => void
  onRequiredChange: (value: boolean) => void
  onDelete: () => void
}

function FieldRow({
  fieldKey,
  fieldType,
  required,
  onKeyChange,
  onTypeChange,
  onRequiredChange,
  onDelete,
}: FieldRowProps) {
  return (
    <div className="flex items-center gap-4 border border-white/20 p-4 rounded-xl bg-white/10 backdrop-blur-md shadow-md transition hover:shadow-lg">
      <Input
        placeholder="Field key"
        value={fieldKey}
        onChange={(e) => onKeyChange(e.target.value)}
        className="w-1/3 bg-white/10 text-white placeholder-white/60 border border-white/30 rounded-md focus:ring-2 focus:ring-[#58A0C8]"
      />
      <Select value={fieldType} onValueChange={(value) => onTypeChange(value as FieldType)}>
        <SelectTrigger className="w-1/3 bg-white/10 text-white border border-white/30">
          <SelectValue placeholder="Select type" />
        </SelectTrigger>
        <SelectContent className="bg-[#1a1b3a] text-white border-white/20">
          <SelectItem value="string">String</SelectItem>
          <SelectItem value="number">Number</SelectItem>
          <SelectItem value="boolean">Boolean</SelectItem>
          <SelectItem value="array">Array</SelectItem>
          <SelectItem value="date">Date</SelectItem>
          <SelectItem value="null">Null</SelectItem>
          <SelectItem value="object">Object</SelectItem>
          <SelectItem value="nested">Nested</SelectItem>
        </SelectContent>
      </Select>
      <Switch
        checked={required}
        onCheckedChange={onRequiredChange}
        className="data-[state=checked]:bg-[#58A0C8] data-[state=unchecked]:bg-zinc-700"
      />
      <Button variant="ghost" size="icon" onClick={onDelete}>
        <Trash2 className="h-5 w-5 text-red-500 hover:scale-110 transition" />
      </Button>
    </div>
  )
}

export default FieldRow
