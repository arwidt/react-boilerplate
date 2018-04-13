import React, {Component} from 'react';
import './App.scss';

import AView from './views/aview/AView';

class App extends Component {

    render() {
        return (
            <main className="App__container">
                <AView/>
            </main>
        );
    }
}

export default App;
