//React
import PropType from 'prop-types';
import { useState } from 'react';
//Style
import { Form, FormButton, FormInput } from 'components/Searchbar/Searchbar.styled';
import { Div } from 'components/Searchbar/Searchbar.styled';

export const Searchbar = ({onSubmit}) => { //, onClick
    const [searchStr, setSearchStr] = useState("");
    const exportData = (e) => { 
        e.preventDefault();
        if (searchStr.trim() ==='') {
            alert('enter some value')
            return;
        }
        onSubmit(searchStr);
        resetCurrInput();
    }; 
    const updateCurrState = (e) => {
        const { value } = e.currentTarget;
        setSearchStr(value);
    };
    // const onClickSearchbar = () => { 
    //     onClick();
    // };
    function resetCurrInput(){
        setSearchStr("");
    };
    return (
        <Div>
            <Form onSubmit = {exportData}>
                <FormButton type="submit">
                    Search
                </FormButton>
                <FormInput
                    type="text"
                    name="searchStr"
                    value={searchStr}
                    onChange={updateCurrState}
                    //onClick={onClickSearchbar}
                    autoComplete="off"
                    autoFocus
                    placeholder="Search movies"
                />
            </Form>
        </Div>
    );
};
Searchbar.protoType = {
    onSubmit: PropType.func.isRequired,
    onClick: PropType.func.isRequired
};