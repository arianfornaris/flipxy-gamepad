
// You can write more code here

/* START OF COMPILED CODE */

import PreloadText from "../components/PreloadText";
/* START-USER-IMPORTS */
import assetPackUrl from "../../static/assets/asset-pack.json";
/* END-USER-IMPORTS */

export default class Preload extends Phaser.Scene {

	constructor() {
		super("Preload");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	editorCreate(): void {

		// progress
		const progress = this.add.text(360, 723, "", {});
		progress.setOrigin(0.5, 0.5);
		progress.text = "Cargando... 0%";
		progress.setStyle({ "fontFamily": "arial", "fontSize": "40px", "stroke": "#000", "strokeThickness": 4 });

		// first_loading_icon
		this.add.image(360, 640, "first-loading-icon");

		// progress (components)
		new PreloadText(progress);

		this.events.emit("scene-awake");
	}

	/* START-USER-CODE */

	// Write your code here

	preload() {

		this.editorCreate();

		this.load.pack("asset-pack", assetPackUrl);

		document.getElementById("splash")?.remove();
	}

	create() {

		this.scene.start("PlayerSelectorScene");
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
