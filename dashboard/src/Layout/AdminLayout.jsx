import MenuItem from '@/Components/AllComponent/MenuItem';
import { Menu, X } from 'lucide-react';
import React, { useState } from 'react';

import { Outlet } from 'react-router-dom';

const AdminLayout = () => {

    const [collapsed, setCollapsed] = useState(false);

    return (

        <>


            <div className='flex h-screen'> {/* Added h-screen to root */}

                <div className={`h-full overflow-y-auto flex flex-col bg-gray-800 text-white  transition-all ${collapsed ? 'w-[5%]' : 'w-[15%]'}`} > {/* Added flex-col */}

                    <button onClick={() => setCollapsed(!collapsed)} className="mb-6">
                        {collapsed ? <Menu /> : <X />}
                        {/* <Menu/> ----> Menu icon */}
                    </button>

                        {!collapsed && (
                            <MenuItem />
                        )}
                   
                </div>




                <div className={`${collapsed ? 'w-[95%]' : 'w-[85%]'} h-full  overflow-y-auto`}>
                    {/* bg-amber-400 */}
                    <Outlet />
                </div>

            </div>

        </>
    );
};

export default AdminLayout;