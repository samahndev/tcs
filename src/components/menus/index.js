import React from 'react';

const menus = [
  {
    image: 'https://picsum.photos/360/240/?image=901',
    name: 'Breakfast',
    time: 'Until 3pm',
    desc: 'Quo scelerisque diamlorem nibh hac doloremque ullam hac facere voluptatum eos aenean facilisis. facere voluptatum eos aenean facilisis.',
    link: '#',
  },
  {
    image: 'https://picsum.photos/360/240/?image=901',
    name: 'Breakfast',
    time: 'Until 3pm',
    desc: 'Quo scelerisque diamlorem nibh hac doloremque ullam hac facere voluptatum eos aenean facilisis.',
    link: '#',
  },
  {
    image: 'https://picsum.photos/360/240/?image=901',
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
          <h3 className="menu-name">{menu.name}</h3>
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
          backgroundImage: `url(https://picsum.photos/360/240/?image=901)`
        }}
      />
    </div>
  </div>
);