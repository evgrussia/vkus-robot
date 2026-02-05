import React, { useState } from 'react';
import { X, ZoomIn, ZoomOut, Download, Share2 } from 'lucide-react';

interface ImagePreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageUrl: string;
  title?: string;
}

export function ImagePreviewModal({ isOpen, onClose, imageUrl, title }: ImagePreviewModalProps) {
  const [zoom, setZoom] = useState(1);

  if (!isOpen) return null;

  const handleZoomIn = () => {
    setZoom((prev) => Math.min(prev + 0.25, 3));
  };

  const handleZoomOut = () => {
    setZoom((prev) => Math.max(prev - 0.25, 0.5));
  };

  const handleDownload = () => {
    // In real app, would trigger download
    console.log('Downloading image...');
  };

  const handleShare = () => {
    // In real app, would trigger share
    console.log('Sharing image...');
  };

  return (
    <div className="fixed inset-0 z-50 bg-black">
      {/* Header */}
      <div className="absolute top-0 left-0 right-0 z-10 bg-gradient-to-b from-black/70 to-transparent p-4">
        <div className="flex items-center justify-between">
          <h3 className="text-white font-semibold text-lg truncate flex-1">
            {title || 'Фото рецепта'}
          </h3>
          <button
            onClick={onClose}
            className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors ml-3"
          >
            <X size={24} className="text-white" />
          </button>
        </div>
      </div>

      {/* Image Container */}
      <div className="absolute inset-0 flex items-center justify-center p-4 overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="max-w-full max-h-full object-contain transition-transform duration-300 select-none"
          style={{ transform: `scale(${zoom})` }}
        />
      </div>

      {/* Bottom Controls */}
      <div className="absolute bottom-0 left-0 right-0 z-10 bg-gradient-to-t from-black/70 to-transparent p-4">
        <div className="flex items-center justify-center gap-4">
          {/* Zoom Controls */}
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-xl p-2">
            <button
              onClick={handleZoomOut}
              disabled={zoom <= 0.5}
              className="p-2 hover:bg-white/20 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ZoomOut size={20} className="text-white" />
            </button>
            <span className="text-white font-semibold min-w-[60px] text-center">
              {Math.round(zoom * 100)}%
            </span>
            <button
              onClick={handleZoomIn}
              disabled={zoom >= 3}
              className="p-2 hover:bg-white/20 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ZoomIn size={20} className="text-white" />
            </button>
          </div>

          {/* Action Buttons */}
          <button
            onClick={handleDownload}
            className="p-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-xl transition-colors"
            title="Скачать"
          >
            <Download size={20} className="text-white" />
          </button>

          <button
            onClick={handleShare}
            className="p-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-xl transition-colors"
            title="Поделиться"
          >
            <Share2 size={20} className="text-white" />
          </button>
        </div>
      </div>

      {/* Tap to close hint */}
      <div className="absolute top-20 left-0 right-0 text-center">
        <div className="inline-block bg-white/10 backdrop-blur-sm text-white text-sm px-4 py-2 rounded-full">
          Нажми на изображение для закрытия
        </div>
      </div>
    </div>
  );
}
