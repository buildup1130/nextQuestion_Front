import { useState,useEffect } from "react";
import { UploadUI } from "./UploadPresenter";
import {message} from "antd";
import axios from "axios";

export default function UploadLogic(props){
    

    const onChangeFile = async (event) => {
      const selectedFile = event.target.files[0];
      props.setFile(selectedFile);
    }

    

    return <UploadUI
      onChangeFile = {onChangeFile}
    ></UploadUI>
}