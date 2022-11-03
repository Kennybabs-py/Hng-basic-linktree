import "./styles.scss";

export default function Input(props) {
  const { type, id, name, placeholder } = props;

  return (
    <input
      type={type ?? "text"}
      id={id}
      name={name}
      placeholder={placeholder}
    />
  );
}
