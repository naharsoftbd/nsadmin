import React, { useState, useEffect }  from "react";
import Dropdown from '@/Components/Dropdown';
import NavLink from '@/Components/NavLink';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import { Link } from '@inertiajs/react';
import { Icon } from '@iconify/react';
import ListItem from './Menu/ListItem';
import { router } from '@inertiajs/react';
import NProgress from 'nprogress';

export default function Sidebar({auth, menus}) {
  let [loading, setLoading] = useState(true); 
   useEffect(() => {
    setTimeout(() => setLoading(false), 1000);   
  }, []);
      router.on('start', () => {
        NProgress.start();
        setLoading(true);
      });
    router.on('finish', (event) => {
      event.detail.visit.completed ? setTimeout(() => setLoading(false), 1000):null;
    })     
  const mainMenuM = menus.map((menu,index) => {
            let menuRole = menu?.roles.filter(
                    item => item.id && item.id == auth?.role?.id,
            ); 
            return ( (auth?.is_admin==true || menuRole[0]?.id == auth?.role?.id) ? <ListItem key={index} title={menu.name} parentslug={menu.slug} menu_method={menu.menu_method} childs={menu.childmenus} faicon={menu.menu_icon} menu_id={menu.id}/>:null);
    });      
    return (
        <div className="hidden sm:flex bg-cyan-600">
            <div className="flex flex-col p-4 w-60 h-screen">
                <div className="space-y-3">
                    <div className="flex items-center">
                        <h2 className="text-xl font-bold text-white">Dashboard</h2>
                    </div>
                    { loading && <div className="flex justify-center items-center h-screen fixed top-[-12px] left-0 right-0 bottom-0 w-full z-50 overflow-hidden bg-gray-700 opacity-75">
                  
                      <div role="status">
                            <svg aria-hidden="true" className="mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-red-900" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"></path>
                                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"></path>
                            </svg>
                            <span className="sr-only">Loading...</span>
                        </div>

                        </div>
                      }
                    {/*<div className="relative">
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
                    </div>*/}
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