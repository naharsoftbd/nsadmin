import React, { useState }  from "react";
import Dropdown from '@/Components/Dropdown';
import NavLink from '@/Components/NavLink';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import { Link } from '@inertiajs/inertia-react';
import { Icon } from '@iconify/react';
import ListItem from './Menu/ListItem';

export default function Sidebar({auth, menus}) {

  const mainMenuM = menus.map((menu,index) => {
    
            return ( (menu?.roles[0]?.id == auth?.role?.id || menu?.roles[1]?.id == auth?.role?.id || menu?.roles[2]?.id == auth?.role?.id) ? <ListItem key={index} title={menu.name} parentslug={menu.slug} menu_method={menu.menu_method} childs={menu.childmenus} faicon={menu.menu_icon} menu_id={menu.id}/>:null);
    });      
    return (
        <div className="flex bg-black">
            <div className="flex flex-col h-screen p-3 w-60">
                <div className="space-y-3">
                    <div className="flex items-center">
                        <h2 className="text-xl font-bold text-white">Dashboard</h2>
                    </div>
                    <div className="relative">
                        <span className="absolute inset-y-0 left-0 flex items-center py-4">
                            <button
                                type="submit"
                                className="p-2 focus:outline-none focus:ring"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                    />
                                </svg>
                            </button>
                        </span>
                        <input
                            type="search"
                            name="Search"
                            placeholder="Search..."
                            className="w-full py-2 pl-10 text-sm rounded-md focus:outline-none"
                        />
                    </div>
                    <div className="flex-1">
                        <ul className="pt-2 pb-4 space-y-1 text-sm">
                            
                            {mainMenuM}
                        
                        </ul>
                    </div>
                </div>
            </div>
            
        </div>
    );
}