

class Scene1 extends Phaser.Scene {
  constructor() {
    super("scene1");
  }
  preload(){
    this.load.image("joy", "assets/joy.png");
    this.load.image("vsa", "assets/vsa.png");
    this.load.image("territories", "assets/territories.png");
    this.load.image("breadcrumb1", "assets/breadcrumb1.png");
    this.load.image("search", "assets/search.png");
    this.load.image("textbox", "assets/textbox.png");
    this.load.image("nextbutton", "assets/nextbutton.png");
    this.load.image("backbutton", "assets/backbutton.png");
    this.load.spritesheet("Isaac", "assets/IsaacRossSheet.png", {
      frameWidth: 116,
      frameHeight: 150
    });
    this.load.spritesheet("redbox", "assets/redboxsheet.png", {
      frameWidth: 170,
      frameHeight: 40
    });
  }
  create(){
  this.background = this.add.image(0, 0, "joy");
  this.background.setOrigin(0, 0);
  this.startButton = this.add.text(20, 20, 'Start', { fill: 'white' })
        this.startButton.setInteractive({ useHandCursor: true })
        this.input.on('gameobjectdown', this.changeScene, this);
}
  changeScene(pointer, gameObject) {
      this.scene.start("scene2");
      }
  }

  class Scene2 extends Phaser.Scene {
    constructor() {
      super("scene2");
    }

    create(){
      this.background = this.add.image(0, 0, "vsa");
      this.background.setOrigin(0, 0);
      this.textbox = this.add.image(550, 500, "textbox");
      const isaactalks = this.add.sprite(config.width - 200, config.height - 225, "Isaac");
      isaactalks.setScale(3);

      const redboxflash = this.add.sprite(config.width - 1190, config.height - 190, "redbox");
  //    this.redboxflash = this.add.sprite(config.width / 2, config.height / 2, "redbox");

      var graphics = this.make.graphics();
      graphics.fillRect(550, 500, 575, 150);
      var mask = new Phaser.Display.Masks.GeometryMask(this, graphics);
      var currenttext = this.add.text(275, 425, "Hello! I am Isaac, one of the creators of the Territories Manager, and I am legally distinct from Bob Ross. Today we'll be creating and editing some happy little territories and we'll start by clicking the territories link in the menu on the left.", { fontFamily: 'Arial', fontSize: '24px', color: '#000000', wordWrap: { width: 495 } }).setOrigin(0);

      this.anims.create({
        key: "IsaacTalkingAnim",
        frames: this.anims.generateFrameNumbers("Isaac",
        { start: 0,
          end: 1}),
        frameRate: 12,
        repeat: 5,
      });
      this.anims.create({
        key: "IsaacPointingAnim",
        frames: this.anims.generateFrameNumbers("Isaac",
        { start: 2,
          end: 4}),
        frameRate: 12,
        repeat: 0,
      });
      this.anims.create({
        key: "redboxflashes",
        frames: this.anims.generateFrameNumbers("redbox",
        { start: 0,
          end: 3}),
        frameRate: 12,
        repeat: -1,
      });
      isaactalks.play('IsaacTalkingAnim');
      isaactalks.playAfterDelay('IsaacPointingAnim',3000);
      redboxflash.playAfterDelay("redboxflashes", 3000);
      this.isaacsez = this.add.image(820, 560, "nextbutton");
      this.isaacsez.setInteractive({ useHandCursor: true })
      this.input.on('gameobjectdown', this.changeScene, this);
    }
      changeScene(pointer, gameObject) {
          this.scene.start("scene3");
          }
}

class Scene3 extends Phaser.Scene {
  constructor() {
    super("scene3");
  }
            create() {
              this.inside = this.add.image(0, 0, "territories");
              this.inside.setOrigin(0, 0);

              this.textbox = this.add.image(550, 500, "textbox");

              const isaactalks = this.add.sprite(config.width - 200, config.height - 225, "Isaac");
              isaactalks.setScale(3);


              var graphics = this.make.graphics();
              graphics.fillRect(550, 500, 575, 150);

              var mask = new Phaser.Display.Masks.GeometryMask(this, graphics);

              var currenttext = this.add.text(275, 425, "Here is the Territories Manager.", { fontFamily: 'Arial', fontSize: '24px', color: '#000000', wordWrap: { width: 495 } }).setOrigin(0);
              isaactalks.play('IsaacTalkingAnim');
                      this.isaacsez = this.add.image(820, 560, "nextbutton");
                      this.isaacsez.setInteractive({ useHandCursor: true })
                      .on('pointerdown', this.changeScene, this);

                      this.isaacback = this.add.image(275, 560, "backbutton");
                      this.isaacback.setInteractive({ useHandCursor: true })
                      .on('pointerdown', this.changeSceneBack, this);
                    }

                    changeSceneBack(pointer, gameObject) {
                        this.scene.start("scene2");
                        }
                      changeScene(pointer, gameObject) {
                          this.scene.start("scene4");
                          }



            update(){

            }
          }

