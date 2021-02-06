class FileInput {
    async upload(file){
       const data = new FormData();
       data.append('file', file);
       data.append('upload_preset', 'rqk6eubc');
       const res = await fetch(
       'https://api.cloudinary.com/v1_1/dohzcpvek/upload',
       {
           method : 'POST',
           body: data,
       }
       );
       return await res.json();
    }
}


export default FileInput