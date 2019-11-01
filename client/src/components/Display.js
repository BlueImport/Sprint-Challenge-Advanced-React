
import React from 'react';
import styled from 'styled-components'

const div1 = styled.div`
  
	box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
	transition: 0.3s;
	width: 350px;
	min-height: 40px;
	margin: 60px;
	padding: 60px;
`;

const h1 = styled.h1`
	text-align: center;
	justify-content: center;
	margin: auto;
    padding: 10px;
    text-size-adjust: adjust;
`;

function Display(props) {
    return (
        <div1>
            <h1>
                Name: {props.name}
                <br />
                Country: {props.country}
                <br />
                Searches: {props.searches}
            </h1>
        </div1>
    );
}

export default Display;