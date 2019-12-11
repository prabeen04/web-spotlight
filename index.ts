export function getHTML(node: HTMLDivElement, element: HTMLElement): void {
  if (!window.document) {
    throw new Error('Browser not detected!. run in browser')
  }
  node.append(element)
}