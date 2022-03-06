const LabelledInput = props => {
	const { label, type, value, setValue } = props;
	return (
		<label>
			{label}
			<input
				type={type}
				value={value}
				onChange={e => setValue(e.target[type === "checkbox" ? "checked" : "value"])}
			/>
		</label>
	)
}

export default LabelledInput;