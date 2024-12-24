import { useEffect, useState } from 'react';

interface UseApiProps {
    url: string;
    limit?: number
}

const useApi = ({url, limit = 10}:UseApiProps) => {
    const [data, setData] = useState<{name: string, url: string}[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>('');

    const callApi = async() => {
        setLoading(true);
        setError("")
        try{
            const resp = await fetch(`${url}?` + new URLSearchParams({ limit: limit.toString() }));
            const formattedResp = await resp.json();
            setData(formattedResp);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        }catch(error: any){
            console.log(error);
            setError(error?.message);
        }finally{
            setLoading(false)
        }
    }

    useEffect(() => {
        callApi()
    },[limit])

  return {
    data,
    loading,
    error
  }
}

export default useApi