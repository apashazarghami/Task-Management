import toast from 'react-hot-toast';

export const notify = (text, status) => status === 'success' ? toast.success(text) : toast.error(text);

const authenticationForm = ({ title, description, titleRef, descriptionRef }) => {
    if (!title && !description) {
        notify('Please enter a title and description');
        // descriptionRef.current.focus();
        // titleRef.current.focus();
    } else if (!title) {
        notify('Please enter a title');
        titleRef.current.focus();
    } else if (!description) {
        notify('Please enter a description');
        descriptionRef.current.focus();
    }
};

export { authenticationForm };
