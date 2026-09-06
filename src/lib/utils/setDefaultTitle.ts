export default function setDefaultTitle() {
  const date = new Date()
  return `quicknote | ${date.getDate().toLocaleString()}`
}
