// Problem4-FileUpload.jsx
import React, { useState, useRef } from 'react';
import axios from 'axios';

const FileUpload = () => {
  const [files, setFiles] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState({});
  const [previews, setPreviews] = useState({});
  const cancelTokenSource = useRef(null);

  const handleFileSelect = (e) => {
    const selectedFiles = Array.from(e.target.files);
    
    selectedFiles.forEach(file => {
      // Create preview for images
      if (file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setPreviews(prev => ({
            ...prev,
            [file.name]: reader.result
          }));
        };
        reader.readAsDataURL(file);
      }
    });
    
    setFiles(prev => [...prev, ...selectedFiles]);
  };

  const uploadFile = async (file) => {
    const formData = new FormData();
    formData.append('file', file);
    
    cancelTokenSource.current = axios.CancelToken.source();
    
    try {
      const response = await axios.post('https://api.example.com/upload', formData, {
        cancelToken: cancelTokenSource.current.token,
        onUploadProgress: (progressEvent) => {
          const percentCompleted = Math.round(
            (progressEvent.loaded * 100) / progressEvent.total
          );
          setUploadProgress(prev => ({
            ...prev,
            [file.name]: percentCompleted
          }));
        }
      });
      
      console.log('Upload successful:', response.data);
      return response.data;
    } catch (error) {
      if (axios.isCancel(error)) {
        console.log('Upload canceled:', file.name);
      } else {
        console.error('Upload failed:', error);
      }
      throw error;
    }
  };

  const handleUpload = async () => {
    setUploading(true);
    
    try {
      const uploadPromises = files.map(file => uploadFile(file));
      await Promise.all(uploadPromises);
      alert('تمام فایل‌ها با موفقیت آپلود شدند');
      setFiles([]);
      setPreviews({});
    } catch (error) {
      console.error('Upload failed:', error);
    } finally {
      setUploading(false);
      setUploadProgress({});
    }
  };

  const handleCancel = () => {
    if (cancelTokenSource.current) {
      cancelTokenSource.current.cancel('Upload canceled by user');
      setUploading(false);
    }
  };

  const removeFile = (fileName) => {
    setFiles(prev => prev.filter(f => f.name !== fileName));
    setPreviews(prev => {
      const newPreviews = { ...prev };
      delete newPreviews[fileName];
      return newPreviews;
    });
  };

  return (
    <div className="file-upload-container">
      <h2>آپلود فایل</h2>
      
      <div className="upload-area">
        <input
          type="file"
          multiple
          onChange={handleFileSelect}
          accept="image/*,.pdf,.doc,.docx"
          disabled={uploading}
        />
        <p>فایل‌ها را اینجا رها کنید یا کلیک کنید</p>
      </div>
      
      {files.length > 0 && (
        <div className="file-list">
          <h3>فایل‌های انتخاب شده</h3>
          {files.map(file => (
            <div key={file.name} className="file-item">
              <div className="file-info">
                {previews[file.name] && (
                  <img src={previews[file.name]} alt={file.name} className="file-preview" />
                )}
                <div className="file-details">
                  <span className="file-name">{file.name}</span>
                  <span className="file-size">
                    {(file.size / 1024).toFixed(2)} KB
                  </span>
                </div>
              </div>
              
              {uploadProgress[file.name] !== undefined && (
                <div className="progress-bar">
                  <div 
                    className="progress-fill"
                    style={{ width: `${uploadProgress[file.name]}%` }}
                  >
                    {uploadProgress[file.name]}%
                  </div>
                </div>
              )}
              
              {!uploading && (
                <button 
                  onClick={() => removeFile(file.name)}
                  className="remove-file"
                >
                  ×
                </button>
              )}
            </div>
          ))}
        </div>
      )}
      
      {files.length > 0 && (
        <div className="upload-actions">
          {!uploading ? (
            <button onClick={handleUpload} className="upload-btn">
              شروع آپلود
            </button>
          ) : (
            <button onClick={handleCancel} className="cancel-btn">
              لغو آپلود
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default FileUpload;