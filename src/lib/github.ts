import type { GitHubRepo, GitHubUser } from "../types/github";
import type { GitHubPortfolioSnapshot } from "../types/portfolio";

const API_HEADERS = {
  Accept: "application/vnd.github+json",
  "X-GitHub-Api-Version": "2022-11-28",
} as const;

const USERNAME = "pinkyni-boo";
const USER_ENDPOINT = `https://api.github.com/users/${USERNAME}`;
const REPOS_ENDPOINT =
  `https://api.github.com/users/${USERNAME}/repos?sort=updated&per_page=100`;

export class GitHubFetchError extends Error {
  status: number;

  constructor(message: string, status: number) {
    super(message);
    this.name = "GitHubFetchError";
    this.status = status;
  }
}

async function fetchJson<T>(url: string, signal?: AbortSignal): Promise<T> {
  const response = await fetch(url, {
    headers: API_HEADERS,
    signal,
  });

  if (!response.ok) {
    throw new GitHubFetchError(
      `GitHub request failed with status ${response.status}`,
      response.status,
    );
  }

  return (await response.json()) as T;
}

export async function fetchGitHubProfile(signal?: AbortSignal): Promise<GitHubUser> {
  return fetchJson<GitHubUser>(USER_ENDPOINT, signal);
}

export async function fetchGitHubRepositories(
  signal?: AbortSignal,
): Promise<GitHubRepo[]> {
  return fetchJson<GitHubRepo[]>(REPOS_ENDPOINT, signal);
}

export async function fetchGitHubPortfolioSnapshot(
  signal?: AbortSignal,
): Promise<GitHubPortfolioSnapshot> {
  const [user, repos] = await Promise.all([
    fetchGitHubProfile(signal),
    fetchGitHubRepositories(signal),
  ]);

  return {
    user,
    repos,
  };
}
