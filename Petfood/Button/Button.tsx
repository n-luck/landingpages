import Link from "next/link";
import styles from "./Button.module.css";

interface Props {
  buttonText?: string;
  href: string;
  secondary?: boolean;
}

export const Button = ({
  buttonText = "click",
  href,
  secondary = false,
}: Props) => {
  return (
    <Link
      className={`${styles.primary} ${secondary && styles.secondary}`}
      href={href}
    >
      {buttonText}
    </Link>
  );
};
