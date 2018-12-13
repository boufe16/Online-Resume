import React from 'react';

class Tabs extends React.Component {
    tabClick(i) {
        this.props.onChange(i);
    }
    isSelected(i){
        if(i === this.props.value)
            return "selected"
    }
    render(){
        return (
            <ul className="tabs">{this.props.children.map((tab,i) =>{ 
                return <li className={`tab ${this.isSelected(i)}`} onClick={() => this.tabClick(i)} key={i}>{tab}</li>
            })}</ul>
        );
    }
}

export default Tabs;