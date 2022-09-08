import React from 'react';
import ListInput from './ListInput/ListInput';
import SelectInput from './SelectInput/SelectInput';
function ContainerInput(props) {
    return (
        <div classNames="container__input">
            <ListInput></ListInput>
            <SelectInput></SelectInput>
        </div>
    );
}

export default ContainerInput;