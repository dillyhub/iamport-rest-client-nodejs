"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Base_1 = __importDefault(require("./Base"));
class PaycoStatus extends Base_1.default {
    setAttributes(response) {
        const { status } = response;
        this.status = status;
    }
}
exports.default = PaycoStatus;
//# sourceMappingURL=PaycoStatus.js.map