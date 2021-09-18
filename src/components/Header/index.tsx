import Image from 'next/image';
import exportIcon from '@assets/icon/export.svg';
import logoIcon from '@assets/icon/logo.svg';
import { Container, Menu } from './style';

export default function Header(): JSX.Element {
  return (
    <Container>
      <Image src={logoIcon} alt="Logo" />
      <Menu>
        Exportar
        <Image src={exportIcon} alt="Export button" />
      </Menu>
    </Container>
  );
}
