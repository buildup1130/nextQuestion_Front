import {Upload} from "antd";
import styled from "@emotion/styled";

export const Upload__Upload = styled.div`
    padding: 10px 20px;
    height:300px;
    width:100%;

    border: 1px dashed black;
    border-radius: 10px;

    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;

    font-size: 32px;
    text-align: center;
    text-overflow: ellipsis;
    overflow: hidden;
    
    cursor: pointer;
    
    .ant-upload{
        width:100%;
        height:100%;

        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
    }

    :hover{
        border: 1px dashed #5383E8;
        color: #5383E8;
        background-color: #eeeeee;
    }
`

export const Upload__hidden = styled.input`
    display:none;
`