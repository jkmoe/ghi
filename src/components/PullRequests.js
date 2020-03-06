import React from 'react';
import List from '@material-ui/core/List';
import ListItemLink from "./ListItemLink";
import ListItemText from '@material-ui/core/ListItemText';
import { useQuery } from 'urql';

const getPullRequests = `
        query {
          repository(owner:"nuwave", name:"lighthouse") {
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
    `; // TODO: Make the repository params dynamical based on user input

export default function PullRequests() {
    const [result] = useQuery({
        query: getPullRequests
    });

    if (result.fetching) return 'Loading...';
    if (result.error) return 'Something went wrong. Make sure, you have a valid bearer token.';

    const pullRequestEdges = result.data.repository.pullRequests.edges;

    return (
        <div>
            <List component="nav" aria-label="secondary mailbox folders">
                    {pullRequestEdges.map(({ node }) => (
                        <ListItemLink key={node.id} href={ node.url }>
                            <ListItemText primary={ node.title }/>
                        </ListItemLink>
                    ))}
            </List>
        </div>
    );
};
