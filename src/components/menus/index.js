import React from 'react';

const menus = [
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
        <img src={menu.image} alt="" />
        <h3>{menu.name}</h3>
        <small>{menu.time}</small>
        <p>{menu.desc}</p>
        <a href={menu.link} target="_blank">Download</a>
      </div>
    ))}
    <div className="menu menu-min">
      <img src="https://picsum.photos/360/240/?image=901" alt="" />
    </div>
  </div>
);