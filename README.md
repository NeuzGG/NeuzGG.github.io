# Neuzfolio

Personal portfolio for **Neuz**, a Discord bot developer. Plain HTML, CSS and JavaScript with no build step and no dependencies, so it runs on any static host.

```
index.html            the page
assets/css/style.css  all styles (colors are at the top in :root)
assets/js/main.js     all effects, plus the settings and project list at the top
assets/img/           icons, screenshots, avatars, share image
```

## Things to edit

At the top of `assets/js/main.js`:

- **`CONFIG.discordUsername`**: your Discord username. Shows a "copy username" button in the Contact section. Leave it `''` to hide the button.
- **`CONFIG.discordLink`**: where "Message me on Discord" goes. Use `https://discord.com/users/<your user ID>` or a server invite.
- **`ARCHIVE`**: the project list in the Archive section. `cat` can be `bot`, `lib`, `tool` or `web`.

The three featured projects (NeuzStrap, NeuzBlox, Raya) live in `index.html` under `CURRENT PROJECTS`.

Star counts, repo counts, latest releases and the raya.js npm version load live from the GitHub and npm APIs. If those APIs are unreachable, the numbers written in the HTML are shown instead.

## Run it locally

```bash
python -m http.server 5173
```

Then open http://localhost:5173.

## Host it on GitHub Pages (free)

1. Create a repository called **`NeuzGG.github.io`** on the NeuzGG account.
2. Upload everything in this folder to it (or `git push`).
3. Go to **Settings → Pages**, pick the `main` branch and `/ (root)`, then save.
4. After about a minute the site is live at **https://neuzgg.github.io**.

The `og:image` and `og:url` tags in `index.html` already point at `https://neuzgg.github.io`, so link previews in Discord work as soon as it's live. If you ever move the site to another address, change those two lines to match.

Vercel and Netlify also work: import the repository, keep the default settings (there is no build command), and deploy.
