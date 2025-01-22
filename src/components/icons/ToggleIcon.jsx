import React from 'react';

/**
 * Thanks to https://github.com/heroui-inc/heroui/blob/26fc5147910fc6c98275e467fdd8525e4c0dc45c/packages/core/theme/src/components/navbar.ts#L87-L122
 */
export default function ToggleIcon () {
  return (
    <span
      className="w-full h-full pointer-events-none flex flex-col items-center
      justify-center text-inherit group-data-[pressed=true]:opacity-70 transition-opacity
      before:content-[''] before:block before:h-[3px] before:rounded-md before:w-6
      before:bg-current before:transition-transform before:duration-150 before:-translate-y-1
      before:rotate-0 group-data-[open=true]:before:translate-y-px group-data-[open=true]:before:rotate-45
      after:content-[''] after:block after:h-[3px] after:rounded-md after:w-6 after:bg-current
      after:transition-transform after:duration-150 after:translate-y-1 after:rotate-0
       group-data-[open=true]:after:-rotate-45

      group-data-[open=true]:after:-translate-y-[2px]
      group-data-[open=true]:before:w-7
      group-data-[open=true]:after:w-7
      " />
  );
}
