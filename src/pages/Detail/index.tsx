import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default () => {
  const { fileId } = useParams();
  const [file, setFile] = useState();
  const [logs, setLogs] = useState([]);
  const [configs, setConfigs] = useState([]);

  useEffect(() => {
    if (!fileId) return;
    //request logs and set logs
  }, [fileId]);

  useEffect(() => {
    if (!fileId) return;
    //request configs and set configs
  }, [fileId])

  useEffect(() => {
    if (!fileId) return;
    //request file and set file
  }, [fileId])

  return (
    <div>Detail</div>
  )
}