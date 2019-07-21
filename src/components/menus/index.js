import React from 'react';
import Fade from 'react-reveal/Fade'

import breakfast from '../../images/thecandyshop-breakfast.jpg'
import lunchDinner from '../../images/thecandyshop-lunch-dinner.jpg'
import weekend from '../../images/thecandyshop-weekend.jpg'
import disert from '../../images/thecandyshop-disert.jpg'

const menus = [
  {
    image: breakfast,
    name: 'Breakfast',
    time: 'Mon<span>-</span>Fri <span>/</span> 7am<span>-</span>11:30am',
    link: '#',
  },
  {
    image: lunchDinner,
    name: 'Lunch & Dinner',
    time: 'Mon<span>-</span>Fri <span>/</span> 11:30am<span>-</span>Close<br />Sat <span>/</span> 3pm<span>-</span>Close',
    link: '#',
  },
  {
    image: weekend,
    name: 'Weekend',
    time: 'Sat & Sun <span>/</span> 8am<span>-</span>3pm',
    link: '#',
  },
];

export default props => (
  <Fade up cascade>
    <div className="menus">
      {menus.map((menu, i) => (
        <div key={i} className="menu">
          <div
            className="menu-image"
            style={{
              backgroundImage: `url(${menu.image})`
            }}
          />
          <div className="menu-content">
            <h3 className="menu-name">
              <a href={menu.link} target="_blank">{menu.name}</a>
            </h3>
            <small
              className="menu-time"
              dangerouslySetInnerHTML={{ __html: menu.time }}
            />
            <a className="menu-link" href={menu.link} target="_blank">Download menu</a>
          </div>
        </div>
      ))}
      <div className="menu menu-min">
        <div
          className="menu-image"
          style={{
            backgroundImage: `url(${disert})`
          }}
        />
      </div>
    </div>
  </Fade>
);