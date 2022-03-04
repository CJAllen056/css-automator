const NumberInput = props => {
	return (
		<label>
			{props.label}
			<input type="number" value={props.value} onChange={e => props.setValue(e.target.value)} />
		</label>
	)
}

export default NumberInput;