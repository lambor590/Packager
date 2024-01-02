import '../App.css'

function ProgressBar({ percentage }) {
  return (
    <progress className="progress w-full" value={percentage} max="100"></progress>
  )
}

export default ProgressBar