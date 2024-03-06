import "./DatePicker.css"

interface DateFilterProps {
  name?: string
  label?: string
  defaultValue?: string
  error?: string
}

export default function DatePicker({
  name,
  label,
  defaultValue,
  error,
}: DateFilterProps) {
  return (
    <div className="field">
      {label && <label className="label">{label}</label>}
      <input
        id="date"
        className="input"
        type="date"
        name={name}
        defaultValue={defaultValue}
      />
      {error && <h5 className="error">{error}</h5>}
    </div>
  )
}
