import React from 'react'
import toast, { Toast } from 'react-hot-toast';

const toastStyle = {
    width: '200%',
    padding: '16px',

    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
}
export const notifySuccess = (message: string) => toast.success((message), {
    position: 'top-right',
    duration: 9000,
    style: toastStyle && { background: 'lightGreen', color: 'white', }

});

export const notifyError = (message: string) => toast.error(message, {
    position: 'top-right',
    duration: 9000,
    style: toastStyle && { background: 'red', color: 'white', },
});

export const notifyWarning = (message: string) => toast.loading(message, {
    position: 'top-right',
    duration: 9000,
    style: toastStyle && { background: 'orange', color: 'white', },
});

export const notifyLoading = (message: string) => toast.loading(message, {
    position: 'top-right',
    duration: 9000,
    style: toastStyle && { background: 'lightBlue', color: 'white', },
});