export function explore(): number {
  return 6
}
export function spotlight(): string {
  return 'web-spotlight'
}
export function getHTML(node: HTMLElement, element: HTMLElement): void {
  console.log(node)
  console.log(element)
  debugger
  if (!window.document) {
    throw new Error('Browser not detected!. run in browser')
  }
  node.appendChild(element)
}