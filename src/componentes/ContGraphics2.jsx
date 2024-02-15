import React from 'react';
import "../css/graphics2.css"
import BarsChart from '../graphics/BarsChart';
import GraphicCircular from '../graphics/GraphicCircular';
import GraphicCircular2 from '../graphics/GraphicCircular2';

function ContGraphics2(props) {
  return (
    <div className='App__pageAnalicis__Graphics2'>
      <div className='App__pageAnalicis__Graphics2__graphicItem'>
        <h5>Unidades vendidas</h5>
        <BarsChart />
      </div>
      <div className='App__pageAnalicis__Graphics2__graphicItem'>
        <GraphicCircular />
      </div>
      <div className='App__pageAnalicis__Graphics2__graphicItem'>
        <GraphicCircular2 />
      </div>
    </div>
  );
}

export default ContGraphics2;