import {
    PaymentInstrument,
    UsBankAccountInstrument,
} from '@bigcommerce/checkout-sdk/payment-integration-api';

export default function isUsBankAccountInstrumentLike(
    instrument?: PaymentInstrument,
): instrument is UsBankAccountInstrument {
    if (!instrument) {
        return false;
    }

    return (
        'accountNumber' in instrument &&
        'routingNumber' in instrument &&
        'ownershipType' in instrument
    );
}
