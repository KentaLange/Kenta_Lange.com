# Kenta_Lange.com
 
```sh
npm create astro@latest -- --template minimal
```

 ✅ Complete Portfolio Website

  🎨 Design: Clean, minimalist dark theme inspired by love.
  📱 Responsive: Works perfectly on desktop and mobile devices🧪 Tested: Comprehensive test suite with Playwright
  🚀 Deploy-ready: Configured for Render.com hosting

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/minimal)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/minimal)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/minimal/devcontainer.json)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).

## New Feature
✅ Preview Changes
### PreReq  ```brew install render```

### Steps
1. Commit Latest Changes onto Branch ```git ci```
2. Checkout pr_test Branch ```git co pr_test```
3. Rebase pr_test Branch to main (so less chance of merge errors) ```git rebase -i main```
4. Merge in your test changes from Branch ```git merge $branchname```
5. Force Push to upstream ```git push -f```
6. Run PR Previewer - Make sure .env exists with RENDER_PUSH_URL set from render.com settings ```./preview.sh```
7. Attach to logs render to make sure it deploys ```render logs -o text --tail -r $RENDER_SERVICE```

