import { action, observable } from 'mobx';
import { inject, injectable } from 'inversify';
import { crewStore } from './'
import { TYPES } from "../types";

@injectable()
export class filterStore {
    @observable
    filterValue: string = localStorage.getItem('filterData') || '';
    private readonly _crewStore: crewStore;

    constructor(
        @inject(TYPES.crewStore) crewStore: crewStore,
    ) {
        this._crewStore = crewStore;
        if(localStorage.getItem('filterData') !== null) {
            this._crewStore.setFilterValue(this.filterValue);
        }
    }


    @action.bound
    updateFilterValue(value: string) {
        this.filterValue = value;
        this._crewStore.setFilterValue(value);
        localStorage.setItem('filterData', value);

    }
}