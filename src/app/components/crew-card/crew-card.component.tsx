import * as React from 'react';
import { Component, Fragment } from 'react';
import { observable, } from 'mobx';
import { observer } from 'mobx-react';

import { CrewItem } from './crew-item.component';
import { CrewMember } from './types';

@observer
export class CrewCard extends Component {
    @observable
    private _listOfCrew: Array<CrewMember>;
    @observable
    private _isLoaded: boolean = true;

    componentWillMount() {
        fetch("https://randomuser.me/api/?nat=gb&results=5")
            .then(res => res.json())
            .then(
                (response) => {
                    this._listOfCrew = response.results;
                    this._isLoaded = false;
                },
                (error) => {
                    console.error(error);
                }
            )
    }

    render() {
        if (this._isLoaded) {
            return (
                <div>
                    Loading...
                </div>
            )
        } else {
            return (
                <Fragment>
                    {this._listOfCrew.map((result, index) => {
                        return (
                            <CrewItem
                                key={index}
                                name={result.name}
                                picture={result.picture}
                            />
                        );
                    })}
                </Fragment>
            );
        }
    }
}