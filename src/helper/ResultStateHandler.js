import CenteredScreenInfo from "../components/CenteredScreenInfo";
import React from "react";

class ResultStateHandler {
    static handle = (result) => {
        let stateText = '';
        if (result.fetching) stateText = 'Loading...';
        if (result.error) stateText = 'Something went wrong. Make sure, you have a valid bearer token.';
        return (
            <>
                <CenteredScreenInfo infoText={stateText} />
            </>
        );
    };
}

export default ResultStateHandler;
