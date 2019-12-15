import * as React from "react";

interface IProps {
  component: React.ReactNode;
}

export default function Spotlight(props: IProps): React.ReactElement {
  function handleKeyPress(e: KeyboardEvent) {
    console.log(e);
    debugger;
  }
  React.useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, []);
  return <div>{props.component}</div>;
}
