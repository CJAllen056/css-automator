import { useState } from 'react';

const BoxShadow = () => {
  const [horOffset, setHorOffset] = useState(0);
  const [verOffset, setVerOffset] = useState(0);
  const [blurRad, setBlurRad]     = useState(0);
  const [spreadRad, setSpreadRad] = useState(0);
  const [color, setColor] = useState('rgba(0, 0, 0, 0.4');
  const [inset, setInset] = useState(false);

  return (
    <div className="box-shadow">
      <div className="example-div"></div>
      <div>
        <label>
          Horizontal Offset
          <input type="text" defaultValue="0"/>
        </label>
        <label>
          Vertical Offset
          <input type="text" defaultValue="0"/>
        </label>
        <label>
          Blur Radius
          <input type="text" defaultValue="0"/>
        </label>
        <label>
          Spread Radius
          <input type="text" defaultValue="0"/>
        </label>
        <label>
          Color
          <input type="text" defaultValue="rgba(0, 0, 0, 0.4)"/>
        </label>
        <label>
          Horizontal Offset
          <input type="checkbox" />
        </label>
      </div>
    </div>
  )
}

export default BoxShadow;


// Horizontal Offset
// Vertical Offset
// Blur Radius (optional)
// Spread Radius (optional)
// Color
// Optional 'inset' keyword