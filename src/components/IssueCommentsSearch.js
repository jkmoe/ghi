import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from "@material-ui/core/IconButton";
import ClearIcon from '@material-ui/icons/Clear';
import IssueComments from "./IssueComments";
import RegExpEscaper from "../RegExpEscaper";

const useStyles = makeStyles(theme => ({
    searchRoot: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
    },
    input: {
        flex: 1,
    },
    iconButton: {
        padding: 10,
    },
}));

export default function IssueCommentsSearch(props) {
    const comments = props.issue.comments.nodes;
    const [filteredComments, setFilteredComments] = useState(comments);
    const [searchTerm, setSearchTerm] = useState('');
    const classes = useStyles();

    const searchTermFound = (comment, searchTerm) => {
        let regExpSafeTerm = RegExpEscaper.create(searchTerm);
        let searchTermRegEx = new RegExp(regExpSafeTerm, "gi");
        return comment.bodyText.match(searchTermRegEx);
    };

    const getFilteredComments = (searchTerm) => {
        setSearchTerm(searchTerm);
        let trimmedTerm = searchTerm.trim();
        return trimmedTerm ? comments.filter(comment => searchTermFound(comment, searchTerm)) : comments;
    };

    const clearSearch = () => {
        setSearchTerm('');
        setFilteredComments(comments);
    };

    return (
        <>
            <Paper className={classes.searchRoot}>
                <InputBase
                    className={classes.input}
                    placeholder="Search in Comments"
                    inputProps={{ 'aria-label': 'search in comments' }}
                    onChange={e => setFilteredComments(getFilteredComments(e.target.value))}
                    value={searchTerm}
                />
                <IconButton
                    type="button"
                    className={classes.iconButton}
                    aria-label="clear"
                    onClick={clearSearch}
                >
                    <ClearIcon />
                </IconButton>
            </Paper>
            <IssueComments comments={filteredComments}/>
        </>
    );
}
