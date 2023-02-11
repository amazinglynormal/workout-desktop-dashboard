import styles from "./Button.module.css";

interface ButtonProps {
  type: "button" | "submit" | "reset";
  text: string;
  theme: "primary" | "secondary" | "tertiary" | "danger";
  size: "small" | "medium" | "large";
  onClickHandler: () => void;
  icon?: JSX.Element;
  iconPosition?: "start" | "end";
}

const Button = ({
  type,
  text,
  theme,
  size,
  icon,
  iconPosition,
  onClickHandler,
}: ButtonProps) => {
  let sizeStyle;

  switch (size) {
    case "small":
      sizeStyle = styles.small;
      break;
    case "medium":
      sizeStyle = styles.medium;
      break;
    default:
      sizeStyle = styles.large;
  }

  return (
    <button
      type={type}
      onClick={onClickHandler}
      className={`${styles.btn} ${styles.primary} ${sizeStyle}`}
    >
      {iconPosition === "start" && icon}
      <span>{text}</span>
      {iconPosition === "end" && icon}
    </button>
  );
};

export default Button;
