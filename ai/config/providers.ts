/**
 * Local stand-in for the TTA framework's provider configuration.
 *
 * The CustomReporter calls hasApiKey() to decide whether to run its AI agents
 * (RCA verdicts and the flaky summary). No LLM key is configured in this
 * project, so those steps log as skipped and the AI tabs stay empty.
 */
export function hasApiKey(): boolean {
    return Boolean(process.env.OPENAI_API_KEY || process.env.ANTHROPIC_API_KEY);
}
