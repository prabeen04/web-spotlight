export { default as Spotlight } from './src/Spotlight'
export function getHTML(node: HTMLDivElement, element: any): void {

  if (!window.document) {
    throw new Error('Browser not detected!. run in browser')
  }
  node.appendChild(element)
}