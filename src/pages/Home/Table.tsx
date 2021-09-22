import React, { useCallback, useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { format as formatTime } from "@/utils/time";
import { request } from "@/utils/network";
import style from "./Table.module.less";

export default ({ files, onRefresh }) => {
  if (!files.length) return null;

  const handleDelete = useCallback((fileId) => {
    if (!window.confirm('Delete?')) return;
    request(`/api/logfile/${fileId}`, {
      method: 'DELETE'
    }).then(([error, result]) => {
      if (error) {
        alert(error.message);
      } else {
        onRefresh();
      }
    })
  }, [])

  return (
    <div className={style.container}>
      <div className={style.header}>File Name</div>
      <div className={style.header}>Created Time</div>
      <div className={style.header}>Action</div>
      {files.map((item) => (
        <React.Fragment key={item.id}>
          <div key={`filename-${item.id}`}>{item.filename}</div>
          <div key={`time-${item.id}`}>{formatTime(item.createdAt)}</div>
          <div key={`op-${item.id}`} className={style.action}>
            <Link to={`/log/${item.id}`} >View</Link>
            <a href="javascript:void(0)" onClick={() => handleDelete(item.id)}>Delete</a>
          </div>
        </React.Fragment>
      ))}
    </div>
  )
}