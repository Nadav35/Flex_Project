import React, { Component } from 'react';
import 'aframe';
import 'aframe-physics-system';
import {Entity} from 'aframe-react';

class Bullets extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    document.querySelector('body').addEventListener('keydown', function (evt) { 
      if (evt.keyCode === 32) {
        setTimeout(() => {
          let camera = document.querySelector("#camera");
          let position = {x:-.5, y:.5, z: -1}
          let rotation = camera.getAttribute('rotation');
          let newBullets = document.createElement('a-entity')
          newBullets.setAttribute('mixin', 'bullets');
          newBullets.setAttribute('class', 'bullet-sphere');
          let parent = document.querySelector("#scene");
          parent.appendChild(newBullets);
          let animation = document.createElement('a-animation');
          let radian = -(rotation.y * (Math.PI / 180));
          let new_z = (20 * Math.cos(radian));
          let new_x = (20 * Math.sin(radian));

          animation.setAttribute('attribute', 'position');
          animation.setAttribute('from', `${position.x} ${position.y} ${position.z}`);
          animation.setAttribute('to', `${new_x} ${rotation.x} ${-new_z}`)
          if (rotation.x < -1) {
            animation.setAttribute('to', `${new_x} ${rotation.x + 2} ${-new_z}`)
          } else if (rotation.x > 4 && rotation.x < 9) {
              animation.setAttribute('to', `${new_x} ${rotation.x - .9} ${-new_z}`)
          } else if (rotation.x > 11 && rotation.x < 20) {
              animation.setAttribute('to', `${new_x} ${rotation.x - 10} ${-new_z}`)
          } else if (rotation.x > 20) {
              animation.setAttribute('to', `${new_x} ${rotation.x - 10} ${-new_z}`)
          }
          newBullets.setAttribute('data', `${-new_z}`)
          animation.setAttribute('dur', '750');
          animation.setAttribute('repeat', '0');
          newBullets.appendChild(animation);
          let bulletZ = newBullets.getAttribute("data");
          if (bulletZ == -new_z) {
            setTimeout(() => newBullets.parentEl.removeChild(newBullets), 500)
          }
          }, 500);
        }
    })
  }

  render() {
      return (
      <a-entity>
      </a-entity>
      )
  }
};

export default Bullets;