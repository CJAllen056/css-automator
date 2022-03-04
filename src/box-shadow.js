import { useState, useEffect } from 'react';

import LabelledInput from './labelled-input';

const BoxShadow = () => {
  const [horOffset, setHorOffset] = useState(0);
  const [verOffset, setVerOffset] = useState(0);
  const [blurRad, setBlurRad]     = useState(0);
  const [spreadRad, setSpreadRad] = useState(0);
  const [color, setColor] = useState('rgba(0, 0, 0, 0.4');
  const [inset, setInset] = useState(false);

  useEffect(() => {
    console.log(horOffset, verOffset, blurRad, spreadRad);
  })

  return (
    <div className="box-shadow">
      <div className="example-div"></div>
      <div>
        <LabelledInput label="Horizontal Offset" inputType="number" value={horOffset} setValue={setHorOffset} />
        <LabelledInput label="Vertical Offset" inputType="number" value={verOffset} setValue={setVerOffset} />
        <LabelledInput label="Blur Radius" inputType="number" value={blurRad} setValue={setBlurRad} />
        <LabelledInput label="Spread Radius" inputType="number" value={spreadRad} setValue={setSpreadRad} />
        <label>
          Color
          <input type="text" defaultValue="rgba(0, 0, 0, 0.4)"/>
        </label>
        <LabelledInput label="Inset" inputType="checkbox" value={inset} onChange={setInset} />
      </div>
    </div>
  );
}

export default BoxShadow;

