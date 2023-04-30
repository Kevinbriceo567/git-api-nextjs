interface response_data {
    author: author;
    comments_url: string;
    commit: commit;
    committer: commiter;
    html_url: string;
    node_id: string;
    parents: [parent];
    sha: string;
    url: string;
}

interface author {
    avatar_url: string;
    events_url: string;
    followers_url: string;
    following_url: string;
    gists_url: string;
    gravatar_id: string;
    html_url: string;
    id: number;
    login: string;
    node_id: string;
    organizations_url: string;
    received_events_url: string;
    repos_url: string;
    site_admin: string;
    starred_url: string;
    subscriptions_url: string;
    type: string;
    url: string;
}

interface author_commit {
    date: string;
    email: string;
    name: string;
}

interface tree_commit {
    sha: string;
    url: string;
}

interface commit {
    author: author_commit;
    comment_count: number;
    committer: author_commit;
    message: string;
    tree: tree_commit;
    url: string;
    verification: string;
}

interface commiter {
    avatar_url: string;
    events_url: string;
    followers_url: string;
    following_url: string;
    gists_url: string;
    gravatar_id: string;
    html_url: string;
    id: number;
    login: string;
    node_id: string;
    organizations_url: string;
    received_events_url: string;
    repos_url: string;
    site_admin: boolean;
    starred_url: string;
    subscriptions_url: string;
    type: string;
    url: string;
}

interface parent {
    html_url: string;
    sha: string;
    url: string;
}

export default response_data;