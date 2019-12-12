import * as React from "react";
export { default as Component } from './src/Component'
export function getHTML(node: HTMLDivElement, element: any): void {
  if (!window.document) {
    throw new Error('Browser not detected!. run in browser')
  }
  node.appendChild(element)
}