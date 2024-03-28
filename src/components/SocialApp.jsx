import PostCard from "./PostCard"
import Navbar from './Navbar/Navbar'
import MainContainer from "./MainContainer/MainContainer"
import InputField from './TextField/InputField'
import { PostProvider } from "./PostCardList/post-context"

function SocialApp()
{
    
    return (
        <div>
            <PostProvider>
                <div>
                    <Navbar/>
                </div>
                <div>
                    <InputField/>
                </div>
                <div>
                    <MainContainer/>
                </div>
            </PostProvider>
            
        </div>
        
    )
}
export default SocialApp