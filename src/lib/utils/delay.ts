export async function delay<T>(promise: Promise<T>, ms: number): Promise<T> {
  await new Promise(resolve => setTimeout(resolve, ms))
  return promise
}
