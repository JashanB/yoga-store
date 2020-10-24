import './Schedule.css'

export default function Schedule(props) {

  return (
    <div className="tile">
      <button className={className} onClick={() => handleClick(col, row, props.status)}></button>
    </div>
  )
}
