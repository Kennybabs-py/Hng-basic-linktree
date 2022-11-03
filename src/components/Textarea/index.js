import "./styles.scss";
export default function Textarea(props) {
  const { id, name, placeholder } = props;

  return (
    <textarea
      name={name}
      id={id}
      cols="30"
      rows="10"
      placeholder={placeholder}
    ></textarea>
  );
}
