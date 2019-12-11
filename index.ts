export function getHTML(node: HTMLElement, element: HTMLElement): void {
  console.log(node)
  console.log(element)
  debugger
  if (!window.document) {
    throw new Error('Browser not detected!. run in browser')
  }
  node.appendChild(element)
}