export default function Input(props) {
  return (
    <div className="input-wrapper">
      <label htmlFor={props.htmlForValue}>{props.labelTitle}</label>
      <input type={props.type} id={props.id} />
    </div>
  )
}
