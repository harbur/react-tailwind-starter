function appendParams(uri: string, params: any): string {
  if (params !== null && params !== undefined) {
    var kv: string[] = []
    Object.keys(params).forEach((key) => {
      if (params[key] !== undefined) {
        kv.push(`${key}=${params[key]}`)
      }
    })
    return `${uri}?${kv.join("&")}`
  }
  return uri
}

async function get<T>(uri: string, params?: any) {
  uri = appendParams(uri, params)
  let response = await fetch(uri, {
  })
  if (!response.ok) {
    throw await response.json()
  }
  return await response.json() as Promise<T>
}

async function post<T>(uri: string, body: any, params?: any) {
  uri = appendParams(uri, params)
  let response = await fetch(uri, {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify(body),
  })
  if (!response.ok) {
    throw await response.json()
  }
  return await response.json() as Promise<T>
}

async function put<T>(uri: string, body?: T, params?: any) {
  uri = appendParams(uri, params)
  let response = await fetch(uri, {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'PUT',
    body: JSON.stringify(body),
  })
  if (!response.ok) {
    throw await response.json()
  }
  return await response.json() as Promise<T>
}

async function remove(uri: string, body?: any, params?: any) {
  uri = appendParams(uri, params)
  let response = await fetch(uri, {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'DELETE',
    body: JSON.stringify(body),
  })
  return await response
}

export default { get, post, put, remove }
