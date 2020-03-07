import React from 'react';
import CenteredScreenInfo from "./CenteredScreenInfo";

export default function NoSearch() {
    const noSearchConductedText = 'No search conducted. Please search for a repository.';

    return (
        <>
            <CenteredScreenInfo infoText={noSearchConductedText} />
        </>
    );
}
