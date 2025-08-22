import Peer, { DataConnection } from "peerjs";
import { getQueryParam } from "./SearchParams";
import { v4 as uuid } from "uuid";

export class GamepadManager {

    private static _websocket: WebSocket;
    static _peer: Peer;
    static _peerConn: DataConnection;

    static start() {

        try {

            const wsUrl = getQueryParam("gamepad-ws");

            if (wsUrl) {

                console.log(`[Websocket] Connecting to gamepad: ${wsUrl}`);

                this._websocket = new WebSocket(wsUrl);
                this._websocket.addEventListener("open", e => {

                    console.log("Connected to gamepad server");

                    this._websocket.send(JSON.stringify({
                        type: "register-gamepad"
                    }));
                });

            } else {

                const gamePeer = getQueryParam("peer");

                if (gamePeer) {

                    console.log(`[PeerJS] Connecting to gamepad`);

                    this._peer = new Peer("flipxy-gamepad" + uuid(), {
                        debug: 3
                    });

                    this._peer.on("open", (id) => {

                        console.log(`[PeerJS] Connected to peer server: ${id}`);

                        console.log("Connecting to game...");

                        this._peerConn = this._peer.connect(gamePeer);

                        this._peerConn.on("open", () => {

                            console.log(`[PeerJS] Open connection to peer server`);
                        });

                        this._peerConn.on("close", () => {

                            console.log(`[PeerJS] Close connection to peer server`);
                        });

                        this._peerConn.on("error", (e) => {

                            console.log(`[PeerJS] Error connection to peer server: `, e);
                        });

                        this._peerConn.on("iceStateChanged", (e) => {

                            console.log(`[PeerJS] ICE state changed: `, e);
                        });

                    });

                } else {

                    alert("Información insuficiente para conectar con servicio de mando remoto.");
                }
            }

        } catch (e) {

            console.log(e);

            alert("El servicio de control remoto no está disponible.");
        }
    }

    static sendMessage(action: string, args?: any) {

        const data = {
            type: "message",
            dest: "game",
            body: {
                action,
                args
            }
        };

        try {

            if (this._websocket) {

                console.log("[Websocket] Sending message: ", data);

                this._websocket.send(JSON.stringify(data));
            }

            if (this._peerConn) {

                console.log("[PeerJS] Sending message: ", data);

                this._peerConn.send(data);
            }

        } catch (e) {

            alert((e as Error).message);
        }
    }
}