import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import DateFormatter from "../DateFormatter";

const useStyles = makeStyles(theme => ({
    searchRoot: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
    },
    input: {
        flex: 1,
    },
    commentsRoot: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
    inline: {
        display: 'inline',
    },
}));

export default function IssueComments(props) {
    const comments = props.issue.comments.nodes;
    const classes = useStyles();

    return (
        <>
            <Paper component="form" className={classes.searchRoot}>
                <InputBase
                    className={classes.input}
                    placeholder="Search in Comments"
                    inputProps={{ 'aria-label': 'search in comments' }}
                />
            </Paper>
            <List className={classes.root}>
                {comments.map((comment, currentIndex) => (
                    <>
                        <ListItem alignItems="flex-start">
                            <ListItemAvatar>
                                <Avatar alt={comment.author.login} src="/static/images/avatar/1.jpg" />
                            </ListItemAvatar>
                            <ListItemText
                                primary={comment.title}
                                secondary={
                                    <React.Fragment>
                                        <Typography
                                            component="span"
                                            variant="body2"
                                            className={classes.inline}
                                            color="textPrimary"
                                        >
                                            {"[" + DateFormatter.getDate(comment.publishedAt) + "] " + comment.author.login}
                                        </Typography>
                                        {" — " + comment.bodyText}
                                    </React.Fragment>
                                }
                            />
                        </ListItem>
                    </>
                ))}
            </List>
        </>
    );
}
