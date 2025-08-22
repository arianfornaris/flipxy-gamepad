# A gamepad for Flipxy.

This gamepad should be embedded into the game distribution, desktop or android.

For testing it in development:

- Run the `flipxy-desktop` project with `npm run dev-all` command.
- Compile this project with: `npm start`.
- Open browser in `http://localhost:9091/?gamepad-ws=ws://localhost:8082`.

The `gamepad` query param is for connecting to the gamepad websocket server. The `fullscreen` query param is for starting it on fullscreen.