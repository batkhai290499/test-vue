# Khainb-base-vuejs

### Features

- 🔥 Type checking [TypeScript](https://www.typescriptlang.org)
- 💎 Integrate with [Tailwind CSS](https://tailwindcss.com)
- ✅ Strict Mode for TypeScript
- 🌐 Multi-language (vue-i18n) with [vue-i18n](https://vue-i18n.intlify.dev/)
- ⌨️ Form handling with VeeValidate
- 💖 Code Formatter with [Prettier](https://prettier.io)
- 🦊 Husky for Git Hooks
- 🚫 Lint-staged for running linters on Git staged files
- 🚓 Lint git commit with Commitlint

### Getting started

Run the following command on your local environment:

```shell
git clone https://github.com/batkhai290499/test-vue.git
cd test-vue
bun install
```

Clone a file **.env.local** from **.env.example**

```shell
.env
```

Then, you can run the project locally in development mode with live reload by executing:

```shell
bun dev
```

### Prerequisites

- Node.js (v18.20.3)
- Bun (v1.0.0)

### Commit Message Format

```text
feat(ticket ID):[**user**] Test messages
```

### Project structure

```shell
.
├── README.md                       # README file
├── .husky                          # Husky configuration
├── .vscode                         # VSCode configuration
├── public                          # Public assets folder
├── src
│   ├── assets                      # Vue assets
│   ├── components                  # Vue components
│       ├── common                  # Vue components common
│       ├── ui                      # Vue components generated by using shadcn-vue
│   ├── composables                 # Vue composables functions
│   ├── locales                     # Locales folder (vue-i18n)
│   ├── layout                      # Layout App and Auth
│   ├── lib                         # Store common functions or helper (utils)
│   ├── store                       # Pinia store
│   ├── pages                       # Initial module for screen
│   ├── router                      # Config router tree
│   ├── services                    # Config services request
│   ├── views                       # Include screen
│   ├── App.vue                     # Root app
├── tailwind.config.js               # Tailwind CSS configuration
├── .env.example                    # Environment variables example
├── .eslintignore                   # Eslint configuration
├── .eslintrc.json                  # Eslint configuration
├── .gitignore                      # Git configuration
├── commitlint.config.ts             # Commitlint configuration
├── vite.config.ts                   # Vite configuration
└── tsconfig.json                    # TypeScript configuration
```

### Workflow

1. Create your feature branch (git branch feature/**[project-task ID]**). Example: **feature/OTC-UW1711**
2. Commit your changes (feat(ticket ID):[**user**] Test messages. Example: git commit -m 'feat(UW-1711):[HoangNH] Test commitlint 1')
3. Push to the branch (git push origin feature/YourFeature)
4. Open a pull request with description and follow template below:

```
Changelog - 06/07/2024

**Branch: feature/[module/domain]-UW1711**

**What does this PR do?**
* Development: Briefly describe the new feature or development (If any)
* Improvement: Briefly describe the new feature or improvement (if any)
* Bugfix: Briefly describe the bug and how it's fixed (If any)
*
**Why are we making these changes?**
* Reason for the changes, including any related problem or issue this addresses.

**Dependencies**
* List any dependencies, issues or block.

**Scope impact**
* Sign in
* My earning
```

### Acceptance criteria

1. Color (Using hex color)

- All of the colors were declared in the **src/assets/base.css** file already. And we have to follow them.
- In case of we have a new color from figma design:
  - Step 1: We MUST check whether that color hex exists in the file or not. If any, we can use it immediately.
  - Step 2: If the color does not exist in the **src/assets/base.css** file. Please using the variable from figma and add it into **src/assets/base.css** file, BUT you MUST to make sure that variable does NOT OVERLAP with previous variables. If the new variable is overlapped, you can rename it and make a name meaningful for it (Up to you).

2. Font size

- We are using the tailwind Tuple font size (Detail here: [Tuple](https://tailwindcss.com/docs/font-size#providing-a-default-line-height)) to style text.

- A font size tuple will need to pay attention to the following variables:

  - --Type-Font-size. **Example: --Type-Font-size-140**
  - --Type-Line-height. **Example: --Type-Line-height-160**
  - --Type-Letter-spacing. **Example: --Type-Letter-spacing--40**
  - fontWeight. **Example: 500**

- In case, you can not find a suitable font size value tuple. You can add it manually and give it a meaningful variable name

3. A FILE IS NOT ALLOWED TO EXCEED 400 LINES OF CODE. You must separate code when the number of lines of code over 400 lines.

4. To create a component, we can put it into here: **/src/components/**. And follow the naming convention below:

- For folders, use PascalCase. Example: DemoComponent
- For files, default(index.vue) and PascalCase are allowed. Example: index.vue, PascalComponent.vue
- For names of components, use PascalCase.
- The component must be exported as default. Example: **export default Component;**

5. DO NOT use async callbacks in the onMounted().

6. Fix all critical errors in Sonarqube.

### VS Code extensions

- Headwind
- ESLint
- GitLens
- GitGraph
- SVG
- Vetur or Volar (for Vue 3)

### Forking workflow

1. Take the latest code from base-vuejs

```shell
    git remote add upstream ssh:...
```

- Fetch the Latest Changes
  ```shell
  git fetch upstream
  ```
- Merge the Latest Changes into Fork
  ```shell
  git checkout main
  git merge upstream/main
  git checkout develop
  git merge main
  ```
- Daily meeting every working day
- Review and Planning every Thursday in the week

2. Raise a pull request to base-vuejs repository

- subdomain ->main

### Login with account

```
username: emilys
password: emilyspass
```
