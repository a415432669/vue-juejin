import * as types from './mutation-types'
const mutations = {
  [types.SET_ROUTE_TRANSITION](state, routeTransition) {
    state.routeTransition = routeTransition
  },
  [types.SET_HOME_ROUTES](state, homeRoutes) {
    state.homeRoutes = homeRoutes
  },
  [types.SET_PINS_ROUTES](state, pinsRoutes) {
    state.pinsRoutes = pinsRoutes
  },
  [types.SET_TOKEN](state, token) {
    state.token = token
  },
  [types.SET_UID](state, uid) {
    state.uid = uid
  },
  [types.SET_IS_LOGIN](state, isLogin) {
    state.isLogin = isLogin
  },
  [types.SET_KEEP_ALIVE_ARR](state, arr) {
    state.keepAliveArr = arr
  },
  [types.SET_QUERY](state, query) {
    state.query = query
  },
  [types.SET_CURRENT_HOME_ROUTE](state, path) {
    state.currentHomeRoute = path
  },
  [types.SET_CURRENT_PINS_ROUTE](state, path) {
    state.currentPinsRoute = path
  }
}

export default mutations