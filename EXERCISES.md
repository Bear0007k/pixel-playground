# CTRL + PLAY workshop exercises

## Instructor demo · 8 minutes

Open the full game and play one round. Then open `starter/index.html` and show the three steps in `starter.js`: read input, update the player's position, draw a frame. Change the player color and speed live, saving and refreshing after each change.

## Participant build · 20–30 minutes

1. **Pick up an object.** In the starter, create a pickup with `x`, `y` and `size`. Draw it inside the arena. Use rectangle overlap in `update()` to detect contact. On contact, move the pickup to a new location away from the player. **Check:** the pickup appears, touching it moves it, and you can collect it again.
2. **Keep score.** Add a score variable and display it in HTML. Increment it inside the pickup collision check. **Check:** one pickup adds one point, and waiting in place leaves the score steady.
3. **Add a moving hazard.** Give a rectangle a horizontal velocity. Move it by velocity times `dt` and reverse at the arena edges. End the round when it overlaps the player. Add a restart button that resets the score and positions. **Check:** the hazard stays inside the arena, contact ends the round, and restart starts a fresh run.
4. **Remix the roulette theme.** Use either your starter build or the full game. Change the player, pickup, hazard and mission to fit the revealed theme. Then change one rule that suits it. **Check:** a partner can tell what to collect and avoid without an explanation.

## A prompt to try with Codex

> My roulette theme is [THEME]. Work in [starter or full game]. Help me implement exercise [NUMBER] using plain HTML, CSS and Canvas JavaScript. Keep the existing controls working. Explain the files you changed and give me two quick checks I can run in the browser.

## Two-minute playtest

Try both key layouts. Hold two directions to test diagonals. Move into each wall and confirm you stay inside the arena. Collect an item and check the score. In the full game, collect five items and check that the level increases and another drone appears. Hit a drone, restart, and check the score and level reset. Narrow the window and check the controls stay visible.
