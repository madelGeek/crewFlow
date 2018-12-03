import * as React from 'react';
import { Component } from 'react';
import { observer } from 'mobx-react';
import { resolve } from 'inversify-react';

import { filterStore } from "../../stores";

import './filter.css';

interface FilterProps {
    name: string
}

@observer
export class FilterItem extends Component<FilterProps> {
    @resolve
    private readonly _filterStore: filterStore;
    constructor(props: FilterProps) {
        super(props);
    }

    updateFilterValue(value: string) {
        this._filterStore.updateFilterValue(value)
    }


    render() {
    const { name } = this.props;
        return (
            <div className='filter-item__container'>
                <p className="filter-item__container__value" >
                    { name }:
                </p>
                <input type="text"
                       className="filter-item__container__input"
                       value={this._filterStore.filterValue}
                       onChange={({target}) => this.updateFilterValue(target.value)}/>
            </div>
        );
    }
}