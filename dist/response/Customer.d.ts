import ResponseBase from './Base';
import { CardCodeEnum } from '../enum';
declare class Customer extends ResponseBase {
    customer_uid: string;
    card_name: string;
    card_code?: CardCodeEnum;
    card_number?: string;
    customer_name?: string;
    customer_tel?: string;
    customer_email?: string;
    customer_addr?: string;
    customer_postcode?: string;
    inserted: Date | number;
    updated: Date | number;
    setAttributes(response: Customer): void;
}
export default Customer;
