import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import DateFormatter from "../DateFormatter";
import HtmlSanitizer from "../HtmlSanitizer";

const useStyles = makeStyles(theme => ({
    commentsRoot: {
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
    inline: {
        display: 'inline',
    },
}));

export default function IssueCommentsSearch(props) {
    const { comments } = props;
    const classes = useStyles();

    return (
        <>
            <List className={classes.commentsRoot}>
                {comments.map((comment) => (
                    <div key={comment.id} data-comment-id={comment.id}>
                        <ListItem alignItems="flex-start">
                            <ListItemAvatar>
                                <Avatar alt={comment.author.login} src="/static/images/avatar/1.jpg" />
                            </ListItemAvatar>
                            <ListItemText
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
}
