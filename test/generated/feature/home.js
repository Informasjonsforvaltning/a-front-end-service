"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const { I } = inject();
class HomePage {
    constructor() {
        this.serviceTable = '//table';
    }
    seeDetailedInformation(serviceName) {
        return __awaiter(this, void 0, void 0, function* () {
            const elementPath = `//tr[text()=${serviceName}]`;
            I.click(elementPath);
            const detail_path = '//div//table//legend[text()=Details]';
            I.seeElement(detail_path);
        });
    }
    tableRowTotal(expected) {
        return __awaiter(this, void 0, void 0, function* () {
            return I.grabNumberOfVisibleElements(`${this.serviceTable}/tbody/tr`).then((result) => {
                chai_1.expect(result).to.equal(expected);
            });
        });
    }
    tableContains(expected) {
        const elementPath = `${this.serviceTable}/tbody/tr/td[text()[contains(. ,'${expected}')]]`;
        I.seeElement({ xpath: elementPath });
    }
}
const homePage = new HomePage();
exports.default = homePage;
//# sourceMappingURL=home.js.map