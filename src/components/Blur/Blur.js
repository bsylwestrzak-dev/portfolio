import React from 'react';
import BlurPiece from "../../styledComponents/Blur";

const Blur = () => {
    return (
        <>
        <BlurPiece color="#8be3f9" padding='130px' top='100px' left='-130px'/>
        <BlurPiece color="#2f5ecb" padding='100px' top='200px' right='-130px'/>
        <BlurPiece color="#e358eb" padding='50px' top='400px' />
        <BlurPiece color="#b59eee" padding='130px' top='700px' left='-100px'/>
        <BlurPiece color="#8be3f9" padding='130px' top='1000px' right='-130px'/>
        <BlurPiece color="#2f5ecb" padding='100px' top='1400px' left='-130px'/>
        <BlurPiece color="#e358eb" padding='40px' top='1800px'/>
        <BlurPiece color="#8be3f9" padding='40px' top='1600px' right='40px'/>
        <BlurPiece color="#2f5ecb" padding='40px' top='2000px' right='40px'/>
        <BlurPiece color="#b59eee" padding='150px' top='2400px' left='-160px'/>
        <BlurPiece color="#8be3f9" padding='120px' top='2200px' right='-160px'/>
        </>
    )
}

export default Blur;