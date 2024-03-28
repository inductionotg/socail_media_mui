import { createContext,useState,useContext ,useEffect,memo,useMemo} from "react";
import axios from "axios";


const PostContext = createContext()
const usePost=()=>useContext(PostContext)

function PostProvider({children}){
    const [post,setPost]= useState([])
    
    return(
        <PostContext.Provider value={{post,setPost}}>
            {children}
        </PostContext.Provider>
    )
}
/*const usePost = () => {
    const context = useContext(PostContext);
    if (!context) {
        throw new Error('usePost must be used within a PostProvider');
    }

    // Memoize the value using useMemo
    return useMemo(() => context, [context]);
};
const PostProvider = memo(({ children }) => {
    const [post, setPost] = useState([]);
    
    return (
        <PostContext.Provider value={{ post, setPost }}>
            {children}
        </PostContext.Provider>
    );
});
*/


export {PostProvider,usePost}