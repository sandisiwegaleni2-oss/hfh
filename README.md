# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Publish with GitHub Pages

The workflow in `.github/workflows/deploy.yml` builds and deploys this site
when changes are pushed to `main` or `master`.

1. Push the project to a GitHub repository. A public repository is required for
   free GitHub Pages hosting.
2. In the repository, open **Settings → Pages** and set the build source to
   **GitHub Actions**.
3. To enable the volunteer, donation, and newsletter forms, add the
   `VITE_WEB3FORMS_ACCESS_KEY` Actions secret under **Settings → Secrets and
   variables → Actions**. Vite includes this value in the client-side bundle,
   so it is not a private credential.
4. Push to `main` or `master` and check the **Actions** tab for the deployment
   URL.

The build config sets the correct asset base for project and `*.github.io`
sites. The workflow also publishes a 404 fallback for direct client-side routes.
