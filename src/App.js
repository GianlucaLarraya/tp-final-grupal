import './App.css';
import { TemplateString } from './components/fundamentos/02-TemplateString';
import { VarConstLet } from './components/fundamentos/01-VarConstLet';

import { MiPrimerComp } from './components/MiPrimerComp/MiPrimerComp';
import { ObjetosLiterales } from './components/fundamentos/03-Object';

function App() {

  return (
    <div className="container">
      <MiPrimerComp />
      <VarConstLet />
      <TemplateString />
      <ObjetosLiterales />

    </div>
  );
}

export default App;
