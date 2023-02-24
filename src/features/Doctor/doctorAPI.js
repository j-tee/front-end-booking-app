export async function getDoctors() {
  const response = await fetch('http://localhost:3000/doctors');
  const data = await response.json();
  return data.message;
}

export default getDoctors;
