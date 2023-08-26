import React, { useState, useEffect }  from "react";
import Authenticated from '@/Layouts/Authenticated';
import Button from '@/Components/Button';
import Guest from '@/Layouts/Guest';
import Input from '@/Components/Input';
import InputError from '@/Components/InputError';
import Label from '@/Components/Label';
import { Head, Link, useForm } from '@inertiajs/react';
import Checkbox from '@/Components/Checkbox';

export default function RoleEdit(props){
    console.log(props.permission[0]?.slug);
	const { data, setData, post, processing, errors, reset } = useForm({
        name: props.role.name,
        slug: props.role.slug,
        create:(props.permission[0]?.slug=='create' || props.permission[1]?.slug=='create' || props.permission[2]?.slug=='create') ? true:false,
        edit:(props.permission[0]?.slug=='edit' || props.permission[1]?.slug=='edit' || props.permission[2]?.slug=='edit') ? true:false,
        read:(props.permission[0]?.slug=='read' || props.permission[1]?.slug=='read' || props.permission[2]?.slug=='read') ? true:false,
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

        post(route('roles.update',[props.role.id]));
    };

	return (
		 <Authenticated
            auth={props.auth}
            errors={props.errors}
            menu={props.menu}
            logoUrl={props.logoUrl}
        >
        	<div className="container mx-4 mt-12">
                    <Head title="Edit Role" />

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
                    <Button className="ml-4 bg-red-700" processing={processing}>
                        Save
                    </Button>
                </div>
            </form>
            </div>
        </Authenticated>
		);
}