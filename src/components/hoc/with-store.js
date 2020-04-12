import React, { useContext } from 'react'
import { observer } from 'mobx-react'

import StoreContext from '../../store'

const withStore = Wrapped => props => {
  const store = useContext(StoreContext)
  const ObservedWrapped = observer(Wrapped)
  return <ObservedWrapped store={store} {...props} />
}

export default withStore
