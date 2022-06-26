"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Base_1 = __importDefault(require("./Base"));
class Certification extends Base_1.default {
    setAttributes(response) {
        const { imp_uid, merchant_uid, pg_tid, pg_provider, name, gender, birth, birthday, foreigner, certified, certified_at, unique_key, unique_in_site, origin, } = response;
        this.imp_uid = imp_uid;
        this.merchant_uid = merchant_uid;
        this.pg_tid = pg_tid;
        this.pg_provider = pg_provider;
        this.name = name;
        this.gender = gender;
        this.birth = this.timeToDate(birth);
        this.birthday = birthday;
        this.foreigner = foreigner;
        this.certified = certified;
        this.certified_at = this.timeToDate(certified_at);
        this.unique_key = unique_key;
        this.unique_in_site = unique_in_site;
        this.origin = origin;
    }
}
exports.default = Certification;
//# sourceMappingURL=Certification.js.map