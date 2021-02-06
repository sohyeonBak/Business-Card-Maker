import React, { memo } from 'react';

const AddBtn = memo(({onClick}) => (
    <button onClick={onClick}>Add</button>     
    ))

export default AddBtn;