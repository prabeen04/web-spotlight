export function explore(): number {
  return 6
}
export function spotlight(): string {
  return 'web-spotlight'
}
export function getHTML(str: string): void {
  if (!window.document) {
    throw new Error('Browser not detected!. run in browser')
  }
  let elm = document.createElement('div')
  let head = document.createElement('h1')
  head.innerText = str || 'N/A'
  elm.appendChild(head)
  document.body.appendChild(elm)
}