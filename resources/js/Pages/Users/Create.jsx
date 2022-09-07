import React, { useState, useEffect }  from "react";
import Authenticated from '@/Layouts/Authenticated';
import Button from '@/Components/Button';
import Guest from '@/Layouts/Guest';
import Input from '@/Components/Input';
import InputError from '@/Components/InputError';
import Label from '@/Components/Label';
import { Head, Link, useForm } from '@inertiajs/inertia-react';
import Select from '@/Components/Select';

export default function Create(props){
	const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
        role:''
    });

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route('users.create'));
    };

    let options = [{value:1,label:"Admin"},{value:2,label:'Subscriber'}];

    const onSelectHandleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

	return (
		 <Authenticated
            auth={props.auth}
            errors={props.errors}
            menu={props.menu}
        >
        	<div className="container mx-4 mt-12">
                    <Head title="Register" />

            <form onSubmit={submit}>
                <div>
                    <Label forInput="name" value="Name" />

                    <Input
                        type="text"
                        name="name"
                        value={data.name}
                        className="mt-1 block w-full"
                        autoComplete="name"
                        isFocused={true}
                        handleChange={onHandleChange}
                        required
                    />

                    <InputError message={errors.name} className="mt-2" />
                </div>

                <div className="mt-4">
                    <Label forInput="email" value="Email" />

                    <Input
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        handleChange={onHandleChange}
                        required
                    />

                    <InputError message={errors.email} className="mt-2" />
                </div>

                <div className="mt-4">
                    <Label forInput="password" value="Password" />

                    <Input
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                        handleChange={onHandleChange}
                        required
                    />

                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="mt-4">
                    <Label forInput="password_confirmation" value="Confirm Password" />

                    <Input
                        type="password"
                        name="password_confirmation"
                        value={data.password_confirmation}
                        className="mt-1 block w-full"
                        handleChange={onHandleChange}
                        required
                    />

                    <InputError message={errors.password_confirmation} className="mt-2" />
                </div>

                <div className="mt-4">
                    <Select id="user_role" name="role" onChange={onSelectHandleChange} className="test" options={props.roles} placeholder="Role" required="required" value={data.role} />
                </div>

                <div className="flex items-center justify-end mt-4">
                    <Button className="ml-4" processing={processing}>
                        Save
                    </Button>
                </div>
            </form>
            </div>
        </Authenticated>
		);
}