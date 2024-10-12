import { ShowErrorObject } from "@/app/Types";
import { useRouter } from "next/navigation"
import { useState } from "react"
import TextInput from "../TextInput";
import { BiLoaderCircle } from "react-icons/bi";
import { useUser } from "@/app/context/user";
import { useGeneralStore } from "@/app/stores/general";

export default function Register(){
    let { setIsLoginOpen } = useGeneralStore();

    const contextUser = useUser()
    const router = useRouter()

    const [loading, setLoading] = useState<boolean>(false);
    const [name, setName] = useState<string | ''>('');
    const [email, setEmail] = useState<string | ''>('');
    const [password, setPassword] = useState<string | ''>('');
    const [confirmPassword, setConfirmPassword] = useState<string | ''>('');
    const [error, setError] = useState<ShowErrorObject | null>(null)

    const showErorr = (type: string) => {
        if(error && Object.entries(error).length > 0 && error?.type == type){
            return error.message
    }
    return ''
}

    const validate = () => {
        setError(null)
        let isError = false

        const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ 

        if(!name) {
            setError({ type: 'name', message: 'A Name is required'})
            isError = true
        }else if (!email){
            setError({ type: 'email', message: 'An Email is required'})
            isError= true
        }else if(!reg.test(email)){
            setError({type: 'email', message: 'The email is not valid'})
            isError = true
        }else if(!password){
            setError({ type: 'password', message: 'A password is required'})
            isError = true
        }else if(password.length < 8){
            setError({type: 'password', message:'The password must be greater than 7 Character'})
        }else if(password != confirmPassword){
            setError({type: 'password', message: 'The Passwords do not match'})
        }
        return isError
    }

    const register = async () => {
        let isError = validate()
        if(isError) return 
        if(!contextUser) return 

        try{
            setLoading(true)
            await contextUser.register(name,email,password)
            setLoading(false)
            setIsLoginOpen(false)
            router.refresh()
        }catch (error){
            console.log(error)
            setLoading(false)
            alert(error)
        }
    }

    return (
        <>
            <div>
               
            <h1 className="text-center text-[28px] mb-4 font-bold">Register</h1>

            <div className="px-6 pb-2">
                <TextInput
                    string = {name}
                    placeholder ="Name"
                    onUpdate={setName}
                    inputType="text"
                    error = {showErorr('name')}
                />
            </div>

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

            <div className="px-6 pb-2">
                <TextInput
                    string = {confirmPassword}
                    placeholder ="Confirm Password"
                    onUpdate={setConfirmPassword}
                    inputType="password"
                    error = {showErorr('confirmPassword')}
                />
            </div>

            <div className="px-6 pb-2 mt-6">
                <button
                    disabled={loading}
                    onClick={ () => register()}
                    className={` flex items-center justify-center w-full text-[17px] font-semibold text-white py-3 rounded-sm ${(!name || !email || !password || !confirmPassword) ? 'bg-gray-200' : 'bg-[#F02C56]'}`}
                >
                    { loading ? <BiLoaderCircle className="animate-spin" color="#ffffff" size={25}/> : 'Log in'}
                </button>
            </div>
        </div>
        </>
    )
    
}