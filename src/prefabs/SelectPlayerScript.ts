
// You can write more code here

/* START OF COMPILED CODE */

import { ScriptNode } from "@phaserjs/editor-scripts-base";
import { OnPointerDownScript } from "@phaserjs/editor-scripts-quick";
import { CallbackActionScript } from "@phaserjs/editor-scripts-quick";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class SelectPlayerScript extends ScriptNode {

	constructor(parent: ScriptNode | Phaser.GameObjects.GameObject | Phaser.Scene) {
		super(parent);

		// onPointerDownScript
		const onPointerDownScript = new OnPointerDownScript(this);

		// callbackActionScript
		const callbackActionScript = new CallbackActionScript(onPointerDownScript);

		// callbackActionScript (prefab fields)
		callbackActionScript.callback = () => this.onSelectPlayer();

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	public playerId: "player1"|"player2" = "player1";

	/* START-USER-CODE */

	private onSelectPlayer() {

		this.scene.add.tween({
			targets: this.gameObject,
			y: "-=50",
			ease: Phaser.Math.Easing.Quintic.Out,
			duration: 300,
			onComplete: () => {

				this.scene.scene.start("LevelGamepad", { playerId: this.playerId });
			}
		});

		const game = this.scene.game;

		if (game.device.os.android || game.device.os.iOS) {

			game.scale.startFullscreen();
		}
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
