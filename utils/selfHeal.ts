/**
 * Shape of the `self-heal` attachments the CustomReporter renders in its
 * Self-Heal tab. Nothing in this project emits them yet, so the tab reports
 * "no locator failures" until a test attaches a matching payload.
 */

export interface HealCandidate {
    selector: string;
    strategy: string;
    matchCount: number;
    visible: boolean;
    reasoning: string;
}

export interface HealRejection {
    selector: string;
    reason: string;
}

export interface HealReport {
    failedSelector: string;
    intent: string;
    verified: HealCandidate[];
    rejected: HealRejection[];
    unavailableReason?: string;
}
