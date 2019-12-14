import * as React from "react";
export { default as Spotlight } from './src/Spotlight'
export function getHTML(node: HTMLDivElement, element: any): void {
  function handleKeyPress(e: KeyboardEvent) {
    console.log(e)
    debugger
  }
  React.useEffect(() => {
    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [])
  if (!window.document) {
    throw new Error('Browser not detected!. run in browser')
  }
  node.appendChild(element)
}