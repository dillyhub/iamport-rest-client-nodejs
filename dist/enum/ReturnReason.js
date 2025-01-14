"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ReturnReasonEnum;
(function (ReturnReasonEnum) {
    ReturnReasonEnum["INTENT_CHANGED"] = "INTENT_CHANGED";
    ReturnReasonEnum["COLOR_AND_SIZE"] = "COLOR_AND_SIZE";
    ReturnReasonEnum["WRONG_ORDER"] = "WRONG_ORDER";
    ReturnReasonEnum["PRODUCT_UNSATISFIED"] = "PRODUCT_UNSATISFIED";
    ReturnReasonEnum["DELAYED_DELIVERY"] = "DELAYED_DELIVERY";
    ReturnReasonEnum["SOLD_OUT"] = "SOLD_OUT";
    ReturnReasonEnum["DROPPED_DELIVERY"] = "DROPPED_DELIVERY";
    ReturnReasonEnum["BROKEN"] = "BROKEN";
    ReturnReasonEnum["INCORRECT_INFO"] = "INCORRECT_INFO";
    ReturnReasonEnum["WRONG_DELIVERY"] = "WRONG_DELIVERY";
    ReturnReasonEnum["WRONG_OPTION"] = "WRONG_OPTION";
})(ReturnReasonEnum = exports.ReturnReasonEnum || (exports.ReturnReasonEnum = {}));
;
class ReturnReason {
    getValue(key) {
        if (key) {
            switch (key) {
                case 'INTENT_CHANGED':
                    return '구매 의사 취소';
                case 'COLOR_AND_SIZE':
                    return '색상 및 사이즈 변경';
                case 'WRONG_ORDER':
                    return '다른 상품 잘못 주문';
                case 'PRODUCT_UNSATISFIED':
                    return '서비스 및 상품 불만족';
                case 'DELAYED_DELIVERY':
                    return '배송 지연';
                case 'SOLD_OUT':
                    return '상품 품절';
                case 'DROPPED_DELIVERY':
                    return '배송 누락';
                case 'BROKEN':
                    return '상품 파손';
                case 'INCORRECT_INFO':
                    return '상품정보상이';
                case 'WRONG_DELIVERY':
                    return '오배송';
                case 'WRONG_OPTION':
                    return '색상 등이 다른 상품을 잘못 배송';
                default:
                    throw new Error(`정의되지 않은 key값(${key}) 입니다.`);
            }
        }
        throw new Error('key값을 입력해주세요.');
    }
}
exports.default = new ReturnReason();
//# sourceMappingURL=ReturnReason.js.map