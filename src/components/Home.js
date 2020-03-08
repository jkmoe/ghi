import React from 'react';
import CenteredScreenInfo from "./layout/CenteredScreenInfo";

export default function Home() {
    const noSearchConductedText = 'No search conducted. Please search for a repository.';

    return (
        <>
            <CenteredScreenInfo infoText={noSearchConductedText} />
        </>
    );
}
