import React from 'react';
import ReactDOM from 'react-dom';
import App from "./components/App";
import {Client, Provider} from "urql";

const client = new Client({
    url: "https://api.github.com/graphql"
});

const Root = () => (
    <Provider client={client}>
        <App />
    </Provider>
);

ReactDOM.render(<Root />, document.querySelector('#root'));
