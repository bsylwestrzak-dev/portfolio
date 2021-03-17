import React, { useState } from 'react';
import Wrapper from '../../styledComponents/Wrapper';
import Header from '../../styledComponents/Header';
import Img from '../../styledComponents/Img';
import Paragraph from '../../styledComponents/Paragraph';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const responsive = {
    0: {
        items: 1
    },
    768: {
        items: 2
    },
    1024: {
        items: 3
    }
  }
const Passion = () => {
    const passions = useState([
        {name: 'Design', img:'/design.png', description: 'I value simple content structure, clean design patterns, and thoughtful interactions.'},
        {name: 'Development', img:'/development.png', description: 'Responsive websites built for an optimal user experience, along with fast, reliable API from backend.'},
        {name: 'Maintenance', img:'/maintenance.png', description: 'Writing clean, unit-tested code allows my applications to be scalable and easy to maintain.'},
    ]);

    const passionsSet = passions[0].map( passion => {
        return (
            <Wrapper direction='column' justify='center' align='center'>
                <Img margin='20px 0px 0px 0px' width='100px' src={process.env.PUBLIC_URL + passion.img} />
                <Header padding='15px 0px' size='1.2em' weight='400'>{passion.name}</Header>
                <Paragraph align='center' color={({ theme }) => theme.grey}  padding='0px 30px' size='1em'>{passion.description}</Paragraph>
            </Wrapper>
        )
    })
    return (
        <Wrapper id="passions" padding='70px 0px 0px 0px' direction='column' justify='center' width='100%'>
            <Header padding='10px 0px 30px 0px' weight='900' size='1.5em'>WHAT DO I DO</Header>
            <AliceCarousel responsive={responsive} items={passionsSet}/>
        </Wrapper>
    )
}

export default Passion;