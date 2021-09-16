import React, { useCallback, useEffect, useState } from 'react';
import Header from './Header';
import Table from './Table';
import Upload from './Upload';

export default () => {
  const [files, setFiles] = useState([]);
  const fetchData = useCallback(() => {
    fetch('/api/logfiles').then(res => {
      if (res.ok) return res.json()
    }).then(data => {
      setFiles(data);
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
      <Table files={files} />
    </div>
  )
}