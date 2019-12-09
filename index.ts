export function explore(): number {
  return 6
}
export function spotlight(): string {
  return 'web-spotlight'
}
export function getHTML() {
  if (!window.document) {
    throw new Error('Browser not detected!. run in browser')
  }
  let elm = document.createElement('div')
  let head = document.createElement('h1')
  head.innerText = 'Header from web Spotlight'
  elm.appendChild(head)
  document.body.appendChild(elm)
}