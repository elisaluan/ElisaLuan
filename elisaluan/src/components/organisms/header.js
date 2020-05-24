import React from 'react';
import styled from 'styled-components';

import Text from '../molecules/text';
import Battery from '../molecules/battery';

const Header = () => {
    return (
        <SplashContainer>
            <TitleContainer>
                <Title>Elisa</Title>
                <Title>
                    Luan
                    <BatteryStyle>
                        <Battery/>
                    </BatteryStyle>
                </Title>
            </TitleContainer>
            <AboutContainer> 
                <Text> <b>// Under Never Ending Construction</b> </Text>
                <Text> Waterloo 2B Software Engineering </Text>
                <Text> Full Stack Developer </Text>
            </AboutContainer>
        </SplashContainer>
    );
};
const SplashContainer = styled.div`
    position: absolute:
    top: 0;
    height: ${window.innerHeight-50}px;
    width: 100%;
    background-color: black;
    z-index: 0;
`;

const TitleContainer = styled.div`
    position: flex;
    padding-top: ${window.innerHeight/4}px;
`;

const Title = styled.div`
    text-align: center;
    font-family: GlossAndBloom;
    color: white;
    font-size: 100px;
`;

const BatteryStyle = styled.div`
    position: relative;
    display: inline;
    padding-left: 15px;
    margin-right: -15px;
`;

const AboutContainer = styled.div`
    margin-top: 15px;
    text-align: center;
    i {
        font-size: 100px;
        height: 120px;
        width: 120px;
    }
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-contents: center;
  text-align: center;
`;

const Col = styled.div`
  display: flex;
  flex-direction: column;
  width: ${({ width }) => (width*5)}%;
  margin: 10px 10px;
`;

export default Header;