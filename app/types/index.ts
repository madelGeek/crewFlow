export const TYPES = { //TODO: mode to the separate file
    filterStore: Symbol('filterStore'),
    crewStore: Symbol('crewStore')
};

interface CrewName {
    title: string,
    first: string,
    last: string
}

interface CrewPicture {
    large: string; // TODO: create Symbol type
}

export interface CrewResponseMember { //TODO: describe full server props
    name: CrewName,
    picture: CrewPicture
}

export interface CrewMember {
    id: number,
    name: string,
    picture: CrewPicture,
    status: crewPersonStatus
}

export const enum crewPersonStatus {
    applied = 'applied',
    interviewing = 'interviewing',
    hired = 'hired'
}

export const crewStatus: ReadonlyArray<crewPersonStatus> = [
    crewPersonStatus.applied,
    crewPersonStatus.interviewing,
    crewPersonStatus.hired,
];