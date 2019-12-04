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

## Running tests

All tests
´´´bash
"test:feature"
´´´

Test one specific feature
´´´bash
"test:feature /path/to/feature/file"
´´´

Run tests that are tagged

```bash
test:feature:tag "@tagname"
```

### localhost setup

### staging setup
