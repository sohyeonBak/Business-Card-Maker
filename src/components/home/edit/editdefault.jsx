import React, { useRef } from 'react';
import DeleteButton from '../button/deletebtn';
import ImageAdd from '../imagefile.jsx/image-add';

const EditDefault = ({card, updateCard, deleteCard}) => {
    const { name, office, address, phone, email } = card;
    const nameRef = useRef();
    const officeRef = useRef();
    const addressRef = useRef();
    const phoneRef = useRef();
    const emailRef = useRef();
    
    const onChange = (e) => {
        e.preventDefault()
        if(e.currentTarget == null){
            return;
        }
        updateCard({
            ...card,
            [e.currentTarget.name] : e.currentTarget.value,
        })
    }

    const onSubmit =(e)=>{
        e.preventDefault()
        deleteCard(card)
    }
return(
    <div className="edit-default-zone">
        <form className="form">
            <input type="text" name="name" value={name} ref={nameRef} onChange={onChange} />
            <input type="text" name="office" value={office} ref={officeRef} onChange={onChange} />
            <input type="text" name="address" value={address} ref={addressRef} onChange={onChange} />
            <input type="text" name="phone" value={phone} ref={phoneRef} onChange={onChange} />
            <input type="text" name="email" value={email} ref={emailRef} onChange={onChange} />
            <select name="" className="theme">
                <option value="">white</option>
                <option value="">black</option>
                <option value="">blue</option>
            </select>
            <ImageAdd />
            <span className="delete-button">
                <DeleteButton onClick={onSubmit}/>
            </span>
        </form>
    </div>
);
}
export default EditDefault;