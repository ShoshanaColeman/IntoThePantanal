# Into The Pantanal — website

A fully responsive, static rebuild of the "Into The Pantanal" photo essay, ready to host for free on GitHub Pages.

## Files

- `index.html` — all page content
- `style.css` — all styling (responsive for mobile, tablet, and desktop)
- `script.js` — fades out the loading screen once the page is ready
- `images/` — all 44 photos, uncropped and at their original aspect ratio

No build step, no dependencies — it's plain HTML/CSS/JS.

## What changed from the previous version

- The hero now fills the screen (cropped to fit, like a magazine cover) instead of showing at its native size.
- Image-and-text sections now sit side by side on tablet and desktop instead of always stacking.
- The photo groupings now lay out as a responsive multi-column mosaic (1 column on phones, 2 on tablets, up to 3 on desktop) using CSS columns, so every photo keeps its original, uncropped aspect ratio at any screen size — nothing is stretched or cut off.
- Typography, spacing and color were tuned to match the reference layout more closely.

## Host it for free on GitHub Pages

1. Create a new repository on GitHub (public repos get free Pages hosting).
2. Upload all the files in this folder to the repository, keeping the `images/` folder structure intact.
3. In the repo, go to **Settings → Pages**.
4. Under "Build and deployment", set **Source** to "Deploy from a branch".
5. Set **Branch** to `main` (or whichever branch you uploaded to) and folder to `/ (root)`, then **Save**.
6. GitHub will give you a live URL, usually `https://<your-username>.github.io/<repo-name>/`, within a minute or two.

## Notes

- The site is mobile-first and tested at phone, tablet, and desktop widths.
- To update text, edit `index.html` directly. To adjust colors/spacing/breakpoints, edit `style.css`.
