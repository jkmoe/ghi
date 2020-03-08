import React from 'react';
import ReactDOM from 'react-dom';
import App from "./components/App";
import { createClient, Provider } from "urql";
import { getToken } from "./token";
import './app.css';

const client = createClient({
    url: "https://api.github.com/graphql",
    fetchOptions: () => {
        const token = getToken();
        return {
            headers: { authorization: token ? `Bearer ${token}` : '' }
        }
    }
});

const Root = () => (
    <Provider value={client}>
        <App />
    </Provider>
);

ReactDOM.render(<Root />, document.querySelector('#root'));
