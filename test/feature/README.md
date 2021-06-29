# Feature testing

## Setup

```bash
npm install codeceptjs puppeteer
```

### Initiating codecept with gherkin

```bash
"test:feature:init"
```

### Generating new feature file

```bash
"test:gen:feature"
```

### Generating steps from feature files

```bash
"test:gen:steps"
```

### Generating page objects

npx codeceptjs generate:pageobject

## Running tests

All tests
´´´bash
"test:feature"
´´´

Test one specific feature
´´´bash
"test:feature /path/to/feature/file"
´´´

Run tests that with tags

```bash
test:feature:tag "@tagname"
```

### localhost setup

### staging setup
