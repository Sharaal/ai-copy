# ai-copy

CLI tool to copy a system prompt and source files of a project to attach them to an AI prompt.

## Install

Run `npm install --save-dev ai-copy`

## Configuration

* Run `npx ai-copy-init`
* Change system prompt file `systemPrompt.md` with instructions for each prompt.
* Change configuration file `ai-copy.json`:
  * `includes`: Supports [globs](https://www.npmjs.com/package/glob).
  * `template`: Template for each file supporting variables `{filePath}` and `{fileContent}`.

## Usage

* MacOS: Run `npx ai-copy | pbcopy`
* Windows: Run `npx ai-copy | clip`
* Linux:
  * If needed, install `xclip` first via `sudo apt-get install xclip`
  * Run `npx ai-copy | xclip -selection clipboard`
