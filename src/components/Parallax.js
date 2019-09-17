import React, { Component } from 'react';
import Plx from 'react-plx';


const bg = require('./img/home/spaghetti.jpg')
// An array of parallax effects to be applied - see below for detail
const parallaxData = [
  {
    start: 0,
    end: 50,
    properties: [
      {
        startValue: 0,
        endValue: 1,
        property: 'scale',
      },
      {
        startValue: 0,
        endValue: 1,
        property: 'opacity',
      },
    ],
  },
];

class Parallax extends Component {
  render() {
    return (
      <Plx
        className='MyAwesomeParallax'
        parallaxData={ parallaxData }
      >
        <img src={bg} />
      </Plx>
    );
  }
}

export default Parallax