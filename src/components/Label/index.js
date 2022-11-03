import "./styles.scss";
export default function InputLabel(props) {
  const { htmlFor, content } = props;

  return <label htmlFor={htmlFor}>{content}</label>;
}
