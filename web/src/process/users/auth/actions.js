import { call, put, takeLatest } from 'redux-saga/effects'
import { normalize } from 'normalizr'

import * as api from './api'
import { user as userSchema } from '../schema/user'
import TYPES from '../types'
import LocalStorage from '../../../utilities/local-storage/token'

export const name = 'userAuthActions'

export function fetch(email, password) {
  console.log("HERE I AM")
  return {
    type: TYPES.FETCH_USER_TOKEN_REQUEST,
    email,
    password,
  }
}

export function* executeFetchToken({ email, password }) {
  const url = api.fetch.formatUrl()
  const body = api.fetch.serialize(email, password)
  try {
    const res = yield call(api.fetch.request, url, body)
    const normalizedData = normalize(res.data.user, userSchema)
    LocalStorage.set(res.data.token)
    yield put(fetchSuccess(normalizedData))
  } catch (res) {
    // eslint-disable-next-line noconsole
    console.error('Request failed with', res.error)
  }
}

export function fetchSuccess(data) {
  return {
    type: TYPES.FETCH_USER_TOKEN_SUCCESS,
    users: data.entities.users,
    id: data.result
  }
}

export function fetchUserByJWT() {
  return {
    type: TYPES.FETCH_USER_BY_JWT
  }
}

export function* executeFetchUserByJWT() {
  const url = api.fetchByJWT.formatUrl()
  try {
    const res = yield call(api.fetchByJWT.request, url)
    const normalizedData = normalize(res.data.user, userSchema)
    yield put(fetchSuccess(normalizedData))
  } catch (res) {
    // eslint-disable-next-line noconsole
    console.error('Request failed with', res.error)
  }
}

export function recover(email) {
  return {
    type: TYPES.RECOVER_USER_PASSWORD_REQUEST,
    email
  }
}

export function* executeRecover({ email }) {
  const url = api.recover.formatUrl()
  const body = api.recover.serialize(email)
  try {
    yield call(api.recover.request, url, body)
    yield put(recoverSuccess())
  } catch (res) {
    // eslint-disable-next-line noconsole
    console.error('Request failed with', res.error)
    // TODO add the IP address to a logger and set up something for multiple attempts DOS attack
    yield put(recoverSuccess())
  }
}

export function recoverSuccess() {
  return {
    type: TYPES.RECOVER_USER_PASSWORD_SUCCESS
  }
}

const sagas = [
  takeLatest(TYPES.FETCH_USER_TOKEN_REQUEST, executeFetchToken),
  takeLatest(TYPES.RECOVER_USER_PASSWORD_REQUEST, executeRecover),
  takeLatest(TYPES.FETCH_USER_BY_JWT, executeFetchUserByJWT)
]

export default sagas
