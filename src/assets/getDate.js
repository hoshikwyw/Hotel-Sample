// Helper function to format the date to dd/mm/yyyy
export const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    const day = String(date.getDate()).padStart(2, '0'); // Get day and pad with 0 if needed
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Get month and pad with 0 if needed
    const year = date.getFullYear(); // Get year
    return `${day}/${month}/${year}`; // Return in dd/mm/yyyy format
};

// Helper function to get the day of the week
export const getDayOfWeek = (timestamp) => {
    const date = new Date(timestamp);
    const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return dayNames[date.getDay()]; // Get day of the week
};

// Helper function to format date in yyyy-mm-dd format (for input[type="date"])
export const formatForInput = (timestamp) => {
    const date = new Date(timestamp);
    const day = String(date.getDate()).padStart(2, '0'); // Get day and pad with 0 if needed
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Get month and pad with 0 if needed
    const year = date.getFullYear(); // Get year
    return `${year}-${month}-${day}`; // Return in yyyy-mm-dd format
};
