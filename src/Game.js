import Phaser from 'phaser';
import React, { useEffect, useRef, forwardRef, useImperativeHandle } from 'react';

const Game = forwardRef((props, ref) => {
  const ballRef = useRef(null);

  useEffect(() => {
    const config = {
      type: Phaser.CANVAS,
      width: 600,
      height: 400,
      parent: 'phaser-game',
      physics: {
        default: 'arcade',
        arcade: {
          gravity: { y: 0 }, // No gravity to keep the ball moving in all directions
          debug: false,
        },
      },
      scene: {
        preload: preload,
        create: create,
      },
    };

    const game = new Phaser.Game(config);

    function preload() {
      this.load.image('sky', 'assets/cloudWithSea.png');
      this.load.image('ball', 'assets/tennis-ball.png');
    }

    function create() {
      this.add.image(300, 200, 'sky');
      const ball = this.physics.add.image(300, 200, 'ball')
        .setCollideWorldBounds(true)
        .setBounce(1, 1);
      ball.setDisplaySize(50, 50);
      ball.setVelocity(300, 300); // Set initial velocity

      ballRef.current = ball;
    }

    return () => {
      game.destroy(true);
    };
  }, []);

  useImperativeHandle(ref, () => ({
    moveBall(direction) {
      if (!ballRef.current) return;

      switch (direction) {
        case 'up1':
          ballRef.current.setVelocity(0, -500);
          break;
          case 'up2':
          ballRef.current.setVelocity(0, -500);
          break;
        case 'down1':
          ballRef.current.setVelocity(0, 500);
          break;
          case 'down2':
          ballRef.current.setVelocity(0, 500);
          break;
        case 'left1':
          ballRef.current.setVelocity(-500, 0);
          break;
          case 'left2':
          ballRef.current.setVelocity(-500, 0);
          break;
        case 'right1':
          ballRef.current.setVelocity(500, 0);
          break;
          case 'right2':
          ballRef.current.setVelocity(500, 0);
          break;
        default:
          break;
      }
    }
  }));

  return <div id="phaser-game"></div>;
});

export default Game;
