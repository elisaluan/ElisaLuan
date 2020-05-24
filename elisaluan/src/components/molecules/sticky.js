import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

export const useControlledSticky = () => {
    const [isSticky, setSticky] = useState(false);

    const handleScroll = e => {
        if (window.pageYOffset > 0) {
            setSticky(true);
        } else {
            setSticky(false);
        }
    } 

    return { isSticky, handleScroll };
};

const Sticky = ({
    isSticky,
    isBurger=true,
    handleScroll,
    ...rest
}) => {
    const [isOpen, setOpen] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, []);

    return (
        <StickyContainer isSticky={isSticky} isBurger={isBurger} isOpen={isOpen}>
            {isBurger ? 
            <>
                <StyledBurger isSticky={isSticky} onClick={()=>{setOpen(!isOpen)}}>
                    <div/>
                    <div/>
                    <div/>
                </StyledBurger>
                {isOpen ?
                    <BurgerList isBurger={isBurger} isOpen={isOpen}>
                        <BurgerItem><a href="https://drive.google.com/file/d/1Ef6bKeBEnHesvAxbAViij80usapeACfv/view?usp=sharing">Resume</a></BurgerItem>
                        <BurgerItem><i className="fa fa-linkedin"/></BurgerItem>
                        <BurgerItem><i className="fa fa-github"/></BurgerItem>
                        <BurgerItem><i className="fa fa-envelope-o"/></BurgerItem>
                    </BurgerList>
                :<></>}
            </>
            :
            <NavList isBurger={isBurger} isOpen={isOpen}>
                <NavItem><a href="https://drive.google.com/file/d/1Ef6bKeBEnHesvAxbAViij80usapeACfv/view?usp=sharing">Resume</a></NavItem>
                <NavItem><i className="fa fa-linkedin"/></NavItem>
                <NavItem><i className="fa fa-github"/></NavItem>
                <NavItem><i className="fa fa-envelope-o"/></NavItem>
            </NavList>
            }
        </StickyContainer>
    );
};

const StickyContainer = styled.div`
    z-index: 1;
    height: ${props => props.isBurger ? (props.isOpen ? "110":"45"):"50"}px;
    position: sticky;
    top: 0;
    padding: 0;
    margin: 0;
    padding-right: 20px;
    ${props => props.isSticky ?
        `
        background-color: white;
        color: black;
        a{
            color:black;
        }
        `
        :
        `
        background-color: black;
        color: white;
        a{
            color: white;
        }
        `
    }
    padding-top: ${props => props.isBurger ? "15px":(props.isSticky ? "20px":"40px")};
`;

const NavList = styled.ul`
    list-style-type: none;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    margin: 0px;
    padding-right: 20px;
`;

const NavItem = styled.li`
    display: flex;
    padding: 10px 15px;
    font-family: Roboto;
    font-size: 14px;
    text-transform: uppercase;

    i {
        font-size: 16px;
    }
    a {
        text-decoration: none;
    }
    &:hover {
        font-weight: bold;
    }
`;

const StyledBurger = styled.button`
  position: absolute;
  top: 15px;
  left: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
  
  &:focus {
    outline: none;
  }
  
  div {
    width: 2rem;
    height: 0.25rem;
    background: ${props => props.isSticky ? `black`:`white`};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
  }
`;

const BurgerList = styled.ul`
    list-style-type: none;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    margin: 0px;
`;

const BurgerItem = styled.li`
    display: flex;
    padding: 10px 15px;;
    font-family: Roboto;
    font-size: 14px;
    text-transform: uppercase;
    margin-left: 1rem;

    i {
        font-size: 16px;
    }
    a {
        text-decoration: none;
    }
    &:hover {
        font-weight: bold;
    }
`;

export default Sticky;