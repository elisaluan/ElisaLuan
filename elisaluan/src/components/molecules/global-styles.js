import { createGlobalStyle } from 'styled-components';
import GlossAndBloom from '../../fonts/Gloss_And_Bloom.ttf';

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'GlossAndBloom';
        src: url(${GlossAndBloom}) format('truetype');
        font-weight: 300;
        font-style: normal;
    }
`;

export default GlobalStyle;