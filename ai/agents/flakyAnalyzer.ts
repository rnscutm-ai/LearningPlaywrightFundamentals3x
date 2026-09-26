/**
 * Local stand-in for the TTA framework's flaky analyzer.
 *
 * The original asked an LLM to summarise the build-to-build diff. This version
 * reports the raw comparison and leaves `summary` unset, which the reporter's
 * Flaky tab already handles.
 */

export type TestStatus = 'passed' | 'failed' | 'skipped' | 'timedOut';

export interface BuildSummary {
    runId: string;
    tests: Record<string, TestStatus>;
}

export interface FlakyResult {
    counts: {
        flaky: number;
        failing: number;
        total: number;
    };
    flaky: string[];
    summary?: string;
}

export async function analyzeFlaky(
    prev: BuildSummary,
    curr: BuildSummary,
    _useLlm: boolean,
): Promise<FlakyResult> {
    const titles = Object.keys(curr.tests);

    const flaky = titles.filter(
        (title) => prev.tests[title] !== undefined && prev.tests[title] !== curr.tests[title],
    );
    const failing = titles.filter(
        (title) => curr.tests[title] === 'failed' || curr.tests[title] === 'timedOut',
    );

    return {
        counts: { flaky: flaky.length, failing: failing.length, total: titles.length },
        flaky,
    };
}
