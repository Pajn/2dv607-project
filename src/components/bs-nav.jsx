import React, { Component } from 'react';
import List from './list.jsx';
import BSList from './bs-list.jsx';
import parseLinks from './routes-parser.jsx';

export default class BSNav extends Component{
    render(){
        let config = this.props.config,
            links = this.props.links,
            type = config.bootstrap.type || '',
            BSClassNames = 'navbar navbar-default ' + type,
            brand = '';
        if(config.bootstrap.brand){
            let brandHref = config.bootstrap.brand.href || '',
                brandTitle = config.bootstrap.brand.title || '',
                brandImage = '';
            if(config.bootstrap.brand.image){
                let src = config.bootstrap.brand.image.src;
                brandImage = <span>
                        <img src={src} alt={brandTitle}/>
                    </span>;
            }
            brand = <div className='navbar-header'>
                    <a className='navbar-brand' href={brandHref}>
                        {brandImage}
                        {brandTitle}
                    </a>
                </div>
        }
        return(
            <nav className={BSClassNames}>
                <div className='container-fluid'>
                    {brand}
                    <div className='collapse navbar-collapse'>
                        <BSList config={config} links={links} rootNav={true}/>
                    </div>
                </div>
            </nav>
        );
    }
}