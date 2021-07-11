type ButtonProps = {
  text?: string;
}
  function Button(props: ButtonProps) {
    return (
    <button>{props.text || 'Default'}</button>
    )
  }
export default Button;