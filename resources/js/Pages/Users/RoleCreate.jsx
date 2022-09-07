import React, { useState, useEffect }  from "react";
import Authenticated from '@/Layouts/Authenticated';
import Button from '@/Components/Button';
import Guest from '@/Layouts/Guest';
import Input from '@/Components/Input';
import InputError from '@/Components/InputError';
import Label from '@/Components/Label';
import { Head, Link, useForm } from '@inertiajs/inertia-react';
import Checkbox from '@/Components/Checkbox';

export default function RoleCreate(props){
    console.log(props.permissions);
	const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        slug: '',
        create:'',
        edit:'',
        read:'',
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

        post(route('roles.create'));
    };

    let permissionCheckBox = props.permissions.map((permission,index) => 
            <Permissionset key={index} permission={permission} />
        );
    function Permissionset(props){
        return(
              <>
                <Checkbox name={props.permission.slug} value={data.create ? true:data.edit ? true:data.read ? true:false} handleChange={onHandleChange} />
                <span className="ml-2 text-sm text-gray-600">{props.permission.name}</span>
              </>
            );
    }

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
                    <Label forInput="slug" value="Slug" />

                    <Input
                        type="text"
                        name="slug"
                        value={data.slug}
                        className="mt-1 block w-full"
                        autoComplete="slug"
                        handleChange={onHandleChange}
                        required
                    />

                    <InputError message={errors.slug} className="mt-2" />
                </div>

                <div className="block mt-4">
                    <label className="flex items-center">
                        <Checkbox name="create" value={data.create} handleChange={onHandleChange} />
                        <span className="ml-2 text-sm text-gray-600">Create</span>
                        <Checkbox name="edit" value={data.edit} handleChange={onHandleChange} />
                        <span className="ml-2 text-sm text-gray-600">Edit</span>
                        <Checkbox name="read" value={data.read} handleChange={onHandleChange} />
                        <span className="ml-2 text-sm text-gray-600">Read</span>
                    </label>
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