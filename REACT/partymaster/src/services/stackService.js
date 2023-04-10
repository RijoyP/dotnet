import axios from 'axios';

const DOTNET_GET_URL = "";

export function getDotnet() {
    axios.get(DOTNET_GET_URL)
}
