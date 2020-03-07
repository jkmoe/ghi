import React from 'react';
import TabbedContent from "./TabbedContent";
import RepositoryNameDecoder from "../helper/RepositoryNameDecoder";

export default function Repository(props) {
    return (
        <div>
            <TabbedContent selectedRepository={RepositoryNameDecoder.getData(props.match.params.repository)} />
        </div>
    );
}
