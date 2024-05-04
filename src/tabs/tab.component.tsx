export type TabComponentProps = {
  isActive: boolean;
  children: React.ReactNode;
  onClick?: () => void;
}
export function TabComponent(props:TabComponentProps) {
  const {children, onClick, isActive} = props;

  return (<li
    onClick={onClick}
    className={`TabTitle rounded-t-lg text-white p-2 text-sm cursor-pointer ${isActive ? 'active bg-cyan-400 cursor-default' : 'bg-slate-700'}`}>
    {children}
  </li>)
}
