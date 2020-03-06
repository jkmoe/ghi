import React from 'react';
import IssueDateTable from "./IssueDateTable";
import IssueMainDetails from "./IssueMainDetails";
import {useQuery} from "urql";
import IssueComments from "./IssueComments";

const getIssue = `
    query GetIssue($issueId: ID!) {
        node(id:$issueId) {
            ... on Issue {
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
`;

export default function Issue(props) {
    const issueId = decodeURIComponent(props.match.params.id);
    const [result] = useQuery({
        query: getIssue,
        variables: {issueId},
    });

    if (result.fetching) return 'Loading...';
    if (result.error) return 'Something went wrong. Make sure, you have a valid bearer token.';

    const fetchedIssue = result.data.node;

    return (
        <>
            <IssueDateTable issue={fetchedIssue} />
            <IssueMainDetails issue={fetchedIssue} />
            <IssueComments issue={fetchedIssue} />
        </>
    );
}
