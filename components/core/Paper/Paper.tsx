import { Padding } from "@/styles/spacing.types";
import { combineClassNames } from "@/utils";
import { Paper as PaperM, PaperProps as PaperPropsM } from "@mantine/core";
import React from "react";
import styles from "./paper.module.scss";

type Props = PaperPropsM & {
  padding?: Padding;
  className?: string;
  children?: React.ReactNode;
};

const Paper = ({
  padding = Padding.S,
  className = "",
  children,
  ...rest
}: Props) => {
  return (
    <PaperM
      className={combineClassNames([className, padding])}
      classNames={{ root: styles.paper }}
      {...rest}
    >
      {children}
    </PaperM>
  );
};

export default Paper;
