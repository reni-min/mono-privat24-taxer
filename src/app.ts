import dotenv from "dotenv";
dotenv.config();
import { buildUnixTime, parsePbStatement, parseMonoStatement } from "./helper";
import axios from "axios";
import { operations_create } from "src/models/finance/operations/create";
import { AccountsEntityShort } from "src/models/finance/account/load";

const file = `data/${process.env.XLS_FILE_NAME!}`;
const mode = process.env.MODE!;
const bankData = mode === 'mono' ? parseMonoStatement(file) : parsePbStatement(file);
const userId = Number.parseInt(process.env.TAXER_FOP_ID!);
const account: AccountsEntityShort = {
  id: Number.parseInt(process.env.TAXER_BANK_ID || "0"),
};

const instance = axios.create({
  withCredentials: true,
  headers: {
    cookie: process.env.TAXER_COOKIE!,
    accept: "application/json, text/plain, */*",
  },
  baseURL: "https://taxer.ua",
});

(async () => {
  const data: operations_create = {
    operations: bankData.map(x => ({
      userId,
      operation: {
        id: null,
        type: x.amount > 0 ? "FlowIncome" : "FlowOutgo",
        comment: x.purpose,
        contents: null,
        timestamp: buildUnixTime(x),
        parent: null,
        payedSum: 0,
        financeType: "custom",
        account,
        total: Math.abs(x.amount),
        contractorName: null,
        exchangeDifference: null,
        contractor: null,
      },
    })),
  };
  const resp = await instance.post(
    "/api/finances/operation/create?lang=uk",
    data
  );
  console.log(resp.statusText);
})();
