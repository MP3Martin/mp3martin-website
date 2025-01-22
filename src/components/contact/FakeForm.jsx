import React, { useState } from 'react';
import { Button, Card, CardBody, CardHeader, Form, Input, Textarea } from '@heroui/react';

import CrowModal from '@/components/contact/CrowModal';

export default function FakeForm () {
  const [crowModalOpen, setCrowModalOpen] = useState(false);

  return (
    <>
      <Card className="max-w-xs">
        <CardHeader>
          <div className="text-lg font-semibold">This form <span
            className="text-red-500 font-bold underline">is fake</span></div>
        </CardHeader>
        <CardBody>
          <Form
            className="w-full max-w-xs flex flex-col gap-4"
            validationBehavior="native"
            onSubmit={(e) => {
              e.preventDefault();

              setCrowModalOpen(true);
            }}
          >
            <Input
              classNames={{ inputWrapper: 'bg-content3' }}
              label="Name"
              labelPlacement="outside"
              name="name"
              placeholder="Enter your name"
              variant="faded"
            />
            <Input
              classNames={{ inputWrapper: 'bg-content3' }}
              errorMessage="Please enter a valid email"
              label="Email"
              labelPlacement="outside"
              name="email"
              placeholder="Enter your email"
              type="email"
              variant="faded"
            />
            <Textarea
              classNames={{ inputWrapper: 'bg-content3' }}
              label="Message"
              labelPlacement="outside"
              name="message"
              placeholder="Enter your message"
              variant="faded"
            />
            <div className="flex gap-2">
              <Button className="text-md" color="primary" type="submit">
                Submit
              </Button>
              <CrowModal isOpen={crowModalOpen} onOpenChange={() => setCrowModalOpen(!crowModalOpen)} />
            </div>
          </Form>
        </CardBody>
      </Card>
    </>
  );
}
