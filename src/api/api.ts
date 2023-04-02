import { baseURL } from "../env";
import { Network } from "../middlewares";

export let bearerToken: string | null = null;

export let headers: Record<string, string> = {
  "Content-Type": "application/json;charset=utf-8",
  Accept: "application/json",
  mode: "cors",
};

export function setBearerToken(token: string) {
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
    Network.onError(e);
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
    Network.onError(e);
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
    Network.onError(e);
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
    Network.onError(e);
    throw e;
  });
  const responseJson = await response.json();
  Network.afterRequest(responseJson);
  return responseJson;
}

export function networkImagePath(image: string) {
  return baseURL + "/image/" + image;
}
