// actions for storing list of objects

export const addObject = (item) => (
    {
        title = '',
        text = ''
    } = {}
) => ({
    type: 'ADD_OBJECT',
    item: {
        title,
        text
    }
});

// for objects, remove by id