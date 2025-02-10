import { useFormik } from "formik";
import * as Yup from 'yup';
import { FileParse } from "../utils/FileParse";
function RegisterPage() {

    const VALID_TYPE = ['image/png', 'image/jpeg', 'image/jpg'];
    let KB= 1024;
    let MB = 1024 * KB;

    //formik

    const formik = useFormik({
        initialValues:{
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            gender: '',
            birthDate: '',
            image: ''
        }, 
        validationSchema: Yup.object({
            firstName: Yup.string().min(2).max(30).required("You must input first name"),
            lastName: Yup.string().min(2).max(30).required("You must input last name"),
            email: Yup.string().email().matches(/^(?!.*@[^,]*,)/).required("You must input email").required(),
            password: Yup.string().required('Please Enter your password').matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,"Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character" ),
            gender: Yup.string().required("You must input gender"),
            birthDate: Yup.date().required("You must input birth date"),
            image: Yup.mixed().test('fileSize', 'File too large', (value) => value.size <= MB*2).required("You must insert image").test('fileType', 'Unsupported File Format', (value) => VALID_TYPE.includes(value.type))
            //micxed znaci deka kje testirame povekje raboti 
        }),
        //validacija
        //onSubmit
        onSubmit: (values) => {
            console.log(values);
            //FileParse(values.image).then((res)=>console.log({...values, image: res})).catch(err => console.log(err)).catch(err => console.log(err));
            FileParse(values.image).then((res)=> 
            localStorage.setItem('image', res)).catch(err => console.log(err)).catch(err => console.log(err));

            formik.resetForm();
        }
    });

    const showError = (name) => formik.errors[name] && formik.touched[name] && formik.errors[name];


    return ( 
        <div>
            <h2>Regicter Form</h2>

            <form onSubmit={formik.handleSubmit} className="flex flex-col w-[500px] border border-blue-400 p-[15px] rounded-lg mx-auto mt-[100px]" >
                <label className="text-[15px] text-gray-600 mt-[10px]" htmlFor="firstName">First Name<span className="text-red-500 text-[13px]"> {showError("firstName")}</span></label>
                <input className="border border-blue-400 rounded-lg px-[10px] py-[5px]" type="text" id="firstName " placeholder='Enter your first name' 
                name="firstName" 
                value={formik.values.firstName}
                onChange={formik.handleChange}/>

                <label className="text-[15px] text-gray-600  mt-[10px]" htmlFor="lastName">Last Name <span className="text-red-500 text-[13px]"> {showError("lastName")}</span></label>
                <input className="border border-blue-400 rounded-lg px-[10px] py-[5px]" type="text" id="lastName" placeholder='Enter your last name'
                name="lastName"
                value={formik.values.lastName}
                onChange={formik.handleChange}/>

                <label className="text-[15px] text-gray-600  mt-[10px]" htmlFor="email">Email <span className="text-red-500 text-[13px]"> {showError("email")}</span></label>
                <input className="border border-blue-400 rounded-lg px-[10px] py-[5px]" type="email" id="email" placeholder='Enter your email' name="email"
                value={formik.values.email} onChange={formik.handleChange}/>

                <label className="text-[15px] text-gray-600  mt-[10px]" htmlFor="password">Password <span className="text-red-500 text-[13px]"> {showError("password")}</span></label>
                <input className="border border-blue-400 rounded-lg px-[10px] py-[5px]" type="password" id="password" placeholder='Enter your password' 
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}/>

                <label className="text-[15px] text-gray-600  mt-[10px]" htmlFor="gender">Gender <span className="text-red-500 text-[13px]"> {showError("gender")}</span></label>
                <select id="gender" name="gender" value={formik.values.gender} onChange={formik.handleChange}>
                    <option value="" defaultChecked disabled>Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>

                <label className="text-[15px] text-gray-600  mt-[10px]" htmlFor="birthDate">Birth Date <span className="text-red-500 text-[13px]"> {showError("birthdate")}</span></label>
                <input className="border border-blue-400 rounded-lg px-[10px] py-[5px]" type="date" id="birthDate" name="birthDate" value={formik.values.birthDate} onChange={formik.handleChange}/>


                <label className="text-[15px] text-gray-600  mt-[10px]" htmlFor="image">Image <span className="text-red-500 text-[13px]"> {showError("image")}</span></label>
                <input className="border border-blue-400 rounded-lg px-[10px] py-[5px]" type="file" id="image" name="image" onChange={(e) => formik.setFieldValue(e.target.name, e.target.files[0])} />

                <button className="px-[10px] py-[5px] bg-blue-400 text-white rounded-lg  mt-[20px]" type="submit">Register</button>
            
            </form>            
        </div> 
    );  
}   
export default RegisterPage;