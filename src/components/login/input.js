/**
 *
 * @param {*} props contains htmlFor, title (name of the label), input's type and input's id
 * @returns input and label for sign-in form
 */

export default function Input(props) {
  return (
    <div className="input-wrapper">
      <label htmlFor={props.htmlForValue}>{props.labelTitle}</label>
      <input type={props.type} id={props.id} />
    </div>
  )
}
