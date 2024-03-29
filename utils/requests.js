export async function fetchProperties() {
  try {
    const res = await fetch("http://localhost:3000/api/properties");
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    return res.json();
  } catch (error) {
    console.log(error);
  }
}

export async function fetchSingleProperty(id) {
  try {
    const res = await fetch(`http://localhost:3000/api/properties/${id}`);
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    return res.json();
  } catch (error) {
    console.log(error);
  }
}
