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
    <>
      {label && <label>{label}</label>}
      <input
        type="date"
        name={name}
        value={value}
        onChange={(e) =>
          onDateChange(e.target.value ? new Date(e.target.value) : null)
        }
      />
      {error && <p>{error}</p>}
    </>
  )
}
