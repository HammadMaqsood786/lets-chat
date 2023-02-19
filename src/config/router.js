import {
    createBrowserRouter,
    RouterProvider,
    createRoutesFromElements,
    Route,
    Navigate
} from 'react-router-dom';

import SignupScreen from '../Screen/Signup';
import Login from '../Screen/Login';
import ChatScreen from '../Screen/Chat';
import ChatroomMain from '../Screen/Chatroom';

export default function Router() {

    const router = createBrowserRouter(
        createRoutesFromElements(
            <>
                <Route path="/" element={<SignupScreen />} />
                <Route path="/login" element={<Login />} />
                <Route path="/chatScreen" element={<ChatScreen />} />
                <Route path="/chatroom" element={<ChatroomMain />} />
                {/* <Route path="/company" element={<Company />} />
                <Route path="/AddToken" element={<AddToken />} />
                <Route path="/CompanyDetails" element={<CompanyDetails />} /> */}
            </>
        )
    )

    return <RouterProvider router={router} />

}