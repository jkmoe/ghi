import React from 'react';
import SimpleTabs from "./Tabs";
import RepositoryNameDecoder from "../RepositoryNameDecoder";

export default function Inspect(props) {
    return (
        <div>
            <SimpleTabs selectedRepository={RepositoryNameDecoder.getData(props.match.params.repository)} />
        </div>
    );
}
