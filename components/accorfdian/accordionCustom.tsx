import { Accordion } from "@/components/ui/accordion";

interface AccordianData {
  children: React.ReactNode;
}
const AccordiionCustom: React.FC<AccordianData> = ({ children }) => {
  return (
    <Accordion type="single" collapsible>
      {children}
    </Accordion>
  );
};

export default AccordiionCustom;
