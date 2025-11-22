interface SectionWrapperProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
}

const SectionWrapper = ({ id, children, className = "" }: SectionWrapperProps) => {
  return (
    <section
      id={id}
      className={`w-full py-20 px-6 md:px-12 lg:px-24 ${className}`}
    >
      <div className="max-w-7xl mx-auto">{children}</div>
    </section>
  );
};

export default SectionWrapper;
