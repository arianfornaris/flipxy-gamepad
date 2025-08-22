
// You can write more code here

/* START OF COMPILED CODE */

import { SkinsAndAnimationBoundsProvider } from "@esotericsoftware/spine-phaser";
import { SpineGameObject } from "@esotericsoftware/spine-phaser";
/* START-USER-IMPORTS */
import { GamepadManager } from "../utils/GamepadManager";
/* END-USER-IMPORTS */

export default class LevelGamepad extends Phaser.Scene {

	constructor() {
		super("LevelGamepad");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	editorCreate(): void {

		// cartoon_Spooky_Level_Set_Background___Layer_00
		const cartoon_Spooky_Level_Set_Background___Layer_00 = this.add.image(-959, -35, "Cartoon Spooky Level Set_Background - Layer 00");
		cartoon_Spooky_Level_Set_Background___Layer_00.scaleX = 1.972108430490048;
		cartoon_Spooky_Level_Set_Background___Layer_00.scaleY = 1.972108430490048;
		cartoon_Spooky_Level_Set_Background___Layer_00.setOrigin(0, 0);

		// btnFlipY
		const btnFlipY = this.add.image(535, 1120, "flipY");
		btnFlipY.setInteractive(new Phaser.Geom.Rectangle(-27, -130, 239.8980533710099, 335), Phaser.Geom.Rectangle.Contains);
		btnFlipY.scaleX = 1.5;
		btnFlipY.scaleY = 1.5;

		// btnFlipX
		const btnFlipX = this.add.image(185, 1120, "flipX");
		btnFlipX.setInteractive(new Phaser.Geom.Rectangle(-51, -130, 255.4435726517698, 335), Phaser.Geom.Rectangle.Contains);
		btnFlipX.scaleX = 1.5;
		btnFlipX.scaleY = 1.5;

		// player1
		const player1 = this.add.spine(377.4450863195165, 265, "Animations-Flying Monster - 01", "Animations-Flying Monster - 01-atlas", new SkinsAndAnimationBoundsProvider(null, ["default"]));
		player1.skeleton.setSkinByName("default");
		player1.scaleX = 0.5;
		player1.scaleY = 0.5;

		// player2
		const player2 = this.add.spine(377.4450864345634, 253, "Animations-Flying Monster - 03", "Animations-Flying Monster - 03-atlas", new SkinsAndAnimationBoundsProvider(null, ["default"]));
		player2.skeleton.setSkinByName("default");
		player2.scaleX = 0.5;
		player2.scaleY = 0.5;
		player2.angle = -9;

		this.btnFlipY = btnFlipY;
		this.btnFlipX = btnFlipX;
		this.player1 = player1;
		this.player2 = player2;

		this.events.emit("scene-awake");
	}

	private btnFlipY!: Phaser.GameObjects.Image;
	private btnFlipX!: Phaser.GameObjects.Image;
	private player1!: SpineGameObject;
	private player2!: SpineGameObject;

	/* START-USER-CODE */

	private _selectedPlayer!: "player1" | "player2";

	init(data: any) {

		this._selectedPlayer = data.playerId;
	}

	create() {

		this.editorCreate();

		GamepadManager.start();

		this.prepareFlipButtons(this.btnFlipX, "x");
		this.prepareFlipButtons(this.btnFlipY, "y");

		this.player1.visible = this._selectedPlayer == "player1";
		this.player2.visible = this._selectedPlayer === "player2";
	}

	private prepareFlipButtons(btn: Phaser.GameObjects.Image, btnId: "x" | "y") {

		btn.on("pointerdown", () => {

			GamepadManager.sendMessage(`flip-${btnId}`, { player: this._selectedPlayer });
		});
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
