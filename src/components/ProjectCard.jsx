import { IconExternalLink } from '@tabler/icons-react';
import { Button, Card, CardBody, CardFooter, CardHeader, Image } from '@heroui/react';

import ButtonableLink from '@/components/ButtonableLink';
import Link from '@/components/Link';

export default function ProjectCard ({
  name,
  description,
  image,
  link,
  checkOutVariation
}) {
  return (
    <>
      <Card isFooterBlurred className="py-2 w-80 max-[450px]:w-full max-[450px]:py-3 grid">
        <CardHeader className="pb-0 pt-0.5 px-4 flex-col items-start">
          <Link isExternal className="w-full break-word-legacy" href={link}>
            <h3 className="font-bold text-[1.4rem] mb-1 w-full break-word-legacy">{name}</h3>
          </Link>
          <p className="text-default-600 text-[0.92rem] leading-[1.4] w-full break-word-legacy">{description}</p>
        </CardHeader>
        <CardBody className="overflow-visible pt-2 pb-1.5 self-end">
          <Image
            alt={`Image of project called "${name}"`}
            className="object-cover shadow-md rounded-xl aspect-[3/4] w-full h-[initial_!important]"
            draggable={false}
            fetchpriority="low"
            src={image.src}
          />
        </CardBody>
        <CardFooter
          className="hover:scale-105 active:scale[97%] transition-transform before:bg-white/10
          border-white/20 border-1 overflow-hidden p-0 absolute before:rounded-xl rounded-large bottom-1 w-fit left-1/2
          -translate-x-1/2 flex flex-row justify-center shadow-md z-10 has-[>a[data-pressed=true]]:scale-[98%]">
          <Button
            as={ButtonableLink}
            className="text-base text-white bg-gray-800/10 h-9 scale-[100%_!important] data-[focus-visible=true]:-outline-offset-2"
            color="default"
            endContent={<IconExternalLink size={25} />}
            href={link}
            radius="lg"
            size="sm"
            tabIndex={-1}
            target="_blank"
            variant="flat"
          >
            <span
              suppressHydrationWarning>{checkOutVariation}</span>
          </Button>
        </CardFooter>
      </Card>
    </>
  );
}
