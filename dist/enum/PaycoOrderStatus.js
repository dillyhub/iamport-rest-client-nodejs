"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PaycoOrderStatusEnum;
(function (PaycoOrderStatusEnum) {
    PaycoOrderStatusEnum["DELIVERY_START"] = "DELIVERY_START";
    PaycoOrderStatusEnum["PURCHASE_DECISION"] = "PURCHASE_DECISION";
    PaycoOrderStatusEnum["CANCELED"] = "CANCELED";
})(PaycoOrderStatusEnum = exports.PaycoOrderStatusEnum || (exports.PaycoOrderStatusEnum = {}));
;
class PaycoOrderStatus {
    getValue(key) {
        if (key) {
            switch (key) {
                case 'DELIVERY_START':
                    return '배송시작/출고지시';
                case 'PURCHASE_DECISION':
                    return '구매확정';
                case 'CANCELED':
                    return '취소';
                default:
                    throw new Error(`정의되지 않은 key값(${key}) 입니다.`);
            }
        }
        throw new Error('key값을 입력해주세요.');
    }
}
exports.default = new PaycoOrderStatus();
//# sourceMappingURL=PaycoOrderStatus.js.map