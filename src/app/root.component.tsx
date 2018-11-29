import * as React from 'react';
import { Component } from 'react';
import { observer } from 'mobx-react';

import { Filter } from "./components/filter/filter.component";
import { CrewCard } from "./components/crew-card/crew-card.component";

import './main.css';

@observer
export class Root extends Component {
    render() {
        return (
            <div className="root">
                <Filter/>
                <CrewCard/>
            </div>
        );
    }
}