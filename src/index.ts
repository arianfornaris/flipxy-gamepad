import Phaser from "phaser";
import Preload from "./scenes/Preload";
import LevelGamepad from "./scenes/LevelGamepad";
import PlayerSelector from "./scenes/PlayerSelector";
import assetPackUrl from "../static/assets/boot-asset-pack.json";
import { SpinePlugin } from "@esotericsoftware/spine-phaser";

window.addEventListener('load', function () {

	class Boot extends Phaser.Scene {

		preload() {

			this.load.pack("boot-asset-pack", assetPackUrl);
		}

		create() {

			this.scene.start("Preload");
		}
	}

	const game = new Phaser.Game({
		width: 720,
		height: 1280,
		backgroundColor: "#181026",
		scale: {
			mode: Phaser.Scale.ScaleModes.FIT,
			autoCenter: Phaser.Scale.Center.CENTER_BOTH
		},
		input: {
			activePointers: 4
		},
		plugins: {
			scene: [{
				key: "spine.SpinePlugin",
				plugin: SpinePlugin,
				mapping: "spine"
			}]
		},
		scene: [Boot, Preload, PlayerSelector, LevelGamepad]
	});

	game.scene.start("Boot");
});