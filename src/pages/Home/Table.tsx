import React, { useCallback, useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { format as formatTime } from "@/utils/time";
import style from "./Table.module.less";

export default ({ files }) => {
  if (!files.length) return null;

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
            <a >Delete</a>
          </div>
        </React.Fragment>
      ))}
    </div>
  )
}