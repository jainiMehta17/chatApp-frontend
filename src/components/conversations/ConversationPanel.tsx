import React, { useContext } from 'react'
import { ConversationChannelPageStyle } from '../../utils/styles'
import { AuthContext } from '../../utils/context/AuthContext'

const ConversationPanel = () => {
  const {user} = useContext(AuthContext)
  return (
    <ConversationChannelPageStyle>
      <>Hello {user?.firstName} </>
    </ConversationChannelPageStyle>
  )
}

export default ConversationPanel
