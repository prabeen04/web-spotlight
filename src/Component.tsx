import * as React from "react";

interface IProps {
  component: React.ReactNode;
}

export default function Component(props: IProps): React.ReactElement {
  return <div>{props.component}</div>;
}
