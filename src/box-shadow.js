import { useState, useEffect } from 'react';

import LabelledInput from './labelled-input';

const BoxShadow = () => {
  const [horOffset, setHorOffset] = useState(0);
  const [verOffset, setVerOffset] = useState(0);
  const [blurRad, setBlurRad]     = useState(0);
  const [spreadRad, setSpreadRad] = useState(0);
  const [color, setColor] = useState('rgba(0, 0, 0, 0.4)');
  const [inset, setInset] = useState(false);

  let boxShadowStyle = `${horOffset}px ${verOffset}px ${blurRad}px ${spreadRad}px ${color}${inset ? ' inset' : ''}`

  return (
    <div className="box-shadow">
      <div className="example-div" style={{ boxShadow: boxShadowStyle }}></div>
      <div>
        <LabelledInput label="Horizontal Offset" type="number" value={horOffset} setValue={setHorOffset} />
        <LabelledInput label="Vertical Offset" type="number" value={verOffset} setValue={setVerOffset} />
        <LabelledInput label="Blur Radius" type="number" value={blurRad} setValue={setBlurRad} />
        <LabelledInput label="Spread Radius" type="number" value={spreadRad} setValue={setSpreadRad} />
        <label>
          Color
          <input type="text" defaultValue="rgba(0, 0, 0, 0.4)"/>
        </label>
        <LabelledInput label="Inset" type="checkbox" setValue={setInset} />
      </div>
    </div>
  );
}

export default BoxShadow;

