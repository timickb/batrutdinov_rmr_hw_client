import React, { useContext, useEffect, useState } from "react";
import {Link} from "react-router-dom";
import "@/components/Header/Header.css"
import { AuthCtx, HeaderCtx } from "@/App";
import { Button } from "@/uikit/Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightFromBracket,
         faArrowRightToBracket, 
         faCat 
        } from '@fortawesome/free-solid-svg-icons';

const critW = 450;
const critW2 = 240;
const fullBtnW = 104;
const smallBtnW = 48;

export default function Header() {
    const { header } = useContext(HeaderCtx);
    const { isAuth, profile } = useContext(AuthCtx);
    const [dimension, setDimension] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    });
    const [buttonWidth, setButtonWidth] = useState(fullBtnW);

    const handleChangeDimension = () => {
        setDimension({
            width: window.innerWidth,
            height: window.innerHeight
        });

        if (dimension.width <= 450) setButtonWidth(smallBtnW);
        else setButtonWidth(fullBtnW);
    }

    useEffect(() => {
        handleChangeDimension();

        window.addEventListener('resize', handleChangeDimension);
        return () => {
            window.removeEventListener('resize', handleChangeDimension);
        }
    }, [dimension]);

    return (
        <div className="header">
            <div className="state_row">
                <Link to="/"><div className="logo" /></Link>
                <div style={{marginRight: 8}} />
                <div className="title">
                    {dimension.width > critW2 ? header : ""}
                </div>
            </div>

            <div className="state_row">
                <p style={{marginTop: 12}}>
                    {isAuth && dimension.width > critW ? profile.name : ""}
                </p>
                <div style={{marginRight: 5}} />

                {isAuth ? <>
                <Link to="/kitty">
                    <Button width={buttonWidth} padding={4}>
                        <FontAwesomeIcon icon={faCat} />
                        {dimension.width > critW ? " Kitty" : ""}
                    </Button>
                </Link>
                <Link to="/logout">
                    <Button width={buttonWidth} padding={4}>
                        <FontAwesomeIcon icon={faArrowRightFromBracket} />
                        {dimension.width > critW ? " Log out" : ""}
                    </Button>
                </Link>
                </> :
                <Link to="/login">
                    <Button width={buttonWidth} padding={4}>
                        <FontAwesomeIcon icon={faArrowRightToBracket} />
                        {dimension.width > critW ? " Log in" : ""}
                    </Button>
                </Link>
                } 
            </div>
        </div>
    )
}