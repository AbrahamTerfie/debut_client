import React, { useState, createContext } from "react";

interface AuxProps {
    children: JSX.Element[] | JSX.Element;
}
type InitStateType = {
    peopleDirectorystate: PersonDetail;
    setPeopleDirectoryState: React.Dispatch<React.SetStateAction<PersonDetail>>;
};

interface PersonDetail {

    selectedPersonID: String;
    applyFilter: {}

}

const initState: PersonDetail = {

    selectedPersonID: '',
    applyFilter: {}

};
export const PeopleDirectoryContext = createContext<InitStateType>({
    peopleDirectorystate: initState,
    setPeopleDirectoryState: ()=> { }
});

export default function PeopleDirectoryStore({ children }: AuxProps) {
    const [peopleDirectorystate, setPeopleDirectoryState] = useState(initState);
    return (
        <PeopleDirectoryContext.Provider
            value={{ peopleDirectorystate, setPeopleDirectoryState }}>
            {children}
        </PeopleDirectoryContext.Provider>
    );
}