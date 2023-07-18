import { Dispatch, FC, SetStateAction, createRef, useEffect } from 'react'
import { ModalContainer, ModalContentBody, ModalHeader } from '.'
import { OverlayStyle } from '../../utils/styles'
import { CreateConversationForm } from '../forms/CreateConversationForm'
import {MdClose} from 'react-icons/md'
type Props = {
  setShowModal:Dispatch<SetStateAction<boolean>>
}
const CreateConversationModal : FC<Props>= ({setShowModal}) => {
 const ref = createRef<HTMLDivElement>();
 const handleKeyDown = (e:KeyboardEvent) =>
  e.key === "Escape" && setShowModal(false)
 
  useEffect(()=>{
    window.addEventListener("keydown", handleKeyDown);
    return ()=>window.removeEventListener("keydown", handleKeyDown)
    
  }, [])

  const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) =>{
    const {current} = ref;
    if(current === event.target){
      setShowModal(false)
    }
  }
  return (
    <OverlayStyle ref={ref} onClick={handleOverlayClick}
    >
        <ModalContainer>
            <ModalHeader>
                <h2>Create a Conversation</h2>
                <MdClose size={32} onClick={()=>setShowModal(false)}/>
            </ModalHeader>
            <ModalContentBody>
                <CreateConversationForm/>
            </ModalContentBody>
        </ModalContainer>
    </OverlayStyle>
  )
}

export default CreateConversationModal
