import { call, put, takeLatest } from 'redux-saga/effects'

import * as api from './dummy_api'
import TYPES from './dummy_types'

export const name = 'homepageActions'

export function fetchAnimals(amount) {
  return {
    type: TYPES.FETCH_ANIMALS_REQUEST,
    amount,
  }
}

export function* executeFetchAnimals({ amount }) {
  const url = api.fetch.formatUrl(amount)
  try {
    const res = yield call(api.fetch.request, url)
    yield put(fetchSuccess(res.data.animals))
  } catch (res) {
    // eslint-disable-next-line noconsole
    console.error('Request failed with', res.error)
  }
}

export function fetchSuccess(animals) {
  return {
    type: TYPES.FETCH_ANIMALS_SUCCESS,
    animals: animals
  }
}

const sagas = [
  takeLatest(TYPES.FETCH_ANIMALS_REQUEST, executeFetchAnimals)
]

export default sagas
