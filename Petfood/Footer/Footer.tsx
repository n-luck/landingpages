import Link from "next/link";
import { footer } from "../constants";
import styles from "./Footer.module.css";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className={styles.footerLinks}>
        <div className={styles.footerWrapper}>
          {footer.map((item) => (
            <div key={item.title}>
              <h3 className={styles.footerTitle}>{item.title}</h3>
              <ul>
                {item.links.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href}>
                      <span>
                        {link.name}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className={styles.footerCopyright}>
            {currentYear} PetFood. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};
