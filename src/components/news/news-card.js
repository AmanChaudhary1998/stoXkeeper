import React from 'react';
import './news.styles.css';
export const NewsDesign = (props)=>{
    return(
        <div>
            {props.news.map(info=> 

            (
                <div className="row">
                    <div className="col s12 m6">
                    <div className=" news-card-body">
                        <p className=" news-card news-card-text text-secondary">
                        <li className="" style={{color:"white"}} >{info.description}</li>
                        </p>
                    </div>
                    </div>
                </div>
            ))}
       </div>
    )
}