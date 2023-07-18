import React, { FC, useState } from 'react'
import { ConversationSidebarContainer, ConversationSidebarHeader, ConversationSidebarItem, ConversationSidebarStyle } from '../../utils/styles'
import {TbEdit} from "react-icons/tb"
import { ConversationType } from '../../utils/types';
import styles from "../forms/index.module.scss"
import CreateConversationModal from '../modals/CreateConversationModal';
type props = {
  conversations:ConversationType[]
}
const ConversationSidebar:FC<props> = ({conversations}) => {
  const [showModal, setShowModal] = useState(false)
  return (
<>
{showModal && <CreateConversationModal setShowModal={setShowModal}/>}
<ConversationSidebarStyle>
      <ConversationSidebarHeader>
        <h1>Conversations</h1>
        <div onClick={()=>setShowModal(!showModal)}>
        <TbEdit size={40}/>
        </div>
      </ConversationSidebarHeader>
      <ConversationSidebarContainer>
        {
          conversations.map((conversation)=>(
            <ConversationSidebarItem>
            <div className={styles.conversationAvatar}/>
              <div>
            <span className={styles.conversationName}>{conversation.name}</span>
            <span className={styles.conversationLastMessage}>{conversation.lastMessage}</span>
            </div>
            </ConversationSidebarItem>
          ))
        }
      </ConversationSidebarContainer>
    </ConversationSidebarStyle></>
  )
}

export default ConversationSidebar

