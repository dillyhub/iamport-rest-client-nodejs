"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var KakaoOrderStatusEnum;
(function (KakaoOrderStatusEnum) {
    KakaoOrderStatusEnum["READY"] = "READY";
    KakaoOrderStatusEnum["SEND_TMS"] = "SEND_TMS";
    KakaoOrderStatusEnum["OPEN_PAYMENT"] = "OPEN_PAYMENT";
    KakaoOrderStatusEnum["SELECT_METHOD"] = "SELECT_METHOD";
    KakaoOrderStatusEnum["ARS_WAITING"] = "ARS_WAITING";
    KakaoOrderStatusEnum["AUTH_PASSWORD"] = "AUTH_PASSWORD";
    KakaoOrderStatusEnum["ISSUED_SID"] = "ISSUED_SID";
    KakaoOrderStatusEnum["SUCCESS_PAYMENT"] = "SUCCESS_PAYMENT";
    KakaoOrderStatusEnum["PART_CANCEL_PAYMENT"] = "PART_CANCEL_PAYMENT";
    KakaoOrderStatusEnum["CANCEL_PAYMENT"] = "CANCEL_PAYMENT";
    KakaoOrderStatusEnum["FAIL_AUTH_PASSWORD"] = "FAIL_AUTH_PASSWORD";
    KakaoOrderStatusEnum["QUIT_PAYMENT"] = "QUIT_PAYMENT";
    KakaoOrderStatusEnum["FAIL_PAYMENT"] = "FAIL_PAYMENT";
})(KakaoOrderStatusEnum = exports.KakaoOrderStatusEnum || (exports.KakaoOrderStatusEnum = {}));
;
class KakaoOrderStatus {
    getValue(key) {
        if (key) {
            switch (key) {
                case 'READY':
                    return '결제요청';
                case 'SEND_TMS':
                    return '결제요청 TMS 발송완료';
                case 'OPEN_PAYMENT':
                    return '사용자가 카카오페이 결제화면을 열었음';
                case 'SELECT_METHOD':
                    return '결제수단 선택, 인증 완료';
                case 'ARS_WAITING':
                    return 'ARS인증 진행중';
                case 'AUTH_PASSWORD':
                    return '비밀번호 인증 완료';
                case 'ISSUED_SID':
                    return 'SID 발급완료(정기결제에서 SID만 발급 한 경우)';
                case 'SUCCESS_PAYMENT':
                    return '결제완료';
                case 'PART_CANCEL_PAYMENT':
                    return '부분취소된 상태';
                case 'CANCEL_PAYMENT':
                    return '결제된 금액이 모두 취소된 상태. 부분취소 여러 번해서 모두 취소된 경우도 포함';
                case 'FAIL_AUTH_PASSWORD':
                    return '사용자 비밀번호 인증 실패';
                case 'QUIT_PAYMENT':
                    return '사용자가 결제를 중단한 경우';
                case 'FAIL_PAYMENT':
                    return '결제 승인 실패';
                default:
                    throw new Error(`정의되지 않은 key값(${key}) 입니다.`);
            }
        }
        throw new Error('key값을 입력해주세요.');
    }
}
exports.default = new KakaoOrderStatus();
//# sourceMappingURL=KakaoOrderStatus.js.map