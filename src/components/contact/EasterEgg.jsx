import React, { useState } from 'react';
import clsx from 'clsx';

import CrowModal from '@/components/contact/CrowModal';

export default function EasterEgg ({ className }) {
  const [crowModalOpen, setCrowModalOpen] = useState(false);

  return (
    <div className={clsx(className, 'w-fit opacity-[2%]')}>
      <button aria-label="Easter egg: click for crow" className="text-md cursor-auto"
         onClick={() => setCrowModalOpen(true)}>
        click for crow
      </button>
      <CrowModal isOpen={crowModalOpen} onOpenChange={() => setCrowModalOpen(!crowModalOpen)} />
    </div>
  );
}
