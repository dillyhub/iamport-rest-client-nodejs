import ResponseBase from './Base';
declare class Prepare extends ResponseBase {
    imp_uid: string;
    merchant_uid: string;
    amount: number;
    setAttributes(response: Prepare): void;
}
export default Prepare;
