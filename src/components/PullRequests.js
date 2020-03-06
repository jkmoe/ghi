import React from 'react';
import List from '@material-ui/core/List';
import ListItemLink from "./ListItemLink";
import ListItemText from '@material-ui/core/ListItemText';
import { useQuery } from 'urql';

const getPullRequests = `
        query getPullRequests($repositoryOwner: String!, $repositoryName: String!) {
          repository(owner:$repositoryOwner, name:$repositoryName) {
            pullRequests(last:10) {
              edges {
                node {
                  id,
                  author {
                    login
                  },
                  title,
                  changedFiles,
                  createdAt,
                  updatedAt,
                  closed,
                  closedAt,
                  url
                }
              }
            }
          }
        }
    `;

export default function PullRequests(props) {
    const { repositoryOwner, repositoryName } = props.selectedRepository;
    const [result] = useQuery({
        query: getPullRequests,
        variables: {repositoryOwner, repositoryName},
    });

    if (result.fetching) return 'Loading...';
    if (result.error) return 'Something went wrong. Make sure, you have a valid bearer token.';

    const pullRequestEdges = result.data.repository.pullRequests.edges;

    return (
        <div>
            <List component="nav" aria-label="secondary mailbox folders">
                    {pullRequestEdges.map(({ node }) => (
                        <ListItemLink key={node.id} href={ node.url } target="_blank">
                            <ListItemText primary={ node.title }/>
                        </ListItemLink>
                    ))}
            </List>
        </div>
    );
};
