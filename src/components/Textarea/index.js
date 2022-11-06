import "./styles.scss";
export default function Textarea(props) {
  const { id, name, placeholder, value, onChange } = props;

  return (
    <textarea
      name={name}
      id={id}
      value={value}
      cols="30"
      rows="10"
      placeholder={placeholder}
      onChange={onChange}
    ></textarea>
  );
}
