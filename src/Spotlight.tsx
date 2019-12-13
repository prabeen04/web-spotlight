import * as React from "react";

interface IProps {
  component: React.ReactNode;
}

export default function Spotlight(props: IProps): React.ReactElement {
  return <div>{props.component}</div>;
}
