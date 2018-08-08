import TYPES from './dummy_types'

// dummy_reducer
export const initialState = {
  animals: []
}

const loadAnimals = (state, { animals }) => ({
  ...state,
  animals
})

const handlers = {
  [TYPES.FETCH_ANIMALS_SUCCESS]: loadAnimals
}

export default function(state = initialState, action = {}) {
  return handlers[action.type]
    ? handlers[action.type](state, action)
    : state
}

export const selector = {
  name: 'animals',
  select(state) {
    return state.animals
  }
}
