import React from 'react';

import Counter from './components/screen';
import { Provider } from 'react-redux';

import configureStore from './store/configureStore';

export default class CounterScreen extends React.Component {
    // const [text, setText] = React.useState('');
    // const [password, setPassword] = React.useState('');
    // const [name, setName] = React.useState('');

    render() {

        return <Counter />
    }
}
