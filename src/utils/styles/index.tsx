import styled from "styled-components";
import { InputContainerProps, PageProps } from "./styleTypes";
export const SIDEBAR_WIDTH = 350;
export const InputField = styled.input`
font-family:"Inter";
background-color:inherit;
outline:none;
color:inherit;
border-color: #131313;
font-size:18px;
width:100%;
box-sizing:border-box;
padding:0;
margin:4px 0;
border-radius:10px

`;

export const InputContainer=styled.div<InputContainerProps>`
background-color:${(props)=>props.backgroundColor || '#131313'};
color:#fff;
padding:12px 16px;
box-sizing:border-box;
width:100%;
border-radius:8px;
`;

export const InputLabel=styled.label`
display:block;
color:#8f8f8f;
font-size:14px;
    margin:4px 0;
font-weight:500;
`;

export const Button = styled.button`
width:100%;
color:#fff;
background-color:#3a1cff;
font-size:16px;
padding:20px;
border-radius:8px;
font-weight:500;
border:2px solid #3a1cff;
transition:250ms background-color ease;
&:focus{
    background-color:#4f34ff
    border-color:#3415ff;
};
&:hover{
    cursor:pointer;
    background-color:#3415ff;
};
&:active{
    background-color:#4f34ff
}
`;
export const Page = styled.div<PageProps>`
height:100vh;
display:${(props)=>props.display};
justify-content:${(props)=>props.justifyContent};
align-items:${(props)=>props.alignItems};
`;
export const ConversationSidebarStyle = styled.aside`
position:absolute;
height:100vh;
top:0;
left:0;
background-color:#1f1f1f;
color:#fff;
width:${SIDEBAR_WIDTH}px;
background-color:inherit;
border-right:1px solid #5454543d;
overflow-y:scroll;
&::-webkit-scrollbar{
    display: none;
}
    }
`;
export const ConversationSidebarHeader = styled.header`
width:${SIDEBAR_WIDTH}px;
top:0;
left:0;
font-family:'Inter';
display:flex;
position:sticky;
justify-content:space-between;
align-items:center;
background-color:#151515;
height:100px;
padding:0 24px;
box-sizing:border-box;
border-bottom:1px solid #5454543d;
& h1{
font-weight:500;
}
`;

export const ConversationChannelPageStyle = styled.div`
height:100%;
margin-left:${SIDEBAR_WIDTH}px;
color:#fff;
`;

export const ConversationSidebarContainer = styled.div`

`;
export const ConversationSidebarItem = styled.div`
display:flex;
align-items:center;
padding:14px 24px;
gap:20px;
border-bottom:1px solid #5454543d;
background-color:#151515
`;

export const OverlayStyle = styled.div`
height:100%;
width:100%;
position:fixed;
display:flex;
justify-content:center;
align-items:center;
color:#fff;
background-color:#000000c4;
z-index:10;
`;

export const ModalContainerStyle = styled.div`
background-color:#121212;
width:650px;
border-radius:10px;
`;

export const ModalHeaderStyle = styled.header`
width:100%;
box-sizing:border-box;
padding: 0 24px;
display:flex;
justify-content:space-between;
align-items:center;
margin-top:24px;
& h2 {
    font-weight:500;
    margin:0;
}
`;

export const ModalContentBodyStyle = styled.div`
padding:24px;
`;
export const TextField = styled.textarea`
font-family:"Inter";
background-color:inherit;
outline:none;
color:inherit;
border-color: #131313;
font-size:18px;
width:100%;
box-sizing:border-box;
padding:0;
margin:4px 0;
border-radius:10px;
resize:none;
::webkit-scrollbar{
    display:none;
}
`;