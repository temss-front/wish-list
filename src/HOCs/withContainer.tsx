import { ComponentType, FC } from "react";
import styles from "../styles/main.module.css"

export const withContainer =
  <P extends {}>(Component: ComponentType<P>): FC<P> =>
  (props: P) => {
      return <div className={styles.container}><Component {...props} /></div>;
  };
