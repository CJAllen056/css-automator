import { useState, useEffect } from 'react';

import LabelledInput from './labelled-input';
import ColorPicker from './color-picker';

const BoxShadow = () => {
  const [horOffset, setHorOffset] = useState(5);
  const [verOffset, setVerOffset] = useState(0);
  const [blurRad, setBlurRad]     = useState(20);
  const [spreadRad, setSpreadRad] = useState(2);
  const [color, setColor] = useState('rgba(0, 0, 0, 0.3)');
  const [inset, setInset] = useState(false);

  const boxShadowStyle = `${color} ${horOffset}px ${verOffset}px ${blurRad}px ${spreadRad}px${inset ? ' inset' : ''}`

  return (
    <div className="bs-generator row">
      <div className="bs-preview-container one-half column">
        <div className="bs-preview" style={{ boxShadow: boxShadowStyle }}></div>
      </div>
      <div className="bs-inputs one-half column">
        <div className="row">
          <LabelledInput className="one-half column" label="Horizontal Offset" type="number" value={horOffset} setValue={setHorOffset} />
          <LabelledInput className="one-half column" label="Vertical Offset" type="number" value={verOffset} setValue={setVerOffset} />
        </div>
        <div className="row">
          <LabelledInput className="one-half column" label="Blur Radius" type="number" value={blurRad} setValue={setBlurRad} />
          <LabelledInput className="one-half column" label="Spread Radius" type="number" value={spreadRad} setValue={setSpreadRad} />
        </div>
        <ColorPicker color={color} setColor={setColor} />
        <LabelledInput label="Inset" type="checkbox" setValue={setInset} />
      </div>
    </div>
  );
}

export default BoxShadow;

