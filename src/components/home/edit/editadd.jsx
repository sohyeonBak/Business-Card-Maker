import React, { memo, useRef, useState } from 'react';
import AddBtn from '../button/addbtn';


const EditAdd = memo(({ImageUploader,onAdd}) => {
    const formRef = useRef();
    const nameRef = useRef();
    const officeRef = useRef();
    const addressRef = useRef();
    const phoneRef = useRef();
    const emailRef = useRef();
    const themeRef = useRef();
    const [file, setFile] = useState({fileName: null, fileURL: null});

    const onFileChange = file => {
        setFile({
            fileName : file.name,
            fileURL : file.url
        })
    }

    const onSubmit=(e)=>{
        e.preventDefault();
        const card = {
            id : Date.now(),
            name : nameRef.current.value||'',
            office : officeRef.current.value||'',
            address : addressRef.current.value||'',
            phone : phoneRef.current.value||'',
            email : emailRef.current.value||'',
            theme: themeRef.current.value,
            fileName : file.name||'',
            fileURL : file.url||'',
        };
        formRef.current.reset();
        setFile({ fileName: null, fileURL: null });
        onAdd(card)
    }

    return(
    <div  className="edit-add-zone"  >
        <form ref={formRef} className="form">
            <input type="text" ref={nameRef} placeholder="Name"/>
            <input type="text" ref={officeRef} placeholder="Company"/>
            <input type="text" ref={addressRef} placeholder="Address"/>
            <input type="text" ref={phoneRef} placeholder="Phone"/>
            <input type="text" ref={emailRef} placeholder="Email"/>
            <select name="theme" ref={themeRef} className="theme">
                <option value="white">white</option>
                <option value="black">black</option>
                <option value="blue">blue</option>
            </select>
            <ImageUploader name={file.fileName} onFileChange={onFileChange}/>
            <span className="add-button">
                <AddBtn onClick={onSubmit}/>
            </span>
        </form>
    </div>
);
})
export default EditAdd;