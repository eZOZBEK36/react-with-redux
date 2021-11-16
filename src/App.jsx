import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addCashAction, getCashAction } from './store/reducers/cashReducer'

const App = () => {
	const dispatch = useDispatch()
	const cash = useSelector(state => state.cash.cash)

	const getCash = (cash) => {
		dispatch(getCashAction(cash))
	}
	const addCash = (cash) => {
		dispatch(addCashAction(cash))
	}

	return (
		<div className="container">
			<div className="fs-4 text-center">{ cash }</div>
			<div className="d-flex justify-content-center gap-4">
				<button onClick={ () => getCash(Number(prompt('Enter sum'))) } className="btn btn-lg btn-primary">Get cash</button>
				<button onClick={ () => addCash(Number(prompt('Enter sum'))) } className="btn btn-lg btn-warning">Add cash</button>
			</div>
		</div>
	)
}
export default App