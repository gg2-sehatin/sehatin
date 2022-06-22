import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure
} from "@chakra-ui/react";

type ModalDialogueProps = {
  onClose: () => void;
  title: string;
  message: string
}

const ModalDialogue = ({onClose, title, message}: ModalDialogueProps) => {
  const { isOpen } = useDisclosure( {defaultIsOpen: true} )

  return (
    <>
      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {message}
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default ModalDialogue;