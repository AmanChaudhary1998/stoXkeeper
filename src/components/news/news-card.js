// import React from 'react';
// import './news.styles.css';
// export const NewsDesign = (props)=>{
//     return(
//         <div>
//             {props.news.map(info=> 

//             (
//                 <div className="row">
//                     <div className="col s12 m6">
//                     <div className=" news-card-body">
//                         <p className=" news-card news-card-text text-secondary">
//                         <li className="" style={{color:"white"}} >{info.title}</li>
//                         </p>
//                     </div>
//                     </div>
//                 </div>
//             ))}
//        </div>
//     )
// }

import React from 'react';

import './news.styles.css';

import { Collapse } from 'antd';

const { Panel } = Collapse;

function callback(key) {
    console.log(key);
  }

export const NewsDesign = (props)=>{
    return (
        <>
            {props.news.map(info =>
            (
                <div>
                    <Collapse defaultActiveKey={info.guid} onChange={callback}>
                        <Panel header={info.title} key={info.guid}>
                            <p>{info.description}</p>
                        </Panel>
                    </Collapse>
                </div>
            )
                )}
        </>
    )
}


