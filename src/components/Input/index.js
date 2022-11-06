import "./styles.scss";

export default function Input(props) {
  const { type, id, name, placeholder, value, onChange } = props;

  return (
    <input
      type={type ?? "text"}
      value={value}
      id={id}
      name={name}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
}
