interface Props {
  setAllOpen: (open: boolean) => void
  allOpen: boolean
}

export function ToggleButton({ allOpen, setAllOpen}: Props) {
  function handleClick() {
    setAllOpen(!allOpen)
  }
  return (
    <button onClick={handleClick}>Open all?</button>
  )
}