import { action, observable } from 'mobx'

class Counter {
  constructor(api) {
    this.api = api
  }

  @observable count = 0
  @observable todo = {}
  @observable loading = false

  @action
  increaseHandler = () => {
    this.count++
    this.getTodo()
  }

  @action
  decreaseHandler = () => {
    if (this.count > 1) {
      this.count--
      this.getTodo()
    }
  }

  getTodo() {
    this.loading = true

    this.api
      .getTodo(this.count)
      .then(({ id, title }) => {
        this.todo = { id, title }
      })
      .catch(() => {})
      .finally(() => {
        this.loading = false
      })
  }
}

export default Counter
