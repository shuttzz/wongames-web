import * as S from './styles';
import Logo from '../Logo';
import Heading from '../Heading';
import Link from 'next/link';

const Footer = () => (
  <S.Wrapper>
    <Logo color="black" />

    <S.Content>
      <S.Column>
        <Heading color="black" size="small" lineBottom lineColor="secondary">
          Contact Us
        </Heading>

        <a href="mailto:sac@wongames.com">sac@wongames.com</a>
      </S.Column>

      <S.Column>
        <Heading color="black" size="small" lineBottom lineColor="secondary">
          Follow us
        </Heading>

        <nav aria-labelledby="social media">
          <a
            href="https://www.instagram.com/won-games"
            target="_blank"
            rel="noopener, noreferrer"
          >
            Instagram
          </a>

          <a
            href="https://www.twitter.com/won-games"
            target="_blank"
            rel="noopener, noreferrer"
          >
            Twitter
          </a>

          <a
            href="https://www.youtube.com/won-games"
            target="_blank"
            rel="noopener, noreferrer"
          >
            Youtube
          </a>

          <a
            href="https://www.facebook.com/won-games"
            target="_blank"
            rel="noopener, noreferrer"
          >
            Facebook
          </a>
        </nav>
      </S.Column>

      <S.Column>
        <Heading color="black" size="small" lineBottom lineColor="secondary">
          Links
        </Heading>

        <nav aria-labelledby="footer resources">
          <Link href="/">Home</Link>

          <Link href="/games">Store</Link>

          <Link href="/search">Buscar</Link>
        </nav>
      </S.Column>

      <S.Column>
        <Heading color="black" size="small" lineBottom lineColor="secondary">
          Location
        </Heading>

        <nav aria-labelledby="footer resources">
          <span>Lorem ipsum dolor sit.</span>
          <span>Lorem ipsum</span>
          <span>Lorem, ipsum dolor.</span>
        </nav>
      </S.Column>
    </S.Content>
    <S.Copyright>Won Games 2020 &copy; All rights reserved.</S.Copyright>
  </S.Wrapper>
);

export default Footer;
