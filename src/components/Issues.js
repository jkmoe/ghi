import React from 'react';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemLink from "./ListItemLink";
import {useQuery} from "urql";

const getIssues = `
        query GetIssues($issueState: [IssueState!], $repositoryOwner: String!, $repositoryName: String!) {
          repository(owner:$repositoryOwner, name:$repositoryName) {
            issues(last:10, states:$issueState) {
              edges {
                node {
                  id,
                  author {
                    login
                  },
                  title,
                  createdAt,
                  publishedAt,
                  lastEditedAt,
                  bodyText,
                  comments(last:10) {
                    nodes {
                      author {
                        login
                      },
                      createdAt,
                      publishedAt,
                      lastEditedAt,
                      id,
                      url,
                      bodyText
                    }
                  },
                  closed,
                  closedAt,
                  url
                }
              }
            }
          }
        }
    `;

export default function Issues(props) {
    const { repositoryOwner, repositoryName } = props.selectedRepository;
    const issueState = props.issueState;
    const [result] = useQuery({
        query: getIssues,
        variables: {issueState, repositoryOwner, repositoryName},
    });

    if (result.fetching) return 'Loading...';
    if (result.error) return 'Something went wrong. Make sure, you have a valid bearer token.';

    const IssueEdges = result.data.repository.issues.edges;

    return (
        <div>
            <List component="nav" aria-label="secondary mailbox folders">
                {IssueEdges.map(({ node }) => (
                    <ListItemLink key={node.id} href={ node.url }>
                        <ListItemText primary={ node.title } />
                    </ListItemLink>
                ))}
            </List>
        </div>
    );
}
