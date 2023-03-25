export const baseURL = "http://localhost:4000/";

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

export async function post(url: string, data: object) {
  beforeRequest(url, data);
  const response = await fetch(baseURL + url, {
    method: "POST",
    headers: headers,
    body: JSON.stringify(data),
  }).catch((e) => {
    throw e;
  });
  var responseJson = await response.json();
  middleware(responseJson);
  return responseJson;
}

export async function put(url: string, data: object) {
  beforeRequest(url, data);
  const response = await fetch(baseURL + url, {
    method: "PUT",
    headers: headers,
    body: JSON.stringify(data),
  }).catch((e) => {
    throw e;
  });
  var responseJson = await response.json();
  middleware(responseJson);
  return responseJson;
}

export async function get(url: string) {
  beforeRequest(url, {});
  const response = await fetch(baseURL + url, {
    method: "GET",
    headers: headers,
  }).catch((e) => {
    throw e;
  });
  const responseJson = await response.json();
  middleware(responseJson);
  return responseJson;
}

export async function _delete(url: string) {
  beforeRequest(url, {});
  const response = await fetch(baseURL + url, {
    method: "DELETE",
    headers: headers,
  }).catch((e) => {
    throw e;
  });
  const responseJson = await response.json();
  middleware(responseJson);
  return responseJson;
}

export function imagePath(image: string) {
  return baseURL + "/image/" + image;
}

async function beforeRequest(url: any, data: any) {
  console.log(`REQUEST ${url} with data: ${JSON.stringify(data)}`);
  if (localStorage.getItem("token") != null) {
    setBearerToken(localStorage.getItem("token")!);
  }
}

async function middleware(responseJson: any) {
  console.log(`RESPONSE: ${JSON.stringify(responseJson)}`);
  if (responseJson["error"] != null || responseJson.statusCode != null) {
    if (responseJson.statusCode == 1000) {
    }
    if (responseJson.statusCode == 2000) {
    }
    if (responseJson.statusCode == 1001) {
    }
    if (responseJson.statusCode == 500) {
    }
    throw responseJson;
  }
}
