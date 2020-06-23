import slackifyMarkdown from 'slackify-markdown';
import fs from 'fs';

let text = fs.readFileSync(process.argv[2])
const markdown = text;

console.log(slackifyMarkdown(markdown));
