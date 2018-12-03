import * as React from 'react';
import { Component } from 'react';
import { observer } from 'mobx-react';

import { FilterItem } from './filter-item.component'

import './filter.css';

@observer
export class Filter extends Component {
    render() {
        return (
            <div className="filter">
                <p className="filter__header">Filter</p>
                <FilterItem
                    name="By name"
                />
            </div>
        );
    }
}