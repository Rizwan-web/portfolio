const steps = [
  {
    number: "01",
    title: "Concept",
    description: "It is a long established fact that a reader at its layout.",
  },
  {
    number: "02",
    title: "Plan",
    description: "It is a long established fact that a reader at its layout.",
  },
  {
    number: "03",
    title: "Design",
    description: "It is a long established fact that a reader at its layout.",
  },
  {
    number: "04",
    title: "Development",
    description: "It is a long established fact that a reader at its layout.",
  },
];

const StepSection = () => {
  return (
    <div className="container mx-auto flex flex-col items-center p-8">
      <div className="relative flex items-center justify-between w-full mb-16">
        {steps.map((step, index) => (
          <div
            key={index}
            className="relative flex flex-col items-center w-2/5"
          >
            <div className="flex items-center justify-center w-20 h-20 bg-[#05bd93] text-white text-xl font-bold rounded-full relative z-10">
              {step.number}
            </div>

            {index < steps.length - 1 && (
              <div className="absolute top-1/2 w-full h-[2px] bg-[#05bd9366] left-1/2 transform translate-x-8"></div>
            )}
          </div>
        ))}
      </div>

      {/* Box Content Row */}
      <div className="flex justify-between w-full">
        {steps.map((step, index) => (
          <div key={index} className="relative w-1/4 px-4">
            {/* Pointer */}

            <div className="bg-[#f9f9f9] p-6 rounded-lg text-center">
              <h3 className="text-lg font-semibold">{step.title}</h3>
              <p className="text-baseSecondary">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StepSection;
