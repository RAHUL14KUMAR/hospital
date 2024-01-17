import React from 'react'
import { BsCash, BsPencilSquare } from 'react-icons/bs'
import './Career.css'
import { MdExposurePlus1, MdFileUpload, MdOutlineFolderSpecial, MdOutlineMailOutline, MdPhoneAndroid } from 'react-icons/md'

function Careers() {
  return (
    <div className="my-auto bg-emerald-100 p-5 h-100">
        <div>
            <div className="text-lg font-bold tracking-widest text-emerald-900 md:text-2xl">PERSONAL INFORMATION</div>
            <div className="border-2 border-emerald-900"></div>
            <div className="mt-5 w-11/12 border-2 border-emerald-900"></div>

            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 car">
                <div className="border-r-none m-5 flex w-fit rounded-lg border-l-4 border-l-emerald-800 border-r-4 border-r-emerald-800 bg-emerald-50 p-5 text-justify">
                    <div className="flex h-16 w-14 items-center justify-center bg-emerald-300">
                    <BsPencilSquare className="text-4xl text-green-600" />
                    </div>
                    <form className="flex-col">
                    <label className="m-2 font-bold text-emerald-800" htmlFor="email">FirstName</label>
                    <div><input type="text" placeholder="enter your first name" className="mx-2 w-fit bg-emerald-100 p-2 font-mono text-black placeholder-emerald-500 focus:outline-none" id="email" /></div>
                    </form>
                </div>

                <div className="border-r-none m-5 flex w-fit rounded-lg border-l-4 border-l-emerald-800 border-r-4 border-r-emerald-800 bg-emerald-50 p-5 text-justify">
                    <div className="flex h-16 w-14 items-center justify-center bg-emerald-300">
                    <BsPencilSquare className="text-4xl text-green-600" />
                    </div>
                    <form className="flex-col">
                    <label className="m-2 font-bold text-emerald-800" htmlFor="email">LastName</label>
                    <div><input type="text" placeholder="enter your last name" className="mx-2 w-fit bg-emerald-100 p-2 font-mono text-black placeholder-emerald-500 focus:outline-none" id="email" /></div>
                    </form>
                </div>

                <div className="border-r-none m-5 flex w-fit rounded-lg border-l-4 border-l-emerald-800 border-r-4 border-r-emerald-800 bg-emerald-50 p-5 text-justify">
                    <div className="flex h-16 w-14 items-center justify-center bg-emerald-300">
                    <MdOutlineMailOutline className="text-4xl text-green-600" />
                    </div>
                    <form className="flex-col">
                    <label className="m-2 font-bold text-emerald-800" htmlFor="email">Email</label>
                    <div><input type="text" placeholder="enter your email" className="mx-2 w-fit bg-emerald-100 p-2 font-mono text-black placeholder-emerald-500 focus:outline-none" id="email" /></div>
                    </form>
                </div>

                <div className="border-r-none m-5 flex w-fit rounded-lg border-l-4 border-l-emerald-800 border-r-4 border-r-emerald-800 bg-emerald-50 p-5 text-justify">
                    <div className="flex h-16 w-14 items-center justify-center bg-emerald-300">
                    <MdPhoneAndroid className="text-4xl text-green-600" />
                    </div>
                    <form className="flex-col">
                    <label className="m-2 font-bold text-emerald-800" htmlFor="email">Phone Number</label>
                    <div><input type="text" placeholder="enter your Number" className="mx-2 w-fit overflow-hidden bg-emerald-100 p-2 font-mono text-black placeholder-emerald-500 focus:outline-none" id="email" /></div>
                    </form>
                </div>
            </div>
        </div>

        <div>
            <div className="text-lg font-bold tracking-widest text-emerald-900 md:text-2xl">APPLY FOR</div>
            <div className="border-2 border-emerald-900"></div>
            <div className="mt-5 w-11/12 border-2 border-emerald-900"></div>

            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 car">
                <div className="border-r-4 border-r-emerald-800 m-5 flex w-fit rounded-lg border-l-4 border-l-emerald-800 bg-emerald-50 p-5 text-justify">
                    <div className="flex h-16 w-14 items-center justify-center bg-emerald-300">
                    <MdOutlineFolderSpecial className="text-4xl text-green-600" />
                    </div>
                    <form className="flex-col spe">

                    <label htmlFor="selectOption" className="m-2 font-bold text-emerald-800">Specialization</label>
                    <div>
                    <select id="selectOption" name="selectOption" className="mx-2 w-fit text-emerald-900 bg-emerald-100 p-4 font-mono">
                        <option value="option1" defaultValue className="p-5 text-emerald-950 hover:bg-emerald-700">Doctor</option>
                        <option value="option2" className="p-4 text-emerald-900 hover:bg-emerald-300">Consultant</option>
                        <option value="option3" className="p-4 text-emerald-900 hover:bg-emerald-300">Lab Test</option>
                        <option value="option3" className="p-4 text-emerald-900 hover:bg-emerald-300">Nurse</option>
                        <option value="option3" className="p-4 text-emerald-900 hover:bg-emerald-300">Staff</option>
                    </select>
                    </div>
                    </form>
                </div>

                <div className="border-r-4 border-r-emerald-800 m-5 flex w-fit rounded-lg border-l-4 border-l-emerald-800 bg-emerald-50 p-5 text-justify">
                    <div className="flex h-16 w-14 items-center justify-center bg-emerald-300">
                    <BsCash className="text-4xl text-green-600" />
                    </div>
                    <form className="flex-col">
                    <label className="m-2 font-bold text-emerald-800" htmlFor="email">Salary</label>
                    <div><input type="text" placeholder="enter your expection" className="mx-2 w-fit bg-emerald-100 p-2 font-mono text-black placeholder-emerald-500 focus:outline-none" id="email" /></div>
                    </form>
                </div>

                <div className="border-r-4 border-r-emerald-800 m-5 flex w-fit rounded-lg border-l-4 border-l-emerald-800 bg-emerald-50 p-5 text-justify">
                    <div className="flex h-16 w-14 items-center justify-center bg-emerald-300">
                    <MdExposurePlus1 className="text-4xl text-green-600" />
                    </div>
                    <form className="flex-col spe">
                    <label className="m-2 font-bold text-emerald-800" htmlFor="email">Experience</label>
                    <div>
                    <select id="selectOption" name="selectOption" className="mx-2 w-fit text-emerald-900 bg-emerald-100 p-4 font-mono">
                        <option value="option2" className="p-4 text-emerald-900 hover:bg-emerald-300" defaultValue>Fresher</option>
                        <option value="option3" className="p-4 text-emerald-900 hover:bg-emerald-300">1</option>
                        <option value="option3" className="p-4 text-emerald-900 hover:bg-emerald-300">2</option>
                        <option value="option3" className="p-4 text-emerald-900 hover:bg-emerald-300"> {">"}3</option>
                    </select>
                    </div>
                    </form>
                </div>

                <div className="border-r-4 border-r-emerald-800 m-5 flex w-fit rounded-lg border-l-4 border-l-emerald-800 bg-emerald-50 p-5 text-justify">
                    <div className="flex h-16 w-14 items-center justify-center bg-emerald-300">
                    <MdFileUpload className="text-4xl text-green-600" />
                    </div>
                    <form className="flex-col">
                    <label className="m-2 font-bold text-emerald-800" htmlFor="email">Resume</label>
                    <div className="w-fit"><input type="file" className="mx-2 w-fit overflow-hidden bg-emerald-100 p-2 font-mono text-black placeholder-emerald-500 focus:outline-none" id="email" style={{width: 200+"px"}}  /></div>
                    </form>
                </div>
            </div>
        </div>
        <div className="border-2 border-emerald-900"></div>
        <div className="sm:w-full  md:w-1/4 mx-auto mt-2 p-4 text-emerald-900 bg-emerald-300 hover:bg-emerald-500 text-center font-bold font-mono text-2xl hover:text-white cursor-pointer">
            SUBMIT
        </div>
    </div>
  )
}

export default Careers
