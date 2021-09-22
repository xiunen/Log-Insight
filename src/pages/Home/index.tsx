import React, { useCallback, useEffect, useState } from 'react';
import Header from './Header';
import Table from './Table';
import Upload from './Upload';
import { request } from '@/utils/network'

export default () => {
  const [files, setFiles] = useState([]);
  const fetchData = useCallback(() => {
    request('/api/logfiles').then(([err, result]) => {
      if (err) {
        alert(err.message);
        return;
      }
      setFiles(result);
    })
  }, [])
  useEffect(() => {
    // fetchData()
    //mock 
    setFiles([{
      id: 1,
      filename: "xlsog.log",
      createdAt: Date.now(),
    }])
  }, []);

  return (
    <div>
      <Header />
      <Upload
        type={files.length ? 'button' : 'area'}
        onFinish={() => { fetchData() }}
      />
      <Table files={files} onRefresh={fetchData} />
    </div>
  )
}