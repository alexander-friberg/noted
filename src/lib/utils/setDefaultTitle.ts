export default function setDefaultTitle() {
  const date = new Date()
  return `untitled | ${date.toTimeString().split(" ")[0]}`
}
