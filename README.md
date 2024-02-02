# Boilerplate Next.js 14

## Technologies used

- [Next.js 14](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [shadcn/ui](https://ui.shadcn.com/)
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [EditorConfig]()

## VSCode Extensions

For their linters and plugins to work, install their respective extensions. Below are the official extension links:

Download - [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

Download - [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

## Creating new project

To create a new project using this template, use the command below:

```bash
npx create-next-app@latest --example https://github.com/gildembergleite/boirlerplate-next14-typescript-shadcn
```

## VSCode Settings

In the root of the project, inside the .vscode folder, you will find the file with the linter settings.

See the project settings below:

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "cSpell.words": ["autodocs", "nextjs"],
  "editor.codeActionsOnSave": {
    "source.organizeImports": true
  }
}
```
