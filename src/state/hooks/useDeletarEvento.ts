import { useSetRecoilState } from 'recoil';
import { IEvento } from '../../interfaces/IEvento';
import { listaDeEventosState } from '../atom';

const useDeletarEvento = () => {
  const setListaDeEvento = useSetRecoilState<IEvento[]>(listaDeEventosState);

  return (evento: IEvento) => {
    setListaDeEvento((listaAntiga) => [
      ...listaAntiga.filter((evt) => evento.id !== evt.id),
    ]);
  };
};

export default useDeletarEvento;
