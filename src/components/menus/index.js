import React from 'react';

const menus = [
  {
    image: 'https://via.placeholder.com/360x250/c3b284',
    name: 'Breakfast',
    time: '7am - 11:30am | Mon - Fri',
    link: '#',
  },
  {
    image: 'https://via.placeholder.com/360x250/81775c',
    name: 'Lunch & Dinner',
    time: '11:30am - Close | Mon - Fri,<br />3pm - Close | Sat',
    link: '#',
  },
  {
    image: 'https://via.placeholder.com/360x250/7d6944',
    name: 'Weekend',
    time: '8am - 3pm | Sat &nbsp; Sun',
    link: '#',
  },
];

export default props => (
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
          <a className="menu-link" href={menu.link} target="_blank">Download</a>
        </div>
      </div>
    ))}
    <div className="menu menu-min">
      <div
        className="menu-image"
        style={{
          backgroundImage: 'url(https://via.placeholder.com/360x560/cca082)'
        }}
      />
    </div>
  </div>
);