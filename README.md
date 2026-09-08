# Learning Playwright Fundamentals

A hands-on project for learning [Playwright](https://playwright.dev/) — a modern end-to-end testing framework for web applications. Tests are written in TypeScript using `@playwright/test`.

## Prerequisites

- **Node.js** (18 or newer) — download from [nodejs.org](https://nodejs.org/)
- **npm** (bundled with Node.js)

Check your versions:

```bash
node --version
npm --version
```

## Playwright Installation

### 1. Initialize the project

```bash
npm init -y
```

### 2. Install the Playwright test runner

```bash
npm init playwright@latest
```

or install manually:

```bash
npm install --save-dev @playwright/test
```

### 3. Install the browsers

Playwright needs browser binaries to run tests. Install Chromium, Firefox, and WebKit:

```bash
npx playwright install
```

Install just one browser if you prefer (e.g. Chromium):

```bash
npx playwright install chromium
```

> **Note:** The default config used here keeps `headless: false`, so you can watch the browser while tests run.

## Basic Project Setup

A Playwright test project has this structure:

```
├── tests/                 # Test files (*.spec.ts / *.test.ts)
│   ├── example.spec.ts    # Sample test against playwright.dev
│   └── tta-check.spec.ts  # Test against The Testing Academy app
├── playwright.config.ts   # Test runner configuration
├── package.json
└── README.md
```

### Playwright config (`playwright.config.ts`)

The config declares:

- **`testDir`** — where test files live (`./tests`)
- **`projects`** — browsers to run tests against (Chromium, Firefox, WebKit)
- **`reporter`** — HTML reporter for readable results
- **`use`** — global options such as `headless: false`, `trace: 'on-first-retry'`

## Running the Tests

Run all tests across the configured browsers:

```bash
npx playwright test
```

Run tests in a single file:

```bash
npx playwright test tests/example.spec.ts
```

Run with the browser window visible (headed mode):

```bash
npx playwright test --headed
```

Debug a test with the Playwright inspector (stepping, pickers, trace):

```bash
npx playwright test --debug
```

Open the last HTML test report:

```bash
npx playwright show-report
```

## Codegen — Generating Tests Automatically

Playwright's **codegen** records your browser actions and generates the test code for you:

```bash
npx playwright codegen
```

Pass a URL to start recording on that page immediately:

```bash
npx playwright codegen https://example.com
```

How it works:

1. A browser window opens next to the **Playwright Inspector**.
2. Click through the app / fill forms as a normal user.
3. Every action is recorded and converted into a test step (`goto`, `click`, `fill`, `expect`, ...).
4. Copy the generated code into a new file under `tests/` (e.g. `tests/my-test.spec.ts`).
5. Run it with `npx playwright test`.

Use the **locator picker** (the crosshair icon in the Inspector) to generate robust locators such as `page.getByRole('textbox', { name: 'Email Address' })` instead of fragile CSS/XPath selectors.

## Useful Resources

- [Playwright Docs](https://playwright.dev/docs/intro)
- [Playwright Test Configuration](https://playwright.dev/docs/test-configuration)
- [Codegen Guide](https://playwright.dev/docs/codegen)
- [Locators Guide](https://playwright.dev/docs/locators)

## License

MIT — see `package.json`.
