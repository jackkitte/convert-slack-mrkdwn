import fs from 'fs';
import unified from 'unified';
import remarkParse from 'remark-parse';
import remarkHtml from 'remark-html';
import htmlToMarkdown from 'html-to-mrkdwn';

let text = fs.readFileSync(process.argv[2])
const markdown = text;

let htmlText = htmlToMarkdown(
  unified().use(remarkParse, { commonmark: true }).use(remarkHtml)
    .processSync(markdown).toString()
).text

console.log(htmlText);
