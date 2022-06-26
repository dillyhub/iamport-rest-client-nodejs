import ResponseBase from './Base';
declare class Certification extends ResponseBase {
    imp_uid: string;
    merchant_uid?: string;
    pg_tid?: string;
    pg_provider?: string;
    name?: string;
    gender?: string;
    birth?: Date | number;
    birthday?: string;
    foreigner?: boolean;
    certified?: boolean;
    certified_at?: Date | number;
    unique_key?: string;
    unique_in_site?: string;
    origin?: string;
    setAttributes(response: Certification): void;
}
export default Certification;
