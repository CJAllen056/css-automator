import { SketchPicker } from 'react-color';

const ColorPicker = props => {
	const { color, setColor } = props;

	const setColorOnChange = ({ rgb }) => {
		const colorString = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${rgb.a})`
		setColor(colorString);
	}

	return (
		<label>
			Color
			<SketchPicker
				color={color}
				onChange={setColorOnChange}
				presetColors={[]}
			/>
		</label>
	)
}

export default ColorPicker;