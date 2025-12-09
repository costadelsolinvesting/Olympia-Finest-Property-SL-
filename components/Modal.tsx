
import React, { ReactNode } from 'react';
import { XMarkIcon } from '@heroicons/react/24/solid';
import { useTranslations } from '../hooks/useTranslations';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  const { t } = useTranslations();
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center p-4" onClick={onClose}>
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md" onClick={(e) => e.stopPropagation()}>
        <div className="p-4 border-b flex justify-between items-center">
          <h3 className="text-lg font-semibold">{title}</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
            <XMarkIcon className="h-6 w-6" />
          </button>
        </div>
        <div className="p-6">
          {children}
        </div>
        <div className="p-4 border-t text-right">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition"
          >
            {t('close')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
