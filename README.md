# ai-copy

CLI tool to copy a system prompt and source files of a project to attach them to an AI prompt configurable with globs of included/excluded files and templating.

## Install

Run `npm install --save-dev ai-copy`.

## Configuration

* Run `npx ai-copy-init` to create default system prompt and configuration files into an `ai` directory.
* Change system prompt file `ai/systemPrompt.md` with instructions for each prompt.
* Change configuration file `ai/ai-copy.json`:
  * `includes`: Supports [globs](https://www.npmjs.com/package/glob), which files are included.
  * `excluded` (optional): Supports globs, which of the included files get excluded.
  * `template`: Template array for each file supporting variables `{filePath}` and `{fileContent}`.

## Usage

* MacOS: Run `npx ai-copy | pbcopy`.
* Windows: Run `npx ai-copy | clip`.
* Linux:
  * If needed, install `xclip` first via `sudo apt-get install xclip`.
  * Run `npx ai-copy | xclip -selection clipboard`.
