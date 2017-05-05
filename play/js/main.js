window.onerror = (c, a, t) => alert(`${c}\n${a}\n${t}`);

var SideScroller = SideScroller || {};

SideScroller.game = new Phaser.Game(746, 420, Phaser.AUTO, '');

SideScroller.game.state.add('Boot', SideScroller.Boot);
SideScroller.game.state.add('Preload', SideScroller.Preload);
SideScroller.game.state.add('Game', SideScroller.Game);

SideScroller.game.state.start('Boot');
