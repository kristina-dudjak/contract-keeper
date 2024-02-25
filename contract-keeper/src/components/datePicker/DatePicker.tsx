interface DateFilterProps {
  onDateChange: (date: Date | null) => void
}

export default function DatePicker({ onDateChange }: DateFilterProps) {
  return (
    <input
      type="date"
      onChange={(e) =>
        onDateChange(e.target.value ? new Date(e.target.value) : null)
      }
    />
  )
}
