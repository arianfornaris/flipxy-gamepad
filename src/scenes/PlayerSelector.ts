
// You can write more code here

/* START OF COMPILED CODE */

import { SkinsAndAnimationBoundsProvider } from "@esotericsoftware/spine-phaser";
import SpineAnimation from "../components/SpineAnimation";
import SelectPlayerScript from "../prefabs/SelectPlayerScript";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class PlayerSelector extends Phaser.Scene {

	constructor() {
		super("PlayerSelectorScene");

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

		// text
		const text = this.add.text(355, 1104, "", {});
		text.setOrigin(0.5, 0.5);
		text.text = "Selecciona el jugador";
		text.setStyle({ "backgroundColor": "", "color": "#ffffffff", "fontFamily": "monospace", "fontSize": "40px", "fontStyle": "bold", "stroke": "#000000ff", "strokeThickness": 12, "shadow.offsetX": 1, "shadow.offsetY": 1, "shadow.color": "black" });

		// player1
		const player1 = this.add.spine(334, 847, "Animations-Flying Monster - 01", "Animations-Flying Monster - 01-atlas", new SkinsAndAnimationBoundsProvider(null, ["default"]));
		player1.skeleton.setSkinByName("default");

		// selectPlayerScript
		const selectPlayerScript = new SelectPlayerScript(player1);

		// player2
		const player2 = this.add.spine(504, 385, "Animations-Flying Monster - 03", "Animations-Flying Monster - 03-atlas", new SkinsAndAnimationBoundsProvider(null, ["default"]));
		player2.skeleton.setSkinByName("default");
		player2.scaleX = -0.64;
		player2.scaleY = 0.64;
		player2.angle = -9;

		// selectPlayerScript_1
		const selectPlayerScript_1 = new SelectPlayerScript(player2);

		// player1 (components)
		const player1SpineAnimation = new SpineAnimation(player1);
		player1SpineAnimation.startAnimation = "Idle";

		// selectPlayerScript (prefab fields)
		selectPlayerScript.playerId = "player1";

		// player2 (components)
		const player2SpineAnimation = new SpineAnimation(player2);
		player2SpineAnimation.startAnimation = "Idle";

		// selectPlayerScript_1 (prefab fields)
		selectPlayerScript_1.playerId = "player2";

		this.text = text;

		this.events.emit("scene-awake");
	}

	public text!: Phaser.GameObjects.Text;

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
