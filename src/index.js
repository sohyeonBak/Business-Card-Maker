import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import AuthService from './service/auth_service'
import FileInput from './service/file_input';
import ImageAdd from './components/home/imagefile.jsx/image-add';


const authService = new AuthService();
const fileInput = new FileInput();
const ImageUploader = props => (
  <ImageAdd {...props} fileInput={fileInput}/>
  );

ReactDOM.render(
  <React.StrictMode>
    <App authService={authService} ImageUploader={ImageUploader} />
  </React.StrictMode>,
  document.getElementById('root')
);

