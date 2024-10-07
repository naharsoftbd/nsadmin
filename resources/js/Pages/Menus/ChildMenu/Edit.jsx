import React, { useState, useEffect }  from "react";
import Authenticated from '@/Layouts/Authenticated';
import Button from '@/Components/Button';
import Guest from '@/Layouts/Guest';
import Input from '@/Components/Input';
import InputError from '@/Components/InputError';
import Label from '@/Components/Label';
import { Head, Link, useForm } from '@inertiajs/react';
import Select from '@/Components/Select';
import SelectMenu from '@/Components/SelectMenu';

export default function Edit(props){
     console.log(props.role);
	const { data, setData, post, processing, errors, reset } = useForm({
        name: props.editmenu.name,
        slug: props.editmenu.slug,
        order_by: props.editmenu.order_by,
        menu_method: props.editmenu.menu_method,
        menu_icon: props.editmenu.menu_icon,
        role:props.role
    });

    useEffect(() => {
        return () => {
            reset('name', 'slug');
        };
    }, []);

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route('childmenus.update',[props.editmenu.id]));
    };

    const onSelectHandleChange = (e) => {
        let value = Array.from(e.target.selectedOptions, option => option.value);
        setData({ ...data, [e.target.name]: value });
    };

	return (
		 <Authenticated
            auth={props.auth}
            errors={props.errors}
            menu={props.menu}
            logoUrl={props.logoUrl}
        >
        	<div className="container mx-4 my-12">
                    <Head title="Create Menu" />

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
                    />

                    <InputError message={errors.slug} className="mt-2" />
                </div>
                <div className="mt-4">
                    <Label forInput="menu_method" value="Menu Method" />

                    <Input
                        type="text"
                        name="menu_method"
                        value={data.menu_method}
                        className="mt-1 block w-full"
                        autoComplete="menu_method"
                        handleChange={onHandleChange}
                    />

                    <InputError message={errors.menu_method} className="mt-2" />
                </div>
                <div className="mt-4">
                    <Label forInput="menu_icon" value="Menu Icon" />

                    <Input
                        type="text"
                        name="menu_icon"
                        value={data.menu_icon}
                        className="mt-1 block w-full"
                        autoComplete="menu_icon"
                        handleChange={onHandleChange}
                    />

                    <InputError message={errors.menu_method} className="mt-2" />
                </div>
                <div className="mt-4 w-1/4">
                    <Label forInput="order_by" value="Order" />

                    <Input
                        type="text"
                        name="order_by"
                        value={data.order_by}
                        className="mt-1 block w-full"
                        autoComplete="order_by"
                        handleChange={onHandleChange}
                    />

                    <InputError message={errors.order_by} className="mt-2" />
                </div>

                <div className="mt-4">
                    <Label forInput="menu_icon" value="Parent Menu" />
                    <SelectMenu id="parent_menu" name="parent_menu" onChange={onSelectHandleChange} className="test" options={props.menus} placeholder="Select Menu" required="required" value={data.menu_id} />
                </div>

                <div className="mt-4">
                    <Select id="user_role" name="role" onChange={onSelectHandleChange} className="test" options={props.roles} placeholder="Role" required="required" value={data.role} />
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