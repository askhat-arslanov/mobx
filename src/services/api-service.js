class ApiService {
  baseUrl = 'https://jsonplaceholder.typicode.com/'

  async makeGetRequest(path) {
    const url = this.baseUrl + path
    const response = await fetch(url)
    return await response.json()
  }

  async getTodo(id) {
    const path = `todos/${id}`
    return await this.makeGetRequest(path)
  }

  async getTodos() {
    const path = 'todos'
    return await this.makeGetRequest(path)
  }
}

export default ApiService
