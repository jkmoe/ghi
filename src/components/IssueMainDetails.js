import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import DateFormatter from "../helper/DateFormatter";
import Link from "@material-ui/core/Link";
import HtmlSanitizer from "../helper/HtmlSanitizer";

const useStyles = makeStyles(theme => ({
    root: {
        boxShadow: 'none',
        borderRadius: 0,
    },
    verticalPaddingOff: {
        padding: '0 16px',
    },
    body: {
        padding: '0 16px 0 34px',
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
}));

export default function IssueMainDetails(props) {
    const { issue } = props;
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardHeader
                avatar={
                    <Avatar aria-label="recipe" className={classes.avatar}>
                        {issue.author.login.charAt(0)}
                    </Avatar>
                }
                title={issue.title}
                subheader={DateFormatter.getDate(issue.publishedAt)}
            />
            <CardContent className={classes.verticalPaddingOff}>
                <Typography variant="body2" color="textSecondary" component="p">
                    Author: {issue.author.login}
                </Typography>
            </CardContent>
            <CardContent className={classes.body}>
                <div dangerouslySetInnerHTML={HtmlSanitizer.createMarkup(issue.bodyHTML)} />
            </CardContent>
            <Link href={issue.url} target="_blank">
                <Typography className={classes.verticalPaddingOff}>View on GitHub</Typography>
            </Link>
        </Card>
    );
}
