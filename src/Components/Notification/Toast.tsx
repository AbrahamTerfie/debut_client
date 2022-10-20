import React from 'react'
import toast from 'react-hot-toast';

const toastStyle = {
    width: 'max-content',
    padding: '16px',
    color: 'white',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
}
export const notifySuccess = (message: string) => toast.success(message, {
    position: 'top-right',
    duration: 9000,
    style: toastStyle && { background: 'lightGreen' }

});

export const notifyError = (message: any) => toast.error(message, {
    position: 'top-right',
    duration: 9000,
    style: toastStyle && { background: 'red' },
});

export const notifyWarning = (message: string) => toast.loading(message, {
    position: 'top-right',
    duration: 9000,
    style: toastStyle && { background: 'orange' },
});