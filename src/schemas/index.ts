import faq from "./faq";
import project from "./project";
import offer from "./offer";
import staticTexts from "./staticTexts";
import trustItem from "./trustItem";
import problemItem from "./problemItem";
import solutionItem from "./solutionItem";
import processStep from "./processStep";
import navItem from "./navItem";

export const schemaTypes = [
  // Textes statiques (singleton)
  staticTexts,
  
  // Collections itérables
  navItem,
  trustItem,
  problemItem,
  solutionItem,
  processStep,
  offer,
  project,
  faq,
];
