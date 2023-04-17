import { Formatter } from 'cucumber-json-report-formatter';

const formatter = new Formatter();
const sourceFile = './cucumber-messages.ndjson';
const outputFile = './reports/cucumber-report.json';
await formatter.parseCucumberJson(sourceFile, outputFile);
