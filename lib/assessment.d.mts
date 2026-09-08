export const VERSION: string;
export const DIMENSIONS: Record<string, string>;
export type AssessmentResult = {
  scores: Record<string, number>;
  total: number;
  status: string;
  integrity: {
    score: number;
    level: string;
    flags: string[];
    inconsistencies: number;
    idealized: number;
    seconds: number;
  };
  version: string;
};
export type RecordResult = AssessmentResult & {
  name: string;
  email: string;
  id: string;
  completedAt: string;
  eligibleAfter: string;
};
export function normalizeIdentity(v: string): string;
export function addThreeMonths(v: string): string;
export function assess(
  q: { id: number; dimension: string; reverse: boolean }[],
  a: Record<number, number>,
  seconds: number,
): AssessmentResult;
export function isLocked(r: RecordResult, now?: number): boolean;
export function latestActiveLock(
  r: RecordResult[],
  now?: number,
): RecordResult | null;
export function formatDate(v: string): string;
export function resultText(r: RecordResult): string;
