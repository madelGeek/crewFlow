import * as React from 'react';
import { Component } from 'react';
import { observer } from 'mobx-react';

import { CrewMember } from './types';

import './crew-item.css';

@observer
export class CrewItem extends Component<CrewMember> {
    render() {
        return(
            <div className="crew-item__container">
                <p>{this.props.name.title} {this.props.name.first} {this.props.name.last}</p>
                <img src={this.props.picture.large}/>
            </div>
        )
    }
}