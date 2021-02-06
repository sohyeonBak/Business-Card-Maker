import React, { useRef } from 'react';
import AddBtn from '../button/addbtn';
import ImageAdd from '../imagefile.jsx/image-add';

const EditAdd = ({onAdd}) => {
    const nameRef = useRef();
    const officeRef = useRef();
    const addressRef = useRef();
    const phoneRef = useRef();
    const emailRef = useRef();

    const onSubmit=(e)=>{
        e.preventDefault();
        const card = {
            id : Date.now(),
            name : nameRef.current.value||'',
            office : officeRef.current.value||'',
            address : addressRef.current.value||'',
            phone : phoneRef.current.value||'',
            email : emailRef.current.value||''
        }
        onAdd(card)
    }

    return(
    <div className="edit-add-zone">
        <form className="form">
            <input type="text" ref={nameRef} placeholder="Name"/>
            <input type="text" ref={officeRef} placeholder="Company"/>
            <input type="text" ref={addressRef} placeholder="Address"/>
            <input type="text" ref={phoneRef} placeholder="Phone"/>
            <input type="text" ref={emailRef} placeholder="Email"/>
            <select name="" className="theme">
                <option value="">white</option>
                <option value="">black</option>
                <option value="">blue</option>
            </select>
            <ImageAdd />
            <span className="add-button">
                <AddBtn onClick={onSubmit}/>
            </span>
        </form>
    </div>
);
}
export default EditAdd;