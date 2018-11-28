import React, { Component } from 'react';
import { ImageWraper, LeftImage, RightImages } from '../style';
import { Link } from 'react-router-dom';

class List extends Component {
    render() {
        return (
            <div>
                {  
                     <ImageWraper>
                         <LeftImage>
                             <img src="http://umall.yonyouup.com/photo/template/1607/80e232a0-ccaa-4113-9c3c-0de593f514af.jpg" alt=""/>
                         </LeftImage>
                         <RightImages>
                            <img src="http://upmallfiles.yonyouup.com/photo/template/1607/40042470-05b9-4127-87b8-94970cd9011e.jpg" alt=""/>
                            <img src="http://upmallfiles.yonyouup.com/photo/template/1607/2a6aac9f-6392-48eb-a2ff-ce2fa46b0deb.jpg" alt=""/>
                         </RightImages>
                     </ImageWraper>
                    
                }
            </div>
        )
    }
}


export default List;