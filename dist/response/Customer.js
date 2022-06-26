"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Base_1 = __importDefault(require("./Base"));
class Customer extends Base_1.default {
    setAttributes(response) {
        const { customer_uid, card_name, card_code, card_number, customer_name, customer_tel, customer_email, customer_addr, customer_postcode, inserted, updated, } = response;
        this.customer_uid = customer_uid;
        this.card_name = card_name;
        this.card_code = card_code;
        this.card_number = card_number;
        this.customer_name = customer_name;
        this.customer_tel = customer_tel;
        this.customer_email = customer_email;
        this.customer_addr = customer_addr;
        this.customer_postcode = customer_postcode;
        this.inserted = this.timeToDate(inserted);
        this.updated = this.timeToDate(updated);
    }
}
exports.default = Customer;
//# sourceMappingURL=Customer.js.map