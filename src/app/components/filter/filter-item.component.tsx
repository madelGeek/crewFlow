import * as React from 'react';
import { Component } from 'react';
import { observer } from 'mobx-react';

import './filter.css';

interface FilterProps {
    value: string;
    name: string
}

@observer
export class FilterItem extends Component<FilterProps> {
    constructor(props: FilterProps) {
        super(props);
    }

    render() {
    const { name } = this.props;
        return (
            <div>
                <p className="filter__value" >
                    { name }
                </p>
                {/* TODO: made filter by value */}
                <input type="text"/>
            </div>
        );
    }
}