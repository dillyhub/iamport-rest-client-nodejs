"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Base_1 = __importDefault(require("./Base"));
;
class Payment extends Base_1.default {
    setAttributes(response) {
        const { imp_uid, merchant_uid, pay_method, channel, pg_provider, pg_tid, pg_id, escrow, apply_num, bank_code, bank_name, card_code, card_name, card_quota, card_number, card_type, vbank_code, vbank_name, vbank_num, vbank_holder, vbank_date, vbank_issued_at, name, amount, cancel_amount, currency, buyer_name, buyer_email, buyer_tel, buyer_addr, buyer_postcode, custom_data, user_agent, status, started_at, paid_at, failed_at, cancelled_at, fail_reason, cancel_reason, receipt_url, cancel_history, cancel_receipt_urls, cash_receipt_issued, customer_uid, customer_uid_usage, } = response;
        this.imp_uid = imp_uid;
        this.merchant_uid = merchant_uid;
        this.pay_method = pay_method;
        this.channel = channel;
        this.pg_provider = pg_provider;
        this.pg_tid = pg_tid;
        this.pg_id = pg_id;
        this.escrow = escrow;
        this.apply_num = apply_num;
        this.bank_code = bank_code;
        this.bank_name = bank_name;
        this.card_code = card_code;
        this.card_name = card_name;
        this.card_quota = card_quota;
        this.card_number = card_number;
        this.card_type = card_type;
        this.vbank_code = vbank_code;
        this.vbank_name = vbank_name;
        this.vbank_num = vbank_num;
        this.vbank_holder = vbank_holder;
        this.vbank_date = this.timeToDate(vbank_date);
        this.vbank_issued_at = this.timeToDate(vbank_issued_at);
        this.name = name;
        this.amount = amount;
        this.cancel_amount = cancel_amount;
        this.currency = currency;
        this.buyer_name = buyer_name;
        this.buyer_email = buyer_email;
        this.buyer_tel = buyer_tel;
        this.buyer_addr = buyer_addr;
        this.buyer_postcode = buyer_postcode;
        this.custom_data = custom_data;
        this.user_agent = user_agent;
        this.status = status;
        this.started_at = this.timeToDate(started_at);
        this.paid_at = this.timeToDate(paid_at);
        this.failed_at = this.timeToDate(failed_at);
        this.cancelled_at = this.timeToDate(cancelled_at);
        this.fail_reason = fail_reason;
        this.cancel_reason = cancel_reason;
        this.receipt_url = receipt_url;
        this.cancel_history = cancel_history;
        this.cancel_receipt_urls = cancel_receipt_urls;
        this.cash_receipt_issued = cash_receipt_issued;
        this.customer_uid = customer_uid;
        this.customer_uid_usage = customer_uid_usage;
    }
}
exports.default = Payment;
//# sourceMappingURL=Payment.js.map