const config = {
  type: Phaser.AUTO, // Which renderer to use
  width: 800, // Canvas width in pixels
  height: 600, // Canvas height in pixels
  parent: "game-container", // ID of the DOM element to add the canvas to
  scene: {
    preload: preload,
    create: create,
    update: update
  },
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 0 } // Top down game, so no gravity
    }
  }
};

const game = new Phaser.Game(config);
let cursors;
let player;

function preload() {
  // this.load.image("mario-tiles", "/mason/img/super-mario-tiles.png");
  // this.load.tilemapCSV("map", "map.csv");

  this.load.image("canyon", "/mason/img/mountain_landscape.png");
  this.load.image("tile_world", "/mason/img/wood_tileset.png");
  this.load.tilemapTiledJSON("town-map", "youngoaks_map.json");

  // An atlas is a way to pack multiple images together into one texture. I'm using it to load all
  // the player animations (walking left, walking right, etc.) in one image. For more info see:
  //  https://labs.phaser.io/view.html?src=src/animation/texture%20atlas%20animation.js
  // If you don't use an atlas, you can do the same thing with a spritesheet, see:
  //  https://labs.phaser.io/view.html?src=src/animation/single%20sprite%20sheet.js
  this.load.atlas("atlas", "/mason/img/atlas.png", "/mason/atlas.json");
  
}

function create() {

  const map = this.make.tilemap({key: "town-map"});

  // Object layers in Tiled let you embed extra info into a map - like a spawn point or custom
  // collision shapes. In the tmx file, there's an object layer with a point named "Spawn Point"
  const spawnPoint = map.findObject("Objects", obj => obj.name === "Spawn Point");
  

  // Parameters are the name you gave the tileset in Tiled and then the key of the tileset image in
  // Phaser's cache (i.e. the name you used in preload)
  const tileset_tileworld = map.addTilesetImage("tile_world", "tile_world");
  const tileset_canyon = map.addTilesetImage("canyon", "canyon");
  
  // Parameters: layer name (or index) from Tiled, tileset, x, y
  const belowLayer = map.createStaticLayer("below player", tileset_tileworld, 0, 0);
  const worldLayer = map.createStaticLayer("world", tileset_tileworld, 0, 0);
  const aboveLayer = map.createStaticLayer("above player", tileset_tileworld, 0, 0);

  const belowLayerCanyon = map.createStaticLayer("below player canyon", tileset_canyon, 0, 0);
  const worldCanyonLayer = map.createStaticLayer("world canyon", tileset_canyon, 0, 0);
  const aboveLayerCanyon = map.createStaticLayer("above player canyon", tileset_canyon, 0, 0);
  
  // WHEN WORLDS COLLIDE!!!
  worldLayer.setCollisionByProperty({collides: true});
  
  
  // const debugGraphics = this.add.graphics().setAlpha(0.75);
  // worldLayer.renderDebug(debugGraphics, {
  //   tileColor: null, // Color of non-colliding tiles
  //   collidingTileColor: new Phaser.Display.Color(243, 134, 48, 255), // Color of colliding tiles
  //   faceColor: new Phaser.Display.Color(40, 39, 37, 255) // Color of colliding face edges
  // });


  // Create a sprite with physics enabled via the physics system. The image used for the sprite has
  // a bit of whitespace, so I'm using setSize & setOffset to control the size of the player's body.
  player = this.physics.add
  .sprite(spawnPoint.x, spawnPoint.y, "atlas", "misa-front")
  .setSize(30, 40)
  .setOffset(0, 24);

  this.physics.add.collider(player, worldLayer);

  worldCanyonLayer.setCollisionByProperty({collides: true});
  this.physics.add.collider(player, worldCanyonLayer);

  // Create the player's walking animations from the texture atlas. These are stored in the global
  // animation manager so any sprite can access them.
  const anims = this.anims;
  anims.create({
    key: "misa-left-walk",
    frames: anims.generateFrameNames("atlas", { prefix: "misa-left-walk.", start: 0, end: 3, zeroPad: 3 }),
    frameRate: 10,
    repeat: -1
  });
  anims.create({
    key: "misa-right-walk",
    frames: anims.generateFrameNames("atlas", { prefix: "misa-right-walk.", start: 0, end: 3, zeroPad: 3 }),
    frameRate: 10,
    repeat: -1
  });
  anims.create({
    key: "misa-front-walk",
    frames: anims.generateFrameNames("atlas", { prefix: "misa-front-walk.", start: 0, end: 3, zeroPad: 3 }),
    frameRate: 10,
    repeat: -1
  });
  anims.create({
    key: "misa-back-walk",
    frames: anims.generateFrameNames("atlas", { prefix: "misa-back-walk.", start: 0, end: 3, zeroPad: 3 }),
    frameRate: 10,
    repeat: -1
  });
  

  // Phaser supports multiple cameras, but you can access the default camera like this:
  const camera = this.cameras.main;
  
  camera.startFollow(player);
  
  // Set up the arrows to control the camera
  cursors = this.input.keyboard.createCursorKeys();
  controls = new Phaser.Cameras.Controls.FixedKeyControl({
    camera: camera,
    left: cursors.left,
    right: cursors.right,
    up: cursors.up,
    down: cursors.down,
    speed: 0.9
  });

  // Constrain the camera so that it isn't allowed to move outside the width/height of tilemap
  camera.setBounds(0, 0, map.widthInPixels, map.heightInPixels);

  // Help text that has a "fixed" position on the screen
  this.add
    .text(16, 16, "Use arrow keys to view the map :^)", {
      font: "18px monospace",
      fill: "#ffffff",
      padding: { x: 20, y: 10 },
      backgroundColor: "#006600"
    })
    .setScrollFactor(0);
}

function update(time, delta) {
  // Apply the controls to the camera each update tick of the game
  // controls.update(delta);

  const speed = 175;
  const prevVelocity = player.body.velocity.clone();

  // Stop any previous movement from the last frame
  player.body.setVelocity(0);

  // Horizontal movement
  if (cursors.left.isDown) {
    player.body.setVelocityX(-speed);
  } else if (cursors.right.isDown) {
    player.body.setVelocityX(speed);
  }

  // Vertical movement
  if (cursors.up.isDown) {
    player.body.setVelocityY(-speed);
  } else if (cursors.down.isDown) {
    player.body.setVelocityY(speed);
  }

  // Normalize and scale the velocity so that player can't move faster along a diagonal
  player.body.velocity.normalize().scale(speed);

  // Update the animation last and give left/right animations precedence over up/down animations
  if (cursors.left.isDown) {
    player.anims.play("misa-left-walk", true);
  } else if (cursors.right.isDown) {
    player.anims.play("misa-right-walk", true);
  } else if (cursors.up.isDown) {
    player.anims.play("misa-back-walk", true);
  } else if (cursors.down.isDown) {
    player.anims.play("misa-front-walk", true);
  } else {
    player.anims.stop();

    // If we were moving, pick and idle frame to use
    if (prevVelocity.x < 0) player.setTexture("atlas", "misa-left");
    else if (prevVelocity.x > 0) player.setTexture("atlas", "misa-right");
    else if (prevVelocity.y < 0) player.setTexture("atlas", "misa-back");
    else if (prevVelocity.y > 0) player.setTexture("atlas", "misa-front");
  }
}
