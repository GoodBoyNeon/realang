import { Expression, Identifier } from "./expression.types";
import { Token } from "./tokens.types";

export type StatementType =
  | "Program"
  | "VariableDeclaration"
  | "FunctionDeclaration"
  | "Property"
  | "ObjectLiteral"
  | "NumericLiteral"
  | "StringLiteral"
  | "Identifier"
  | "Symbol"
  | "Block"
  | "Expression"
  | "BinaryExpression"
  | "MemberExpression"
  | "FunctionCallExpression"
  | "PrintExpression"
  | "IfCondition"
  | "VariableAssignmentExpression";

export interface Statement {
  type: StatementType;
}

export interface ExpressionStatement extends Statement {
  type: "Expression";
  expression: Expression;
}

export interface Program extends Statement {
  type: "Program";
  body: Statement[];
}

export interface BlockStatement extends Statement {
  type: "Block";
  body: Statement[];
}

export interface VariableDeclarationStatement extends Statement {
  type: "VariableDeclaration";
  identifier: Token;
  isConstant: boolean;
  value: Expression;
}

export interface FunctionDeclaration extends Statement {
  type: "FunctionDeclaration";
  name: string;
  params: string[];
  body: Statement[];
}

export interface IfStatement extends Statement {
  type: "IfCondition";
  condition?: Expression;
  body: Statement[];
  orElse?: IfStatement;
}