import React from 'react';
import IssueDateTable from "./IssueDateTable";
import IssueMainDetails from "./IssueMainDetails";
import {useQuery} from "urql";
import IssueCommentsSearch from "./IssueCommentsSearch";
import ResultStateHandler from "../../helper/ResultStateHandler";

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
                bodyHTML,
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
                        bodyHTML,
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

    if (result.fetching || result.error) return ResultStateHandler.handle(result);

    const fetchedIssue = result.data.node;

    return (
        <>
            <IssueDateTable issue={fetchedIssue} />
            <IssueMainDetails issue={fetchedIssue} />
            <IssueCommentsSearch issue={fetchedIssue} />
        </>
    );
}
