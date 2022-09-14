import React, { useState, useEffect }  from "react";
import Authenticated from '@/Layouts/Authenticated';
import Button from '@/Components/Button';
import Guest from '@/Layouts/Guest';
import Input from '@/Components/Input';
import InputError from '@/Components/InputError';
import Label from '@/Components/Label';
import { Head, Link, useForm } from '@inertiajs/inertia-react';
import Select from '@/Components/Select';
import TextArea from '@/Components/TextArea';
import Checkbox from '@/Components/Checkbox';

export default function Edit(props){
    console.log(props);
	const { data, setData, post, processing, errors, reset } = useForm({
        content_name: props.content.content_name,
        content_description: props.content.content_description,
        content_type: props.content.content_type,
        is_active: props.content.is_active,
        is_approved:props.content.is_approved,
        is_ad_active:props.content.is_ad_active,
        feature_banner:props.content.feature_banner,
        mobile_logo:props.content.mobile_logo,
        role:1
    });

    useEffect(() => {
        return () => {
            reset('content_name', 'content_description');
        };
    }, []);

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route('contents.update'));
    };


    const onSelectHandleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

	return (
		 <Authenticated
            auth={props.auth}
            errors={props.errors}
            menu={props.menu}
            logoUrl={props.logoUrl}
        >
        	<div className="container mx-4 mt-12">
                    <Head title="Create User" />

            <form onSubmit={submit} enctype="multipart/form-data">
                <div>
                    <Label forInput="content_name" value="Name" />

                    <Input
                        type="text"
                        name="content_name"
                        value={data.content_name}
                        className="mt-1 block w-full"
                        autoComplete="content_name"
                        isFocused={true}
                        handleChange={onHandleChange}
                        required
                    />

                    <InputError message={errors.content_name} className="mt-2" />
                </div>

                <div className="mt-4">
                    <Label forInput="content_description" value="Content Description" />
                    <TextArea
                        name="content_description"
                        value={data.content_description}
                        className="mt-1 block w-full"
                        autoComplete="content_description"
                        handleChange={onHandleChange}
                        required
                    />

                    <InputError message={errors.content_description} className="mt-2" />
                </div>

                <div className="mt-4">
                    <Label forInput="content_type" value="Content Type" />

                    <Input
                        type="text"
                        name="content_type"
                        value={data.content_type}
                        className="mt-1 block w-full"
                        autoComplete="content_type"
                        isFocused={true}
                        handleChange={onHandleChange}
                        required
                    />

                    <InputError message={errors.content_type} className="mt-2" />
                </div>
                <div className="grid grid-cols-3 gap-4">
                <div className="col-span-1 mt-4">
                    <label className="flex items-center">
                        <Checkbox name="is_active" value={data.is_active} handleChange={onHandleChange} />

                        <span className="ml-2 text-sm text-gray-600">Is Active</span>
                    </label>
                </div>

                <div className="col-span-1 mt-4">
                    <label className="flex items-center">
                        <Checkbox name="is_approved" value={data.is_approved} handleChange={onHandleChange} />

                        <span className="ml-2 text-sm text-gray-600">Is Approved</span>
                    </label>
                </div>

                <div className="col-span-1 mt-4">
                    <label className="flex items-center">
                        <Checkbox name="is_ad_active" value={data.is_ad_active} handleChange={onHandleChange} />

                        <span className="ml-2 text-sm text-gray-600">Is Ad Active</span>
                    </label>
                </div>
                </div>

                <div className="mt-4">
                    <Label forInput="feature_banner" value="Featre Banner" />

                    <input type="file" name="feature_banner" value={''} onChange={e => setData('feature_banner', e.target?.files[0])} />
                    { data.feature_banner && <img className="mt-1" width="500" src={props.ziggy.url+"/storage/"+data.feature_banner} /> }
                    <InputError message={errors.feature_banner} className="mt-2" />
                </div>

                <div className="mt-4">
                    <Label forInput="feature_banner" value="Mobile Logo" />

                    <input type="file" name="mobile_logo" value={''} onChange={e => setData('mobile_logo', e.target?.files[0])} />
                    { data.mobile_logo && <img className="mt-1" width="200" src={props.ziggy.url+"/storage/"+data.mobile_logo} /> }
                    <InputError message={errors.mobile_logo} className="mt-2" />
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