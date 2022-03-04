import { useState, useEffect } from 'react';

import NumberInput from './number-input';

const BoxShadow = () => {
  const [horOffset, setHorOffset] = useState(0);
  const [verOffset, setVerOffset] = useState(0);
  const [blurRad, setBlurRad]     = useState(0);
  const [spreadRad, setSpreadRad] = useState(0);
  const [color, setColor] = useState('rgba(0, 0, 0, 0.4)');
  const [inset, setInset] = useState(false);

  let boxShadowStyle = { boxShadow: `${horOffset}px ${verOffset}px ${blurRad}px ${spreadRad}px ${color}${inset ? ' inset' : ''}` };

  useEffect(() => {
    boxShadowStyle = `${horOffset} ${verOffset} ${blurRad} ${spreadRad} ${color}${inset ? ' inset' : ''}`
    console.log(horOffset, verOffset, blurRad, spreadRad, inset, boxShadowStyle);
  })

  return (
    <div className="box-shadow">
      <div className="example-div" style={boxShadowStyle}></div>
      <div>
        <NumberInput label="Horizontal Offset" value={horOffset} setValue={setHorOffset} />
        <NumberInput label="Vertical Offset" value={verOffset} setValue={setVerOffset} />
        <NumberInput label="Blur Radius" value={blurRad} setValue={setBlurRad} />
        <NumberInput label="Spread Radius" value={spreadRad} setValue={setSpreadRad} />
        <label>
          Color
          <input type="text" defaultValue="rgba(0, 0, 0, 0.4)"/>
        </label>
        <label>
          Inset
          <input type="checkbox" checked={inset} onChange={e => setInset(e.target.checked)} />
        </label>
      </div>
    </div>
  );
}

export default BoxShadow;

