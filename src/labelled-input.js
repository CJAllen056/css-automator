const LabelledInput = props => {
	const { className, label, type, value, setValue } = props;
	return (
		<label className={className}>
			{label}<br />
			<input
				type={type}
				value={value}
				onChange={e => setValue(e.target[type === "checkbox" ? "checked" : "value"])}
			/>
		</label>
	)
}

export default LabelledInput;