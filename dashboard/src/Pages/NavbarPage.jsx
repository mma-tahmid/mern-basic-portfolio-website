import { Button } from '@/Components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/Components/ui/card';
import { Checkbox } from '@/Components/ui/checkbox';
import { Input } from '@/Components/ui/input';
import { Label } from '@/Components/ui/label';
import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const NavbarPage = () => {


    // State Name ----> always match the database model field names
    let [menuItems, SetMenuItem] = useState("");
    let [buttonText, SetButtonText] = useState("");
    let [buttonShow, setButtonShow] = useState(false);


    const [loading, setLoading] = useState(false)
    const navigate = useNavigate();

    const handleMenuItemChange = (e) => {
        //console.log(e.target.value)
        SetMenuItem(e.target.value)
    }

    const handleButtonTextChange = (e) => {
        //console.log(e.target.value)
        SetButtonText(e.target.value)

    }

    const handleButtonShow = (e) => {
        //console.log(e.target.checked)
        setButtonShow(e.target.checked)

    }



    const handleSubmit = async (event) => {

        event.preventDefault()

        try {

            setLoading(true)

            const response = await axios.post("/api/v7/navbar/create-navbar", { menuItems, buttonText, buttonShow }, {
                // withCredentials: true, headers: {
                //     'Content-Type': 'multipart/form-data',
                // },
            })

            if (response.data.success) {

                //navigate("/supplier-list")
                toast.success(response.data.message)
            }

            else {
                toast.error(response.data.message)
            }

        }

        catch (error) {
            console.log(error)

            if (error.response && error.response.status === 400) {
                toast.error(error.response.data.message); // Error for invalid email 
            } else {
                toast.error(error.message || "Something went wrong. Please try again");
            }
        }

        finally {
            setLoading(false)
        }

    }


    return (

        <>


            <div className="min-h-screen flex items-center justify-center ">
                <div className="w-full max-w-2xl">

                    <Card className="shadow-xl">
                        <CardHeader>
                            <CardTitle className="text-center text-2xl font-bold">
                                Create Navbar
                            </CardTitle>
                        </CardHeader>

                        <CardContent className="!mx-4 !px-4">

                            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">

                                <div className="space-y-2">
                                    <Label className="mb-2" >Menu Item</Label>
                                    <Input className="w-full" placeholder="John Doe"
                                        //value={state}
                                        value={menuItems}
                                        onChange={handleMenuItemChange}
                                    />
                                </div>

                                {/* <div>
                                    <input className='border-2  w-full' type="text" />
                                </div> */}
                                {/* input field class w-full---> it always take grid width */}



                                <div className="space-y-2">
                                    <Label className="mb-2" htmlFor="btnText">Button Text</Label>
                                    <Input className="w-full" id="btnText" placeholder="Contact"
                                        value={buttonText}
                                        onChange={handleButtonTextChange}
                                    />
                                </div>


                                <div>
                                    <Label className="mb-2" htmlFor="file-upload">Upload file</Label>
                                    <Input
                                        className="w-full"
                                        id="file-upload"
                                        type="file"
                                    //className="hidden"
                                    //ref={inputRef}
                                    //onChange={(e) => setFile(e.target.files?.[0] || null)}
                                    />
                                </div>


                                {/* <div className='col-span-2'> */}
                                {/* // grid-col-2 thats why col-span-2 */}
                                {/* <div className=" flex items-start gap-3">
                                        <Checkbox onChange={handleButtonShow} id="toggle" className="border-[orange]" />
                                        <Label htmlFor="toggle">Button Show</Label>
                                    </div> */}

                                {/* </div> */}

                                <div className='col-span-2'>
                                    {/* // grid-col-2 thats why col-span-2 */}
                                    <div className=" flex items-center gap-x-2 ">
                                        <input type='checkbox'
                                            onChange={handleButtonShow}
                                            checked={buttonShow}
                                            className="w-[15px]"
                                            id="toggle" />

                                        <Label htmlFor="toggle">Button Show</Label>
                                    </div>

                                </div>




                                {/* Submit Button - spans both columns */}
                                <div className="md:col-span-2 !pb-4">
                                    <Button type="submit" className="w-full">
                                        Submit
                                    </Button>
                                </div>

                            </form>


                        </CardContent>
                    </Card>
                </div>
            </div>




        </>

    );
};

export default NavbarPage;