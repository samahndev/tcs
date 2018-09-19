import React from 'react';

const menus = [
  {
    image: 'https://via.placeholder.com/360x250/c3b284',
    name: 'Breakfast',
    time: 'Until 3pm',
    desc: 'Quo scelerisque diamlorem nibh hac doloremque ullam hac facere voluptatum eos aenean facilisis. facere voluptatum eos aenean facilisis.',
    link: '#',
  },
  {
    image: 'https://via.placeholder.com/360x250/81775c',
    name: 'Breakfast',
    time: 'Until 3pm',
    desc: 'Quo scelerisque diamlorem nibh hac doloremque ullam hac facere voluptatum eos aenean facilisis.',
    link: '#',
  },
  {
    image: 'https://via.placeholder.com/360x250/7d6944',
    name: 'Breakfast',
    time: 'Until 3pm',
    desc: 'Quo scelerisque diamlorem nibh hac doloremque ullam hac facere voluptatum eos aenean facilisis.',
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
          <small className="menu-time">{menu.time}</small>
          <p className="menu-desc">{menu.desc}</p>
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