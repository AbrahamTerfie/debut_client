import React, { useState, createContext } from "react";

interface AuxProps {
    children: JSX.Element[] | JSX.Element;
}
type InitStateType = {
    state: PersonDetail;
    setState: React.Dispatch<React.SetStateAction<PersonDetail>>;
};

interface PersonDetail {
    selectedPersonID: String;
    applyFilter: {}
}

const initState: PersonDetail = {
    selectedPersonID: 'eeee',
    applyFilter: {}
};
export const PeopleDirectoryContext = createContext<InitStateType>({
    state: initState,
    setState: (data) => { }
});

export default function PeopleDirectoryStore({ children }: AuxProps) {
    const [state, setState] = useState(initState);
    return (
        <PeopleDirectoryContext.Provider
            value={{ state, setState }}>
            {children}
        </PeopleDirectoryContext.Provider>
    );
}