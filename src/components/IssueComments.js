import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import DateFormatter from "../helper/DateFormatter";
import HtmlSanitizer from "../helper/HtmlSanitizer";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles(theme => ({
    commentsRoot: {
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
    inline: {
        display: 'inline',
    },
    box: {
        backgroundColor: theme.palette.background.paper,
        marginBottom: 100
    },
}));

export default function IssueCommentsSearch(props) {
    const { comments } = props;
    const classes = useStyles();

    if (comments.length) return (
        <>
            <List className={classes.commentsRoot}>
                {comments.map((comment) => (
                    <div key={comment.id} data-comment-id={comment.id}>
                        <ListItem alignItems="flex-start">
                            <ListItemAvatar>
                                <Avatar alt={comment.author.login} src="/static/images/avatar/1.jpg" />
                            </ListItemAvatar>
                            <ListItemText
                                primary={DateFormatter.getDate(comment.publishedAt)}
                                secondary={
                                    <React.Fragment>
                                        <Typography
                                            component="span"
                                            variant="body2"
                                            className={classes.inline}
                                            color="textPrimary"
                                        >
                                            {"Author: " + comment.author.login}
                                        </Typography>
                                        <span dangerouslySetInnerHTML={HtmlSanitizer.createMarkup(comment.bodyHTML)} />
                                    </React.Fragment>
                                }
                            />
                        </ListItem>
                    </div>
                ))}
            </List>
        </>
    );

    return (
        <div>
            <Box p={1} className={classes.box}>
                No results.
            </Box>
        </div>
    );
}
