import React, { useState }  from "react";
import { Icon } from '@iconify/react';
import { Link } from '@inertiajs/inertia-react';

export default function ListItem({title,childs, faicon}) {
  const [show, setShow] = React.useState(false);
  
  const listItems = childs.map((child,index) =>
     <ListItem key={index} child={child} />
);

  function ListItem(props) {
  // Correct! There is no need to specify the key here:
  let icon = "fa6-solid:"+faicon;
   return(    
          <li onClick={() => setShow(true)}>
            <Link
            href={route(props.child.route)}
            method='get'
            as='a'
            className="flex items-center p-2 space-x-3 rounded-md"
            >
            <Icon className="text-white" icon={icon} />
            <span className="text-gray-100">{props.child.title}</span>
            </Link>
          </li>
      ) 
}
  return (
    <li className="rounded-sm">
    <button className="flex items-center p-2 space-x-3 rounded-md" onClick={() => setShow(prev => !prev)}>
      <Icon className="text-white" icon="fa6-solid:users" />
      <span className="text-gray-100">{title}</span>
    </button>
      
    { show && <ul className="sub-menu ml-4">
        
        { listItems }

      </ul>
    }
  </li>

  );
}
