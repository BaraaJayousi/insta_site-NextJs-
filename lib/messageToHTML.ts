export default function messageToHTML(message: string) {
  const startString = "<!DOCTYPE html>"
  const endString = "</html>"

  const start = message.indexOf(startString)
  const end = message.indexOf(endString)

  // Extract Html doc using slice
  const html = message.slice(start, end+ endString.length)

  return html;
}
