import React from 'react';
import ReactDOM from 'react-dom';
import App from "./components/App";
import { createClient, Provider } from "urql";

const client = createClient({
    url: "https://api.github.com/graphql",
    fetchOptions: () => {
        return {
            headers: { authorization: `Bearer ` } // TODO: Find a solution for making the bearer configurable more comfortable
        }
    }
});

const Root = () => (
    <Provider value={client}>
        <App />
    </Provider>
);

ReactDOM.render(<Root />, document.querySelector('#root'));
