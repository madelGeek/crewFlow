interface CrewName {
    title: string,
    first: string,
    last: string
}

interface CrewPicture {
    large: string; // TODO: create Symbol type
}

export interface CrewMember {
    name: CrewName,
    picture: CrewPicture
}