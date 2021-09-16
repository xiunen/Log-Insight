import React, { useCallback, useMemo, useState } from "react";
import cx from 'classnames'
import style from './Upload.module.less';

export default ({ type = "button", onFinish }: { type: "area" | "button"; onFinish: Function }) => {
  const [dragging, setDragging] = useState(false);
  const [key, setKey] = useState(Date.now());
  const [uploading, setUploading] = useState(false);
  const [filename, setFilename] = useState('');
  const [error, setError] = useState('');

  const uploadFile = useCallback((files) => {
    setKey(Date.now());
    if (!files.length) {
      return;
    }
    if (uploading) return;
    setUploading(true);
    setError('');
    const file = files[0];
    setFilename(file.name);
    const form = new FormData();
    form.append('file', file);
    fetch('/api/logfiles', {
      method: 'POST',
      body: form
    }).then(res => {
      if (res.ok) res.json();
      throw new Error('Server Error!')
    }).then((res) => {
      onFinish(res);
      setFilename('');
    }).catch((err) => {
      alert(err.message);
      setError(err.message);
    }).finally(() => {
      setUploading(false);
    })
  }, []);

  const handleDragOver = useCallback((event) => {
    event.preventDefault();
    setDragging(true);
  }, [])

  const handleDragLeave = useCallback(() => {
    setDragging(false);
  }, [])

  const handleDrop = useCallback((e) => {
    setDragging(false);
    e.preventDefault();
    uploadFile(e.dataTransfer.files);
  }, []);

  const clsName = useMemo(() => {
    if (type === 'area') return style.area;
    if (uploading) return style.area;
    if (error) return style.area;
    return style.button;
  }, [type, uploading])

  return (
    <div className={style.container}>
      <label
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        className={cx(style.label,
          clsName,
          dragging ? style.dragging : undefined,
          uploading ? style.loading : undefined
        )}
      >
        <input
          disabled={uploading}
          key={key}
          type="file"
          hidden
          onChange={(event) => uploadFile(event.target.files)}
        />
        {filename ? filename : 'Upload Log File'}
      </label>
    </div>
  )
}