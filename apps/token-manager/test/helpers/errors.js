const { makeErrorMappingProxy } = require('@aragon/contract-helpers-test')

module.exports = makeErrorMappingProxy({
  // aragonOS errors
  APP_AUTH_FAILED: 'APP_AUTH_FAILED',
  INIT_ALREADY_INITIALIZED: 'INIT_ALREADY_INITIALIZED',
  INIT_NOT_INITIALIZED: 'INIT_NOT_INITIALIZED',
  RECOVER_DISALLOWED: 'RECOVER_DISALLOWED',

  // Token Manager errors
  TM_CALLER_NOT_TOKEN: "TM_CALLER_NOT_TOKEN",
  TM_NO_VESTING: "TM_NO_VESTING",
  TM_TOKEN_CONTROLLER: "TM_TOKEN_CONTROLLER",
  TM_MINT_RECEIVER_IS_TM: "TM_MINT_RECEIVER_IS_TM",
  TM_VESTING_TO_TM: "TM_VESTING_TO_TM",
  TM_TOO_MANY_VESTINGS: "TM_TOO_MANY_VESTINGS",
  TM_WRONG_CLIFF_DATE: "TM_WRONG_CLIFF_DATE",
  TM_VESTING_NOT_REVOKABLE: "TM_VESTING_NOT_REVOKABLE",
  TM_REVOKE_TRANSFER_FROM_REVERTED: "TM_REVOKE_TRANSFER_FROM_REVERTED",
  TM_CAN_NOT_FORWARD: "TM_CAN_NOT_FORWARD",
  TM_BALANCE_INC_NOT_ALLOWED: "TM_BALANCE_INC_NOT_ALLOWED",
  TM_ASSIGN_TRANSFER_FROM_REVERTED: "TM_ASSIGN_TRANSFER_FROM_REVERTED"
})
