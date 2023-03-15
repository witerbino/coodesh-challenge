import { InputFile } from './components/InputFile'
import { Table } from './components/Table'

// import Logo from '../src/assets/coodesh.svg';

export function App() {
  return (
    <main className='flex flex-col gap-5 items-center'>
      {/* <img src={Logo} width={200} className="hover:scale-[1.1] transition-all"/> */}
      <div className='content'>
        <InputFile />
      </div>
      <div className='content overflow-hidden h-[500px] overflow-y-auto'>
        <Table />
      </div>
    </main>
  )
}
