import * as React from 'react';
import { Component } from 'react';
import { observer } from 'mobx-react';
import { resolve } from "inversify-react";

import * as classNames from 'classnames';

import { CrewMember } from 'types';
import { crewStore } from '../../../stores';

import './crew-item.css';

@observer
export class CrewItem extends Component<CrewMember> {
    @resolve
    private readonly _crewStore: crewStore;

    render() {
        const className = classNames(
            'crew-item__container',
            `crew-item__container_${this.props.status}`
        );
        const { id, name, picture } = this.props;
        const { increaseStatus, decreaseStatus } = this._crewStore;

        return(
            <div className='crew-item__container'>
                <img className='crew-item__container__picture' src={picture.large}/>
                <p className='crew-item__container__name'>{ name }</p>
                <p>
                    <button name='>' onClick={() => decreaseStatus(id)}> previous step </button>
                    <button name='>' onClick={() => increaseStatus(id)}> next step</button>
                </p>
            </div>
        )
    }
}