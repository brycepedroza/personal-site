import React from 'react';
import { Typography } from 'antd';
import { Button } from "theme-ui"
import { Link } from "gatsby"
const { Title } = Typography;
const { Text } = Typography;


export default class Header extends React.Component {

       render() {
         return (
            <div className="header_div">
              <Title> Counter Pick </Title>
              <div style={{margin: 10}}><Text> Using a genetic algorithm for advanced team composition analysis. </Text></div>
              <div style={{margin: 10}}>
                <Button as={Link} to={'/league-gen-alg'} target="_blank">
                  Learn More
                </Button>
              </div>
            </div>
         )}
}
