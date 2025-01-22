import kebabCase from 'lodash.kebabcase';

export default function SectionTitle ({
  children
}) {
  return (
    <>
      <div className="h-8" />
      <div className="absolute mt-1 bg-gradient-to-r from-blue-600 to-secondary h-1.5 rounded-full w-14 -ml-2" />
      <h2 className="leading-[1.8] text-[2.4rem] md:leading-[1.7] md:text-[2.7rem] font-bold mt-1"
          id={kebabCase(children.toString())}>
        {children}
      </h2>
    </>
  );
}
