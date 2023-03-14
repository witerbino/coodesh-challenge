import { ChangeEvent, useEffect, useState } from "react";

export function useSales() {
  const URL_API = 'http://localhost:4000/sales';

  const [sales, setSales] = useState<any[]>([])
  const [file, setFile] = useState<File | null>(null);

  useEffect(() => {
    findAllSales()
  }, [])

  async function findAllSales() {
    const response = await fetch(URL_API)
    const data     = await response.json();

    setSales(data);
  }

  async function handleFileChange(e: ChangeEvent<HTMLInputElement>){
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  async function handleSendFile() {
    const data = new FormData();
    data.append('file', file!)

    const response = await fetch(URL_API, {
      method: 'POST',
      body: data,
    });

    if (response.status === 201) {
      setFile(null);
      window.location.reload();
    }
  }

  return {
    file,
    sales,
    handleFileChange,
    handleSendFile
  }
}