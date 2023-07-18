import { Button, InputContainer, InputField, InputLabel, TextField } from "../../utils/styles"
import styles from "./index.module.scss"
export const CreateConversationForm = () => {
  return (
    <form className={styles.createConvesationForm}>
      <InputContainer backgroundColor="#161616">
        <section className={styles.messages}>
        <InputLabel>Recipient</InputLabel>
        <InputField/>
        </section>
        <section className={styles.messages}>
        <InputLabel>Message (optional)</InputLabel>
        <TextField/>
        </section>
        <Button>Create Conversation</Button>
      </InputContainer>
    </form>
  )
}


