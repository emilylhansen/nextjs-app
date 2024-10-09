import React from "react";
import { Paper as PaperM, PaperProps as PaperPropsM } from "@mantine/core";
import "./Paper.scss";

type Props = PaperPropsM & { children?: React.ReactNode };

const Paper = (props: Props) => {
  return <PaperM {...props}>{props.children}</PaperM>;
};

export default Paper;
