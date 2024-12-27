import axios from "axios";
import type { AxiosResponse } from "axios";

const url = "http://localhost:9999";

export async function getSpanishGreeting(name: string): Promise<string> {
  const response: AxiosResponse<string> = await axios.get(
    `${url}/get-spanish-greeting?name=${name}`,
  );

  return response.data;
}

export async function getSpanishFarewell(name: string): Promise<string> {
  const response: AxiosResponse<string> = await axios.get(
    `${url}/get-spanish-farewell?name=${name}`,
  );

  return response.data;
}
