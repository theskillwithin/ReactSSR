import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import rootReducer from './reducers'

const nodeENV = process && process.env && process.env.NODE_ENV
  ? process.env.NODE_ENV
  : 'development'

const isBrowser = (typeof window !== 'undefined')

const errorReporter = store => next => (action) => {
  try {
    return next(action) // dispatch
  } catch (err) {
    if (isBrowser && 'production' === nodeENV) window.NREUM.noticeError(`Redux: ${err}`)
    throw err // re-throw error
  }
}

const configureStore = storeData => createStore(
  rootReducer,
  storeData,
  compose(
    applyMiddleware(errorReporter, thunkMiddleware),
    isBrowser && 'development' === nodeENV && window.devToolsExtension
      ? window.devToolsExtension()
      : f => f,
  ),
)

export default configureStore
