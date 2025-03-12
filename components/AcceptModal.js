import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    useDisclosure,
    Textarea,
  } from "@heroui/react";
  
  const AcceptModal = () => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
  
    return (
      <>
        <Button color="primary" onPress={onOpen}>
          Accept Offer
        </Button>
        <Modal isOpen={isOpen} placement="top-center" onOpenChange={onOpenChange}>
          <ModalContent>
            {({ onClose }) => ( // Ensure correct function usage here
              <>
                <ModalHeader>Accept Offer</ModalHeader>
                <ModalBody className="mt-[-20px]">
                  <div> {/* Added padding to balance layout */}
                    <p className="text-sm text-gray-700">
                      Accepting this offer means you agree to abide by the contract terms, 
                      as agreed with the client, and also to Suuave's terms and conditions.
                    </p>
                    <div className="mt-4">
                      <label className="block text-sm font-medium text-gray-700">
                        Leave a Short Message to Client
                      </label>
                      <Textarea
                        placeholder="Type message..."
                        className="mt-1 w-full"
                      />
                    </div>
                  </div>
                </ModalBody>
                <ModalFooter>
                  
                  <Button color="primary" onPress={onClose} className="bg-[radial-gradient(circle,#FFFFFF,#CCE7F2)] rounded-full text-[#0A4A66]">
                    Accept
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      </>
    );
  };
  
  export default AcceptModal;
  