import { AccountsEntityShort } from "src/models/finance/account/load";
import { ContractorsEntity } from "src/models/finance/contractors/load";

export interface operations_create {
  operations: OperationWrap[];
}

export type OperationType = "FlowOutgo" | "FlowIncome";
export type FinanceOutGoType =
  | "custom"
  | "en"
  | "esv"
  | "moneyback"
  | "commission";
export type FinanceIncomeType =
  | "custom"
  | "custom_free"
  | "custom_debts"
  | "tax15_1"
  | "tax15_2"
  | "tax15_3"
  | "tax_free";

export interface OperationWrap {
  userId: number;
  operation: Operation;
}

export interface Operation {
  id?: null;
  type: OperationType;
  comment?: string;
  contents?: null[] | null;
  timestamp: number;
  contractorName?: null;
  exchangeDifference?: null;
  parent?: null;
  payedSum?: null | number;
  financeType: string;
  contractor?: ContractorsEntity | null;
  account?: AccountsEntityShort;
  total: number;
}
