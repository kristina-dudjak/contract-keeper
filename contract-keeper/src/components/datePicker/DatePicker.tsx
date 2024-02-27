import "./DatePicker.css"

interface DateFilterProps {
  name?: string
  label?: string
  value?: string
  error?: string
  onDateChange: (date: Date | null) => void
}

export default function DatePicker({
  name,
  label,
  value,
  error,
  onDateChange,
}: DateFilterProps) {
  return (
    <div className="field">
      {label && <label className="label">{label}</label>}
      <input
        className="input"
        type="date"
        name={name}
        value={value}
        onChange={(e) =>
          onDateChange(e.target.value ? new Date(e.target.value) : null)
        }
      />
      {error && <h5 className="error">{error}</h5>}
    </div>
  )
}
