import storeHelper from '../helper'

const initialState = {
  test: 'test',
}

const test = (state, payload) => ({
  ...state,
  displayedPopupIndex: 0,
})


export default storeHelper({
  TEST_ACTION: test,
}, initialState)


export const findTest = state => state.test
