import * as _ from "lodash";
import { BigNumber } from "bignumber.js";

import { defaultArgs, SeizeCollateralScenario } from "./";

const defaultArgsWithNoGracePeriod = _.clone(defaultArgs);
defaultArgsWithNoGracePeriod.collateralTerms.gracePeriodInDays = new BigNumber(0);

export const SUCCESSFUL_SEIZE_COLLATERAL_SCENARIOS: SeizeCollateralScenario[] = [
    {
        ...defaultArgsWithNoGracePeriod,
        description: "when there is no grace period the debt has not been paid",
        debtRepaid: false,
    },
];
