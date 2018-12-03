import { observable, action, computed } from 'mobx';
import { injectable } from 'inversify';
import { crewPersonStatus, CrewMember, CrewResponseMember } from "../types";

@injectable()
export class crewStore {
    @observable
    crewList: Array<CrewMember> = [];
    @observable
    private _filterValue: string = '';

    constructor() {
        fetch("https://randomuser.me/api/?nat=gb&results=5")
            .then(res => res.json())
            .then(
                (response) => {
                    this.crewList = this.mapResponseResult(response.results);
                },
                (error) => {
                    console.error(error);
                    return undefined;
                }
            )
    }

    @action.bound
    setFilterValue(value: string): void {
        this._filterValue = value;
    }

    @computed
    get filtered(): Array<CrewMember> {
        const filterValue = this._filterValue;
        return this.crewList.filter(function (crewPerson) {
            return crewPerson.name.toLowerCase().search(
                filterValue.toLowerCase()) !== -1;
        })
    }

    mapResponseResult(crewResponseList: Array<CrewResponseMember>): Array<CrewMember> {
        return crewResponseList
            .map(crewPerson => {
                return {
                    id: Math.round(Math.random() * 1000),
                    name: crewPerson.name.title + ' ' + crewPerson.name.first + ' ' + crewPerson.name.last,
                    picture: crewPerson.picture,
                    status: crewPersonStatus.applied
                }
            })
    }

    @action.bound
    increaseStatus(crewPersonId: number): void {
        let targetCrewPerson = this.crewList.find(({id}) => id === crewPersonId);
        switch (targetCrewPerson.status) {
            case crewPersonStatus.applied: {
                targetCrewPerson.status = crewPersonStatus.interviewing;
                break;
            }
            case crewPersonStatus.interviewing: {
                targetCrewPerson.status = crewPersonStatus.hired;
                break;
            }
            default: {
                break
            }
        }
    }

    @action.bound
    decreaseStatus(crewPersonId: number): void {
        let targetCrewPerson = this.crewList.find(({id}) => id === crewPersonId);
        switch (targetCrewPerson.status) {
            case crewPersonStatus.hired: {
                targetCrewPerson.status = crewPersonStatus.interviewing;
                break;
            }
            case crewPersonStatus.interviewing: {
                targetCrewPerson.status = crewPersonStatus.applied;
                break;
            }
            default: {
                break
            }
        }
    }
}