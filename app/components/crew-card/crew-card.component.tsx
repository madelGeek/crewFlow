import * as React from 'react';
import { Component } from 'react';
import { observer } from 'mobx-react';
import { resolve } from 'inversify-react';

import { crewStore } from '../../stores';
import { crewStatus } from '../../types'
import { CrewItem } from './crew-item/crew-item.component';

import './crew-card.css';

@observer
export class CrewCard extends Component {
    @resolve
    private readonly _crewStore: crewStore;


    render() {
        return (
            <div className="crew-card__container">
                {crewStatus.map((status, index) =>
                    <div key={index} className="crew-card__item">
                        <p className='crew-card__item__status-name'>{status}</p>
                        <div>
                            {this._crewStore.filtered.map((result) => {
                                if (result.status === status) {
                                    return (
                                        <CrewItem
                                            id={result.id}
                                            key={result.id}
                                            name={result.name}
                                            picture={result.picture}
                                            status={result.status}
                                        />
                                    );
                                }

                            })}
                        </div>
                    </div>)}
            </div>
        );
    }
}