// Internal dependencies
import { Dharma } from "../../../src/dharma";

jest.unmock("@dharmaprotocol/contracts");

import { IS_EXPIRED_SCENARIOS } from "./scenarios/is_expired_scenarios";
import { generateLoanData } from "./scenarios/valid_loan_data";
import { VALID_LOAN_REQUEST } from "./scenarios/VALID_LOAN_REQUEST";

// Test runners
import { testCancel } from "./runners/cancel_as_debtor";
import { testCreate } from "./runners/create";
import { testGetTerms } from "./runners/get_terms";
import { testIsCancelled } from "./runners/is_cancelled";
import { testExpired } from "./runners/is_expired";
import { testIsFillable } from "./runners/is_fillable";
import { testLoad } from "./runners/load";
import { testSignAsDebtor } from "./runners/sign_as_debtor";

const dharma = new Dharma("http://localhost:8545");

describe("Loan Request (Integration)", () => {
    describe("#create", async () => {
        await testCreate(dharma, VALID_LOAN_REQUEST);
    });

    describe("#isExpired", async () => {
        IS_EXPIRED_SCENARIOS.forEach(async (scenario) => {
            await testExpired(dharma, scenario);
        });
    });

    describe("#signAsDebtor", async () => {
        await testSignAsDebtor(dharma, VALID_LOAN_REQUEST);
    });

    describe("#isCancelled", async () => {
        await testIsCancelled(dharma, VALID_LOAN_REQUEST);
    });

    describe("#load", async () => {
        await testLoad(dharma, generateLoanData);
    });

    describe("#cancel", async () => {
        await testCancel(dharma, VALID_LOAN_REQUEST);
    });

    describe("#getTerms", async () => {
        await testGetTerms(dharma, VALID_LOAN_REQUEST);
    });

    describe("#isFillable", async () => {
        await testIsFillable(dharma, VALID_LOAN_REQUEST);
    });
});
