const LabelledInput = props => {
	return (
		<label>
			{props.label}
			<input type={props.inputType} value={props.value} onChange={e => props.setValue(e.target.value)} />
		</label>
	)
}

export default LabelledInput;