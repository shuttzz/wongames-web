import { screen } from '@testing-library/react';

import Logo from './index';
import { renderWithTheme } from '../../utils/tests/helpers';

describe('<Logo />', () => {
  it('should render a white label by default', () => {
    /**
     * Etapas para se trabalhar com testes de componentes de interface
     * 1 Renderizar o componente utilizando o método `render`
     * 2 Selecionar o elemento que desejamos testar, utilizando o método `screen`
     * 3 expect - assertion - asserção - comparação - análise (espero que renderize a logo branca)
     */
    renderWithTheme(<Logo />);
    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      color: '#FAFAFA',
    });
  });

  it('should render a black label when color is passed', () => {
    renderWithTheme(<Logo color="black" />);
    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      color: '#030517',
    });
  });
});
