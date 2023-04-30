'use client';

import { Octokit } from "octokit";
import { useEffect, useState } from 'react';

const octokit = new Octokit({
  auth: process.env.GITHUB_API_KEY
});

import response_data from './interfaces/github_api';
import CommitDetails from './components/commits/Details';
import ProjectInfo from './components/ProjectInfo';
import UserAvatar from './components/UserAvatar';

export default function Home() {

  const [commits, setCommits] = useState<response_data[]>(
    [],
  );

  const loadIssues = async () => {
    const response = await octokit.request("GET /repos/{owner}/{repo}/commits", {
      owner: "Kevinbriceo567",
      repo: "git-api-nextjs",
    });
    const apiData = response.data;
    console.log(apiData);
    setCommits(apiData);
  }

  useEffect(() => {
    loadIssues();
  }, [])

  return (
    <>
      <div className="container mx-auto my-40">
        <div>
          <div className="bg-white relative shadow rounded-lg w-5/6 md:w-5/6  lg:w-4/6 xl:w-3/6 mx-auto">
            <UserAvatar />
            <ProjectInfo />
            {commits.map((commit) => {
              return (
                <CommitDetails data={commit} />
              );
            })}
          </div>
        </div>
      </div>
    </>
  )
}
