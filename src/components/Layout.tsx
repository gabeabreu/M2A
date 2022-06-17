import { useState } from 'react';

interface Props {
  children: React.ReactNode;
}

const tabs = [
  { name: 'Empresas', href: '#', current: true },
  { name: 'Questionário', href: '#', current: false },
  { name: 'Diagnóstico', href: '#', current: false },
  { name: 'Dados', href: '#', current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const Layout = ({ children }: Props) => {
  const [activeTab, setActiveTab] = useState<number>(0);

  function handleTab(tabIdx) {
    setActiveTab(tabIdx);
  }

  return (
    <div className='p-5'>
      <div className='md:hidden bg-white p-5 mb-5'>
        <label htmlFor='tabs' className='sr-only'>
          Select a tab
        </label>
        {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
        <select
          id='tabs'
          name='tabs'
          className='py-10 px-5 block w-full border border-gray-300 rounded-sm'
          defaultValue={tabs.find((tab) => tab.current).name}
        >
          {tabs.map((tab) => (
            <option key={tab.name}>{tab.name}</option>
          ))}
        </select>
      </div>
      <div className='hidden md:block'>
        <nav
          className='relative z-0 rounded-sm shadow flex divide-x divide-gray-200'
          aria-label='Tabs'
        >
          {tabs.map((tab, tabIdx) => (
            <a
              onClick={() => handleTab(tabIdx)}
              key={tab.name}
              href={tab.href}
              className={classNames(
                tabIdx === activeTab
                  ? 'text-white'
                  : 'text-gray-400 hover:text-gray-700',
                tabIdx === 0 ? 'rounded-l-lg' : '',
                tabIdx === tabs.length - 1 ? 'rounded-r-lg' : '',
                'group relative min-w-0 flex-1 overflow-hidden bg-[#004975] py-4 px-4 text-sm font-medium text-center hover:bg-[#004979] focus:z-10'
              )}
              aria-current={tab.current ? 'page' : undefined}
            >
              <span>{tab.name}</span>
              <span
                aria-hidden='true'
                className={classNames(
                  tab.current ? 'bg-indigo-500' : 'bg-transparent',
                  'absolute inset-x-0 bottom-0 h-0.5'
                )}
              />
            </a>
          ))}
        </nav>
      </div>
      {children}
    </div>
  );
};
export default Layout;
//span tag goes inside a div component
