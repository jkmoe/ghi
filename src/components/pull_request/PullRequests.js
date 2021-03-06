import React from 'react';
import List from '@material-ui/core/List';
import ListItemLink from "../layout/ListItemLink";
import ListItemText from '@material-ui/core/ListItemText';
import { useQuery } from 'urql';
import ResultStateHandler from "../../helper/ResultStateHandler";
import Box from "@material-ui/core/Box";
import DateFormatter from "../../helper/DateFormatter";

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
                  publishedAt,
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

    if (result.fetching || result.error) return ResultStateHandler.handle(result);

    const pullRequestEdges = result.data.repository.pullRequests.edges.reverse();

    if (pullRequestEdges.length) return (
        <div>
            <Box p={3}>
                <List component="nav" aria-label="secondary mailbox folders">
                        {pullRequestEdges.map(({ node }) => (
                            <ListItemLink key={node.id} href={ node.url } target="_blank">
                                <ListItemText primary={ node.title } secondary={ node.changedFiles + ' changed file(s) by ' + node.author.login + ' on ' + DateFormatter.getDate(node.publishedAt) } />
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
};
