import { Button, Image, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from '@heroui/react';
import React from 'react';

import crow from '../../../public/images/crow.jpg';

import Link from '@/components/Link';

export default function CrowModal ({
  isOpen,
  onOpenChange
}) {
  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1 text-3xl pointer-events-none pt-3 pb-2">Crow</ModalHeader>
            <ModalBody>
              <Image
                alt="Crow"
                className="shadow-md rounded-xl w-full !h-[initial]"
                draggable={false}
                fetchpriority="low"
                src={crow.src}
              />
              <p className="text-tiny">Christine Matthews / Carrion Crow (Corvus corone) / <Link
                isExternal className="text-tiny" href="https://creativecommons.org/licenses/by-sa/2.0/">CC BY-SA
                2.0</Link
              ></p>
            </ModalBody>
            <ModalFooter className="pt-2">
              <Button className="text-md" color="primary" variant="ghost" onPress={onClose}>
                Close
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
