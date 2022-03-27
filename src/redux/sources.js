import {createSelector} from "reselect";
import {getTableData, getTablePageData} from "../Mocks/tableData";

/**
 * Constants
 * */

export const moduleName = 'sources'

export const GET_SOURCE_LIST = `${moduleName}/GET_SOURCE_LIST`
export const EDIT_SOURCE = `${moduleName}/EDIT_SOURCE`
export const REMOVE_SOURCE = `${moduleName}/REMOVE_SOURCE`
export const EDIT_PAGE_LIMIT = `${moduleName}/EDIT_PAGE_LIMIT`
export const EDIT_PAGE_NUMBER = `${moduleName}/EDIT_PAGE_NUMBER`


/**
 * Reducer
 * */


export const ReducerRecord = {
  sourceList: [],
  editedSource: null,
  isLoading: false,
  limit: 5,
  page: 2,
  error: null
}


export default function reducer(state = ReducerRecord, action) {
  const {type, payload} = action

  switch (type) {
    case EDIT_SOURCE:
    case REMOVE_SOURCE:
    case GET_SOURCE_LIST:
      return Object.assign({}, state, {sourceList: payload})
    case EDIT_PAGE_LIMIT:
      return Object.assign({}, state, {limit: payload})
    case EDIT_PAGE_NUMBER:
      return Object.assign({}, state, {page: payload})
    default:
      return state
  }
}

/**
 * Selectors
 * */


export const stateSelector = state => state

// export const sourceListSelector = state => state.sourceList
export const pageNumberSelector = state => state.page
export const pageLimitSelector = state => state.limit

export const sourceListSelector = createSelector(stateSelector, state => {
  return getTableData(state.limit, state.page)[0] || []
})



/**
 * Action Creators
 * */

export const getSourceList = (limit, page) => ({
  type: GET_SOURCE_LIST,
  payload: getTableData(limit, page)[0]
})

export const editSourceList = (editedSourceList) => ({
  type: EDIT_SOURCE,
  payload: editedSourceList
})

export const editPageLimit = (limit) => ({
  type: EDIT_PAGE_LIMIT,
  payload: limit
})

export const editPageNumber = (page) => ({
  type: EDIT_PAGE_NUMBER,
  payload: page
})