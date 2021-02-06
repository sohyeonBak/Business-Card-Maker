import React, { useRef } from 'react';

const ImageAdd = ({fileInput, onFileChange}) => {
    const imageRef= useRef();
    const onChangeImage =(e)=>{
        e.preventDefault()
        imageRef.current.click()
    }

    const onChange = async e =>{
        console.log(e.target.files[0])
        const uploaded = await fileInput.upload(e.target.files[0])
        console.log(uploaded)
        onFileChange({
            name : uploaded.original_filename,
            url : uploaded.url
        })
    }

    return(
    <span className="pick">
        <input ref={imageRef}type="file" accept="image/*" name="file" onChange={onChange}/>
        <button onClick={onChangeImage}>Pick image</button>
    </span>   
);
}
export default ImageAdd;