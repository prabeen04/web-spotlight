import * as React from "react";

export function getHTML(node: HTMLDivElement, element: any): void {
  if (!window.document) {
    throw new Error('Browser not detected!. run in browser')
  }
  node.appendChild(element)
}