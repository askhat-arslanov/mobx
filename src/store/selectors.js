import { action, observable } from 'mobx'

class Selectors {
  constructor(api) {
    this.api = api
  }

  @observable currentSelector = 'one'

  @action setSelector = id => {
    this.currentSelector = id
  }
}

export default Selectors
