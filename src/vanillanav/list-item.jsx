import React, { Component } from 'react';
import { Link } from 'react-router';
import List from './list';

export default class ListItem extends Component{
    getLink(href, title){
        if(href){
            return <Link to={href}>{title}</Link>;
        }
        return title;
    };
    getSubList(children){
        if(children && children.length){
            return <List config={this.props.config} links={children}/>;
        }
        return null;
    }
    render(){
        let link = this.getLink(this.props.link.href, this.props.link.title),
            subList = this.getSubList(this.props.link.children);
        return (
            <li>
                {link}
                {subList}
            </li>
        );
    }
};