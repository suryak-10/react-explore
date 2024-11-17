Hey everyone in this branch am gona explore how zustand can integrate with react context api.
Here is the YT video link where I learn this techniqu [https://www.youtube.com/watch?v=1Fi4hK7L1ec](https://www.youtube.com/watch?v=1Fi4hK7L1ec)

### Older approach

Pros
- zustand state is the global state management. You can access it where every you want it's state value

Cons
- We can't set the initial value of the zustand state to be as we wanted in the first render itself. We have to update the it's initial state by using `useEffect`. This works fine but this is not a good approach to do so. And this causes unwanted **re-render** to just set a default value for the global state. In this approach we are not setting the inital state value, we are just syncing the initial value what we want.