import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import DateFormatter from "../DateFormatter";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles(theme => ({
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
        <Card>
            <CardHeader
                avatar={
                    <Avatar aria-label="recipe" className={classes.avatar}>
                        {issue.author.login.charAt(0)}
                    </Avatar>
                }
                title={issue.title}
                subheader={DateFormatter.getDate(issue.publishedAt)}
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    Author: {issue.author.login}
                </Typography>
            </CardContent>
            <CardContent>
                <Typography>{issue.bodyText}</Typography>
                <Link href={issue.url} target="_blank">
                    <Typography>View on GitHub</Typography>
                </Link>
            </CardContent>
        </Card>
    );
}
