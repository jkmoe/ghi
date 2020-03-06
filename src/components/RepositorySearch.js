import React from "react";
import GitHubIcon from '@material-ui/icons/GitHub';
import InputBase from '@material-ui/core/InputBase';
import Button from '@material-ui/core/Button';
import { withStyles, fade } from "@material-ui/core/styles";
import { withRouter } from 'react-router-dom';

const styles = theme => ({
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    },
    searchIcon: {
        width: theme.spacing(7),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 7),
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: 200,
        },
    },
});

class RepositorySearch extends React.Component {
    state = {
        repositoryName: ''
    };

    encodeRepositoryName = () => {
        let repositoryNameStrippedFromWhiteSpace = this.state.repositoryName.replace(/\s/g,'');

        return encodeURIComponent(repositoryNameStrippedFromWhiteSpace);
    };

    isValidRepositoryName = () => {
        let repositoryName = this.state.repositoryName;
        let forwardSlashInCenterPattern = /.+\/.+/g;
        let forwardSlashCount = repositoryName.match(/\//g) ? repositoryName.match(/\//g).length : 0;

        return (forwardSlashCount === 1 && forwardSlashInCenterPattern.test(repositoryName));
    };

    onRepositorySearch = () => {
        if (this.isValidRepositoryName()) {
            this.props.history.push('/inspect/' + this.encodeRepositoryName())
        } else {
            // TODO: Inform the user
        }
    };

    searchOnEnter = (keyCode) => {
        if (keyCode === 13) this.onRepositorySearch();
    };

    render() {
        const { classes } = this.props;

        return (
            <>
                <div className={classes.search}>
                    <div className={classes.searchIcon}>
                        <GitHubIcon />
                    </div>
                    <InputBase
                        placeholder="username/repository"
                        classes={{
                            root: classes.inputRoot,
                            input: classes.inputInput,
                        }}
                        inputProps={{ 'aria-label': 'search' }}
                        onChange={e => this.setState({ repositoryName: e.target.value }) }
                        onKeyDown={e => this.searchOnEnter(e.keyCode)}
                    />
                </div>
                <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => this.onRepositorySearch()}
                >
                    Search
                </Button>
            </>
        )
    }
}

export default withRouter(withStyles(styles)(RepositorySearch));
