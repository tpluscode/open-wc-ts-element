# @open-wc project template, tweaked to work with Typescript

The template sets up `@open-wc/linting` and `@open-wc/testing`.

To get running in a real project one will have to add other `@open-wc` templates
by running `npm init @open-wc`

## Changes compared to standard templates

* Linting 
    * Adds [`standard`](https://www.npmjs.com/package/standard)
    * Semicolons disabled
    * Uses `@typescript-eslint` parser and config
    * Default Typescript indentation changed to 2 spaces
    * Ignore warnings from eslint (`--quiet`)
* Testing
    * Runs on transpiled because karma-typescript config is notoriously hard to get right
    * Coverage updated with `remap-istanbul`
