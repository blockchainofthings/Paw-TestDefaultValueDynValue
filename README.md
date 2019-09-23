# Test Default Value Paw Extension

This is a Dynamic Value Paw extension that has been created to demonstrate a bug associated with default values of input
 fields of dynamic values.

## Usage

Create a new request, add a custom header to it (e.g. 'X-Test') and assign this dynamic value as its value.

The value returned by the dynamic value is a JSON object containing the dynamic value's fields with their corresponding
 currently assigned values, so it is easy to follow what is going on.

## Development

### Prerequisites

```shell
nvm install
nvm use
npm install
```

### Build

```shell
npm run build
```

### Install

```shell
make install
```

### Test

```shell
npm test
```

## License

This Paw Extension is released under the [MIT License](LICENSE). Feel free to fork, and modify!

Copyright © 2019 Blockchain of Things Inc.
