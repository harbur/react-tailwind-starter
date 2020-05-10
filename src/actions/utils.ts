class Utils {
    async get(uri: string) {
      let response = await fetch(uri, {
      })
      if (!response.ok) {
        throw await response.json()
      }
      return response
    }
  
    async post(uri: string, body: object) {
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
  
    async put(uri: string, body: object) {
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
  
    async delete(uri: string) {
      return await fetch(uri, {
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'DELETE',
      })
    }
  }
  
  export default new Utils()
  