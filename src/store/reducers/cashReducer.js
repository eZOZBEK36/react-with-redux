const defaultState = {
	cash: 0,
}

const ADDCASH = 'ADDCASH'
const GETCASH = 'GETCASH'

export const cashReducer = (state = defaultState, action) => {
	switch (action.type) {
		case ADDCASH:
			return { ...state, cash: state.cash + action.payload }
		case GETCASH:
			return { ...state, cash: state.cash - action.payload }
		default:
			return state
	}
}

export const addCashAction = payload => ({ type: ADDCASH, payload })
export const getCashAction = payload => ({ type: GETCASH, payload })
