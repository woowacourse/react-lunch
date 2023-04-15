export async function getMockData() {
  const response = await fetch('./mockData.json');
  return await response.json();
}
