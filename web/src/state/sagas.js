import AuthSagas from '../process/users/auth/actions'
import AnimalSagas from '../ui/pages/homepage/dummy_actions'
import RootSagas from './actions'
// import EvaluationsFiltersSaga from 'Process/evaluations/filters/actions'
import { all } from 'redux-saga/effects'

export default function* root() {
  let sagas = []
    .concat(AuthSagas)
    .concat(AnimalSagas)
    .concat(RootSagas)
  yield all(sagas)
}
