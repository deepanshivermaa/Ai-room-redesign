import * as React from "react";

const AccordionContext = React.createContext();

export function Accordion({ children }) {
  const [openIndex, setOpenIndex] = React.useState(null);

  return (
    <AccordionContext.Provider value={{ openIndex, setOpenIndex }}>
      <div className="accordion">{children}</div>
    </AccordionContext.Provider>
  );
}

export function AccordionItem({ children, index }) {
  const { openIndex, setOpenIndex } = React.useContext(AccordionContext);
  const isOpen = openIndex === index;

  return (
    <div className="accordion-item">
      <div
        className="accordion-header"
        onClick={() => setOpenIndex(isOpen ? null : index)}
      >
        {children[0]} {/* AccordionTrigger */}
      </div>
      {isOpen && <div className="accordion-content">{children[1]}</div>}
    </div>
  );
}

export function AccordionTrigger({ children }) {
  return <div className="font-bold cursor-pointer">{children}</div>;
}

export function AccordionContent({ children }) {
  return <div className="p-4 border-t">{children}</div>;
}
