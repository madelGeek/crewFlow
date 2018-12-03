import * as React from 'react';
import { Component } from 'react';
import { observer } from 'mobx-react';
import "reflect-metadata";
import { interfaces, Container } from 'inversify';
import { Provider } from 'inversify-react';

import {
    filterStore,
    crewStore
} from './stores';
import { TYPES } from "./types";
import { Filter } from "./components/filter/filter.component";
import { CrewCard } from "./components/crew-card/crew-card.component";

import './main.css';



@observer
export class Root extends Component {
    private readonly container: interfaces.Container;

    constructor(props: any, context: any) {
        super(props, context);

        this.container = new Container();
        this.container.bind<filterStore>(filterStore).toSelf().inSingletonScope();
        this.container.bind<filterStore>(TYPES.filterStore).to(filterStore).inSingletonScope();
        this.container.bind<crewStore>(crewStore).toSelf().inSingletonScope();
        this.container.bind<crewStore>(TYPES.crewStore).to(crewStore).inSingletonScope();
    }

    render() {
        return (
            <Provider container={this.container}>
                <div className="root">
                    <Filter/>
                    <CrewCard/>
                </div>
            </Provider>
        );
    }
}