class Scene4 extends Phaser.Scene {
            constructor() {
              super("scene4");
            }
                      create() {
                        this.inside = this.add.image(0, 0, "breadcrumb1");
                        this.inside.setOrigin(0, 0);

                        this.textbox = this.add.image(550, 500, "textbox");

                        const isaactalks = this.add.sprite(config.width - 200, config.height - 225, "Isaac");
                        isaactalks.setScale(3);


                        var graphics = this.make.graphics();
                        graphics.fillRect(550, 500, 575, 150);

                        var mask = new Phaser.Display.Masks.GeometryMask(this, graphics);

                        var currenttext = this.add.text(275, 425, "This is the breadcrumb menu. Here you can drilldown through parent options to filter the search results or set a parent to create a new child territory.", { fontFamily: 'Arial', fontSize: '24px', color: '#000000', wordWrap: { width: 495 } }).setOrigin(0);
                        isaactalks.play('IsaacTalkingAnim');
                                this.isaacsez = this.add.image(820, 560, "nextbutton");
                                this.isaacsez.setInteractive({ useHandCursor: true })
                                .on('pointerdown', this.changeScene, this);

                                this.isaacback = this.add.image(275, 560, "backbutton");
                                this.isaacback.setInteractive({ useHandCursor: true })
                                .on('pointerdown', this.changeSceneBack, this);
                              }

                              changeSceneBack(pointer, gameObject) {
                                  this.scene.start("scene3");
                                  }
                                changeScene(pointer, gameObject) {
                                    this.scene.start("scene5");
                                    }



                      update(){

                      }
                    }

class Scene5 extends Phaser.Scene {
          constructor() {
              super("scene5");
              }
                  create() {
                        this.inside = this.add.image(0, 0, "search");
                        this.inside.setOrigin(0, 0);

                        this.textbox = this.add.image(550, 500, "textbox");

                        const isaactalks = this.add.sprite(config.width - 200, config.height - 225, "Isaac");
                        isaactalks.setScale(3);


                        var graphics = this.make.graphics();
                        graphics.fillRect(550, 500, 575, 150);

                        var mask = new Phaser.Display.Masks.GeometryMask(this, graphics);

                        var currenttext = this.add.text(275, 425, "This is the search menu where you can find a territory to edit or delete.", { fontFamily: 'Arial', fontSize: '24px', color: '#000000', wordWrap: { width: 495 } }).setOrigin(0);
                        isaactalks.play('IsaacTalkingAnim');
                        this.isaacsez = this.add.image(820, 560, "nextbutton");
                        this.isaacsez.setInteractive({ useHandCursor: true })
                        .on('pointerdown', this.changeScene, this);

                        this.isaacback = this.add.image(275, 560, "backbutton");
                        this.isaacback.setInteractive({ useHandCursor: true })
                        .on('pointerdown', this.changeSceneBack, this);
                        }

                        changeSceneBack(pointer, gameObject) {
                          this.scene.start("scene4");
                          }
                          changeScene(pointer, gameObject) {
                          this.scene.start("scene6");
                          }



                                          update(){

                                          }
                                        }

class Scene6 extends Phaser.Scene {
  constructor() {
    super("scene6");
  }
            create() {
              this.inside = this.add.image(0, 0, "territories");
              this.inside.setOrigin(0, 0);

              this.textbox = this.add.image(550, 500, "textbox");

              const isaactalks = this.add.sprite(config.width - 200, config.height - 225, "Isaac");
              isaactalks.setScale(3);


              var graphics = this.make.graphics();
              graphics.fillRect(550, 500, 575, 150);

              var mask = new Phaser.Display.Masks.GeometryMask(this, graphics);

              var stuffisaacsez = ["Maybe you SHOULD extend your cars warranty!",
                               "Why do they call it oven when you of in the cold food of out hot eat the food.",
                               "Has Anyone Really Been Far Even as Decided to Use Even Go Want to do Look More Like?",
                               "Have you considered investing in a timeshare?",
                               "Every day is a fresh opportunity to waste.",
                               "You can't have everything. I mean where would you even put it?",
                               "If you give a man a fish... You're just out here giving away fish? Who does that?",
                               "In the human kingdom, the rule is, yeet or be yeeten.",
                               "Life is uncertain. \n \n \n That's all there's no reassurance here.",
                               "An apple a day can keep almost anybody away if you can throw it hard enough.",
                               "Sometimes your dumbest ideas are the best ones."];

              var num = Math.floor(Math.random() * Math.floor(stuffisaacsez.length));

              var currenttext = this.add.text(275, 425, "Now I'm just a magic 8 ball.", { fontFamily: 'Arial', fontSize: '24px', color: '#000000', wordWrap: { width: 495 } }).setOrigin(0);

              this.isaacsez = this.add.image(820, 560, "nextbutton");
              this.isaacsez.setInteractive({ useHandCursor: true })

              .on('pointerdown', function () {
                    {
                      isaactalks.play('IsaacTalkingAnim');
                       var num = Math.floor(Math.random() * Math.floor(stuffisaacsez.length));
                      currenttext.setText(stuffisaacsez[num]);
                    }
                    });

/*                this.input.on('gameobjectdown', function () {
                      {
                        isaactalks.play('IsaacTalkingAnim');
                         var num = Math.floor(Math.random() * Math.floor(stuffisaacsez.length));
                        currenttext.setText(stuffisaacsez[num]);
                      }
                      });
*/
                this.isaacback = this.add.image(275, 560, "backbutton");
                this.isaacback.setInteractive({ useHandCursor: true })
                .on('pointerdown', this.changeSceneBack, this);
              }

              changeSceneBack(pointer, gameObject) {
                this.scene.start("scene5");
  }

            update(){

            }
          }





var config = {
  width: 1277,
  height: 600,
  parent: 'container ',
  backgroundColor: 0x000000,
  scene: [Scene1, Scene2, Scene3, Scene4, Scene5, Scene6],
}

var game = new Phaser.Game(config);
