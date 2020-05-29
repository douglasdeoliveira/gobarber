import React, { useEffect } from 'react';
import {
  FiXCircle,
  FiCheckCircle,
  FiInfo,
  FiAlertCircle,
} from 'react-icons/fi';

import { ToastMessage, useToast } from '../../../hooks/toast';
import { Container } from './styles';

interface ToastProps {
  style: object;
  data: ToastMessage;
}

const icons = {
  info: <FiInfo size={24} />,
  error: <FiAlertCircle size={24} />,
  success: <FiCheckCircle size={24} />,
};

const Toast: React.FC<ToastProps> = ({
  style,
  data: { id, type, title, description },
}) => {
  const { removeToast } = useToast();

  useEffect(() => {
    const timer = setTimeout(() => {
      removeToast(id);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [removeToast, id]);

  return (
    <Container type={type} hasDescription={Number(!!description)} style={style}>
      {icons[type || 'info']}

      <div>
        <strong>{title}</strong>
        {description && <p>{description}</p>}
      </div>

      <button type="button" onClick={() => removeToast(id)}>
        <FiXCircle size={18} />
      </button>
    </Container>
  );
};

export default Toast;
