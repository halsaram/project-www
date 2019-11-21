import React, { useState, Component } from 'react'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { Image, Input, Progress, Button } from 'semantic-ui-react'



class ImageUpload extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedFile: localStorage.getItem("summaryselectedFile"),
            loaded: localStorage.getItem("summaryloaded") != null ? localStorage.getItem("summaryloaded") : 0,
            imagePreviewUrl: localStorage.getItem("summaryimagePreviewUrl") != null ? localStorage.getItem("summaryimagePreviewUrl") : ""
        }
    }

    checkMimeType = (event) => {
        //getting file object
        let files = event.target.files
        //define message container
        let err = []
        // list allow mime type
        const types = ['image/png', 'image/jpeg', 'image/gif']
        // loop access array
        for (var x = 0; x < files.length; x++) {
            // compare file type find doesn't matach
            if (types.every(type => files[x].type !== type)) {
                // create error message and assign to container   
                err[x] = files[x].type + ' is not a supported format\n';
            }
        };
        for (var z = 0; z < err.length; z++) {// if message not same old that mean has error 
            // discard selected file
            toast.error(err[z])
            event.target.value = null
        }
        return true;
    }
    maxSelectFile = (event) => {
        let files = event.target.files
        if (files.length > 3) {
            const msg = 'Only 3 images can be uploaded at a time'
            event.target.value = null
            toast.warn(msg)
            return false;
        }
        return true;
    }
    checkFileSize = (event) => {
        let files = event.target.files
        let size = 2000000
        let err = [];
        for (var x = 0; x < files.length; x++) {
            if (files[x].size > size) {
                err[x] = files[x].type + 'is too large, please pick a smaller file\n';
            }
        };
        for (var z = 0; z < err.length; z++) {// if message not same old that mean has error 
            // discard selected file
            toast.error(err[z])
            event.target.value = null
        }
        return true;
    }

    onChangeHandler = event => {
        event.preventDefault();
        let reader = new FileReader();
        var files = event.target.files
        var file = event.target.files[0]
        if (this.maxSelectFile(event) && this.checkMimeType(event) && this.checkFileSize(event)) {
            // if return true allow to setState
            reader.onloadend = () => {
                this.setState({
                    selectedFile: files,
                    loaded: 0,
                    imagePreviewUrl: reader.result
                })

                localStorage.setItem("summaryselectedFile", files)
                localStorage.setItem("summaryloaded", 0)
                localStorage.setItem("summaryimagePreviewUrl", reader.result)
            }
            reader.readAsDataURL(file)
        }
    }

    onClickHandler = () => {
        const data = new FormData()
        for (var x = 0; x < this.state.selectedFile.length; x++) {
            data.append('file', this.state.selectedFile[x])
        }
        axios.post("https://d75e6544.ngrok.io/upload", data, {
            onUploadProgress: ProgressEvent => {
                this.setState({
                    loaded: (ProgressEvent.loaded / ProgressEvent.total * 100),
                })
            },
        })
            .then(res => { // then print response status
                // toast.success('upload success')
                console.log('upload success');
            })
            .catch(err => { // then print response status
                // toast.error('upload fail')
                console.log('upload fail');
            })
    }

    useLocalstorage = (key, initialValue) => {
        const [storedValue, setStoredValue] = useState(() => {
            try {
                const item = window.localStorage.getItem(key);
                return item ? JSON.parse(item) : initialValue;
            } catch (error) {
                return initialValue;
            }
        })
        const setValue = value => {
            try {
                const valueToStore = value instanceof Function ? value(storedValue) : value;
                setStoredValue(valueToStore);
                window.localStorage.setItem(key, JSON.stringify(valueToStore));
                console.log(key, '==>', valueToStore);
            } catch (error) {
                console.log(error);
            }
        };
        return [storedValue, setValue];

    }

    render() {
        let { imagePreviewUrl } = this.state;
        let $imagePreview = null;
        if (imagePreviewUrl) {
            $imagePreview = (<img src={imagePreviewUrl} width="180" />);
        } else {
            $imagePreview = (<Image src='https://react.semantic-ui.com/images/wireframe/image.png' size='small' />);
        }

        return (
            <div class="container">
                <div class="row">
                    <div class="offset-md-3 col-md-6">
                        <div class="form-group files">
                            <Input type="file" class="form-control" onChange={this.onChangeHandler} />
                        </div>
                        <div className="imgPreview">
                            {$imagePreview}
                        </div>
                        <div class="form-group">
                            <ToastContainer />
                            <Progress size="tiny" color='blue' percent={Math.floor(this.state.loaded, 2)} value={this.state.loaded} >{Math.round(this.state.loaded, 2)}%</Progress>

                        </div>

                        <Button type="button" class="btn btn-success btn-block" onClick={this.onClickHandler}>Upload</Button>


                    </div>
                </div>
            </div>
        );
    }
}



export default ImageUpload;