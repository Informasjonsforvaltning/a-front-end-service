"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const home_1 = __importDefault(require("./home"));
const { I } = inject();
const homePage = new home_1.default();
Given('I am a public user', () => {
    I.say('Accessing public website', 'green');
});
Given('I am on homepage', () => {
    I.goToHomePage();
});
Then('I can see {int} table rows', (number) => {
    // From "features/overview.feature" {"line":10,"column":7}
    I.seeElement('//table');
    return homePage.tableRowTotal(number);
});
Then('The table contains {string}', (name) => {
    homePage.tableContains('a-backend-service');
    I.say(name, 'green');
});
Then('{string} has an url', () => {
    // From "features/overview.feature" {"line":12,"column":7}
    I.say('Not implemented yet', 'green');
});
Then('{string} has a version', () => {
    // From "features/overview.feature" {"line":13,"column":7}
    I.say('Not implemented yet', 'green');
});
When('I click a-backend-service', () => {
    // From "features/overview.feature" {"line":17,"column":5}
    //  homePage.seeDetailedInformation;
    I.say('Not implemented yet', 'green');
});
Then('I can see details about the service', (table) => {
    I.say(table, 'green');
    /* const value_row = table.rows[1];
    const exp_repo = value_row.cells[0].value;
    const exp_sha = table.rows[1].cells[1].value;
    const exp_branch = table.rows[1].cells[2].value;
    const exp_version = table.rows[1].cells[3].value;
    const exp_buildTime = table.row[1].cells[4].value; */
});
//# sourceMappingURL=home.steps.js.map