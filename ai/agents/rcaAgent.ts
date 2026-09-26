/**
 * Local stand-in for the TTA framework's RCA agent.
 *
 * The original sent the failure to an LLM and returned its verdict. This
 * version keeps the same shape but classifies the error text locally, so the
 * AI Verdict tab renders without a network call.
 */

export interface RcaVerdict {
    severity: 'critical' | 'high' | 'medium' | 'low';
    priority: string;
    rootCause: string;
    fixes: string[];
}

export interface RcaInput {
    title: string;
    file: string;
    error: string;
    stack?: string;
}

export async function analyzeFailure(input: RcaInput): Promise<RcaVerdict> {
    const error = input.error.toLowerCase();
    const mentions = (...needles: string[]): boolean => needles.some((n) => error.includes(n));

    let severity: RcaVerdict['severity'] = 'medium';
    let rootCause = 'The test failed. Review the error and stack trace for the failing step.';
    const fixes: string[] = [];

    if (mentions('timeout')) {
        severity = 'high';
        rootCause = 'A step exceeded its timeout — the application did not respond in time.';
        fixes.push('Raise the timeout for the step or for the whole test.');
        fixes.push('Wait for a concrete condition (URL or locator) instead of a fixed delay.');
    } else if (mentions('strict mode violation')) {
        severity = 'high';
        rootCause = 'The locator resolved to more than one element.';
        fixes.push('Narrow the locator with a role, accessible name, or .first().');
    } else if (mentions('not visible', 'not attached', 'no element', 'waiting for locator')) {
        severity = 'high';
        rootCause = 'The target element was not present or not visible when the step ran.';
        fixes.push('Assert the element is visible before interacting with it.');
        fixes.push('Confirm the page finished navigating before this step.');
    } else if (mentions('expect', 'expected', 'assert')) {
        rootCause = 'An assertion did not match the state of the page.';
        fixes.push('Check the expected value against the current application behaviour.');
    } else {
        fixes.push('Reproduce locally with --debug.');
        fixes.push('Check the reported stack trace for the failing line.');
    }

    return {
        severity,
        priority: severity === 'high' || severity === 'critical' ? 'P1' : 'P2',
        rootCause,
        fixes,
    };
}
