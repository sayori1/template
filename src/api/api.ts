import { baseURL } from "../env";
import { Network } from "../middlewares";

export let bearerToken: string | null = null;
let headers = {
  "Content-Type": "application/json;charset=utf-8",
  Accept: "application/json",
  mode: "cors",
  headers: {
    "Content-Type": "application/json",
  },
} as any;

export function setBearerToken(token: string) {
  if (token == null) return;
  bearerToken = token;
  headers["Authorization"] = "Bearer " + token;
}

export async function httpPost(url: string, data: object) {
  Network.beforeRequest(url, data);
  const response = await fetch(baseURL + url, {
    method: "POST",
    headers: headers,
    body: JSON.stringify(data),
  }).catch((e) => {
    throw e;
  });
  const responseJson = await response.json();
  Network.afterRequest(responseJson);
  return responseJson;
}

export async function httpPut(url: string, data: object) {
  Network.beforeRequest(url, data);
  const response = await fetch(baseURL + url, {
    method: "PUT",
    headers: headers,
    body: JSON.stringify(data),
  }).catch((e) => {
    throw e;
  });
  const responseJson = await response.json();
  Network.afterRequest(responseJson);
  return responseJson;
}

export async function httpGet(url: string) {
  Network.beforeRequest(url, {});
  const response = await fetch(baseURL + url, {
    method: "GET",
    headers: headers,
  }).catch((e) => {
    throw e;
  });
  const responseJson = await response.json();
  Network.afterRequest(responseJson);
  return responseJson;
}

export async function httpDelete(url: string) {
  Network.beforeRequest(url, {});
  const response = await fetch(baseURL + url, {
    method: "DELETE",
    headers: headers,
  }).catch((e) => {
    throw e;
  });
  const responseJson = await response.json();
  Network.afterRequest(responseJson);
  return responseJson;
}

export function imagePath(image: string) {
  return baseURL + "/image/" + image;
}
