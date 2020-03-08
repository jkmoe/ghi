import CenteredScreenInfo from "../components/layout/CenteredScreenInfo";
import React from "react";

class ResultStateHandler {
    static handle = (result) => {
        let stateText = '';
        if (result.fetching) stateText = 'Loading...';
        if (result.error) stateText = 'Something went wrong. Make sure, you have a valid bearer token and you are querying for an existing object.';
        return (
            <>
                <CenteredScreenInfo infoText={stateText} />
            </>
        );
    };
}

export default ResultStateHandler;
