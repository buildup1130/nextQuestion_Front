import { Navbar__Wrapper,Navbar__Container, Navbar__Element, Navbar__Logo, Navbar__Icon } from "./NavbarStyles";
import {HomeOutlined, BookOutlined,FolderOutlined,ReloadOutlined, UserOutlined } from "@ant-design/icons"

export default function NavbarUI(props){

    return(
        <Navbar__Wrapper>
            <Navbar__Logo>LOGO</Navbar__Logo>
            <Navbar__Container>
                <Navbar__Element
                    onClick = {() => {props.router.push("/")}}
                ><Navbar__Icon><HomeOutlined/></Navbar__Icon>홈</Navbar__Element>
                <Navbar__Element><Navbar__Icon><BookOutlined/></Navbar__Icon>학습하기</Navbar__Element>
                <Navbar__Element><Navbar__Icon><FolderOutlined/></Navbar__Icon>책장</Navbar__Element>
                <Navbar__Element><Navbar__Icon><ReloadOutlined/></Navbar__Icon>오답노트</Navbar__Element>
                <Navbar__Element><Navbar__Icon><UserOutlined/></Navbar__Icon>내정보</Navbar__Element>
            </Navbar__Container>
        </Navbar__Wrapper>
    )
}