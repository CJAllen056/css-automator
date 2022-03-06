const LabelledInput = props => {
	return (
		<label>
			{props.label}
			<input
				type={props.type}
				value={props.value}
				onChange={e => props.setValue(e.target[props.type === "checkbox" ? "checked" : "value"])}
			/>
		</label>
	)
}

export default LabelledInput;