import React, { useState }  from "react";
import { Icon } from '@iconify/react';
import { Link } from '@inertiajs/inertia-react';

export default function ListItem({child}) {
  const [show, setShow] = React.useState(false);

  return (
    <li className="rounded-sm">
    <button className="flex items-center p-2 space-x-3 rounded-md" onClick={() => setShow(prev => !prev)}>
      <Icon className="text-white" icon="fa6-solid:users" />
      <span className="text-gray-100">Users</span>
    </button>
      
    { show && <ul className="sub-menu ml-4">
        <li onClick={() => setShow(true)}>
          <Link
        href={route('users')}
        method='get'
        as='a'
        className="flex items-center p-2 space-x-3 rounded-md"
        >
            <Icon className="text-white" icon="fa6-solid:user" />
            <span className="text-gray-100">Users</span>
        </Link>
      </li>
      <li onClick={() => setShow(true)}>
          <Link
        href={route('users.create')}
        method='get'
        as='a'
        className="flex items-center p-2 space-x-3 rounded-md"
        >
            <Icon className="text-white" icon="fa6-solid:user-plus" />
            <span className="text-gray-100">Create User</span>
        </Link>
      </li>
      </ul>
    }
  </li>

  );
}
