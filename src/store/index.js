import { createContext } from 'react'

import Counter from './counter'
import Selectors from './selectors'
import ApiService from '../services/api-service'

const api = new ApiService()

const storeContext = createContext({
  counter: new Counter(api),
  selectors: new Selectors(api)
})

export default storeContext
