class Utils {
    async get(uri) {
      let response = await fetch(uri, {
      })
      if (!response.ok) {
        throw await response.json()
      }
      return response
    }
  
    async post(uri, body) {
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
      return response
    }
  
    async put(uri, body) {
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
      return response
    }
  
    async delete(uri, body) {
      return await fetch(uri, {
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'DELETE',
        body: JSON.stringify(body),
      })
    }
  }
  
  export default new Utils()
  