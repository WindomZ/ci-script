# ci-script

[![Greenkeeper badge](https://badges.greenkeeper.io/WindomZ/ci-script.svg)](https://greenkeeper.io/)
[![Build Status](https://travis-ci.org/WindomZ/ci-script.svg?branch=master)](https://travis-ci.org/WindomZ/ci-script)
[![Coverage Status](https://coveralls.io/repos/github/WindomZ/ci-script/badge.svg?branch=master)](https://coveralls.io/github/WindomZ/ci-script?branch=master)
[![Dependency](https://david-dm.org/WindomZ/ci-script.svg)](https://david-dm.org/WindomZ/ci-script)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](https://opensource.org/licenses/MIT)

> Just execute the CI scripts.

[![NPM](https://nodei.co/npm/ci-script.png)](https://nodei.co/npm/ci-script/)

[![ci-script](https://img.shields.io/npm/v/ci-script.svg)](https://www.npmjs.com/package/ci-script)
[![status](https://img.shields.io/badge/status-stable-green.svg)](https://www.npmjs.com/package/ci-script)

## Features

- [x] _cli_ - Command line interface.
- [x] _travis_ - Automatically loads `.travis.yml` file and executes the inside `scripts`.

## Install

```bash
npm install -g ci-script
```

## Usage

```bash
$ ci-script -h

  Usage: ci-script [options] [dir]

  Execute the CI script.

  Options:
    -h, --help, help            output usage information
    -v, -V, --version, version  output the version number
```

## Example

```bash
ci-script          # working in the local directory.
ci-script tests    # working in the `./tests/` directory.
ci-script ~/tests  # working in the `~/tests/` directory.
```

## Environment

- linux CI pass
- macOS CI pass
- windows Not yet tested

## Contributing

Welcome to pull requests, report bugs, suggest ideas and discuss **ci-script**, 
i would love to hear what you think about **ci-script** on [issues page](https://github.com/WindomZ/ci-script/issues).

If you like it then you can put a :star: on it.

## License

[MIT](https://github.com/WindomZ/ci-script/blob/master/LICENSE)
