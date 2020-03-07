import React from 'react';
import SimpleTabs from "./Tabs";
import RepositoryNameDecoder from "../helper/RepositoryNameDecoder";

export default function Repository(props) {
    return (
        <div>
            <SimpleTabs selectedRepository={RepositoryNameDecoder.getData(props.match.params.repository)} />
        </div>
    );
}
