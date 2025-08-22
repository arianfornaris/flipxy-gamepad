
// You can write more code here

/* START OF COMPILED CODE */

import { UserComponent } from "@phaserjs/editor-scripts-base";
/* START-USER-IMPORTS */
import { SpineGameObject } from "@esotericsoftware/spine-phaser";
/* END-USER-IMPORTS */

export default class SpineAnimation extends UserComponent {

	constructor(gameObject: SpineGameObject) {
		super(gameObject);

		this.gameObject = gameObject;
		(gameObject as any)["__SpineAnimation"] = this;

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	static getComponent(gameObject: SpineGameObject): SpineAnimation {
		return (gameObject as any)["__SpineAnimation"];
	}

	private gameObject: SpineGameObject;
	public startAnimation: string = "";

	/* START-USER-CODE */

	awake(): void {

		this.gameObject.animationState.setAnimation(0, this.startAnimation, true);
	}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
