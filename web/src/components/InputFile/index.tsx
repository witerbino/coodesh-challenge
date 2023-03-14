import { useSales } from '../../hooks/useSales'

import './style.css'

export function InputFile() {
  const { file, handleFileChange, handleSendFile } = useSales()

  return (
    <div className="flex flex-col items-center gap-4 justify-center w-full">
      <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
        <div className="flex flex-col items-center justify-center p-5">
            <svg aria-hidden="true" className="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
            <p className="mb-2 text-sm text-gray-500">
              <span className="font-semibold">
                {file === null ? 'Clique para seleciona um arquivo' : file?.name}
              </span>
            </p>
        </div>
        <input id="dropzone-file" type="file" className="hidden" onChange={handleFileChange} accept=".txt"/>
      </label>
      <button 
        disabled={file === null} 
        className="bg-blue-600 rounded text-white font-semibold w-full p-2 transition-all disabled:bg-blue-300" onClick={handleSendFile}>Enviar</button>
    </div> 
  )
}