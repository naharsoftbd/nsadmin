import React, { useState, useContext, useEffect }  from "react";
import { Icon } from '@iconify/react';
import { Link } from '@inertiajs/react';
import { router } from '@inertiajs/react';

export default function ListItem({title, parentslug, menu_method, childs, faicon, menu_id}) {
  const [show, setShow] = React.useState(false);
  let parent_id = localStorage.getItem("parent_id");



  const listItems = childs.map((child,index) =>
   <ListItem key={index} child={child} />
   );

  function ListItem(props) {
  // Correct! There is no need to specify the key here:
  //let icon = "fa6-solid:"+faicon;
  return(    
    <li onClick={() => setShow(true)}>
    <Link
    href={route(props?.child?.slug)}
    method={props?.child?.menu_method}
    as='a'
    className="flex items-center p-2 space-x-3 rounded-md"
    >
    <Icon className="text-white" icon={props?.child?.menu_icon} />
    <span className="text-gray-100">{props?.child?.name}</span>
    </Link>
    </li>
    ) 
}
return (
  <li className="rounded-sm">
  <button className="flex items-center p-2 space-x-3 rounded-md" onClick={() =>{ (parent_id==menu_id) ? localStorage.removeItem("parent_id"):localStorage.setItem("parent_id", menu_id); router.reload(); parentslug ? router.visit(route(parentslug), { method: menu_method }):null;}}>
  <Icon className="text-white" icon={faicon} />
  <span className="text-gray-100">{title}</span>
  </button>

  { (parent_id == menu_id) && <ul className="sub-menu ml-4">

  { listItems }

  </ul>
}
</li>

);
}

