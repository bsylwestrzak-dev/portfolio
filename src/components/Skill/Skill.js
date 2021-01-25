import React, { useState } from 'react';
import Wrapper from '../../styledComponents/Wrapper';
import Header from '../../styledComponents/Header';
import Img from '../../styledComponents/Img';
import Button from '../../styledComponents//Button';


const Skill = () => {
    const skills = useState([
        {name: 'React.js', img:'/react.png', procent: '90%'},
        {name: 'Express.js', img:'/node.png', procent: '70%'},
        {name: 'Mongo DB', img:'/mongodb.png', procent: '60%'},
        {name: 'Redux', img:'/redux.png', procent: '90%'},
        {name: 'Git', img:'/git.png', procent: '70%'},
        {name: 'Scrum', img:'/scrum.png', procent: '70%'},
        {name: 'Unit Testing', img:'/unit.png', procent: '50%'},
        {name: 'Rest Api', img:'/rest.png', procent: '85%'},
    ]);
    const skillSet = skills[0].map(skill => {
        return (
            <Wrapper  direction='row' justify='center' align='center' padding='14px 0px'>
                <Img width="40px" src={process.env.PUBLIC_URL + skill.img} />
                <Wrapper direction='column' width='100%' padding='0px 0px 0px 10px'>
                    <Wrapper direction='row' justify='space-between' align='center'>
                        <Header padding='0px 0px 4px 0px' size='16px' weight='400'>{skill.name}</Header>
                        <Header padding='0px 0px 4px 0px' size='16px' weight='400'>{skill.procent}</Header>
                    </Wrapper>
                    <Wrapper skill_procent_outside>
                        <Wrapper skill_procent_inside width={skill.procent}>
                            
                        </Wrapper>
                    </Wrapper>
                </Wrapper>
            </Wrapper>
        )
    })
    return (
        <Wrapper padding="30px 0px 0px 0px" direction="column" justify="center" width="100%">
            <Header padding="30px 0px" weight="900" size="1.5em">
                SKILL SET
            </Header>
                {skillSet}
                <Wrapper direction='row' justify='center'>
                    <Button size='12px' padding='15px 20px'>Linkedin</Button>
                </Wrapper>
        </Wrapper>
    )
}

export default Skill