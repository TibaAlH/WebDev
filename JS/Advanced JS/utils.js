import { baseUrl } from "./variables.js";

export const fetchData = async () => {
    const response = await fetch(baseUrl);
    const data = await response.json();

    return data;}