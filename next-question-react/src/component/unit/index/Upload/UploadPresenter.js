import { Upload__Upload,Upload__hidden } from "./UploadStyles";
import { InboxOutlined } from '@ant-design/icons';

export function UploadUI(props){
    
    return (
        <>
        <Upload__Upload as = "label" htmlFor = "upload-hidden">
            
        <div className="ant-upload-drag-icon">
            <InboxOutlined />
        </div>
        <div className="ant-upload-text">Upload</div>
        <div className="ant-upload-hint">         
        </div>
        </Upload__Upload>
        <Upload__hidden
        type="file"
        id = "upload-hidden"
        onChange = {props.onChangeFile}
        ></Upload__hidden>
        </>
    )
}