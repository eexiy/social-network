import profileReducer, { addPostActionCreator, deletePost } from "./profileReducer";

const state = {
    postsData: [
        { id: 1, post: 'Hi! how are you?', likes: 15 },
        { id: 2, post: 'It\'s my first post', likes: 8 }
    ]
}

it('length of post should be incremented', () => {
    // 1. Start data
    let action = addPostActionCreator('peace your home')
    
    // 2. Action
    let newState = profileReducer(state, action)

    // 3. Expectation
    expect(newState.postsData.length).toBe(3)
    expect(newState.postsData[2].post).toBe('peace your home') 
})

it('new post should be added', () => {
    // 1. Start data
    let action = addPostActionCreator('peace your home')
    
    // 2. Action
    let newState = profileReducer(state, action)

    // 3. Expectation
    expect(newState.postsData[2].post).toBe('peace your home') 
})

it('after delete post length should be decrement', () => {
    // 1. Start data
    let action = deletePost(1)
    
    // 2. Action
    let newState = profileReducer(state, action)

    // 3. Expectation
    expect(newState.postsData.length).toBe(1) 
})

it(`after deleting post length shouldn't be decrement if id is incorrect`, () => {
    // 1. Start data
    let action = deletePost(100)
    
    // 2. Action
    let newState = profileReducer(state, action)

    // 3. Expectation
    expect(newState.postsData.length).toBe(2) 
})