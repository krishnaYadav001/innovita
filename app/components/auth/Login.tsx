import { ShowErrorObject } from "@/app/Types";
import { useState } from "react";
import TextInput from "../profile/TextInput";
import { BiLoader, BiLoaderCircle } from "react-icons/bi";

export default function Login() {

    const [loading, setLoading] = useState<boolean>(false);
    const [email, setEmail] = useState<string | ''>('');
    const [password, setPassword] = useState<string | ''>('');
    const [error, setError] = useState<ShowErrorObject | null>(null);

    const showErorr = (type: string) => {
        if(error && Object.entries(error).length > 0 && error?.type == type){
            return error.message
    }
    return ''
}

return (
    <>
        <div>
            <h1 className="text-center text-[28px] mb-4 font-bold">Log in</h1>
            <div className="px-6 pb-2">
                <TextInput
                    string = {email}
                    placeholder ="Email address"
                    onUpdate={setEmail}
                    inputType="email"
                    error = {showErorr('email')}
                />
            </div>

            <div className="px-6 pb-2">
                <TextInput
                    string = {password}
                    placeholder ="Password"
                    onUpdate={setPassword}
                    inputType="password"
                    error = {showErorr('password')}
                />
            </div>

            <div className="px-6 pb-2 mt-6">
                <button
                    disabled={loading}
                    onClick={ () => Login()}
                    className={` flex items-center justify-center w-full text-[17px] font-semibold text-white py-3 rounded-sm ${(!email || !password) ? 'bg-gray-200' : 'bg-[#F02C56]'}`}
                >
                    { loading ? <BiLoaderCircle className="animate-spin" color="#ffffff" size={25}/> : 'Log in'}
                </button>
            </div>
        </div>
    </>
    )
}