import axios from "axios";

export async function getCars() {
  const { data } = await axios.get("https://shopping-car-data.vercel.app/cars");

  return data;
}

export async function getACar(id) {
  const { data } = await axios.get(
    `https://shopping-car-data.vercel.app/cars/${id}`
  );

  return data;
}
