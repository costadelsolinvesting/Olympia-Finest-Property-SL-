
import React, { useState } from 'react';
import Modal from './Modal';
import { useTranslations } from '../hooks/useTranslations';

interface ImageWithProtectionProps {
  src: string;
  alt: string;
  className?: string;
}

const ImageWithProtection: React.FC<ImageWithProtectionProps> = ({ src, alt, className }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { t } = useTranslations();

  const handleInteraction = (e: React.MouseEvent<HTMLImageElement> | React.DragEvent<HTMLImageElement>) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  return (
    <>
      <img
        src={src}
        alt={alt}
        className={className}
        onContextMenu={handleInteraction}
        onDragStart={handleInteraction}
      />
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title={t('imageCopyrightTitle')}>
        <p>{t('imageCopyrightMessage')}</p>
      </Modal>
    </>
  );
};

export default ImageWithProtection;
