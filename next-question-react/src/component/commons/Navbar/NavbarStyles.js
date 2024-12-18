import styled from "@emotion/styled"

export const Navbar__Wrapper = styled.div`
    width: 318px;
    height: 100%;
    padding: 0px 30px 0px 30px;

    display:flex;
    flex-direction: column;
    justify-content: flex-start;

    border-right: 1px solid black;
    `

export const Navbar__Logo = styled.div`
    width: 100%;
    height: 101px;
    
    font-size: 60px;
    font-weight: 700;
    line-height: 101px;
    text-align:center;
` 

export const Navbar__Container = styled.div`
    width: 100%;
    height: 100%;
    margin-bottom: 101px;
    padding-top: 50px;

    display: flex;
    flex-direction:column;
    justify-content:flex-start;
    align-items:center;

    gap: calc(10%);
`

export const Navbar__Element = styled.div`
    width: 100%;

    font-size: 24px;
    cursor: pointer;
    
    display:flex;
    flex-direction: row;
    align-items: center;
    :hover{
        transform: translateY(-5px);
        transition: 0.5s ease-in-out all;
    }
`

export const Navbar__Icon = styled.div`
    width: 50px;
    height: 50px;

    border-radius: 50px;
    border: 1px solid black;
    font-size:32px;

    display:flex;
    justify-content: center;
    align-items: center;
    margin-right: 30px;
`