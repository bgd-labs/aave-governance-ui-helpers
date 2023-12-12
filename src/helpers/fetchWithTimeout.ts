export async function fetchWithTimeout(resource: string, timeout?: number) {
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeout || 10000);
  const response = await fetch(resource, {
    signal: controller.signal,
  });
  clearTimeout(id);
  return response;
}
