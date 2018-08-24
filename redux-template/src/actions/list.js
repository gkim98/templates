// actions for storing a list

export const add = (item) => ({
    type: 'ADD',
    item
});

export const remove = (item) => ({
    type: 'REMOVE',
    item
})