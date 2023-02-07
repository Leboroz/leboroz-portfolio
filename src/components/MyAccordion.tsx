import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import { Tooltip } from 'react-tooltip';
import { backEnd, frontEnd, tools } from '../utils/technologies';
import TechTag from '../components/TechTag';

type propsType = {

};

export const MyAccordion = (props: propsType) => {
  return (
    <>
      <Accordion>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              Front-End
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <div className='flex wrap p-2'>
              {frontEnd.map(tech => (<TechTag img={tech.img} label={tech.label} />))}
            </div>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              Back-End
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <div className='flex wrap p-2'>
              {backEnd.map(tech => (<TechTag img={tech.img} label={tech.label} />))}
            </div>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              tools
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <div className='flex wrap p-2'>
              {tools.map(tech => (<TechTag img={tech.img} label={tech.label} />))}
            </div>
          </AccordionItemPanel>
        </AccordionItem>
      </Accordion>
      <Tooltip />
    </>
  )
}
