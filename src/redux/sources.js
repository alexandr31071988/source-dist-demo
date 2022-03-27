import {createSelector} from "reselect";
import {getTableData} from "../Mocks/tableData";

/**
 * Constants
 * */

export const moduleName = 'sources'

export const GET_SOURCE_LIST = `${moduleName}/GET_SOURCE_LIST`
export const EDIT_SOURCE = `${moduleName}/EDIT_SOURCE`
export const REMOVE_SOURCE = `${moduleName}/REMOVE_SOURCE`


/**
 * Reducer
 * */


export const ReducerRecord = {
  sourceList: [],
  editedSource: null,
  isLoading: false,
  error: null
}


export default function reducer(state = ReducerRecord, action) {
  const {type, payload} = action

  switch (type) {
    case EDIT_SOURCE:
    case REMOVE_SOURCE:
    case GET_SOURCE_LIST:
      return Object.assign({}, state, {sourceList: payload})
    default:
      return state
  }
}

/**
 * Selectors
 * */


export const stateSelector = state => state

export const sourceListSelector = state => state.sourceList
export const sourceListSelector2 = createSelector(stateSelector, state => state.sourceList)



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