import React from 'react';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemLink from "./ListItemLink";
import {useQuery} from "urql";
import ResultStateHandler from "../helper/ResultStateHandler";
import Box from "@material-ui/core/Box";

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
                  publishedAt,
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

    if (result.fetching || result.error) return ResultStateHandler.handle(result);

    const IssuesEdges = result.data.repository.issues.edges;

    if (IssuesEdges.length) return (
        <div>
            <Box p={3}>
                <List component="nav" aria-label="secondary mailbox folders">
                    {IssuesEdges.map(({ node }) => (
                        <ListItemLink key={node.id} href={ '/issue/' + encodeURIComponent(node.id) }>
                            <ListItemText primary={ node.title } />
                        </ListItemLink>
                    ))}
                </List>
            </Box>
        </div>
    );

    return (
        <div>
            <Box p={3}>
                No results.
            </Box>
        </div>
    );
}
