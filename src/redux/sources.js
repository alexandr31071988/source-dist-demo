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
export const EDIT_PAGE_TABS = `${moduleName}/EDIT_PAGE_TABS`


/**
 * Reducer
 * */


export const ReducerRecord = {
  sourceList: [],
  tabList: ["СМИ", "Соцсети", "Телеграм", "Оппозиция"],
  activeTabs: [],
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
    case EDIT_PAGE_TABS:
      return Object.assign({}, state, {activeTabs: payload})
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
export const tabListSelector = state => state.tabList
export const activeTabsSelector = state => state.activeTabs

export const sourceListSelector = createSelector(stateSelector, state => {
  const tabs = state.activeTabs
  if(!tabs.length){
    return getTableData(state.limit, state.page)[0]
  }

  return getTableData(state.limit, state.page)[0].filter(f => {
    if(tabs.find(tab => f.sourceType === tab)) {
      return true
    }
    return false
  })

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

export const setActiveTabs = (tabs) => (dispatch) => {
  dispatch({
    type: EDIT_PAGE_TABS,
    payload: tabs
  })
}