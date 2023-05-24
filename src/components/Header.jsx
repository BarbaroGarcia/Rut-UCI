import { useState } from 'react';
import Logo from '../IMG/favicon.ico';
import SideBar from './Sidebar';

const Header = () => {
const [isSidebarOpen, setIsSidebarOpen] = useState(false);

const handleSidebarToggle = () => {
setIsSidebarOpen(!isSidebarOpen);
};

return (
<div className="flex items-center justify-between bg-white border-b border-gray-200 p-4">
<button className="bg-transparent border-none focus:outline-none text-blue-500" onClick={handleSidebarToggle} >
<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" >
<path
strokeLinecap="round"
strokeLinejoin="round"
strokeWidth={2}
d={isSidebarOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
/>
</svg>
</button>
<img src={Logo} alt="Logo" className="w-8 h-8 mx-auto" />
<div className="text-gray-800 font-bold text...gray-800 font-bold text-xl">Rut-UCI</div>
<SideBar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
</div>
);
};

export default Header;