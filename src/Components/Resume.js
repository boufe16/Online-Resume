import React from 'react';
import Tabs from './Tabs';
import Tab from './Tab';
class Resume extends React.Component {
    constructor(props){
        super(props);

        this.state ={
            CurrentTab : 0
        }
    }
   
    render(){
        return(
            <div>

            <Tabs value={this.state.CurrentTab}
                onChange={(e) => this.setState({CurrentTab: e})}>
               <Tab>Education</Tab>
               <Tab>Skills</Tab>
            </Tabs>
            {this.state.CurrentTab === 0 && (
                <div>Education</div>
            )}
                {this.state.CurrentTab === 1 && (
                <div>Skills</div>
            )}
            </div>
        )
    }
}
export default Resume