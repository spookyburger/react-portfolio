import TYPES from './types'

export const initialState = {
  active: null,
  entities: {},
  recover: false
}

const loginUser = (state, { users, id }) => ({
  ...state,
  active: id,
  entities: Object.assign({}, users)
})

const recoverPassword = (state, { users, id }) => ({
  ...state,
  recover: true
})

const handlers = {
  [TYPES.FETCH_USER_TOKEN_SUCCESS]: loginUser,
  [TYPES.RECOVER_USER_PASSWORD_SUCCESS]: recoverPassword
}

export default function(state = initialState, action = {}) {
  return handlers[action.type]
    ? handlers[action.type](state, action)
    : state
}

export const selector = {
  name: 'users',
  select(state) {
    return state.users
  }
}
