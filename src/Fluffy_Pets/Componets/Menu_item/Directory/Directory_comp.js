import React from 'react';
import MenuItem from '../../Menu_item/Menu_item_comp/Menu_item_comp';
import './Directory.scss';

class Directory extends React.Component{
    constructor() {
        super();
        this.state={
            section:[{
                id:1,
                title:'Cats',
                image:"../Images/cat1.jpeg"
            },
            {
                id:2,
                title:"Dogs",
                image:"../Images/dog1.jpeg"
            },
            {
                id:3,
                title:"Cocks",
                image:""
            },
            {
                id:4,
                title:"Birds",
                image:"../Images/birds1.jpeg"
            },
            {
                id:5,
                title:"Rabits",
                image:"../Images/Logo1.jpeg"
            },
            {
                id:6,
                title:"Fishes",
                image:"../Images/fish1.jpeg"
            }
            ]

        }
    }
    render(){
     return(
         <>
         <div className="directory_menu">
         {this.state.section.map(({id, title, image}) =>(
             <MenuItem key={id} title={title} image={image} />
         ))}
         </div>
         </>
     );
    }
}

export default Directory;